/**
 * LE VOLEUR MALIN - Gestion de l'interface utilisateur
 */

export class UIManager {
    constructor() {
        this.screens = {
            title: document.getElementById('screen-title'),
            game: document.getElementById('screen-game'),
            pause: document.getElementById('screen-pause'),
            levelComplete: document.getElementById('screen-level-complete'),
            gameover: document.getElementById('screen-gameover'),
            victory: document.getElementById('screen-victory')
        };
        
        this.floatingMessage = document.getElementById('floating-message');
        this.floatingTimeout = null;
    }
    
    /**
     * Affiche un écran spécifique
     */
    showScreen(screenName) {
        // Cacher tous les écrans
        Object.values(this.screens).forEach(screen => {
            if (screen) screen.classList.remove('active');
        });
        
        // Afficher l'écran demandé
        const screen = this.screens[screenName];
        if (screen) {
            screen.classList.add('active');
        }
    }
    
    /**
     * Met à jour le HUD
     */
    updateHUD(state) {
        // Score
        const scoreEl = document.getElementById('score');
        if (scoreEl) scoreEl.textContent = state.score;
        
        // Niveau
        const levelEl = document.getElementById('hud-level');
        if (levelEl) levelEl.textContent = `Niveau ${state.currentLevel}`;
        
        // Trésors
        const collectedEl = document.getElementById('treasures-collected');
        const totalEl = document.getElementById('treasures-total');
        if (collectedEl) collectedEl.textContent = state.treasuresCollected;
        if (totalEl) totalEl.textContent = state.treasuresTotal;
        
        // Vies
        const livesContainer = document.getElementById('hud-lives');
        if (livesContainer) {
            const hearts = livesContainer.querySelectorAll('.heart');
            hearts.forEach((heart, i) => {
                if (i < state.lives) {
                    heart.classList.remove('lost');
                } else {
                    heart.classList.add('lost');
                }
            });
        }
    }
    
    /**
     * Affiche un message flottant temporaire
     */
    showFloatingMessage(text, duration = 1500) {
        if (!this.floatingMessage) return;
        
        // Annuler le précédent
        if (this.floatingTimeout) {
            clearTimeout(this.floatingTimeout);
        }
        
        this.floatingMessage.textContent = text;
        this.floatingMessage.classList.remove('hidden');
        
        this.floatingTimeout = setTimeout(() => {
            this.floatingMessage.classList.add('hidden');
        }, duration);
    }
    
    /**
     * Affiche l'écran de niveau terminé
     */
    showLevelComplete(state, stars) {
        // Mettre à jour le score
        const scoreEl = document.getElementById('level-score');
        if (scoreEl) scoreEl.textContent = state.score;
        
        // Mettre à jour les étoiles
        const starsContainer = document.getElementById('level-stars');
        if (starsContainer) {
            const starElements = starsContainer.querySelectorAll('.star');
            starElements.forEach((star, i) => {
                star.classList.remove('earned');
                if (i < stars) {
                    setTimeout(() => {
                        star.classList.add('earned');
                    }, 300 * (i + 1));
                }
            });
        }
        
        this.showScreen('levelComplete');
    }
    
    /**
     * Affiche l'écran Game Over
     */
    showGameOver(state) {
        // Score final
        const finalScoreEl = document.getElementById('final-score');
        if (finalScoreEl) finalScoreEl.textContent = state.score;
        
        // Meilleur score
        const highScoreEl = document.getElementById('high-score');
        if (highScoreEl) highScoreEl.textContent = state.highScore;
        
        this.showScreen('gameover');
    }
    
    /**
     * Affiche l'écran de victoire finale
     */
    showVictory(state) {
        // Score total
        const scoreEl = document.getElementById('victory-score');
        if (scoreEl) scoreEl.textContent = state.score;
        
        // Étoiles totales
        const starsContainer = document.getElementById('total-stars');
        if (starsContainer) {
            const totalStars = state.getTotalStars();
            starsContainer.innerHTML = '';
            for (let i = 0; i < 15; i++) {
                const star = document.createElement('span');
                star.className = 'star' + (i < totalStars ? ' earned' : '');
                star.textContent = '⭐';
                starsContainer.appendChild(star);
            }
        }
        
        this.showScreen('victory');
    }
}
