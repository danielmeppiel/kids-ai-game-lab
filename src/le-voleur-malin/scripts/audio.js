/**
 * LE VOLEUR MALIN - Gestion de l'audio
 * Utilise Web Audio API pour les sons et musique
 */

export class AudioManager {
    constructor() {
        this.isMuted = false;
        this.audioContext = null;
        this.sounds = {};
        this.musicSource = null;
        this.musicGain = null;
        
        // Initialiser au premier clic (politique navigateur)
        this.initialized = false;
        document.addEventListener('click', () => this.init(), { once: true });
        document.addEventListener('touchstart', () => this.init(), { once: true });
    }
    
    /**
     * Initialise le contexte audio
     */
    init() {
        if (this.initialized) return;
        
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
            console.log('🔊 Audio initialisé');
        } catch (e) {
            console.warn('Web Audio API non supportée');
        }
    }
    
    /**
     * Joue un son
     */
    playSound(name) {
        if (this.isMuted || !this.initialized) return;
        
        // Créer un oscillateur simple pour les sons
        // (Dans une vraie implémentation, on chargerait des fichiers audio)
        const sounds = {
            'click': { freq: 800, duration: 0.1, type: 'sine' },
            'piece': { freq: 1200, duration: 0.15, type: 'sine' },
            'diamant': { freq: 1500, duration: 0.2, type: 'sine' },
            'coffre': { freq: [800, 1000, 1200], duration: 0.3, type: 'sine' },
            'bonus': { freq: [600, 900, 1200], duration: 0.25, type: 'square' },
            'attrape': { freq: [400, 200], duration: 0.3, type: 'sawtooth' },
            'victoire': { freq: [523, 659, 784, 1047], duration: 0.5, type: 'sine' },
            'game-over': { freq: [400, 300, 200], duration: 0.5, type: 'sawtooth' }
        };
        
        const config = sounds[name];
        if (!config || !this.audioContext) return;
        
        try {
            const freqs = Array.isArray(config.freq) ? config.freq : [config.freq];
            const stepDuration = config.duration / freqs.length;
            
            freqs.forEach((freq, i) => {
                setTimeout(() => {
                    const oscillator = this.audioContext.createOscillator();
                    const gainNode = this.audioContext.createGain();
                    
                    oscillator.type = config.type;
                    oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                    
                    gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + stepDuration);
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(this.audioContext.destination);
                    
                    oscillator.start();
                    oscillator.stop(this.audioContext.currentTime + stepDuration);
                }, i * stepDuration * 1000);
            });
        } catch (e) {
            console.warn('Erreur audio:', e);
        }
    }
    
    /**
     * Joue la musique de fond
     */
    playMusic(name) {
        if (this.isMuted || !this.initialized || !this.audioContext) return;
        
        // Stopper la musique précédente
        this.stopMusic();
        
        // Créer une musique simple avec des oscillateurs
        try {
            this.musicGain = this.audioContext.createGain();
            this.musicGain.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            this.musicGain.connect(this.audioContext.destination);
            
            // Pattern de notes pour la musique de jeu
            const melody = [
                { note: 262, dur: 0.3 },  // C4
                { note: 294, dur: 0.3 },  // D4
                { note: 330, dur: 0.3 },  // E4
                { note: 349, dur: 0.3 },  // F4
                { note: 392, dur: 0.3 },  // G4
                { note: 349, dur: 0.3 },  // F4
                { note: 330, dur: 0.3 },  // E4
                { note: 294, dur: 0.3 },  // D4
            ];
            
            let noteIndex = 0;
            const playNextNote = () => {
                if (!this.musicGain || this.isMuted) return;
                
                const { note, dur } = melody[noteIndex];
                
                const osc = this.audioContext.createOscillator();
                const noteGain = this.audioContext.createGain();
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(note, this.audioContext.currentTime);
                
                noteGain.gain.setValueAtTime(0.1, this.audioContext.currentTime);
                noteGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + dur * 0.9);
                
                osc.connect(noteGain);
                noteGain.connect(this.musicGain);
                
                osc.start();
                osc.stop(this.audioContext.currentTime + dur);
                
                noteIndex = (noteIndex + 1) % melody.length;
            };
            
            // Jouer en boucle
            this.musicInterval = setInterval(playNextNote, 400);
            playNextNote();
        } catch (e) {
            console.warn('Erreur musique:', e);
        }
    }
    
    /**
     * Arrête la musique
     */
    stopMusic() {
        if (this.musicInterval) {
            clearInterval(this.musicInterval);
            this.musicInterval = null;
        }
        if (this.musicGain) {
            try {
                this.musicGain.disconnect();
            } catch (e) {}
            this.musicGain = null;
        }
    }
    
    /**
     * Active/désactive le son
     */
    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopMusic();
        }
        return this.isMuted;
    }
}
