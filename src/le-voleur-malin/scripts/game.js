/**
 * LE VOLEUR MALIN - Moteur de jeu principal
 */

import { GameState } from './state.js';
import { levels } from './levels.js';
import { findPath } from './pathfinding.js';

// Constantes
const TILE_TYPES = {
    FLOOR: 0,
    WALL: 1,
    SECRET_PATH: 2,
    MUD: 3,
    EXIT: 4
};

const ASSETS_PATH = '../../assets/le-voleur-malin';

export class Game {
    constructor(ui, audio) {
        this.ui = ui;
        this.audio = audio;
        this.state = new GameState();
        this.board = document.getElementById('game-board');
        
        this.player = null;
        this.police = [];
        this.treasures = [];
        this.bonuses = [];
        this.currentLevel = null;
        
        this.isPlaying = false;
        this.isPaused = false;
        this.gameLoopId = null;
        this.policeUpdateId = null;
        
        this.lastMoveTime = 0;
        this.moveDelay = 120; // ms entre les mouvements
    }
    
    /**
     * Démarre une nouvelle partie
     */
    start() {
        this.state.reset();
        this.loadLevel(1);
        this.ui.showScreen('game');
        this.isPlaying = true;
        this.audio.playMusic('game');
        this.startGameLoop();
    }
    
    /**
     * Charge un niveau
     */
    loadLevel(levelNumber) {
        const levelData = levels[levelNumber - 1];
        if (!levelData) {
            this.victory();
            return;
        }
        
        this.currentLevel = levelData;
        this.state.currentLevel = levelNumber;
        this.state.treasuresCollected = 0;
        this.state.treasuresTotal = levelData.treasures.length;
        this.state.isExitOpen = false;
        this.state.levelStartTime = Date.now();
        
        // Reset entities
        this.player = { 
            ...levelData.playerStart, 
            direction: 'down', 
            hasSpeedBoost: false,
            hasCarBoost: false,
            isInvisible: false 
        };
        this.police = levelData.policeStarts.map((pos, i) => ({
            id: i,
            x: pos.x,
            y: pos.y,
            direction: 'down',
            isSlowed: false,
            path: []
        }));
        this.treasures = levelData.treasures.map((t, i) => ({ ...t, id: i, collected: false }));
        this.bonuses = levelData.bonuses ? levelData.bonuses.map((b, i) => ({ ...b, id: i, collected: false })) : [];
        this.usedCars = []; // Voitures déjà utilisées
        
        // Rendre le niveau
        this.renderLevel();
        this.ui.updateHUD(this.state);
    }
    
    /**
     * Rendu du plateau de jeu
     */
    renderLevel() {
        const level = this.currentLevel;
        this.board.innerHTML = '';
        
        // Configurer la grille CSS
        this.board.style.gridTemplateColumns = `repeat(${level.width}, var(--tile-size))`;
        this.board.style.gridTemplateRows = `repeat(${level.height}, var(--tile-size))`;
        
        // Créer les tuiles
        for (let y = 0; y < level.height; y++) {
            for (let x = 0; x < level.width; x++) {
                const tile = document.createElement('div');
                tile.className = 'tile';
                tile.dataset.x = x;
                tile.dataset.y = y;
                
                const tileType = level.grid[y][x];
                tile.classList.add(this.getTileClass(tileType));
                
                // Ajouter l'image de la tuile
                const img = document.createElement('img');
                img.src = this.getTileImage(tileType, x, y);
                img.alt = '';
                tile.appendChild(img);
                
                this.board.appendChild(tile);
            }
        }
        
        // Ajouter les trésors
        this.treasures.forEach(t => {
            if (!t.collected) {
                this.createEntity('treasure', t.type, t.x, t.y, t.id);
            }
        });
        
        // Ajouter les bonus
        this.bonuses.forEach(b => {
            if (!b.collected) {
                this.createEntity('bonus', b.type, b.x, b.y, b.id);
            }
        });
        
        // Ajouter la sortie
        this.createEntity('exit', this.state.isExitOpen ? 'open' : 'closed', 
                         level.exit.x, level.exit.y, 'exit');
        
        // Ajouter les policiers
        this.police.forEach(p => {
            this.createEntity('police', 'default', p.x, p.y, `police-${p.id}`);
        });
        
        // Ajouter le joueur
        this.createEntity('player', 'default', this.player.x, this.player.y, 'player');
    }
    
    /**
     * Crée une entité visuelle
     */
    createEntity(type, subtype, x, y, id) {
        const entity = document.createElement('div');
        entity.className = `entity ${type}`;
        entity.id = `entity-${id}`;
        entity.style.left = `calc(${x} * var(--tile-size) + 5px)`;
        entity.style.top = `calc(${y} * var(--tile-size) + 5px)`;
        
        const img = document.createElement('img');
        img.src = this.getEntityImage(type, subtype);
        img.alt = type;
        entity.appendChild(img);
        
        this.board.appendChild(entity);
        return entity;
    }
    
    /**
     * Récupère le chemin de l'image d'une tuile
     */
    getTileImage(tileType, x, y) {
        const level = this.currentLevel;
        
        // Vérifier si c'est un obstacle spécial
        const obstacle = level.obstacles?.find(o => o.x === x && o.y === y);
        if (obstacle) {
            return `${ASSETS_PATH}/tiles/${obstacle.type}.svg`;
        }
        
        // Vérifier si c'est une flaque
        const mud = level.mudPuddles?.find(m => m.x === x && m.y === y);
        if (mud) {
            return `${ASSETS_PATH}/tiles/flaque.svg`;
        }
        
        // Vérifier si c'est un chemin secret
        const secret = level.secretPaths?.find(s => s.x === x && s.y === y);
        if (secret) {
            return `${ASSETS_PATH}/tiles/chemin-secret.svg`;
        }
        
        switch (tileType) {
            case TILE_TYPES.WALL:
                return `${ASSETS_PATH}/tiles/mur.svg`;
            case TILE_TYPES.MUD:
                return `${ASSETS_PATH}/tiles/flaque.svg`;
            case TILE_TYPES.SECRET_PATH:
                return `${ASSETS_PATH}/tiles/chemin-secret.svg`;
            case TILE_TYPES.FLOOR:
            default:
                return `${ASSETS_PATH}/tiles/sol.svg`;
        }
    }
    
    /**
     * Récupère la classe CSS d'une tuile
     */
    getTileClass(tileType) {
        switch (tileType) {
            case TILE_TYPES.WALL: return 'wall';
            case TILE_TYPES.SECRET_PATH: return 'secret';
            case TILE_TYPES.MUD: return 'mud';
            default: return 'floor';
        }
    }
    
    /**
     * Récupère le chemin de l'image d'une entité
     */
    getEntityImage(type, subtype) {
        switch (type) {
            case 'player':
                return `${ASSETS_PATH}/sprites/voleur.svg`;
            case 'police':
                return `${ASSETS_PATH}/sprites/policier.svg`;
            case 'treasure':
                const treasureMap = {
                    'coin': 'piece',
                    'diamond': 'diamant',
                    'chest': 'coffre'
                };
                return `${ASSETS_PATH}/sprites/${treasureMap[subtype] || 'piece'}.svg`;
            case 'bonus':
                if (subtype === 'invisible') {
                    return `${ASSETS_PATH}/sprites/bonus-invisible.svg`;
                }
                return `${ASSETS_PATH}/sprites/bonus-vitesse.svg`;
            case 'exit':
                return `${ASSETS_PATH}/tiles/sortie-${subtype === 'open' ? 'ouverte' : 'fermee'}.svg`;
            default:
                return `${ASSETS_PATH}/sprites/piece.svg`;
        }
    }
    
    /**
     * Déplace le joueur
     */
    movePlayer(direction) {
        if (!this.isPlaying || this.isPaused) return;
        
        const now = Date.now();
        if (now - this.lastMoveTime < this.moveDelay) return;
        this.lastMoveTime = now;
        
        const dx = { left: -1, right: 1, up: 0, down: 0 }[direction];
        const dy = { left: 0, right: 0, up: -1, down: 1 }[direction];
        
        const newX = this.player.x + dx;
        const newY = this.player.y + dy;
        
        // Vérifier les limites
        if (newX < 0 || newX >= this.currentLevel.width ||
            newY < 0 || newY >= this.currentLevel.height) {
            return;
        }
        
        // Vérifier les collisions avec les murs
        if (!this.canPlayerMoveTo(newX, newY)) {
            return;
        }
        
        // Déplacer le joueur
        this.player.x = newX;
        this.player.y = newY;
        this.player.direction = direction;
        
        // Mettre à jour la position visuelle
        this.updateEntityPosition('player', newX, newY);
        
        // Vérifier les collectibles
        this.checkCollisions();
    }
    
    /**
     * Vérifie si le joueur peut se déplacer vers une case
     */
    canPlayerMoveTo(x, y) {
        const tileType = this.currentLevel.grid[y][x];
        
        // Le joueur peut traverser les chemins secrets
        if (tileType === TILE_TYPES.SECRET_PATH) return true;
        
        // Le joueur invisible peut traverser les murs!
        if (this.player.isInvisible) return true;
        
        if (tileType === TILE_TYPES.WALL) return false;
        
        // Les voitures peuvent être montées (pas de blocage)
        const obstacle = this.currentLevel.obstacles?.find(o => o.x === x && o.y === y);
        if (obstacle && obstacle.type === 'voiture') {
            // On peut monter sur la voiture
            return true;
        }
        if (obstacle) return false;
        
        return true;
    }
    
    /**
     * Vérifie si un policier peut se déplacer vers une case
     */
    canPoliceMoveTo(x, y) {
        if (x < 0 || x >= this.currentLevel.width ||
            y < 0 || y >= this.currentLevel.height) {
            return false;
        }
        
        const tileType = this.currentLevel.grid[y][x];
        
        // Les policiers ne peuvent PAS traverser les chemins secrets
        if (tileType === TILE_TYPES.SECRET_PATH) return false;
        if (tileType === TILE_TYPES.WALL) return false;
        
        // Vérifier les obstacles
        const obstacle = this.currentLevel.obstacles?.find(o => o.x === x && o.y === y);
        if (obstacle) return false;
        
        return true;
    }
    
    /**
     * Met à jour la position visuelle d'une entité
     */
    updateEntityPosition(id, x, y) {
        const entity = document.getElementById(`entity-${id}`);
        if (entity) {
            entity.style.left = `calc(${x} * var(--tile-size) + 5px)`;
            entity.style.top = `calc(${y} * var(--tile-size) + 5px)`;
        }
    }
    
    /**
     * Vérifie les collisions après mouvement du joueur
     */
    checkCollisions() {
        const { x, y } = this.player;
        
        // Collision avec trésors
        this.treasures.forEach(t => {
            if (!t.collected && t.x === x && t.y === y) {
                this.collectTreasure(t);
            }
        });
        
        // Collision avec bonus
        this.bonuses.forEach(b => {
            if (!b.collected && b.x === x && b.y === y) {
                this.collectBonus(b);
            }
        });
        
        // Collision avec voiture (monter dessus)
        const carObstacle = this.currentLevel.obstacles?.find(
            o => o.x === x && o.y === y && o.type === 'voiture'
        );
        if (carObstacle && !this.player.hasCarBoost) {
            this.mountCar(carObstacle);
        }
        
        // Collision avec porte secrète
        const portal = this.currentLevel.secretPaths?.find(s => 
            s.x === x && s.y === y && s.leadsTo
        );
        if (portal) {
            this.teleportPlayer(portal.leadsTo);
        }
        
        // Collision avec sortie
        if (this.state.isExitOpen && 
            x === this.currentLevel.exit.x && 
            y === this.currentLevel.exit.y) {
            this.levelComplete();
        }
        
        // Collision avec policiers (sauf si invisible)
        if (!this.player.isInvisible) {
            this.police.forEach(p => {
                if (Math.abs(p.x - x) < 1 && Math.abs(p.y - y) < 1) {
                    this.playerCaught();
                }
            });
        }
    }
    
    /**
     * Collecte un trésor
     */
    collectTreasure(treasure) {
        treasure.collected = true;
        this.state.treasuresCollected++;
        
        // Points
        const points = { coin: 1, diamond: 5, chest: 10 }[treasure.type] || 1;
        this.state.score += points;
        
        // Son
        this.audio.playSound(treasure.type === 'chest' ? 'coffre' : 
                            treasure.type === 'diamond' ? 'diamant' : 'piece');
        
        // Supprimer visuellement
        const entity = document.getElementById(`entity-${treasure.id}`);
        if (entity) {
            entity.style.transform = 'scale(0)';
            setTimeout(() => entity.remove(), 200);
        }
        
        // Message flottant
        this.ui.showFloatingMessage(`+${points}`);
        
        // Vérifier si tous les trésors sont collectés
        if (this.state.treasuresCollected >= this.state.treasuresTotal) {
            this.openExit();
        }
        
        this.ui.updateHUD(this.state);
    }
    
    /**
     * Collecte un bonus
     */
    collectBonus(bonus) {
        bonus.collected = true;
        this.audio.playSound('bonus');
        
        if (bonus.type === 'speed') {
            this.player.hasSpeedBoost = true;
            this.moveDelay = 60; // Plus rapide
            this.ui.showFloatingMessage('⚡ SUPER VITESSE !');
            
            // Désactiver après 5 secondes
            setTimeout(() => {
                this.player.hasSpeedBoost = false;
                if (!this.player.hasCarBoost) {
                    this.moveDelay = 120;
                }
            }, 5000);
        } else if (bonus.type === 'invisible') {
            this.player.isInvisible = true;
            this.moveDelay = 80; // Aussi un peu plus rapide
            this.ui.showFloatingMessage('👻 INVISIBLE !');
            
            // Effet visuel sur le joueur
            const playerEntity = document.getElementById('entity-player');
            if (playerEntity) playerEntity.style.opacity = '0.4';
            
            // Désactiver après 6 secondes
            setTimeout(() => {
                this.player.isInvisible = false;
                if (!this.player.hasSpeedBoost && !this.player.hasCarBoost) {
                    this.moveDelay = 120;
                }
                if (playerEntity) playerEntity.style.opacity = '1';
            }, 6000);
        }
        
        // Supprimer visuellement
        const entity = document.getElementById(`entity-${bonus.id}`);
        if (entity) entity.remove();
    }
    
    /**
     * Monte sur une voiture
     */
    mountCar(carObstacle) {
        if (this.usedCars.includes(`${carObstacle.x},${carObstacle.y}`)) {
            return; // Voiture déjà utilisée
        }
        
        this.usedCars.push(`${carObstacle.x},${carObstacle.y}`);
        this.player.hasCarBoost = true;
        this.moveDelay = 30; // TRÈS rapide!
        this.audio.playSound('bonus');
        this.ui.showFloatingMessage('🚗 VROOOOOM !');
        
        // Désactiver après 4 secondes
        setTimeout(() => {
            this.player.hasCarBoost = false;
            if (!this.player.hasSpeedBoost) {
                this.moveDelay = 120;
            }
        }, 4000);
    }
    
    /**
     * Téléporte le joueur
     */
    teleportPlayer(destination) {
        this.player.x = destination.x;
        this.player.y = destination.y;
        this.updateEntityPosition('player', destination.x, destination.y);
        this.audio.playSound('bonus');
        this.ui.showFloatingMessage('🌀 TÉLÉPORTATION !');
    }
    
    /**
     * Ouvre la sortie
     */
    openExit() {
        this.state.isExitOpen = true;
        this.audio.playSound('victoire');
        this.ui.showFloatingMessage('🚪 SORTIE OUVERTE !');
        
        // Mettre à jour l'image de la sortie
        const exitEntity = document.getElementById('entity-exit');
        if (exitEntity) {
            const img = exitEntity.querySelector('img');
            if (img) {
                img.src = `${ASSETS_PATH}/tiles/sortie-ouverte.svg`;
            }
        }
    }
    
    /**
     * Niveau terminé
     */
    levelComplete() {
        this.isPlaying = false;
        this.audio.playSound('victoire');
        
        // Sauvegarder le dernier niveau complété
        this.state.lastCompletedLevel = this.state.currentLevel;
        
        // Calculer les étoiles
        const timeBonus = Math.max(0, 60 - Math.floor((Date.now() - this.state.levelStartTime) / 1000));
        this.state.score += 50 + timeBonus;
        
        let stars = 1;
        if (!this.state.lostLifeThisLevel) stars++;
        if (timeBonus > 30) stars++;
        
        this.state.stars[this.state.currentLevel - 1] = stars;
        
        // Sauvegarder le meilleur score
        this.state.saveHighScore();
        
        // Afficher l'écran de victoire
        if (this.state.currentLevel >= 5) {
            this.victory();
        } else {
            this.ui.showLevelComplete(this.state, stars);
        }
    }
    
    /**
     * Joueur attrapé
     */
    playerCaught() {
        this.audio.playSound('attrape');
        this.state.lives--;
        this.state.lostLifeThisLevel = true;
        
        // Animation
        const playerEntity = document.getElementById('entity-player');
        if (playerEntity) {
            playerEntity.classList.add('caught');
            setTimeout(() => playerEntity.classList.remove('caught'), 300);
        }
        
        if (this.state.lives <= 0) {
            this.gameOver();
        } else {
            // Respawn
            this.ui.showFloatingMessage('💔 ATTRAPÉ !');
            this.ui.updateHUD(this.state);
            
            // Replacer le joueur au départ
            setTimeout(() => {
                this.player.x = this.currentLevel.playerStart.x;
                this.player.y = this.currentLevel.playerStart.y;
                this.updateEntityPosition('player', this.player.x, this.player.y);
            }, 500);
        }
    }
    
    /**
     * Game Over
     */
    gameOver() {
        this.isPlaying = false;
        this.stopGameLoop();
        this.audio.playSound('game-over');
        this.audio.stopMusic();
        this.state.saveHighScore();
        this.ui.showGameOver(this.state);
    }
    
    /**
     * Victoire finale
     */
    victory() {
        this.isPlaying = false;
        this.stopGameLoop();
        this.audio.playSound('victoire');
        this.state.saveHighScore();
        this.ui.showVictory(this.state);
    }
    
    /**
     * Niveau suivant
     */
    nextLevel() {
        this.state.lostLifeThisLevel = false;
        this.loadLevel(this.state.currentLevel + 1);
        this.ui.showScreen('game');
        this.isPlaying = true;
        this.startGameLoop();
    }
    
    /**
     * Pause
     */
    pause() {
        if (!this.isPlaying) return;
        this.isPaused = true;
        this.ui.showScreen('pause');
    }
    
    /**
     * Reprendre
     */
    resume() {
        this.isPaused = false;
        this.ui.showScreen('game');
    }
    
    /**
     * Recommencer (depuis le dernier niveau complété)
     */
    restart() {
        this.stopGameLoop();
        this.state.resetForRetry();
        this.loadLevel(this.state.currentLevel);
        this.ui.showScreen('game');
        this.isPlaying = true;
        this.audio.playMusic('game');
        this.startGameLoop();
    }
    
    /**
     * Quitter au menu
     */
    quit() {
        this.stopGameLoop();
        this.isPlaying = false;
        this.audio.stopMusic();
        this.ui.showScreen('title');
    }
    
    /**
     * Démarre la boucle de jeu
     */
    startGameLoop() {
        // Boucle principale (60fps)
        const gameLoop = () => {
            if (this.isPlaying && !this.isPaused) {
                this.update();
            }
            this.gameLoopId = requestAnimationFrame(gameLoop);
        };
        gameLoop();
        
        // Mise à jour des policiers (vitesse selon le niveau)
        // Niveau 1: 900ms (lent), Niveau 5: 350ms (rapide)
        const policeSpeed = this.getPoliceSpeed();
        this.policeUpdateId = setInterval(() => {
            if (this.isPlaying && !this.isPaused) {
                this.updatePolice();
            }
        }, policeSpeed);
    }
    
    /**
     * Calcule la vitesse de la police selon le niveau
     * Plus le niveau est élevé, plus les policiers sont rapides
     * ADAPTÉ POUR ENFANTS DE 7 ANS - vitesses très lentes
     */
    getPoliceSpeed() {
        const baseSpeed = 1500; // Niveau 1: très très lent (1.5 seconde)
        const minSpeed = 900;   // Niveau 5: encore lent (0.9 seconde)
        const levelFactor = (this.state.currentLevel - 1) / 4; // 0 à 1
        return Math.round(baseSpeed - (baseSpeed - minSpeed) * levelFactor);
    }
    
    /**
     * Arrête la boucle de jeu
     */
    stopGameLoop() {
        if (this.gameLoopId) {
            cancelAnimationFrame(this.gameLoopId);
            this.gameLoopId = null;
        }
        if (this.policeUpdateId) {
            clearInterval(this.policeUpdateId);
            this.policeUpdateId = null;
        }
    }
    
    /**
     * Mise à jour principale
     */
    update() {
        // Vérifier collisions avec policiers
        this.police.forEach(p => {
            const dist = Math.abs(p.x - this.player.x) + Math.abs(p.y - this.player.y);
            if (dist < 0.8) {
                this.playerCaught();
            }
        });
    }
    
    /**
     * Mise à jour des policiers (IA)
     */
    updatePolice() {
        this.police.forEach(p => {
            // Vérifier si dans la boue
            const inMud = this.currentLevel.mudPuddles?.some(m => m.x === p.x && m.y === p.y);
            if (inMud && Math.random() > 0.3) {
                return; // Ralenti dans la boue
            }
            
            // Calculer le chemin vers le joueur
            const path = findPath(
                { x: p.x, y: p.y },
                { x: this.player.x, y: this.player.y },
                this.currentLevel,
                (x, y) => this.canPoliceMoveTo(x, y)
            );
            
            if (path && path.length > 1) {
                const nextStep = path[1];
                p.x = nextStep.x;
                p.y = nextStep.y;
                this.updateEntityPosition(`police-${p.id}`, p.x, p.y);
            } else {
                // Mouvement de secours : aller vers le joueur directement
                this.movePoliceTowardsPlayer(p);
            }
        });
    }
    
    /**
     * Mouvement de secours si pathfinding échoue
     */
    movePoliceTowardsPlayer(p) {
        const dx = this.player.x - p.x;
        const dy = this.player.y - p.y;
        
        // Essayer d'abord la direction principale
        const moves = [];
        if (Math.abs(dx) > Math.abs(dy)) {
            moves.push({ x: p.x + Math.sign(dx), y: p.y });
            moves.push({ x: p.x, y: p.y + Math.sign(dy) });
        } else {
            moves.push({ x: p.x, y: p.y + Math.sign(dy) });
            moves.push({ x: p.x + Math.sign(dx), y: p.y });
        }
        
        // Trouver le premier mouvement valide
        for (const move of moves) {
            if (this.canPoliceMoveTo(move.x, move.y)) {
                p.x = move.x;
                p.y = move.y;
                this.updateEntityPosition(`police-${p.id}`, p.x, p.y);
                return;
            }
        }
    }
}
