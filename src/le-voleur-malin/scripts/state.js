/**
 * LE VOLEUR MALIN - Gestion de l'état du jeu
 */

export class GameState {
    constructor() {
        this.lastCompletedLevel = 0;
        this.reset();
        this.loadHighScore();
    }
    
    /**
     * Réinitialise l'état pour une nouvelle partie
     */
    reset() {
        this.currentLevel = 1;
        this.score = 0;
        this.lives = 3;
        this.treasuresCollected = 0;
        this.treasuresTotal = 0;
        this.isExitOpen = false;
        this.isPaused = false;
        this.isGameOver = false;
        this.stars = [0, 0, 0, 0, 0];
        this.lostLifeThisLevel = false;
        this.levelStartTime = 0;
        // Ne pas réinitialiser lastCompletedLevel ici
    }
    
    /**
     * Réinitialise pour réessayer depuis le dernier niveau complété
     */
    resetForRetry() {
        // Retourner au dernier niveau complété (ou niveau 1 si aucun)
        this.currentLevel = Math.max(1, this.lastCompletedLevel || 1);
        this.score = 0;
        this.lives = 3;
        this.treasuresCollected = 0;
        this.treasuresTotal = 0;
        this.isExitOpen = false;
        this.isPaused = false;
        this.isGameOver = false;
        this.lostLifeThisLevel = false;
        this.levelStartTime = 0;
    }
    
    /**
     * Charge le meilleur score depuis localStorage
     */
    loadHighScore() {
        try {
            this.highScore = parseInt(localStorage.getItem('voleur-malin-highscore')) || 0;
        } catch (e) {
            this.highScore = 0;
        }
    }
    
    /**
     * Sauvegarde le meilleur score
     */
    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            try {
                localStorage.setItem('voleur-malin-highscore', this.highScore.toString());
            } catch (e) {
                console.warn('Impossible de sauvegarder le score');
            }
        }
    }
    
    /**
     * Calcule le total d'étoiles
     */
    getTotalStars() {
        return this.stars.reduce((sum, s) => sum + s, 0);
    }
}
