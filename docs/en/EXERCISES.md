# 🧩 Exercises and Challenges

> Activities to deepen learning after the workshop

🇫🇷 **[Version française](../fr/EXERCICES.md)**

---

## 🏁 Beginner Level

### Exercise 1: Modify the Rules

**Objective**: Understand the impact of specifications on the game

**Instructions**:
Use `@architecte-jeu` to modify a rule in Le Voleur Malin.

```
@architecte-jeu I want to modify Le Voleur Malin. 
Instead of 3 lives, the player would have 5 lives. 
Can you update the specs?
```

**Reflection questions**:
- Will the developer need to modify the code?
- Where exactly in the specs is this change?

---

### Exercise 2: Add a Character

**Objective**: Understand the artist workflow

**Instructions**:
Ask `@artiste-jeu` to create a new character.

```
@artiste-jeu For Le Voleur Malin, I'd like to add a cat 
that helps the thief. Can you draw it following the style-guide?
```

**Verification**:
- Does the cat respect the style-guide colors?
- Is it in the right format (SVG)?

---

### Exercise 3: Debug a Problem

**Objective**: Understand the developer's role

**Instructions**:
Imagine a bug and ask the developer to fix it.

```
@developpeur-jeu In Le Voleur Malin, when all coins are collected, 
the exit doesn't open. Can you check the code?
```

**Discussion**:
- How did the developer find the problem?
- Which part of the code was affected?

---

## 🎯 Intermediate Level

### Challenge 1: Create a New Level

**Objective**: Combine all 3 roles for a complete task

**Steps**:

1. **Architect**: Design level 6 rules
   ```
   @architecte-jeu Add a level 6 to Le Voleur Malin. 
   This level takes place in a zoo with animals that block the path.
   ```

2. **Artist**: Create new assets
   ```
   @artiste-jeu We're adding a zoo level. Create the necessary tiles and 
   sprites: sleeping lion, monkey, cage, grass.
   ```

3. **Developer**: Implement the level
   ```
   @developpeur-jeu Implement level 6 (zoo) using 
   the specs and new assets.
   ```

**Success criteria**:
- [ ] Level 6 specs are documented
- [ ] Assets are in the correct folder
- [ ] Level is playable

---

### Challenge 2: Create a Complete Mini-Game

**Objective**: Complete the entire process from A to Z

**Game to create**: Animal Memory (simple)

**Constraints**:
- Only 8 cards (4 pairs)
- No timer
- For ages 4-6

**Detailed steps**:

| Phase | Agent | Estimated time |
|-------|-------|----------------|
| Design | @architecte-jeu | 15 min |
| Art | @artiste-jeu | 20 min |
| Code | @developpeur-jeu | 30 min |

---

### Challenge 3: Improve an Agent

**Objective**: Understand how agents are configured

**Instructions**:
Read the `architecte-jeu.agent.md` file and propose an improvement.

**Ideas**:
- Add an "idea testing" phase before specs
- Ask to create a game diagram
- Add examples of similar games

**Modify the file** and test if the agent behaves differently.

---

## 🚀 Advanced Level

### Project 1: Create a New Agent

**Objective**: Master agent structure

**Agent to create**: The Composer

Create `.github/agents/composer-jeu.agent.md` that:
- Consults both specs AND style-guide
- Proposes a sound atmosphere
- Describes necessary sound effects
- Creates an `audio-guide.md` file

**Starter template**:
```markdown
---
name: composer-jeu
description: Music and sound composer for kids games
tools:
  - read_file
  - create_file
---

# Game Composer for Kids

## Scope
...
```

---

### Project 2: Cross Documentation

**Objective**: Understand dependencies between agents

**Exercise**:
Create a diagram showing:
- Which files each agent reads
- Which files each agent creates
- Dependencies between agents

**Expected format**:
```
ARCHITECT
  └── Creates: docs/jeux/*.specs.md
  
ARTIST  
  ├── Reads: docs/jeux/*.specs.md
  └── Creates: assets/*/style-guide.md, assets/*/sprites/*

DEVELOPER
  ├── Reads: docs/jeux/*.specs.md
  ├── Reads: assets/*/style-guide.md
  └── Creates: src/*/
```

---

### Project 3: Kids Teaching Kids

**Objective**: Teach others what you've learned

**Instructions**:
A child who's done the workshop facilitates a mini-workshop for another child.

**Success criteria**:
- [ ] The house analogy is explained
- [ ] All 3 agents are presented
- [ ] At least one agent interaction is done
- [ ] The "student" child understands the process

---

## 🏆 Creative Challenges

### Challenge: The Simplest Game

Create the simplest possible game that's still fun.
- Maximum 1 page of specs
- Maximum 3 sprites
- Maximum 50 lines of code

---

### Challenge: The Surprise Theme

Draw a random theme from:
- 🌊 Ocean
- 🚀 Space
- 🎪 Circus
- 🌲 Forest
- 🏰 Castle

And create a game on that theme in 1 hour!

---

### Challenge: The Crazy Agent

Temporarily modify an agent to give it a personality:
- The architect who loves dinosaurs (always suggests dinos)
- The artist who only wants to use one color
- The developer who comments everything with jokes

**Learning objective**: Understand that instructions influence AI behavior.

---

## 📝 Self-Evaluation Grid

After each exercise, evaluate yourself:

| Criterion | 😕 | 😐 | 😊 | 🌟 |
|-----------|-----|-----|-----|-----|
| I understood what the agent does | | | | |
| I formulated clear instructions | | | | |
| I got the desired result | | | | |
| I learned something new | | | | |
| I could explain to someone | | | | |

---

*Happy exploring!* 🎮
