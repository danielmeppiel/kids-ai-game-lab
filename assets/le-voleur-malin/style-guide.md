# Guide de Style - Le Voleur Malin

## Palette de Couleurs

### Couleurs Principales
| Nom | Hex | Usage |
|-----|-----|-------|
| Bleu Police | `#1E40AF` | Policiers, voitures, hélicoptères |
| Gris Voleur | `#6B7280` | Raton laveur |
| Or Trésor | `#F59E0B` | Pièces, étoiles, récompenses |
| Rouge Danger | `#DC2626` | Cœurs, alertes, toits |
| Vert Sortie | `#10B981` | Sortie, éléments positifs |
| Violet Magie | `#8B5CF6` | Portails, chemins secrets |

### Couleurs Secondaires
| Nom | Hex | Usage |
|-----|-----|-------|
| Brun Bois | `#92400E` | Coffres, caisses, portes |
| Brun Boue | `#78350F` | Flaques |
| Gris Pavé | `#D1D5DB` | Sol, routes |
| Rouge Brique | `#DC2626` | Murs |
| Bleu Ciel | `#7DD3FC` | Vitres, fenêtres |

### Tons Neutres
| Nom | Hex | Usage |
|-----|-----|-------|
| Noir Doux | `#1F2937` | Ombres, contours |
| Gris Foncé | `#4B5563` | Éléments sombres |
| Gris Moyen | `#9CA3AF` | Boutons, métal |
| Blanc | `#FFFFFF` | Reflets, textes |

## Typographie

- **Titres** : Police système bold (system-ui, -apple-system)
- **Score/UI** : Police système medium
- **Taille minimale** : 16px pour lisibilité enfant

## Style Graphique

### Principes
- **Cartoon** : Formes arrondies, couleurs vives
- **Joyeux** : Personnages expressifs et sympathiques
- **Clair** : Éléments bien distincts, pas de confusion
- **Enfantin** : Adapté 6-8 ans, pas effrayant

### Ombres
- Légères, douces (opacity 0.2-0.3)
- Décalage de 2px vers le bas/droite
- Couleur : `#1F2937`

### Reflets
- Sur tous les personnages et objets importants
- Blanc avec opacity 0.3-0.6
- Position : haut-gauche

## Personnages

### Le Voleur (Raton Laveur)
- **Couleur principale** : Gris `#6B7280`
- **Masque** : Noir `#1F2937` (style bandit)
- **Expression** : Sourire malicieux
- **Accessoire** : Sac de butin marron
- **Queue** : Rayée noir et gris

### Les Policiers
- **Uniforme** : Bleu `#1E40AF`
- **Peau** : Jaune `#FBBF24` (cartoon)
- **Casquette** : Bleu foncé avec badge doré
- **Expression** : Déterminé/surpris
- **Moustache** : Marron

## Éléments UI

### Boutons Directionnels
- Cercle gris `#9CA3AF`
- Flèche blanche
- Taille : 48x48px minimum (accessibilité tactile)

### Indicateurs
- **Vies** : Cœurs rouges `#DC2626`
- **Score** : Étoiles dorées `#F59E0B`
- **Trésors restants** : Compteur numérique

### États
- **Normal** : Couleurs standard
- **Hover** : +10% luminosité
- **Pressed** : -10% luminosité
- **Disabled** : Opacity 0.5

## Tiles (64x64px)

### Sol
- Pavés gris avec joints
- Motif répétable 2x2

### Murs
- Briques rouges
- Mortier gris visible
- NON traversable

### Obstacles
- Poubelle verte (visage endormi)
- Caisse bois avec "FRAGILE"
- Voiture rouge garée

### Spéciaux
- **Flaque de boue** : Marron avec bulles
- **Chemin secret** : Mur semi-transparent + étoiles
- **Sortie fermée** : Cadenas rouge + X
- **Sortie ouverte** : Vert brillant + flèche

## Sprites (64x64px)

### Trésors
- **Pièce** : Or brillant avec $
- **Diamant** : Bleu facetté avec reflets
- **Coffre** : Bois avec pièces qui dépassent

### Bonus
- **Vitesse** : Chaussure bleue + lignes de mouvement
- **Porte secrète** : Portail violet spirale

### Véhicules Police
- **Voiture** : Bleue + gyrophare + "POLICE"
- **Hélicoptère** : Vue de côté, rotor, projecteur

## Animations (futures)

### Voleur
- Idle : Léger balancement
- Marche : 4 frames par direction
- Collecte : Saut de joie

### Policiers
- Marche : 4 frames
- Alerte : Point d'exclamation
- Ralenti (boue) : Animation lente

### Effets
- Pièce collectée : +1 qui monte et disparaît
- Diamant : Brillance
- Portail : Rotation spirale
- Sortie ouverte : Pulsation lumineuse

## Responsive

| Écran | Taille Tile | Grille |
|-------|-------------|--------|
| Desktop | 64px | 15x12 |
| Tablette | 48px | 12x10 |
| Mobile Portrait | 32px | 10x14 |
| Mobile Paysage | 40px | 14x8 |
