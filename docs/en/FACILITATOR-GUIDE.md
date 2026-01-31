# 📋 Facilitator Guide

> Detailed guide for running a "Game Creation with AI" workshop

🇫🇷 **[Version française](../fr/GUIDE-ANIMATEUR.md)**

---

## ⚠️ CRITICAL: Voice Dictation Setup

> **Before ANY workshop with children under 10, install voice dictation software!**

This is the #1 factor for success with young children. Without it, kids struggle with typing and lose interest.

| Tool | Platform | Link |
|------|----------|------|
| **MacWhisper** | macOS | [goodsnooze.gumroad.com/l/macwhisper](https://goodsnooze.gumroad.com/l/macwhisper) |
| **Wispr Flow** | macOS/Windows | [wisprflow.ai](https://wisprflow.ai/) |

**Test before the workshop:** Have the child practice speaking to dictate a simple sentence. Ensure the microphone works and transcription is accurate.

---

## 🎯 Workshop Overview

| Element | Detail |
|---------|--------|
| **Total duration** | 2h30 to 3h (with breaks) |
| **Recommended age** | 8-12 years |
| **Participants** | 3-6 children ideally |
| **Equipment** | 1 computer with VS Code + GitHub Copilot |
| **Facilitator** | 1 adult familiar with VS Code |

---

## ⏱️ Typical Workshop Schedule

### Module 1: Introduction (20 min)

#### 1.1 The House Analogy (10 min)

Explain with visuals or drawings:

```
🏠 BUILDING A HOUSE              🎮 CREATING A VIDEO GAME
─────────────────────            ──────────────────────────
🏛️ Architect → blueprints       🏛️ Architect → rules
🎨 Decorator → colors            🎨 Artist → drawings  
🔨 Builder → construction        💻 Developer → code
```

**Questions to ask:**
- "Can the builder start before the architect?"
- "Can the decorator choose colors without knowing the house size?"

#### 1.2 Presenting AI Agents (10 min)

Show the three agent files in VS Code:
- Explain that these are "instructions" for the AI
- Each agent has a "profession" with rules

**Activity**: Read the beginning of each agent file together.

---

### Module 2: Architect Session (30 min)

#### Objective
Produce the specifications document for a new game.

#### Process

1. **Collective brainstorm (10 min)**
   - "What type of game do you want to create?"
   - "For what age?"
   - "What theme?"

2. **Interaction with the architect (15 min)**
   ```
   @architecte-jeu We want to create a [type] game 
   for [age] year old children. The theme would be [theme].
   ```

3. **Validate the specs (5 min)**
   - Read the produced document together
   - Ask: "Is this what we wanted?"

#### Learning Points
- The AI asks questions → it needs information
- The AI asks for validation → it doesn't decide alone
- The produced document will serve the other agents

---

### Module 3: Artist Session (30 min)

#### Objective
Create the style guide and basic visuals.

#### Process

1. **Recall the specs (5 min)**
   - "What did the architect decide?"
   - "What does the artist need?"

2. **Interaction with the artist (20 min)**
   ```
   @artiste-jeu We have the specifications for the game [name]. 
   Can you propose an artistic direction?
   ```

3. **Review visuals (5 min)**
   - Look at proposed colors
   - See character descriptions

#### Learning Points
- The artist CONSULTS the architect's specs
- Artistic choices are justified
- Visual coherence is important

---

### BREAK (15 min)

☕ Snack break recommended!

---

### Module 4: Developer Session (45 min)

#### Objective
Implement a playable version of the game.

#### Process

1. **Preparation (5 min)**
   - Show both specs AND assets
   - "The developer needs both!"

2. **Implementation (35 min)**
   ```
   @developpeur-jeu We have specs in docs/jeux/[name].specs.md 
   and assets in assets/[name]/. Can you implement the game?
   ```

3. **Test the game (5 min)**
   ```bash
   npm run dev
   ```
   - Play together!
   - Note what works and what's missing

#### Learning Points
- Code is created from specs
- The developer asks if something is missing
- Programming is translating rules into code

---

### Module 5: Debriefing (20 min)

#### 5.1 Group Discussion (15 min)

**Reflection questions:**

1. **About the process**
   - "Why did we do things in this order?"
   - "What would have happened if we started with code?"

2. **About AI**
   - "What did the AI do well?"
   - "What didn't it understand the first time?"
   - "How did you help it understand better?"

3. **About teamwork**
   - "Why did each agent need the others' work?"
   - "Is it like a real team?"

#### 5.2 What We Learned (5 min)

Have children list what they learned. Expected examples:
- AI needs clear instructions
- Each profession has its role
- We plan before doing
- The team produces a better result

---

## 🎨 Workshop Variations

### Short Workshop (1h30)

- Use "Le Voleur Malin" game as an already-done example
- Focus on ONE module with interaction
- More time for debriefing

### Multi-Session Workshop (3 x 1h)

- **Session 1**: Introduction + Architect
- **Session 2**: Artist + Developer start
- **Session 3**: Finalization + Testing + Debriefing

### Competitive Workshop

- 2-3 groups design different games
- Each group presents their game to others
- Vote for favorite game (criteria: originality, fun, visuals)

---

## 👥 Role Organization

### With 3 Children
Each child "becomes" the agent during their phase:
- Child A → Architect
- Child B → Artist  
- Child C → Developer

### With 6 Children
Teams of 2 per phase:
- Archi Team (2) → discuss and decide together
- Art Team (2) → propose ideas
- Dev Team (2) → test and comment

### With 1 Child
The child plays all 3 roles successively.
Emphasize the "hat change" at each phase.

---

## ⚠️ Points of Attention

### Common Problems

| Problem | Solution |
|---------|----------|
| AI generates too much code at once | Ask to do "step by step" |
| Children want to code immediately | Remind them of the house analogy |
| AI doesn't understand | Rephrase more simply |
| Code errors | It's normal! Show that debugging is part of the job |
| One child monopolizes | Alternate who types/who dictates |

### Key Messages to Repeat

- "AI is a tool, you are the creators"
- "If AI doesn't understand, we can explain better"
- "Plan first, code later"
- "Every mistake teaches us something"

---

## 📊 Workshop Evaluation

### For Children

Questions at the end:
1. "What did you like most about the workshop?" (1-5 ⭐)
2. "Do you understand how AI works?" (😊/😐/😕)
3. "Would you like to create another game?"

### For Facilitator

Checklist:
- [ ] All children participated actively
- [ ] The specialized agent concept is understood
- [ ] The phase order is understood (archi → art → dev)
- [ ] Children rephrased at least once
- [ ] A playable game was produced
- [ ] Debriefing generated reflections

---

## 🔧 Technical Preparation

### Before the Workshop

```bash
# Clone the project
git clone [repo-url] kids-games
cd kids-games

# Install dependencies
npm install

# Verify the example game works
npm run voleur
```

### Equipment Checklist

- [ ] VS Code installed and up to date
- [ ] GitHub Copilot extension activated
- [ ] **🎙️ Voice dictation software installed and tested** (MacWhisper or Wispr Flow)
- [ ] Project cloned and functional
- [ ] Web browser open
- [ ] Optional: projector or large screen

---

## 📚 Additional Resources

### Going Further

- Create new agents (composer, tester...)
- Modify existing agents with children
- Export the game as a mobile-playable PWA

### Recommended Reading

- GitHub Copilot Agents documentation
- Game design guides for children
- Creative coding pedagogy

---

*Document created to accompany the "Kids Games" learning lab*
