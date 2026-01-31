# 🎮 Kids Games - AI Learning Lab

> **Learn AI as a family by creating video games**

🇫🇷 **[Version française](docs/fr/README.md)**

---

## 🌟 What Your Children Will Learn

This isn't just about coding — it's about **life skills** that matter in any profession:

| Life Skill | What They Experience |
|------------|---------------------|
| **Complex projects need specialized roles** | One person can't do everything well. Big projects need an architect, an artist, AND a developer — each with unique skills. |
| **Teams need orchestration** | Having great specialists isn't enough. Someone must coordinate them — like a **project manager** who says "first we plan, then we design, then we build." |
| **Order matters** | You can't build a house before drawing the blueprints. You can't code a game before knowing the rules. **Planning comes first.** |
| **Clear communication is everything** | AI (like people) needs clear instructions. If it doesn't understand, we rephrase — a skill for life. |
| **Seeing your ideas come to life** | From imagination → to plan → to art → to working game. The magic of creation! |

> 💡 **For parents**: This lab teaches the same principles used in professional software development, architecture, and any complex creative project. Your kids are learning how real teams work.

---

## ⚠️ BEFORE YOU START: Essential Setup

### 🎙️ Voice Dictation (CRITICAL for kids under 10!)

Young children struggle with typing. **Voice dictation transforms the experience** — kids just TALK, and the computer types for them.

| Tool | Platform | Link |
|------|----------|------|
| **MacWhisper** | macOS | [goodsnooze.gumroad.com/l/macwhisper](https://goodsnooze.gumroad.com/l/macwhisper) |
| **Wispr Flow** | macOS/Windows | [wisprflow.ai](https://wisprflow.ai/) |

**Test it first:** Have your child dictate "Hello, I want to create a game about dinosaurs" and verify it transcribes correctly.

### 💻 What You Need

| Requirement | How to Get It |
|-------------|---------------|
| **VS Code** | Free download: [code.visualstudio.com](https://code.visualstudio.com) |
| **GitHub Copilot** | Requires subscription. Install the "GitHub Copilot" extension in VS Code. |
| **This project** | Clone or download this repository |

### 🧪 Verify Your Setup

1. Open VS Code
2. Open the GitHub Copilot Chat panel (click the Copilot icon in the sidebar)
3. Type: `Hello, can you help me?`
4. If Copilot responds, you're ready! ✅

---

## 📐 The PROSE Framework: Why This Lab Works

This lab is built on **PROSE** — an emerging standard for AI-native development that makes AI systems reliable and maintainable:

| Principle | What It Means | How We Apply It |
|-----------|---------------|-----------------|
| **P**rogressive Disclosure | Reveal complexity gradually | Kids learn one role at a time |
| **R**educed Scope | Each part does ONE thing well | Each agent has a focused job |
| **O**rchestrated Composition | Parts work together in sequence | Architect → Artist → Developer |
| **S**coped Boundaries | Clear limits on what each part can do | Agents have CAN / CANNOT rules |
| **E**xplicit Hierarchy | Clear structure and order | Defined workflow with deliverables |

🔗 **Learn more**: [PROSE Specification — Awesome AI-Native](https://danielmeppiel.github.io/awesome-ai-native/)

> 💡 **Why this matters**: Your children are learning industry best practices for AI development — the same principles used by professional teams building AI products.

---

## 🏠 The Big Idea: Building a Team

### The House Analogy (Explain This to Your Kids!)

> "When we build a **house**, we need different specialists:
> - 🏛️ **The architect** draws the blueprints — but doesn't paint walls
> - 🎨 **The decorator** chooses colors — but doesn't build walls  
> - 🔨 **The builder** constructs — but follows the architect's plans
>
> For a **video game**, it's the same!
> - 🏛️ **Game Architect** → designs the rules (but doesn't code)
> - 🎨 **Artist** → creates the drawings (but doesn't change rules)
> - 💻 **Developer** → writes the code (but uses the architect's rules and artist's drawings)
>
> And YOU are the **Project Manager** — you decide when each specialist works!"

### Why This Matters

This teaches children that:
1. **No one can do everything** — even AI needs to specialize
2. **Specialists depend on each other** — the artist needs the architect's work first
3. **Someone must orchestrate** — you manage when each role works
4. **Order creates quality** — plan → design → build = success

---

## 🎯 Step-by-Step Lab Guide

### Step 1: Create Your AI Team (Your Kids Build the Agents!)

**What are agents?** Agents are custom AI assistants with specific roles and rules. You'll create 3 agents together.

#### How to Create an Agent in VS Code:

1. Open GitHub Copilot Chat
2. Say (or type): 
   ```
   Help me create a custom agent for a game architect. 
   This agent should design game rules but NOT write code.
   ```
3. Copilot will guide you to create a file in `.github/agents/`
4. Repeat for Artist and Developer agents

#### The Thinking Activity (Ask Your Child):

Before creating each agent, discuss:
- **"What should the architect be ALLOWED to do?"** → Design rules, write specs
- **"What should the architect NOT do?"** → Write code, create art
- **"What does the artist need BEFORE they can start?"** → The architect's game design!
- **"Can the developer change the game rules?"** → No! They follow the architect's plan.

> 💡 **Parent tip**: This discussion is the learning! Kids realize that clear boundaries make teams work better.

#### Your 3 Agents:

| Agent | Role | CAN Do | CANNOT Do |
|-------|------|--------|-----------|
| `@architecte-jeu` | Game Designer | Design rules, write specs | Write code, create art |
| `@artiste-jeu` | Visual Artist | Create art, design style | Write code, change rules |
| `@developpeur-jeu` | Developer | Write code, build game | Change rules, create art |

Agent files are stored in: `.github/agents/`

### Step 3: Design a Game (Architect Session - 30 min)

One child uses `@architecte-jeu` to design the game:

---

### Step 2: Be the Project Manager — Orchestrate Your Team! 🎬

Now comes the fun part. Your child becomes the **Project Manager** who orchestrates the specialists in the right order.

> 💡 **Key learning**: "You can't build before you plan. You can't code before you design. ORDER MATTERS."

#### Phase 1: The Architect Designs the Game (30 min)

**Open Copilot Chat and say:**
```
@architecte-jeu I want to create a game for my little brother who is 6 years old.
He likes animals and treasures.
```

**What happens:**
- The architect asks questions (age, preferences, game type)
- The architect creates a **specifications document**
- The specs describe rules, scoring, characters — but NO code yet!

✅ **Deliverable**: `docs/jeux/{game-name}.specs.md`

> 💡 **Ask your child**: "Why do you think we need to write down all the rules BEFORE we start drawing or coding?"

---

#### Phase 2: The Artist Creates the Look (30 min)

**Now say:**
```
@artiste-jeu We have a game called "Le Voleur Malin".
Can you look at the specs and create the characters?
```

**What happens:**
- The artist **reads the architect's specs first** (they depend on the plan!)
- The artist proposes colors, style, character designs
- The artist creates visual assets (SVG files)

✅ **Deliverables**: 
- `assets/{game-name}/style-guide.md`
- `assets/{game-name}/sprites/*.svg`

> 💡 **Ask your child**: "The artist read the specs. Why? What would happen if the artist started drawing without knowing the game rules?"

---

#### Phase 3: The Developer Builds the Game (45 min)

**Finally say:**
```
@developpeur-jeu There's a game "Le Voleur Malin" with specs and assets.
Can you start developing it?
```

**What happens:**
- The developer **reads the specs AND uses the artist's assets**
- The developer writes code that follows the architect's rules
- The developer doesn't invent new rules — they implement what was planned

✅ **Deliverable**: `src/{game-name}/` with a working game

> 💡 **Ask your child**: "Can the developer change the game rules? Why or why not?" (Answer: No! They follow the architect's plan. If rules need changing, the architect decides.)

---

#### Phase 4: Play Your Game! 🎉

```bash
npm run dev
```

Open the browser and test the game together!

**Celebrate the process:**
> "Look what we made! First we PLANNED it, then we DESIGNED it, then we BUILT it. And now it works!"

---

## 🔄 The Orchestration Flow

This visual shows how the team works together:

```
┌─────────────────────────────────────────────────────────────────────┐
│                         👨‍👩‍👧 YOU: Project Manager                        │
│              "I decide WHEN each specialist works"                  │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│  Step 1: 🏛️ ARCHITECT                                               │
│  • Asks questions about the game                                    │
│  • Creates specifications document                                  │
│  • OUTPUT: docs/jeux/game-name.specs.md                            │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼ (specs ready)
┌─────────────────────────────────────────────────────────────────────┐
│  Step 2: 🎨 ARTIST                                                  │
│  • READS the architect's specs                                      │
│  • Creates visuals that match the specs                            │
│  • OUTPUT: assets/game-name/style-guide.md + sprites/              │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼ (specs + art ready)
┌─────────────────────────────────────────────────────────────────────┐
│  Step 3: 💻 DEVELOPER                                               │
│  • READS specs AND uses art assets                                  │
│  • Codes the game following the plan                               │
│  • OUTPUT: src/game-name/ (working game!)                          │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                            🎮 PLAY THE GAME!
```

---

## 📂 Project Structure

After running the lab, your project will have this structure:

```
kids-games/
├── .github/
│   └── agents/                    # 🤖 Your 3 AI specialists
│       ├── architecte-jeu.agent.md    ← Game Designer
│       ├── artiste-jeu.agent.md       ← Visual Artist
│       └── developpeur-jeu.agent.md   ← Code Builder
│
├── docs/
│   └── jeux/                      # 📋 Architect's deliverables
│       └── le-voleur-malin.specs.md   ← Game specifications
│
├── assets/
│   └── le-voleur-malin/           # 🎨 Artist's deliverables
│       ├── style-guide.md             ← Colors, style rules
│       └── sprites/                   ← Visual assets
│
├── src/
│   └── le-voleur-malin/           # 💻 Developer's deliverables
│       ├── index.html                 ← The game!
│       └── scripts/                   ← Game code
│
└── README.md                      # 📚 This guide
```

---

## 🎮 Complete Example: Le Voleur Malin (The Clever Thief)

This project includes a complete example you can study and play:

**The Concept**: A mischievous raccoon collects treasures while avoiding police!

| Phase | Who Created It | What They Produced |
|-------|----------------|-------------------|
| Planning | 🏛️ Architect | [le-voleur-malin.specs.md](docs/jeux/le-voleur-malin.specs.md) |
| Design | 🎨 Artist | [style-guide.md](assets/le-voleur-malin/style-guide.md) |
| Building | 💻 Developer | [src/le-voleur-malin/](src/le-voleur-malin/) |

**Play it now:**
```bash
npm install
npm run voleur
# Open http://localhost:3000
```

---

## 👨‍👩‍👧‍👦 Parent's Guide: Making This Lab Successful

### Before the Lab

| Checklist | Why It Matters |
|-----------|---------------|
| ✅ Install voice dictation | Kids can talk instead of type |
| ✅ Test GitHub Copilot | Make sure it responds |
| ✅ Read this guide | Know what's coming |
| ✅ Block 2-3 hours | Don't rush — enjoy the process! |

### During the Lab: Questions to Ask

**After each phase, discuss:**

| Phase | Ask This | They Learn This |
|-------|----------|-----------------|
| Architect | "Why did we write everything down before drawing?" | Planning prevents mistakes |
| Artist | "Why did the artist read the specs first?" | You need requirements before creating |
| Developer | "Can the developer change the rules?" | Follow the plan; changes go back to architect |

### After the Lab: Debriefing Questions

1. **"What did the AI do well?"**
2. **"What didn't it understand at first? How did we fix it?"**
3. **"Why couldn't one agent do everything?"**
4. **"What would happen if we started with code instead of planning?"**

### The "Aha Moments" to Emphasize

| Insight | How to Phrase It |
|---------|------------------|
| Specialization | "Just like doctors, teachers, and chefs have different skills, AI agents have different jobs!" |
| Dependencies | "The artist couldn't start until the architect finished — each step depends on the one before." |
| Orchestration | "YOU were the project manager! You decided when each robot helper would work." |
| Clear communication | "When the AI didn't understand, we explained better. That's what good communicators do!" |

---

## 🚀 Game Ideas for Your Next Lab

Once you've completed one game, try these:

| Game | Type | Age | What Kids Learn |
|------|------|-----|-----------------|
| Animal Memory | Memory | 4-6 | Simple rules, matching |
| Magic Maze | Puzzle | 6-8 | Pathfinding, obstacles |
| Car Race | Arcade | 7-10 | Speed, competition |
| Capital Quiz | Educational | 8-12 | Geography, scoring |
| Colorful Snake | Arcade | 8-10 | Growth, collision |
| Tower Defense | Strategy | 10-12 | Waves, upgrades, economy |

**Always follow the same process:**
1. 🏛️ Architect designs → 2. 🎨 Artist draws → 3. 💻 Developer codes

---

## 📝 Want to Create New Agents?

Ask GitHub Copilot to help:

```
Help me create a custom agent for a game music composer.
This agent should create sound descriptions and audio guides
but NOT write code or modify game rules.
```

**Ideas for new specialists:**
- 🎵 **Composer** — Creates music and sound effects
- ✍️ **Screenwriter** — Writes story and dialogue  
- 🧪 **Tester** — Finds bugs and reports issues
- 📢 **Marketing** — Creates game descriptions and icons

---

## 🏆 What Your Kids Will Take Away

By the end of this lab, your children will understand:

| Skill | ✅ Learned |
|-------|-----------|
| Complex work needs specialized roles | Different experts for different tasks |
| Teams need orchestration | A project manager coordinates the work |
| Order and sequence matter | Plan → Design → Build |
| Clear communication is key | AI (and people) need clear instructions |
| You can build real things with AI | From idea to working game! |

---

## 📜 License

MIT - Use, modify, share freely!

---

Created with ❤️ by a family that loves learning together.
