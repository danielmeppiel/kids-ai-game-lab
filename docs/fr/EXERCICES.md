# 🧩 Exercices et Défis

> Des activités pour approfondir l'apprentissage après l'atelier

🇬🇧 **[English version](../en/EXERCISES.md)**

---

## 🏁 Niveau Débutant

### Exercice 1 : Modifier les Règles

**Objectif** : Comprendre l'impact des spécifications sur le jeu

**Consigne** :
Utilisez `@architecte-jeu` pour modifier une règle du Voleur Malin.

```
@architecte-jeu Je voudrais modifier le jeu Le Voleur Malin. 
Au lieu de 3 vies, le joueur aurait 5 vies. 
Peux-tu mettre à jour les specs ?
```

**Questions de réflexion** :
- Le développeur devra-t-il modifier le code ?
- Où exactement dans les specs se trouve ce changement ?

---

### Exercice 2 : Ajouter un Personnage

**Objectif** : Comprendre le workflow artiste

**Consigne** :
Demandez à `@artiste-jeu` de créer un nouveau personnage.

```
@artiste-jeu Pour Le Voleur Malin, je voudrais ajouter un chat 
qui aide le voleur. Peux-tu le dessiner en suivant le style-guide ?
```

**Vérification** :
- Le chat respecte-t-il les couleurs du style-guide ?
- Est-il au bon format (SVG) ?

---

### Exercice 3 : Débugger un Problème

**Objectif** : Comprendre le rôle du développeur

**Consigne** :
Imaginez un bug et demandez au développeur de le corriger.

```
@developpeur-jeu Dans Le Voleur Malin, quand on ramasse toutes 
les pièces, la sortie ne s'ouvre pas. Peux-tu vérifier le code ?
```

**Discussion** :
- Comment le développeur a-t-il trouvé le problème ?
- Quelle partie du code était concernée ?

---

## 🎯 Niveau Intermédiaire

### Défi 1 : Créer un Nouveau Niveau

**Objectif** : Combiner les 3 rôles pour une tâche complète

**Étapes** :

1. **Architecte** : Concevoir les règles du niveau 6
   ```
   @architecte-jeu Ajoute un niveau 6 au Voleur Malin. 
   Ce niveau se passe dans un zoo avec des animaux qui bloquent le chemin.
   ```

2. **Artiste** : Créer les nouveaux assets
   ```
   @artiste-jeu Nous ajoutons un niveau zoo. Crée les tuiles et 
   sprites nécessaires : lion endormi, singe, cage, herbe.
   ```

3. **Développeur** : Implémenter le niveau
   ```
   @developpeur-jeu Implémente le niveau 6 (zoo) en utilisant 
   les specs et les nouveaux assets.
   ```

**Critères de succès** :
- [ ] Les specs du niveau 6 sont documentées
- [ ] Les assets sont dans le bon dossier
- [ ] Le niveau est jouable

---

### Défi 2 : Créer un Mini-Jeu Complet

**Objectif** : Réaliser tout le processus de A à Z

**Le jeu à créer** : Memory des Animaux (simple)

**Contraintes** :
- 8 cartes seulement (4 paires)
- Pas de timer
- Pour les 4-6 ans

**Étapes détaillées** :

| Phase | Agent | Durée estimée |
|-------|-------|---------------|
| Conception | @architecte-jeu | 15 min |
| Design | @artiste-jeu | 20 min |
| Code | @developpeur-jeu | 30 min |

---

### Défi 3 : Améliorer un Agent

**Objectif** : Comprendre comment les agents sont configurés

**Consigne** :
Lisez le fichier `architecte-jeu.agent.md` et proposez une amélioration.

**Idées** :
- Ajouter une phase "test de l'idée" avant les specs
- Demander de créer un schéma du jeu
- Ajouter des exemples de jeux similaires

**Modifiez le fichier** et testez si l'agent se comporte différemment.

---

## 🚀 Niveau Avancé

### Projet 1 : Créer un Nouvel Agent

**Objectif** : Maîtriser la structure des agents

**Agent à créer** : Le Compositeur

Créez `.github/agents/compositeur-jeu.agent.md` qui :
- Consulte les specs ET le style-guide
- Propose une ambiance sonore
- Décrit les effets sonores nécessaires
- Crée un fichier `audio-guide.md`

**Template de départ** :
```markdown
---
name: compositeur-jeu
description: Compositeur de musique et sons pour jeux d'enfants
tools:
  - read_file
  - create_file
---

# Compositeur de Jeux pour Enfants

## Périmètre
...
```

---

### Projet 2 : Documentation Croisée

**Objectif** : Comprendre les dépendances entre agents

**Exercice** :
Créez un diagramme qui montre :
- Quels fichiers chaque agent lit
- Quels fichiers chaque agent crée
- Les dépendances entre agents

**Format attendu** :
```
ARCHITECTE
  └── Crée: docs/jeux/*.specs.md
  
ARTISTE  
  ├── Lit: docs/jeux/*.specs.md
  └── Crée: assets/*/style-guide.md, assets/*/sprites/*

DÉVELOPPEUR
  ├── Lit: docs/jeux/*.specs.md
  ├── Lit: assets/*/style-guide.md
  └── Crée: src/*/
```

---

### Projet 3 : Atelier entre Enfants

**Objectif** : Enseigner à d'autres ce qu'on a appris

**Consigne** :
Un enfant qui a fait l'atelier anime un mini-atelier pour un autre enfant.

**Critères de réussite** :
- [ ] L'analogie de la maison est expliquée
- [ ] Les 3 agents sont présentés
- [ ] Au moins une interaction avec un agent est faite
- [ ] L'enfant "élève" comprend le processus

---

## 🏆 Défis Créatifs

### Défi : Le Jeu le Plus Simple

Créez le jeu le plus simple possible qui soit quand même amusant.
- Maximum 1 page de specs
- Maximum 3 sprites
- Maximum 50 lignes de code

---

### Défi : Le Thème Surprise

Tirez au sort un thème parmi :
- 🌊 Océan
- 🚀 Espace
- 🎪 Cirque
- 🌲 Forêt
- 🏰 Château

Et créez un jeu sur ce thème en 1 heure !

---

### Défi : L'Agent Fou

Modifiez temporairement un agent pour lui donner une personnalité :
- L'architecte qui adore les dinosaures (il suggère toujours des dinos)
- L'artiste qui ne veut utiliser qu'une seule couleur
- Le développeur qui commente tout avec des blagues

**Objectif pédagogique** : Comprendre que les instructions influencent le comportement de l'IA.

---

## 📝 Grille d'Auto-Évaluation

Après chaque exercice, évalue-toi :

| Critère | 😕 | 😐 | 😊 | 🌟 |
|---------|-----|-----|-----|-----|
| J'ai compris ce que fait l'agent | | | | |
| J'ai formulé des instructions claires | | | | |
| J'ai obtenu le résultat souhaité | | | | |
| J'ai appris quelque chose de nouveau | | | | |
| Je pourrais expliquer à quelqu'un | | | | |

---

*Bonne exploration !* 🎮
