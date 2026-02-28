# Ethan AI Assistant — Landing Page

A professional, superhero-movie styled landing page for the Ethan AI Assistant app.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS** + **shadcn/ui**
- Web Audio API for ambient sound effects

## Setup

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app runs at `http://localhost:8080`.

## Build & Deploy

```sh
npm run build
```

Output goes to `dist/`. Deploy the contents to any static host (GitHub Pages, Netlify, Vercel, etc.).

### GitHub Pages (via GitHub Actions)

Push to `main` and the site auto-updates if you configure GitHub Pages to serve from the `gh-pages` branch or use a GitHub Actions workflow.

## Project Structure

```
src/
├── components/       # UI components (Navbar, Hero, Features, etc.)
│   └── ui/           # shadcn/ui primitives
├── hooks/            # Custom hooks (useAmbientSound, useInView)
├── pages/            # Route pages (Index, FAQ, NotFound)
├── lib/              # Utilities
└── index.css         # Design tokens & global styles
```

## Customization

- **Design tokens**: Edit `src/index.css` CSS variables
- **Tailwind config**: `tailwind.config.ts`
- **Sound effects**: `src/hooks/useAmbientSound.ts`
- **Sections**: Each homepage section is a standalone component in `src/components/`
