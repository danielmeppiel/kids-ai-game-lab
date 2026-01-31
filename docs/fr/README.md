# 🎮 Jeux d'Enfants - Lab Pédagogique IA

> **Apprendre l'IA en famille en créant des jeux vidéo**

🇬🇧 **[English version](../../README.md)**

---

## 🌟 Ce que Vos Enfants Vont Apprendre

Ce n'est pas qu'une question de code — ce sont des **compétences de vie** utiles dans tous les métiers :

| Compétence de Vie | Ce qu'ils Vivent |
|-------------------|------------------|
| **Les projets complexes nécessitent des rôles spécialisés** | Une seule personne ne peut pas tout faire. Les grands projets ont besoin d'un architecte, d'un artiste ET d'un développeur — chacun avec des compétences uniques. |
| **Les équipes ont besoin d'orchestration** | Avoir d'excellents spécialistes ne suffit pas. Quelqu'un doit les coordonner — comme un **chef de projet** qui dit "d'abord on planifie, puis on design, puis on construit." |
| **L'ordre compte** | On ne peut pas construire une maison avant de dessiner les plans. On ne peut pas coder un jeu sans connaître les règles. **La planification vient en premier.** |
| **La communication claire est essentielle** | L'IA (comme les gens) a besoin d'instructions claires. Si elle ne comprend pas, on reformule — une compétence pour la vie. |
| **Voir ses idées prendre vie** | De l'imagination → au plan → à l'art → au jeu qui fonctionne. La magie de la création ! |

> 💡 **Pour les parents** : Ce lab enseigne les mêmes principes utilisés en développement logiciel professionnel, en architecture, et dans tout projet créatif complexe. Vos enfants apprennent comment fonctionnent les vraies équipes.

---

## ⚠️ AVANT DE COMMENCER : Configuration Essentielle

### 🎙️ Dictée Vocale (CRITIQUE pour les moins de 10 ans !)

Les jeunes enfants ont du mal à taper. **La dictée vocale transforme l'expérience** — les enfants PARLENT, et l'ordinateur tape pour eux.

| Outil | Plateforme | Lien |
|-------|------------|------|
| **MacWhisper** | macOS | [goodsnooze.gumroad.com/l/macwhisper](https://goodsnooze.gumroad.com/l/macwhisper) |
| **Wispr Flow** | macOS/Windows | [wisprflow.ai](https://wisprflow.ai/) |

**Testez d'abord :** Faites dicter à votre enfant "Bonjour, je veux créer un jeu sur les dinosaures" et vérifiez que cela transcrit correctement.

### 💻 Ce Dont Vous Avez Besoin

| Prérequis | Comment l'Obtenir |
|-----------|-------------------|
| **VS Code** | Téléchargement gratuit : [code.visualstudio.com](https://code.visualstudio.com) |
| **GitHub Copilot** | Nécessite un abonnement. Installez l'extension "GitHub Copilot" dans VS Code. |
| **Ce projet** | Clonez ou téléchargez ce dépôt |

### 🧪 Vérifiez Votre Configuration

1. Ouvrez VS Code
2. Ouvrez le panneau GitHub Copilot Chat (cliquez sur l'icône Copilot dans la barre latérale)
3. Tapez : `Bonjour, peux-tu m'aider ?`
4. Si Copilot répond, vous êtes prêt ! ✅

---

## 📐 Le Framework PROSE : Pourquoi Ce Lab Fonctionne

Ce lab est construit sur **PROSE** — un standard émergent pour le développement AI-native qui rend les systèmes IA fiables et maintenables :

| Principe | Ce Que Ça Veut Dire | Comment On L'Applique |
|----------|---------------------|----------------------|
| **P**rogressive Disclosure | Révéler la complexité graduellement | Les enfants apprennent un rôle à la fois |
| **R**educed Scope | Chaque partie fait UNE chose bien | Chaque agent a un travail ciblé |
| **O**rchestrated Composition | Les parties travaillent ensemble en séquence | Architecte → Artiste → Développeur |
| **S**coped Boundaries | Limites claires sur ce que chaque partie peut faire | Les agents ont des règles PEUT / NE PEUT PAS |
| **E**xplicit Hierarchy | Structure et ordre clairs | Workflow défini avec livrables |

🔗 **En savoir plus** : [Spécification PROSE — Awesome AI-Native](https://danielmeppiel.github.io/awesome-ai-native/)

> 💡 **Pourquoi c'est important** : Vos enfants apprennent les meilleures pratiques de l'industrie pour le développement IA — les mêmes principes utilisés par les équipes professionnelles qui construisent des produits IA.

---

## 🏠 La Grande Idée : Construire une Équipe

### L'Analogie de la Maison (Expliquez Ça à Vos Enfants !)

> "Quand on construit une **maison**, on a besoin de différents spécialistes :
> - 🏛️ **L'architecte** dessine les plans — mais ne peint pas les murs
> - 🎨 **Le décorateur** choisit les couleurs — mais ne construit pas les murs
> - 🔨 **Le maçon** construit — mais suit les plans de l'architecte
>
> Pour un **jeu vidéo**, c'est pareil !
> - 🏛️ **L'Architecte de Jeu** → conçoit les règles (mais ne code pas)
> - 🎨 **L'Artiste** → crée les dessins (mais ne change pas les règles)
> - 💻 **Le Développeur** → écrit le code (mais utilise les règles de l'architecte et les dessins de l'artiste)
>
> Et TOI, tu es le **Chef de Projet** — tu décides quand chaque spécialiste travaille !"

### Pourquoi C'est Important

Cela enseigne aux enfants que :
1. **Personne ne peut tout faire** — même l'IA doit se spécialiser
2. **Les spécialistes dépendent les uns des autres** — l'artiste a besoin du travail de l'architecte d'abord
3. **Quelqu'un doit orchestrer** — vous gérez quand chaque rôle travaille
4. **L'ordre crée la qualité** — planifier → designer → construire = succès

---

## 🎯 Guide du Lab Étape par Étape

### Étape 1 : Créer Votre Équipe IA (Vos Enfants Construisent les Agents !)

**Qu'est-ce qu'un agent ?** Les agents sont des assistants IA personnalisés avec des rôles et règles spécifiques. Vous allez créer 3 agents ensemble.

#### Comment Créer un Agent dans VS Code :

1. Ouvrez GitHub Copilot Chat
2. Dites (ou tapez) : 
   ```
   Aide-moi à créer un agent personnalisé pour un architecte de jeu.
   Cet agent doit concevoir les règles du jeu mais NE PAS écrire de code.
   ```
3. Copilot vous guidera pour créer un fichier dans `.github/agents/`
4. Répétez pour les agents Artiste et Développeur

#### L'Activité de Réflexion (Demandez à Votre Enfant) :

Avant de créer chaque agent, discutez :
- **"Que devrait avoir le DROIT de faire l'architecte ?"** → Concevoir les règles, écrire les specs
- **"Que ne devrait-il PAS faire ?"** → Écrire du code, créer de l'art
- **"De quoi l'artiste a besoin AVANT de pouvoir commencer ?"** → Le design de jeu de l'architecte !
- **"Le développeur peut-il changer les règles du jeu ?"** → Non ! Il suit le plan de l'architecte.

> 💡 **Conseil parent** : Cette discussion EST l'apprentissage ! Les enfants réalisent que des limites claires font mieux fonctionner les équipes.

#### Vos 3 Agents :

| Agent | Rôle | PEUT Faire | NE PEUT PAS Faire |
|-------|------|------------|-------------------|
| `@architecte-jeu` | Concepteur de Jeu | Concevoir règles, écrire specs | Écrire code, créer art |
| `@artiste-jeu` | Artiste Visuel | Créer art, designer style | Écrire code, changer règles |
| `@developpeur-jeu` | Développeur | Écrire code, construire jeu | Changer règles, créer art |

Les fichiers d'agents sont stockés dans : `.github/agents/`

---

### Étape 2 : Devenir le Chef de Projet — Orchestrez Votre Équipe ! 🎬

Maintenant vient la partie fun. Votre enfant devient le **Chef de Projet** qui orchestre les spécialistes dans le bon ordre.

> 💡 **Apprentissage clé** : "On ne peut pas construire avant de planifier. On ne peut pas coder avant de designer. L'ORDRE COMPTE."

#### Phase 1 : L'Architecte Conçoit le Jeu (30 min)

**Ouvrez Copilot Chat et dites :**
```
@architecte-jeu Je voudrais créer un jeu pour mon petit frère qui a 6 ans.
Il aime les animaux et les trésors.
```

**Ce qui se passe :**
- L'architecte pose des questions (âge, préférences, type de jeu)
- L'architecte crée un **document de spécifications**
- Les specs décrivent les règles, le score, les personnages — mais PAS de code encore !

✅ **Livrable** : `docs/jeux/{nom-du-jeu}.specs.md`

> 💡 **Demandez à votre enfant** : "Pourquoi penses-tu qu'on doit écrire toutes les règles AVANT de commencer à dessiner ou coder ?"

---

#### Phase 2 : L'Artiste Crée le Look (30 min)

**Maintenant dites :**
```
@artiste-jeu On a un jeu qui s'appelle "Le Voleur Malin".
Peux-tu regarder les specs et créer les personnages ?
```

**Ce qui se passe :**
- L'artiste **lit d'abord les specs de l'architecte** (il dépend du plan !)
- L'artiste propose couleurs, style, designs de personnages
- L'artiste crée les assets visuels (fichiers SVG)

✅ **Livrables** : 
- `assets/{nom-du-jeu}/style-guide.md`
- `assets/{nom-du-jeu}/sprites/*.svg`

> 💡 **Demandez à votre enfant** : "L'artiste a lu les specs. Pourquoi ? Que se passerait-il si l'artiste commençait à dessiner sans connaître les règles du jeu ?"

---

#### Phase 3 : Le Développeur Construit le Jeu (45 min)

**Finalement dites :**
```
@developpeur-jeu Il y a un jeu "Le Voleur Malin" avec des specs et des assets.
Peux-tu commencer à le développer ?
```

**Ce qui se passe :**
- Le développeur **lit les specs ET utilise les assets de l'artiste**
- Le développeur écrit du code qui suit les règles de l'architecte
- Le développeur n'invente pas de nouvelles règles — il implémente ce qui a été planifié

✅ **Livrable** : `src/{nom-du-jeu}/` avec un jeu fonctionnel

> 💡 **Demandez à votre enfant** : "Le développeur peut-il changer les règles du jeu ? Pourquoi oui ou non ?" (Réponse : Non ! Il suit le plan de l'architecte. Si les règles doivent changer, c'est l'architecte qui décide.)

---

#### Phase 4 : Jouez à Votre Jeu ! 🎉

```bash
npm run dev
```

Ouvrez le navigateur et testez le jeu ensemble !

**Célébrez le processus :**
> "Regarde ce qu'on a fait ! D'abord on a PLANIFIÉ, puis on a DESIGNÉ, puis on a CONSTRUIT. Et maintenant ça marche !"

---

## 🔄 Le Flux d'Orchestration

Ce visuel montre comment l'équipe travaille ensemble :

```
┌─────────────────────────────────────────────────────────────────────┐
│                     👨‍👩‍👧 TOI : Chef de Projet                         │
│              "Je décide QUAND chaque spécialiste travaille"         │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│  Étape 1 : 🏛️ ARCHITECTE                                            │
│  • Pose des questions sur le jeu                                    │
│  • Crée le document de spécifications                               │
│  • SORTIE : docs/jeux/nom-du-jeu.specs.md                          │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼ (specs prêtes)
┌─────────────────────────────────────────────────────────────────────┐
│  Étape 2 : 🎨 ARTISTE                                               │
│  • LIT les specs de l'architecte                                    │
│  • Crée les visuels correspondant aux specs                        │
│  • SORTIE : assets/nom-du-jeu/style-guide.md + sprites/            │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼ (specs + art prêts)
┌─────────────────────────────────────────────────────────────────────┐
│  Étape 3 : 💻 DÉVELOPPEUR                                           │
│  • LIT les specs ET utilise les assets                              │
│  • Code le jeu en suivant le plan                                   │
│  • SORTIE : src/nom-du-jeu/ (jeu fonctionnel !)                    │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                            🎮 JOUEZ AU JEU !
```

---

## 📂 Structure du Projet

Après avoir fait le lab, votre projet aura cette structure :

```
jeux-enfants/
├── .github/
│   └── agents/                    # 🤖 Vos 3 spécialistes IA
│       ├── architecte-jeu.agent.md    ← Concepteur de Jeu
│       ├── artiste-jeu.agent.md       ← Artiste Visuel
│       └── developpeur-jeu.agent.md   ← Constructeur de Code
│
├── docs/
│   └── jeux/                      # 📋 Livrables de l'Architecte
│       └── le-voleur-malin.specs.md   ← Spécifications du jeu
│
├── assets/
│   └── le-voleur-malin/           # 🎨 Livrables de l'Artiste
│       ├── style-guide.md             ← Couleurs, règles de style
│       └── sprites/                   ← Assets visuels
│
├── src/
│   └── le-voleur-malin/           # 💻 Livrables du Développeur
│       ├── index.html                 ← Le jeu !
│       └── scripts/                   ← Code du jeu
│
└── README.md                      # 📚 Ce guide
```

---

## 🎮 Exemple Complet : Le Voleur Malin

Ce projet inclut un exemple complet que vous pouvez étudier et jouer :

**Le Concept** : Un raton laveur malicieux collecte des trésors en évitant la police !

| Phase | Qui l'a Créé | Ce Qu'il a Produit |
|-------|--------------|-------------------|
| Planification | 🏛️ Architecte | [le-voleur-malin.specs.md](docs/jeux/le-voleur-malin.specs.md) |
| Design | 🎨 Artiste | [style-guide.md](assets/le-voleur-malin/style-guide.md) |
| Construction | 💻 Développeur | [src/le-voleur-malin/](src/le-voleur-malin/) |

📖 **[Voir la transcription complète de la conversation](../examples/exemple-conversation.md)** — voyez comment une famille a piloté toute la session de lab avec un langage naturel !

**Jouez maintenant :**
```bash
npm install
npm run voleur
# Ouvrir http://localhost:3000
```

---

## 👨‍👩‍👧‍👦 Guide des Parents : Réussir ce Lab

### Avant le Lab

| Checklist | Pourquoi C'est Important |
|-----------|-------------------------|
| ✅ Installer la dictée vocale | Les enfants peuvent parler au lieu de taper |
| ✅ Tester GitHub Copilot | S'assurer qu'il répond |
| ✅ Lire ce guide | Savoir ce qui va se passer |
| ✅ Bloquer 2-3 heures | Ne pas se presser — profitez du processus ! |

### Pendant le Lab : Questions à Poser

**Après chaque phase, discutez :**

| Phase | Posez Cette Question | Ils Apprennent Ceci |
|-------|---------------------|---------------------|
| Architecte | "Pourquoi a-t-on tout écrit avant de dessiner ?" | Planifier évite les erreurs |
| Artiste | "Pourquoi l'artiste a lu les specs d'abord ?" | On a besoin des exigences avant de créer |
| Développeur | "Le développeur peut-il changer les règles ?" | Suivre le plan ; les changements retournent à l'architecte |

### Après le Lab : Questions de Débriefing

1. **"Qu'est-ce que l'IA a bien fait ?"**
2. **"Qu'est-ce qu'elle n'a pas compris au début ? Comment on a corrigé ?"**
3. **"Pourquoi un seul agent ne pouvait pas tout faire ?"**
4. **"Que se serait-il passé si on avait commencé par le code au lieu de planifier ?"**

### Les Moments "Aha" à Souligner

| Insight | Comment le Formuler |
|---------|---------------------|
| Spécialisation | "Tout comme les médecins, enseignants et chefs ont des compétences différentes, les agents IA ont des métiers différents !" |
| Dépendances | "L'artiste ne pouvait pas commencer avant que l'architecte finisse — chaque étape dépend de la précédente." |
| Orchestration | "TU étais le chef de projet ! Tu as décidé quand chaque robot helper travaillerait." |
| Communication claire | "Quand l'IA ne comprenait pas, on a mieux expliqué. C'est ce que font les bons communicants !" |

---

## 🚀 Idées de Jeux pour Votre Prochain Lab

Une fois un jeu terminé, essayez ceux-ci :

| Jeu | Type | Âge | Ce que les Enfants Apprennent |
|-----|------|-----|------------------------------|
| Memory des Animaux | Mémoire | 4-6 | Règles simples, association |
| Labyrinthe Magique | Puzzle | 6-8 | Pathfinding, obstacles |
| Course de Voitures | Arcade | 7-10 | Vitesse, compétition |
| Quiz des Capitales | Éducatif | 8-12 | Géographie, score |
| Snake Coloré | Arcade | 8-10 | Croissance, collision |
| Tower Defense | Stratégie | 10-12 | Vagues, améliorations, économie |

**Suivez toujours le même processus :**
1. 🏛️ L'Architecte conçoit → 2. 🎨 L'Artiste dessine → 3. 💻 Le Développeur code

---

## 📝 Envie de Créer de Nouveaux Agents ?

Demandez à GitHub Copilot de vous aider :

```
Aide-moi à créer un agent personnalisé pour un compositeur de musique de jeu.
Cet agent doit créer des descriptions sonores et des guides audio
mais NE PAS écrire de code ou modifier les règles du jeu.
```

**Idées de nouveaux spécialistes :**
- 🎵 **Compositeur** — Crée musique et effets sonores
- ✍️ **Scénariste** — Écrit histoire et dialogues
- 🧪 **Testeur** — Trouve les bugs et fait des rapports
- 📢 **Marketing** — Crée descriptions et icônes de jeu

---

## 🏆 Ce que Vos Enfants Retiendront

À la fin de ce lab, vos enfants comprendront :

| Compétence | ✅ Appris |
|------------|-----------|
| Le travail complexe nécessite des rôles spécialisés | Différents experts pour différentes tâches |
| Les équipes ont besoin d'orchestration | Un chef de projet coordonne le travail |
| L'ordre et la séquence comptent | Planifier → Designer → Construire |
| La communication claire est clé | L'IA (et les gens) ont besoin d'instructions claires |
| On peut construire de vraies choses avec l'IA | De l'idée au jeu fonctionnel ! |

---

## 📜 Licence

MIT - Utilisez, modifiez, partagez librement !

---

Créé avec ❤️ par une famille qui aime apprendre ensemble.
