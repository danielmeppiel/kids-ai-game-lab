/**
 * LE VOLEUR MALIN - Algorithme de pathfinding A*
 */

/**
 * Trouve le chemin le plus court entre deux points
 * @param {Object} start - Position de départ {x, y}
 * @param {Object} goal - Position d'arrivée {x, y}
 * @param {Object} level - Données du niveau
 * @param {Function} canMoveTo - Fonction pour vérifier si une case est accessible
 * @returns {Array} - Tableau de positions formant le chemin
 */
export function findPath(start, goal, level, canMoveTo) {
    const openSet = [start];
    const closedSet = new Set(); // AJOUT: Pour éviter de revisiter les nœuds
    const cameFrom = new Map();
    
    const gScore = new Map();
    gScore.set(key(start), 0);
    
    const fScore = new Map();
    fScore.set(key(start), heuristic(start, goal));
    
    let iterations = 0;
    const maxIterations = 500; // Limite de sécurité
    
    while (openSet.length > 0 && iterations < maxIterations) {
        iterations++;
        
        // Trouver le nœud avec le plus petit fScore
        openSet.sort((a, b) => (fScore.get(key(a)) || Infinity) - (fScore.get(key(b)) || Infinity));
        const current = openSet.shift();
        const currentKey = key(current);
        
        // Arrivé ?
        if (current.x === goal.x && current.y === goal.y) {
            return reconstructPath(cameFrom, current);
        }
        
        // Marquer comme visité
        closedSet.add(currentKey);
        
        // Explorer les voisins
        const neighbors = getNeighbors(current, level, canMoveTo);
        
        for (const neighbor of neighbors) {
            const neighborKey = key(neighbor);
            
            // Ignorer si déjà visité
            if (closedSet.has(neighborKey)) continue;
            
            const tentativeGScore = (gScore.get(currentKey) || Infinity) + 1;
            
            if (tentativeGScore < (gScore.get(neighborKey) || Infinity)) {
                cameFrom.set(neighborKey, current);
                gScore.set(neighborKey, tentativeGScore);
                fScore.set(neighborKey, tentativeGScore + heuristic(neighbor, goal));
                
                if (!openSet.some(n => n.x === neighbor.x && n.y === neighbor.y)) {
                    openSet.push(neighbor);
                }
            }
        }
    }
    
    // Pas de chemin trouvé - aller vers le joueur quand même (mouvement simple)
    return null;
}

/**
 * Génère une clé unique pour une position
 */
function key(pos) {
    return `${pos.x},${pos.y}`;
}

/**
 * Heuristique (distance de Manhattan)
 */
function heuristic(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

/**
 * Récupère les voisins accessibles
 */
function getNeighbors(pos, level, canMoveTo) {
    const directions = [
        { x: 0, y: -1 },  // Haut
        { x: 0, y: 1 },   // Bas
        { x: -1, y: 0 },  // Gauche
        { x: 1, y: 0 }    // Droite
    ];
    
    return directions
        .map(d => ({ x: pos.x + d.x, y: pos.y + d.y }))
        .filter(n => canMoveTo(n.x, n.y));
}

/**
 * Reconstruit le chemin à partir de la map cameFrom
 */
function reconstructPath(cameFrom, current) {
    const path = [current];
    let currentKey = key(current);
    
    while (cameFrom.has(currentKey)) {
        const prev = cameFrom.get(currentKey);
        path.unshift(prev);
        currentKey = key(prev);
    }
    
    return path;
}
