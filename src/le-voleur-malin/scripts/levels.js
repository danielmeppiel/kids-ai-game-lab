/**
 * LE VOLEUR MALIN - Définition des 5 niveaux
 * 
 * Types de tuiles:
 * 0 = Sol (traversable)
 * 1 = Mur (bloque tout)
 * 2 = Chemin secret (joueur uniquement)
 * 3 = Boue (ralentit les policiers)
 */

export const levels = [
    // ========================================
    // NIVEAU 1 - Le Parc (Facile)
    // ========================================
    {
        id: 1,
        name: "Le Parc",
        width: 12,
        height: 10,
        grid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        playerStart: { x: 1, y: 1 },
        policeStarts: [
            { x: 10, y: 8 },
            { x: 10, y: 1 }
        ],
        exit: { x: 10, y: 4 },
        treasures: [
            { type: 'coin', x: 3, y: 1 },
            { type: 'coin', x: 5, y: 3 },
            { type: 'coin', x: 1, y: 5 },
            { type: 'coin', x: 9, y: 6 },
            { type: 'coin', x: 5, y: 8 },
            { type: 'diamond', x: 7, y: 4 },
            { type: 'diamond', x: 1, y: 8 },
            { type: 'chest', x: 6, y: 1 }
        ],
        bonuses: [
            { type: 'speed', x: 9, y: 3 }
        ],
        mudPuddles: [
            { x: 7, y: 6 },
            { x: 3, y: 4 }
        ],
        secretPaths: [
            { x: 4, y: 4, leadsTo: { x: 7, y: 3 } }
        ],
        obstacles: []
    },

    // ========================================
    // NIVEAU 2 - La Rue (Facile-Moyen)
    // ========================================
    {
        id: 2,
        name: "La Rue",
        width: 14,
        height: 10,
        grid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        playerStart: { x: 1, y: 1 },
        policeStarts: [
            { x: 12, y: 8 },
            { x: 1, y: 8 }
        ],
        exit: { x: 12, y: 5 },
        treasures: [
            { type: 'coin', x: 2, y: 1 },
            { type: 'coin', x: 6, y: 1 },
            { type: 'coin', x: 11, y: 2 },
            { type: 'coin', x: 1, y: 5 },
            { type: 'coin', x: 5, y: 6 },
            { type: 'coin', x: 8, y: 6 },
            { type: 'coin', x: 12, y: 7 },
            { type: 'coin', x: 6, y: 8 },
            { type: 'diamond', x: 7, y: 3 },
            { type: 'diamond', x: 3, y: 6 },
            { type: 'diamond', x: 11, y: 5 },
            { type: 'chest', x: 1, y: 3 }
        ],
        bonuses: [
            { type: 'speed', x: 10, y: 3 },
            { type: 'invisible', x: 2, y: 6 }
        ],
        mudPuddles: [
            { x: 5, y: 3 },
            { x: 9, y: 6 }
        ],
        secretPaths: [
            { x: 3, y: 3, leadsTo: { x: 10, y: 5 } }
        ],
        obstacles: [
            { type: 'voiture', x: 6, y: 5 }
        ]
    },

    // ========================================
    // NIVEAU 3 - Le Marché (Moyen)
    // ========================================
    {
        id: 3,
        name: "Le Marché",
        width: 14,
        height: 12,
        grid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 2, 2, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        playerStart: { x: 1, y: 1 },
        policeStarts: [
            { x: 12, y: 10 },
            { x: 12, y: 1 },
            { x: 6, y: 6 }
        ],
        exit: { x: 12, y: 5 },
        treasures: [
            { type: 'coin', x: 4, y: 1 },
            { type: 'coin', x: 9, y: 1 },
            { type: 'coin', x: 1, y: 4 },
            { type: 'coin', x: 12, y: 3 },
            { type: 'coin', x: 3, y: 5 },
            { type: 'coin', x: 10, y: 5 },
            { type: 'coin', x: 1, y: 8 },
            { type: 'coin', x: 12, y: 8 },
            { type: 'coin', x: 4, y: 10 },
            { type: 'coin', x: 9, y: 10 },
            { type: 'diamond', x: 7, y: 3 },
            { type: 'diamond', x: 6, y: 7 },
            { type: 'diamond', x: 1, y: 10 },
            { type: 'chest', x: 7, y: 10 }
        ],
        bonuses: [
            { type: 'speed', x: 3, y: 3 },
            { type: 'invisible', x: 12, y: 5 }
        ],
        mudPuddles: [
            { x: 4, y: 4 },
            { x: 9, y: 4 },
            { x: 4, y: 8 },
            { x: 9, y: 8 }
        ],
        secretPaths: [
            { x: 6, y: 2, leadsTo: { x: 7, y: 9 } },
            { x: 7, y: 2, leadsTo: { x: 6, y: 9 } },
            { x: 6, y: 9, leadsTo: { x: 7, y: 2 } },
            { x: 7, y: 9, leadsTo: { x: 6, y: 2 } }
        ],
        obstacles: [
            { type: 'caisse', x: 6, y: 4 },
            { type: 'caisse', x: 7, y: 4 },
            { type: 'poubelle', x: 6, y: 8 },
            { type: 'poubelle', x: 7, y: 8 }
        ]
    },

    // ========================================
    // NIVEAU 4 - Le Centre-ville (Difficile)
    // ========================================
    {
        id: 4,
        name: "Le Centre-ville",
        width: 16,
        height: 12,
        grid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 2, 0, 0, 1, 1, 0, 0, 2, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 2, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        playerStart: { x: 1, y: 1 },
        policeStarts: [
            { x: 14, y: 10 },
            { x: 1, y: 10 },
            { x: 8, y: 5 }
        ],
        exit: { x: 14, y: 5 },
        treasures: [
            { type: 'coin', x: 3, y: 1 },
            { type: 'coin', x: 12, y: 1 },
            { type: 'coin', x: 1, y: 3 },
            { type: 'coin', x: 8, y: 3 },
            { type: 'coin', x: 14, y: 3 },
            { type: 'coin', x: 3, y: 5 },
            { type: 'coin', x: 12, y: 5 },
            { type: 'coin', x: 1, y: 7 },
            { type: 'coin', x: 14, y: 7 },
            { type: 'coin', x: 5, y: 9 },
            { type: 'coin', x: 10, y: 9 },
            { type: 'coin', x: 3, y: 10 },
            { type: 'coin', x: 12, y: 10 },
            { type: 'diamond', x: 7, y: 1 },
            { type: 'diamond', x: 1, y: 5 },
            { type: 'diamond', x: 6, y: 7 },
            { type: 'diamond', x: 8, y: 10 },
            { type: 'chest', x: 7, y: 5 }
        ],
        bonuses: [
            { type: 'speed', x: 10, y: 3 },
            { type: 'speed', x: 5, y: 7 },
            { type: 'invisible', x: 8, y: 7 }
        ],
        mudPuddles: [
            { x: 6, y: 3 },
            { x: 9, y: 3 },
            { x: 5, y: 6 },
            { x: 10, y: 6 }
        ],
        secretPaths: [
            { x: 4, y: 4, leadsTo: { x: 11, y: 7 } },
            { x: 11, y: 4, leadsTo: { x: 4, y: 7 } },
            { x: 4, y: 7, leadsTo: { x: 11, y: 4 } },
            { x: 11, y: 7, leadsTo: { x: 4, y: 4 } }
        ],
        obstacles: [
            { type: 'voiture', x: 7, y: 9 },
            { type: 'poubelle', x: 3, y: 6 },
            { type: 'poubelle', x: 12, y: 6 },
            { type: 'caisse', x: 9, y: 5 },
            { type: 'caisse', x: 6, y: 6 }
        ]
    },

    // ========================================
    // NIVEAU 5 - Le Manoir (Très Difficile)
    // ========================================
    {
        id: 5,
        name: "Le Manoir",
        width: 16,
        height: 14,
        grid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        playerStart: { x: 1, y: 1 },
        policeStarts: [
            { x: 14, y: 12 },
            { x: 1, y: 12 },
            { x: 7, y: 5 },
            { x: 8, y: 8 }
        ],
        exit: { x: 14, y: 6 },
        treasures: [
            { type: 'coin', x: 5, y: 1 },
            { type: 'coin', x: 10, y: 1 },
            { type: 'coin', x: 1, y: 3 },
            { type: 'coin', x: 14, y: 3 },
            { type: 'coin', x: 3, y: 4 },
            { type: 'coin', x: 12, y: 4 },
            { type: 'coin', x: 1, y: 6 },
            { type: 'coin', x: 5, y: 6 },
            { type: 'coin', x: 10, y: 6 },
            { type: 'coin', x: 1, y: 8 },
            { type: 'coin', x: 5, y: 8 },
            { type: 'coin', x: 10, y: 8 },
            { type: 'coin', x: 14, y: 8 },
            { type: 'coin', x: 3, y: 10 },
            { type: 'coin', x: 12, y: 10 },
            { type: 'coin', x: 5, y: 12 },
            { type: 'coin', x: 10, y: 12 },
            { type: 'diamond', x: 7, y: 3 },
            { type: 'diamond', x: 8, y: 3 },
            { type: 'diamond', x: 7, y: 10 },
            { type: 'diamond', x: 8, y: 10 },
            { type: 'chest', x: 7, y: 1 },
            { type: 'chest', x: 8, y: 12 }
        ],
        bonuses: [
            { type: 'speed', x: 3, y: 6 },
            { type: 'speed', x: 12, y: 6 },
            { type: 'invisible', x: 7, y: 6 },
            { type: 'invisible', x: 8, y: 7 }
        ],
        mudPuddles: [
            { x: 6, y: 5 },
            { x: 9, y: 5 },
            { x: 6, y: 8 },
            { x: 9, y: 8 }
        ],
        secretPaths: [
            { x: 4, y: 2, leadsTo: { x: 11, y: 11 } },
            { x: 11, y: 2, leadsTo: { x: 4, y: 11 } },
            { x: 4, y: 11, leadsTo: { x: 11, y: 2 } },
            { x: 11, y: 11, leadsTo: { x: 4, y: 2 } },
            { x: 6, y: 6, leadsTo: { x: 9, y: 7 } },
            { x: 9, y: 6, leadsTo: { x: 6, y: 7 } },
            { x: 6, y: 7, leadsTo: { x: 9, y: 6 } },
            { x: 9, y: 7, leadsTo: { x: 6, y: 6 } }
        ],
        obstacles: [
            { type: 'caisse', x: 5, y: 5 },
            { type: 'caisse', x: 10, y: 5 },
            { type: 'caisse', x: 5, y: 9 },
            { type: 'caisse', x: 10, y: 9 },
            { type: 'poubelle', x: 3, y: 3 },
            { type: 'poubelle', x: 12, y: 3 },
            { type: 'poubelle', x: 3, y: 11 },
            { type: 'poubelle', x: 12, y: 11 }
        ]
    }
];
