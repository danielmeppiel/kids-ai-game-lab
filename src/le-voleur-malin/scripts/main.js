/**
 * LE VOLEUR MALIN - Point d'entrée principal
 * Un jeu de poursuite pour enfants de 6-8 ans
 */

import { Game } from './game.js';
import { AudioManager } from './audio.js';
import { UIManager } from './ui.js';

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    console.log('🦝 Le Voleur Malin - Initialisation...');
    
    // Créer les instances principales
    const audio = new AudioManager();
    const ui = new UIManager();
    const game = new Game(ui, audio);
    
    // Exposer pour debug (optionnel)
    window.game = game;
    
    // Setup des event listeners UI
    setupEventListeners(game, ui, audio);
    
    console.log('✅ Jeu initialisé !');
});

/**
 * Configure tous les event listeners de l'interface
 */
function setupEventListeners(game, ui, audio) {
    // Bouton Jouer
    document.getElementById('btn-play')?.addEventListener('click', () => {
        audio.playSound('click');
        game.start();
    });
    
    // Bouton Son
    document.getElementById('btn-sound')?.addEventListener('click', (e) => {
        const isMuted = audio.toggleMute();
        e.target.textContent = isMuted ? '🔇' : '🔊';
    });
    
    // Bouton Pause
    document.getElementById('btn-pause')?.addEventListener('click', () => {
        audio.playSound('click');
        game.pause();
    });
    
    // Bouton Reprendre
    document.getElementById('btn-resume')?.addEventListener('click', () => {
        audio.playSound('click');
        game.resume();
    });
    
    // Bouton Recommencer
    document.getElementById('btn-restart')?.addEventListener('click', () => {
        audio.playSound('click');
        game.restart();
    });
    
    // Bouton Quitter
    document.getElementById('btn-quit')?.addEventListener('click', () => {
        audio.playSound('click');
        game.quit();
    });
    
    // Bouton Niveau Suivant
    document.getElementById('btn-next-level')?.addEventListener('click', () => {
        audio.playSound('click');
        game.nextLevel();
    });
    
    // Bouton Réessayer (Game Over)
    document.getElementById('btn-retry')?.addEventListener('click', () => {
        audio.playSound('click');
        game.restart();
    });
    
    // Bouton Menu (Game Over)
    document.getElementById('btn-menu')?.addEventListener('click', () => {
        audio.playSound('click');
        game.quit();
    });
    
    // Bouton Rejouer (Victoire)
    document.getElementById('btn-play-again')?.addEventListener('click', () => {
        audio.playSound('click');
        game.restart();
    });
    
    // Contrôles clavier
    document.addEventListener('keydown', (e) => {
        if (!game.isPlaying) return;
        
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                e.preventDefault();
                game.movePlayer('up');
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                e.preventDefault();
                game.movePlayer('down');
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                e.preventDefault();
                game.movePlayer('left');
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                e.preventDefault();
                game.movePlayer('right');
                break;
            case 'Escape':
            case 'p':
            case 'P':
                e.preventDefault();
                game.pause();
                break;
        }
    });
    
    // Contrôles tactiles
    const dpadButtons = document.querySelectorAll('.dpad-btn');
    dpadButtons.forEach(btn => {
        const direction = btn.dataset.direction;
        
        // Touch events
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (game.isPlaying) {
                game.movePlayer(direction);
            }
        });
        
        // Mouse events (pour test sur desktop)
        btn.addEventListener('mousedown', (e) => {
            e.preventDefault();
            if (game.isPlaying) {
                game.movePlayer(direction);
            }
        });
    });
    
    // Maintien des touches pour mouvement continu
    let moveInterval = null;
    let currentDirection = null;
    
    document.addEventListener('keydown', (e) => {
        const dir = getDirectionFromKey(e.key);
        if (dir && dir !== currentDirection && game.isPlaying) {
            currentDirection = dir;
            clearInterval(moveInterval);
            moveInterval = setInterval(() => {
                if (game.isPlaying && currentDirection) {
                    game.movePlayer(currentDirection);
                }
            }, 150);
        }
    });
    
    document.addEventListener('keyup', (e) => {
        const dir = getDirectionFromKey(e.key);
        if (dir === currentDirection) {
            currentDirection = null;
            clearInterval(moveInterval);
        }
    });
}

/**
 * Convertit une touche en direction
 */
function getDirectionFromKey(key) {
    const keyMap = {
        'ArrowUp': 'up', 'w': 'up', 'W': 'up',
        'ArrowDown': 'down', 's': 'down', 'S': 'down',
        'ArrowLeft': 'left', 'a': 'left', 'A': 'left',
        'ArrowRight': 'right', 'd': 'right', 'D': 'right'
    };
    return keyMap[key] || null;
}
