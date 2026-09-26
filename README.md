# Escapade Landing Page

A modern landing page application built with React 19, TypeScript, Vite, Supabase, and Tailwind CSS.

---

## 🛠️ Prerequisites & Requirements

Before getting started, make sure developers have the following installed on their system:

### 1. Node.js
- **Version:** `v18.0.0` or higher (`v20.x` or `v22.x` recommended)
- **Download:** [nodejs.org](https://nodejs.org/)

### 2. Package Manager (`pnpm` recommended)
This project uses `pnpm` for fast and strict dependency management (`pnpm-lock.yaml`).
- **Install pnpm:**
  ```bash
  npm install -g pnpm
  ```
  *(Alternative: `npm` can also be used, but `pnpm` is recommended).*

### 3. Git
- **Download:** [git-scm.com](https://git-scm.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd escapade
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key_here
```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the local development server with HMR. |
| `pnpm build` | Runs TypeScript checks (`tsc -b`) and builds for production. |
| `pnpm preview` | Previews the production build locally. |
| `pnpm lint` | Runs ESLint to check for code quality and style errors. |

---

## 🧰 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Backend / DB Client:** [@supabase/supabase-js](https://supabase.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Linter & Formatter:** ESLint & Prettier

