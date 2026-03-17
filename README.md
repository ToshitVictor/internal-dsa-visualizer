# DSA: Under the Hood

### 🎯 Overview
An "Anti-Visualizer" for learning Data Structures and Algorithms. Instead of abstract animations, this app shows the raw code execution and exact memory state changes (pointers, arrays, call stack) step-by-step.

### 🛠️ Tech Stack
-   **Framework**: [Vite](https://vitejs.dev/) (Vanilla JS configuration)
-   **Core Architecture**: `DSSimulator` base class logic system.
-   **Styling**: Modern, high-premium dark-mode vanilla CSS.
-   **Features**: Stack, Queue, Singly Linked List (with Node IDs), Binary Tree (Iterative Insertion & Recursive Inorder with Call Stack tracing).

---

## 🚀 Deployment (Vercel)

### Option 1: Vercel CLI
1.  Install the Vercel CLI: `npm i -g vercel`.
2.  Run `vercel` in the project root.
3.  Follow the prompts to link and deploy.

### Option 2: GitHub Integration
1.  Push this project to a GitHub repository.
2.  Import the project into [Vercel](https://vercel.com/new).
3.  Vercel will detect it as a **Vite** project automatically.
4.  The default build settings (`Framework: Vite`, `Build: npm run build`, `Output: dist`) will work perfectly.

---

## 💻 Local Development
To run this project locally, clone the repo and then:
1.  `npm install`
2.  `npm run dev`
3.  Go to `http://localhost:5173/`
