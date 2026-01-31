# 📋 Guide de l'Animateur

> Guide détaillé pour animer un atelier "Création de Jeux avec l'IA"

🇬🇧 **[English version](../en/FACILITATOR-GUIDE.md)**

---

## ⚠️ CRITIQUE : Configuration de la Dictée Vocale

> **Avant TOUT atelier avec des enfants de moins de 10 ans, installez un logiciel de dictée vocale !**

C'est le facteur #1 de succès avec les jeunes enfants. Sans cela, les enfants galèrent avec le clavier et perdent intérêt.

| Outil | Plateforme | Lien |
|-------|------------|------|
| **MacWhisper** | macOS | [goodsnooze.gumroad.com/l/macwhisper](https://goodsnooze.gumroad.com/l/macwhisper) |
| **Wispr Flow** | macOS/Windows | [wisprflow.ai](https://wisprflow.ai/) |

**Testez avant l'atelier :** Faites pratiquer l'enfant en dictant une phrase simple. Vérifiez que le micro fonctionne et que la transcription est correcte.

---

## 🎯 Vue d'Ensemble de l'Atelier

| Élément | Détail |
|---------|--------|
| **Durée totale** | 2h30 à 3h (avec pauses) |
| **Âge recommandé** | 8-12 ans |
| **Participants** | 3-6 enfants idéalement |
| **Matériel** | 1 ordinateur avec VS Code + GitHub Copilot |
| **Animateur** | 1 adulte familier avec VS Code |

---

## ⏱️ Déroulé Type de l'Atelier

### Module 1 : Introduction (20 min)

#### 1.1 L'Analogie de la Maison (10 min)

Expliquez avec des visuels ou des dessins :

```
🏠 CONSTRUIRE UNE MAISON          🎮 CRÉER UN JEU VIDÉO
─────────────────────────          ─────────────────────
🏛️ Architecte → plans             🏛️ Architecte → règles
🎨 Décorateur → couleurs          🎨 Artiste → dessins  
🔨 Maçon → construction           💻 Développeur → code
```

**Questions à poser :**
- "Est-ce que le maçon peut commencer avant l'architecte ?"
- "Est-ce que le décorateur peut choisir les couleurs sans savoir la taille de la maison ?"

#### 1.2 Présentation des Agents IA (10 min)

Montrez les trois fichiers d'agents dans VS Code :
- Expliquez que ce sont des "instructions" pour l'IA
- Chaque agent a un "métier" avec des règles

**Activité** : Lire ensemble le début de chaque fichier d'agent.

---

### Module 2 : Session Architecte (30 min)

#### Objectif
Produire le document de spécifications d'un nouveau jeu.

#### Déroulement

1. **Brainstorm collectif (10 min)**
   - "Quel type de jeu voulez-vous créer ?"
   - "Pour quel âge ?"
   - "Quel thème ?"

2. **Interaction avec l'architecte (15 min)**
   ```
   @architecte-jeu Nous voulons créer un jeu de [type] 
   pour des enfants de [âge]. Le thème serait [thème].
   ```

3. **Validation des specs (5 min)**
   - Lire ensemble le document produit
   - Demander : "Est-ce que c'est bien ce qu'on voulait ?"

#### Points pédagogiques
- L'IA pose des questions → elle a besoin d'informations
- L'IA demande validation → elle ne décide pas seule
- Le document produit servira aux autres agents

---

### Module 3 : Session Artiste (30 min)

#### Objectif
Créer le guide de style et des visuels de base.

#### Déroulement

1. **Rappel des specs (5 min)**
   - "Qu'est-ce que l'architecte a décidé ?"
   - "De quoi l'artiste a besoin ?"

2. **Interaction avec l'artiste (20 min)**
   ```
   @artiste-jeu Nous avons les spécifications du jeu [nom]. 
   Peux-tu proposer une direction artistique ?
   ```

3. **Revue des visuels (5 min)**
   - Regarder les couleurs proposées
   - Voir les descriptions de personnages

#### Points pédagogiques
- L'artiste CONSULTE les specs de l'architecte
- Les choix artistiques sont justifiés
- La cohérence visuelle est importante

---

### PAUSE (15 min)

☕ Pause goûter recommandée !

---

### Module 4 : Session Développeur (45 min)

#### Objectif
Implémenter une version jouable du jeu.

#### Déroulement

1. **Préparation (5 min)**
   - Montrer les specs ET les assets
   - "Le développeur a besoin des deux !"

2. **Implémentation (35 min)**
   ```
   @developpeur-jeu Nous avons les specs dans docs/jeux/[nom].specs.md 
   et les assets dans assets/[nom]/. Peux-tu implémenter le jeu ?
   ```

3. **Test du jeu (5 min)**
   ```bash
   npm run dev
   ```
   - Jouer ensemble !
   - Noter ce qui fonctionne et ce qui manque

#### Points pédagogiques
- Le code est créé à partir des specs
- Le développeur demande si quelque chose manque
- Programmer, c'est traduire des règles en code

---

### Module 5 : Débriefing (20 min)

#### 5.1 Discussion Collective (15 min)

**Questions de réflexion :**

1. **Sur le processus**
   - "Pourquoi a-t-on fait les choses dans cet ordre ?"
   - "Que se serait-il passé si on avait commencé par le code ?"

2. **Sur l'IA**
   - "Qu'est-ce que l'IA a bien fait ?"
   - "Qu'est-ce qu'elle n'a pas compris du premier coup ?"
   - "Comment avez-vous fait pour qu'elle comprenne mieux ?"

3. **Sur le travail d'équipe**
   - "Pourquoi chaque agent avait besoin du travail des autres ?"
   - "C'est comme dans une vraie équipe ?"

#### 5.2 Ce qu'on a appris (5 min)

Faire lister aux enfants ce qu'ils ont appris. Exemples attendus :
- L'IA a besoin d'instructions claires
- Chaque métier a son rôle
- On planifie avant de faire
- L'équipe produit un meilleur résultat

---

## 🎨 Variantes de l'Atelier

### Atelier Court (1h30)

- Utiliser le jeu "Le Voleur Malin" comme exemple déjà fait
- Se concentrer sur UN seul module avec interaction
- Plus de temps pour le débriefing

### Atelier Multi-Sessions (3 x 1h)

- **Session 1** : Introduction + Architecte
- **Session 2** : Artiste + début Développeur
- **Session 3** : Finalisation + Tests + Débriefing

### Atelier Compétitif

- 2-3 groupes conçoivent des jeux différents
- Chaque groupe présente son jeu aux autres
- Vote pour le jeu préféré (critères : originalité, fun, visuels)

---

## 👥 Organisation des Rôles

### Avec 3 Enfants
Chaque enfant "devient" l'agent pendant sa phase :
- Enfant A → Architecte
- Enfant B → Artiste  
- Enfant C → Développeur

### Avec 6 Enfants
Équipes de 2 par phase :
- Équipe Archi (2) → discutent et décident ensemble
- Équipe Art (2) → proposent des idées
- Équipe Dev (2) → testent et commentent

### Avec 1 Enfant
L'enfant joue les 3 rôles successivement.
Insister sur le "changement de casquette" à chaque phase.

---

## ⚠️ Points d'Attention

### Problèmes Fréquents

| Problème | Solution |
|----------|----------|
| L'IA génère trop de code d'un coup | Demander de faire "étape par étape" |
| Les enfants veulent coder tout de suite | Rappeler l'analogie de la maison |
| L'IA ne comprend pas | Reformuler plus simplement |
| Erreurs de code | C'est normal ! Montrer que débugger fait partie du métier |
| Un enfant monopolise | Alterner qui tape/qui dicte |

### Messages Clés à Répéter

- "L'IA est un outil, vous êtes les créateurs"
- "Si l'IA ne comprend pas, c'est qu'on peut mieux expliquer"
- "Planifier d'abord, coder ensuite"
- "Chaque erreur nous apprend quelque chose"

---

## 📊 Évaluation de l'Atelier

### Pour les Enfants

Questions à la fin :
1. "Qu'as-tu préféré dans l'atelier ?" (1-5 ⭐)
2. "Est-ce que tu as compris comment fonctionne l'IA ?" (😊/😐/😕)
3. "Est-ce que tu voudrais créer un autre jeu ?"

### Pour l'Animateur

Checklist :
- [ ] Tous les enfants ont participé activement
- [ ] Le concept d'agent spécialisé est compris
- [ ] L'ordre des phases est compris (archi → art → dev)
- [ ] Les enfants ont reformulé au moins une fois
- [ ] Un jeu jouable a été produit
- [ ] Le débriefing a généré des réflexions

---

## 🔧 Préparation Technique

### Avant l'Atelier

```bash
# Cloner le projet
git clone [url-du-repo] jeux-enfants
cd jeux-enfants

# Installer les dépendances
npm install

# Vérifier que le jeu exemple fonctionne
npm run voleur
```

### Checklist Matériel

- [ ] VS Code installé et à jour
- [ ] Extension GitHub Copilot activée
- [ ] **🎙️ Logiciel de dictée vocale installé et testé** (MacWhisper ou Wispr Flow)
- [ ] Projet cloné et fonctionnel
- [ ] Navigateur web ouvert
- [ ] Optionnel : projecteur ou grand écran

---

## 📚 Ressources Complémentaires

### Pour Aller Plus Loin

- Créer de nouveaux agents (compositeur, testeur...)
- Modifier les agents existants avec les enfants
- Exporter le jeu en PWA jouable sur mobile

### Lectures Recommandées

- Documentation GitHub Copilot Agents
- Guides de game design pour enfants
- Pédagogie du code créatif

---

*Document créé pour accompagner le lab pédagogique "Jeux d'Enfants"*
