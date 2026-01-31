# 💬 Session Réelle de Lab : Le Voleur Malin

> Cette transcription montre comment une famille a créé "Le Voleur Malin" en une session.  
> Remarquez comme les demandes sont naturelles — ça marche super bien avec la dictée vocale !

---

## Phase 1 : Créer l'Équipe

### 🏛️ Créer l'Agent Architecte

**👤 Parent/Enfant :**
> Je voudrais que tu crées un agent architecte de jeu qui suit les principes PROSE. Cet agent ne fait que la conception de jeu — pas d'implémentation de code. Il doit avoir un workflow de découverte où il pose des questions, puis propose un concept pour approbation, puis détaille les règles pour approbation, et seulement ensuite crée les spécifications complètes.

**🤖 Résultat :** Création de `architecte-jeu.agent.md` avec des limites claires : PEUT concevoir les règles et écrire les specs, NE PEUT PAS écrire de code ou créer de l'art.

---

### 🎨 Créer l'Agent Artiste

**👤 Parent/Enfant :**
> Maintenant je voudrais que tu crées un agent artiste pour les visuels de jeu. Cet agent crée des assets SVG pour les personnages, tuiles et éléments d'interface, mais n'écrit pas de code et ne change pas les règles du jeu.

**🤖 Résultat :** Création de `artiste-jeu.agent.md` — lit d'abord les specs de l'architecte, puis crée les assets visuels.

---

### 💻 Créer l'Agent Développeur

**👤 Parent/Enfant :**
> Maintenant crée un agent développeur. Cet agent implémente les jeux depuis les spécifications — il doit lire le document de specs de l'architecte avant de commencer et utiliser les assets de l'artiste.

**🤖 Résultat :** Création de `developpeur-jeu.agent.md` — suit les specs, utilise les assets existants, n'invente pas de nouvelles règles.

---

## Phase 2 : Concevoir le Jeu (Architecte)

### Concept Initial du Jeu

**👤 Parent/Enfant :**
> @architecte-jeu Je voudrais créer un jeu pour un enfant de 7 ans qui soit un gendarme et voleur. On joue un voleur qui vole des trésors et collecte des pièces. Les gendarmes nous pourchassent. L'enfant doit pouvoir se déplacer avec les flèches du clavier. Il y a une porte de sortie qui s'ouvre quand on collecte tous les trésors. Les gendarmes pourchassent avec du pathfinding. C'est un jeu sur grille. Fais-le moderne mais accessible pour un enfant de 7 ans qui va utiliser les flèches du clavier, pas un téléphone.

**🤖 Réponse de l'Architecte :** A posé des questions de clarification sur :
- Le nombre de niveaux
- Les mécaniques de bonus
- Les préférences de son

---

### Ajouter des Détails

**👤 Parent/Enfant :**
> Pour les niveaux, je veux 5 niveaux avec difficulté progressive. Plus de police, police plus rapide, niveaux plus grands. Pour les bonus :
> - Bonus de vitesse pour le voleur
> - Chemins secrets que seul le voleur peut utiliser
> - Flaques de boue qui ralentissent la police

**🤖 Réponse de l'Architecte :** A présenté le concept complet du jeu pour approbation, incluant :
- Thème : Un raton laveur voleur malicieux
- 5 niveaux progressifs
- Système de score
- Toutes les mécaniques détaillées

---

### Approbations

**👤 Parent/Enfant :**
> J'approuve le concept. Maintenant montre-moi les règles détaillées.

**🤖 Réponse de l'Architecte :** A présenté les règles détaillées incluant contrôles, score, conditions de victoire/défaite.

**👤 Parent/Enfant :**
> J'approuve les règles. Crée les spécifications complètes.

**🤖 Résultat :** Création de `docs/jeux/le-voleur-malin.specs.md` — document de conception de jeu complet.

---

## Phase 3 : Créer les Visuels (Artiste)

**👤 Parent/Enfant :**
> @artiste-jeu Il y a un jeu qui s'appelle "Le Voleur Malin" avec des specs dans docs/jeux/. Lis les specs et crée tous les assets visuels — sprites pour les personnages et objets, tuiles pour les niveaux, et éléments d'interface.

**🤖 Réponse de l'Artiste :** 
- A lu les specs de l'architecte d'abord
- A créé un guide de style avec palette de couleurs
- A créé ~20 fichiers SVG : voleur.svg, policier.svg, piece.svg, diamant.svg, coffre.svg, mur.svg, sol.svg, chemin-secret.svg, flaque.svg, et plus

**Résultat :** Bibliothèque d'assets complète dans `assets/le-voleur-malin/`

---

## Phase 4 : Construire le Jeu (Développeur)

**👤 Parent/Enfant :**
> @developpeur-jeu Il y a un jeu "Le Voleur Malin" avec des spécifications et des assets prêts. Implémente-le.

**🤖 Réponse du Développeur :**
- A lu le document de specs
- A noté tous les assets disponibles
- A construit le jeu complet avec HTML5 + CSS + JavaScript ES6 modules
- A implémenté le pathfinding A* pour la police
- A créé 5 niveaux comme spécifié
- A ajouté le son avec Web Audio API

**Résultat :** Jeu fonctionnel dans `src/le-voleur-malin/`

---

## Phase 5 : Jouer et Améliorer

C'est là que le vrai apprentissage se passe — tester, trouver des problèmes, et itérer !

---

### Bug : La Police ne Bouge Pas

**👤 Enfant :**
> La police ne bouge pas du tout !

**🤖 Correction :** Trouvé une boucle infinie dans l'algorithme de pathfinding. Ajouté un closed set et mouvement de secours.

---

### Bug : Trésors sur les Murs

**👤 Enfant :**
> Tu as mis des trésors sur des murs donc je ne peux pas les attraper !

**🤖 Correction :** Audit de tous les designs de niveau, déplacé les trésors sur des cases de sol, ajouté les tuiles de chemin secret (valeur `2`) aux grilles.

---

### Bug : Les Chemins Secrets ne Marchent Pas

**👤 Enfant :**
> Les chemins secrets, bah en fait ils vont qu'à une autre pièce, tu vas juste à un autre chemin.

**🤖 Correction :** Rendu les chemins secrets bidirectionnels — marche dessus, apparais à l'autre bout.

---

### Équilibrage : Police Trop Rapide

**👤 Enfant :**
> Et bon pour le niveau 1 la police bouge trop trop vite et du coup c'est trop difficile. Il faudrait que la police bouge plus lentement au niveau 1 et progressivement que la police se bouge plus vite quand on monte de niveau.

**🤖 Correction :** Ajouté vitesse progressive : Niveau 1 = 900ms, Niveau 5 = 350ms.

---

### Encore Trop Rapide !

**👤 Enfant :**
> Alors, mais c'est pas possible, j'avance au niveau 2, et du coup, la police avance à une vitesse complètement fou. Alors, mais j'arrive même pas à m'en sortir alors que je suis un adulte. On a dit que c'était juste pour des enfants de 7 ans. Tu te règles ou quoi ?

**🤖 Correction :** Ralenti significativement pour les enfants :
- Niveau 1 : 1.5 secondes entre les mouvements
- Niveau 5 : 0.9 secondes entre les mouvements

---

### Fonctionnalité : Système de Checkpoint

**👤 Enfant :**
> Quand on perd et qu'on appuie sur "Réessayer", on devrait retourner au dernier niveau qu'on a achevé. On ne devrait pas retourner au niveau 1.

**🤖 Correction :** Ajouté le suivi de `lastCompletedLevel`. Réessayer repart maintenant du dernier niveau battu.

---

### Fonctionnalité : Conduire les Voitures

**👤 Enfant :**
> Et après s'il y a des voitures dans la carte quand on touche la voiture, on monte sur la voiture et on est capable d'aller à une vitesse extrême.

**🤖 Correction :** Ajouté le montage de voiture — marche sur une voiture pour 4 secondes de turbo !

---

### Fonctionnalité : Bonus d'Invisibilité

**👤 Enfant :**
> Après, il faudrait mettre un bonus de devenir invisible. Et comme ça que la police ne te voit plus et pouvoir traverser les murs limite.

**🤖 Correction :** Créé le bonus d'invisibilité (icône fantôme) — 6 secondes d'invisibilité + traverser les murs !

---

## Ce que Cette Session Montre

1. **Le langage naturel fonctionne** — pas besoin de jargon technique
2. **L'ordre compte** — architecte → artiste → développeur
3. **Les tests révèlent les problèmes** — et c'est normal !
4. **Les enfants peuvent piloter le processus** — leurs retours améliorent le jeu
5. **L'itération fait partie de la création** — la première version n'est jamais finale
