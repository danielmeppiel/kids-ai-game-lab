# Le Voleur Malin

## Fiche d'Identité
- **Âge cible :** 6-8 ans
- **Durée :** 15-20 minutes (5 niveaux)
- **Joueurs :** 1
- **Type :** Arcade / Poursuite

---

## Concept

Une ville colorée vue de dessus où tu incarnes un petit voleur (raton laveur masqué) qui doit récupérer tous les trésors éparpillés avant de s'échapper, tout en évitant les policiers maladroits qui te poursuivent. Utilise les chemins secrets, les portes magiques et les flaques de boue pour leur échapper !

Ambiance : Cartoon amusant, musique entraînante, personnages rigolos.

---

## Règles du Jeu

### But
Ramasser **tous les trésors** du niveau pour débloquer la sortie, puis atteindre la sortie **sans te faire attraper**.

### Déroulement
1. Le joueur apparaît au point de départ
2. Les policiers sont placés à différents endroits
3. Le joueur collecte tous les trésors en évitant les policiers
4. Quand tous les trésors sont ramassés, la sortie s'ouvre
5. Le joueur doit atteindre la sortie pour terminer le niveau

### Actions
| Contrôle | Action |
|----------|--------|
| ⬆️ / W / Flèche Haut | Monter |
| ⬇️ / S / Flèche Bas | Descendre |
| ⬅️ / A / Flèche Gauche | Aller à gauche |
| ➡️ / D / Flèche Droite | Aller à droite |

### Fin de partie
- **Victoire niveau** : Tous trésors + sortie atteinte
- **Victoire jeu** : 5 niveaux terminés
- **Défaite** : Touché par un policier (perd 1 vie)
- **Game Over** : 0 vies restantes

### Score
| Action | Points |
|--------|--------|
| Pièce | +1 |
| Diamant | +5 |
| Coffre | +10 |
| Niveau terminé | +50 |
| Bonus temps | +1 à +20 |

### Étoiles
- ⭐ : Niveau terminé
- ⭐⭐ : Terminé sans perdre de vie
- ⭐⭐⭐ : Terminé rapidement + tous les bonus

---

## Spécifications Techniques

### Architecture

```
┌─────────────────────────────────────────────────────┐
│                    index.html                        │
│                  (Point d'entrée)                    │
└──────────────────────┬──────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   ┌─────────┐   ┌──────────┐   ┌──────────┐
   │ styles/ │   │ scripts/ │   │ assets/  │
   │ main.css│   │          │   │          │
   └─────────┘   └────┬─────┘   └──────────┘
                      │
     ┌────────┬───────┼───────┬────────┐
     ▼        ▼       ▼       ▼        ▼
  game.js  state.js  ui.js  levels.js  audio.js
```

### Structure des fichiers

```
src/le-voleur-malin/
├── index.html              # Page du jeu
├── styles/
│   ├── main.css            # Styles principaux
│   ├── game.css            # Styles du plateau
│   └── ui.css              # Styles interface
├── scripts/
│   ├── main.js             # Initialisation
│   ├── game.js             # Boucle de jeu principale
│   ├── state.js            # Gestion d'état (score, vies, niveau)
│   ├── player.js           # Logique du voleur
│   ├── police.js           # IA des policiers
│   ├── levels.js           # Définition des niveaux
│   ├── collision.js        # Détection de collision
│   ├── pathfinding.js      # Algorithme de poursuite (A*)
│   ├── ui.js               # Interface utilisateur
│   └── audio.js            # Sons et musique
├── levels/
│   ├── level1.json         # Le Parc
│   ├── level2.json         # La Rue
│   ├── level3.json         # Le Marché
│   ├── level4.json         # Le Centre-ville
│   └── level5.json         # Le Manoir
└── tests/
    ├── game.test.js
    └── pathfinding.test.js

assets/le-voleur-malin/
├── style-guide.md          # Guide de style artistique
├── sprites/
│   ├── voleur.svg          # Personnage joueur
│   ├── policier.svg        # Ennemis
│   ├── piece.svg           # Trésor +1
│   ├── diamant.svg         # Trésor +5
│   ├── coffre.svg          # Trésor +10
│   ├── bonus-vitesse.svg   # Power-up
│   └── porte-secrete.svg   # Téléporteur
├── tiles/
│   ├── sol.svg             # Tuile de base
│   ├── mur.svg             # Obstacle
│   ├── poubelle.svg        # Obstacle
│   ├── caisse.svg          # Obstacle
│   ├── voiture.svg         # Obstacle
│   ├── flaque.svg          # Ralentisseur
│   ├── sortie-fermee.svg   # Sortie inactive
│   └── sortie-ouverte.svg  # Sortie active
├── ui/
│   ├── bouton-haut.svg
│   ├── bouton-bas.svg
│   ├── bouton-gauche.svg
│   ├── bouton-droite.svg
│   ├── coeur.svg           # Vie
│   ├── etoile.svg          # Score étoile
│   └── pause.svg
├── backgrounds/
│   ├── menu.svg
│   └── game-over.svg
└── audio/
    ├── musique-jeu.mp3
    ├── piece.mp3
    ├── diamant.mp3
    ├── coffre.mp3
    ├── bonus.mp3
    ├── attrape.mp3
    ├── victoire.mp3
    └── game-over.mp3
```

### Modèles de données

#### État du jeu (`GameState`)
```javascript
{
  currentLevel: 1,          // 1-5
  score: 0,                 // Points totaux
  lives: 3,                 // Vies restantes
  treasuresCollected: 0,    // Trésors ramassés ce niveau
  treasuresTotal: 0,        // Trésors à ramasser
  isExitOpen: false,        // Sortie débloquée ?
  isPaused: false,
  isGameOver: false,
  stars: [0, 0, 0, 0, 0],   // Étoiles par niveau (0-3)
  highScore: 0              // Meilleur score (localStorage)
}
```

#### Joueur (`Player`)
```javascript
{
  x: 0,                     // Position grille X
  y: 0,                     // Position grille Y
  speed: 1,                 // Vitesse normale
  hasSpeedBoost: false,     // Bonus actif ?
  speedBoostTimer: 0,       // Temps restant bonus
  direction: 'down'         // Animation direction
}
```

#### Policier (`Police`)
```javascript
{
  id: 1,
  x: 0,
  y: 0,
  speed: 1,
  isSlowed: false,          // Dans la boue ?
  slowTimer: 0,
  path: [],                 // Chemin calculé vers joueur
  direction: 'down'
}
```

#### Niveau (`Level`)
```javascript
{
  id: 1,
  name: "Le Parc",
  width: 15,                // Largeur en cases
  height: 12,               // Hauteur en cases
  grid: [[]],               // Tableau 2D des tuiles
  playerStart: {x: 1, y: 1},
  policeStarts: [{x: 10, y: 10}, {x: 12, y: 3}],
  exit: {x: 14, y: 11},
  treasures: [
    {type: 'coin', x: 3, y: 2},
    {type: 'diamond', x: 7, y: 5},
    {type: 'chest', x: 12, y: 8}
  ],
  bonuses: [
    {type: 'speed', x: 5, y: 5}
  ],
  secretPaths: [
    {x: 6, y: 4, leadsTo: {x: 9, y: 8}}
  ],
  mudPuddles: [
    {x: 8, y: 6}
  ]
}
```

#### Types de tuiles
```javascript
const TILE_TYPES = {
  FLOOR: 0,         // Traversable
  WALL: 1,          // Bloque tout
  SECRET_PATH: 2,   // Joueur uniquement
  MUD: 3,           // Ralentit policiers
  EXIT: 4           // Sortie
}
```

### Technologies recommandées

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| **Base** | HTML5 + CSS3 + JavaScript ES6+ | Simple, pas de build, fonctionne partout |
| **Rendu** | Canvas 2D | Fluide pour 60fps, bon pour grilles |
| **Alternative rendu** | DOM + CSS Grid | Plus accessible, plus simple |
| **Pathfinding** | A* Algorithm | Optimal pour poursuite intelligente |
| **Audio** | Web Audio API | Sons simultanés, contrôle volume |
| **Stockage** | localStorage | Sauvegarde high score |
| **Build** | Aucun (vanilla) | Simplicité maximale |

### Composants principaux

#### 1. GameLoop (60fps)
```
update() → render() → requestAnimationFrame()
```
- Mise à jour positions
- Vérification collisions
- Rendu du plateau

#### 2. InputHandler
- Écoute clavier (flèches, WASD)
- Écoute touch (boutons virtuels mobile)
- Écoute gamepad (bonus)

#### 3. PathfindingEngine
- Algorithme A* pour chaque policier
- Recalcul toutes les 500ms
- Ignore les chemins secrets

#### 4. CollisionSystem
- Joueur vs Murs
- Joueur vs Trésors (collecte)
- Joueur vs Bonus (activation)
- Joueur vs Policiers (game over)
- Joueur vs Sortie (victoire si ouverte)
- Policiers vs Murs
- Policiers vs Boue (ralentissement)

#### 5. UIManager
- Écran titre
- HUD en jeu (score, vies, trésors)
- Écran pause
- Écran victoire niveau
- Écran game over
- Boutons tactiles (mobile)

### Flux de jeu

```
┌──────────────┐
│ Écran Titre  │
│  [JOUER]     │
└──────┬───────┘
       ▼
┌──────────────┐
│ Charger      │
│ Niveau N     │
└──────┬───────┘
       ▼
┌──────────────┐      ┌──────────────┐
│ BOUCLE JEU   │◄─────│ Respawn      │
│ - Déplacer   │      │ (si vies > 0)│
│ - Collecter  │      └──────────────┘
│ - Poursuivre │              ▲
└──────┬───────┘              │
       │                      │
       ▼                      │
   ┌───────┐            ┌─────┴─────┐
   │Touché?├────OUI────►│ Perdre vie│
   └───┬───┘            └───────────┘
       │NON
       ▼
   ┌────────────┐
   │Tous trésors├───NON───► (continuer)
   │ ramassés?  │
   └─────┬──────┘
         │OUI
         ▼
   ┌────────────┐
   │ Ouvrir     │
   │ sortie     │
   └─────┬──────┘
         ▼
   ┌────────────┐
   │ Sortie     ├───NON───► (continuer)
   │ atteinte?  │
   └─────┬──────┘
         │OUI
         ▼
   ┌────────────┐      ┌──────────────┐
   │Niveau < 5? ├─OUI─►│ Niveau N+1   │
   └─────┬──────┘      └──────────────┘
         │NON
         ▼
   ┌────────────┐
   │ VICTOIRE ! │
   │ Fin du jeu │
   └────────────┘
```

### Responsive Design

| Écran | Disposition |
|-------|-------------|
| Desktop | Grille centrée, contrôles clavier |
| Tablette | Grille + boutons tactiles en bas |
| Mobile portrait | Grille réduite + boutons tactiles |
| Mobile paysage | Grille + boutons sur les côtés |

### Accessibilité

- Support complet clavier
- Boutons tactiles assez grands (48x48px min)
- Contraste suffisant (WCAG AA)
- Pas de clignotements rapides
- Mode daltonien (formes distinctives + couleurs)
- Sons optionnels (bouton mute)

### Performance

- 60 FPS cible
- Sprites en SVG (légers, scalables)
- Pathfinding throttlé (2x par seconde)
- Pas de memory leaks (cleanup des listeners)
- Lazy loading des niveaux

---

## Prochaines étapes

1. **@artiste-jeu** → Créer le guide de style et les assets visuels
2. **@developpeur-jeu** → Implémenter le jeu à partir de ces specs
