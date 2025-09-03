# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Convex Ideas** is a community-driven hub for innovative Convex feature concepts created by [code-agents.com](https://code-agents.com) and [@gunta](https://github.com/gunta). Built with Astro Starlight, it showcases ideas for coding agents, developer experience enhancements, and platform features. Each idea includes three components: Value Proposition (rich MDX landing page), PRD (Product Requirements Document), and Release Story (blog-style narrative).

**Deployment:** [code-agents.github.io/convex-ideas](https://code-agents.github.io/convex-ideas) via GitHub Pages
Use always bun, never npm.

## Development Commands

**Setup and Installation:**
```bash
bun install              # Install all dependencies
bun dev:setup           # Setup and configure Convex project (run first time)
```

**Development:**
```bash
bun dev                 # Start all applications in development mode
bun dev:web             # Start only the web application (when it exists)
bun dev:server          # Start only the Convex backend
cd apps/docs && bun dev # Start documentation site
```

**Build and Type Checking:**
```bash
bun build               # Build all applications
bun check-types         # Check TypeScript types across all apps
cd apps/docs && bun build # Build documentation site only
```

## Architecture

**Monorepo Structure:**
- `apps/docs/` - Convex Ideas showcase site (Astro Starlight)
- `packages/backend/` - Convex backend with todo example functionality

**Content Structure:**
- `/ideas/` - All ideas in flattened structure (no categories)
- Each idea contains: `index.mdx` (rich landing page), `prd.md` (requirements), `blog.md` (release story)
- Landing pages use custom Astro components: IdeaHero, FeatureGrid, FeatureCard, ActionButton
- Ideas can span multiple domains - no rigid categorization

**Backend (Convex):**
- Located in `packages/backend/convex/`
- `schema.ts` - Database schema definitions using Convex schema builder
- `todos.ts` - Example CRUD operations for a todo system
- `_generated/` - Auto-generated Convex types and APIs
- Uses `@my-better-t-app/backend` as package name

**Package Manager:**
- Uses Bun (v1.2.21) for package management and script execution
- Workspaces configured for `apps/*` and `packages/*`

**Key Technologies:**
- TypeScript throughout
- Convex for reactive backend
- Astro with Starlight for documentation
- Better-T-Stack configuration in `bts.jsonc`

## Convex Development

The backend uses Convex's reactive architecture:
- Database operations are reactive and real-time
- Functions are defined as queries (read) or mutations (write)
- Schema validation using Convex values (`v`)
- Auto-generated types ensure type safety between frontend and backend

To add new database tables, update `packages/backend/convex/schema.ts` and create corresponding function files.

## Attribution & Deployment

**Created by:** [@gunta](https://github.com/gunta) ([@gunta85](https://x.com/gunta85) on X/Twitter)  
**Organization:** [code-agents.com](https://code-agents.com)  
**Repository:** [code-agents/convex-ideas](https://github.com/code-agents/convex-ideas)  
**Live Site:** [code-agents.github.io/convex-ideas](https://code-agents.github.io/convex-ideas)  
**Deployment:** GitHub Actions + GitHub Pages (automatic on push to main)

## Custom Components

Rich landing pages use custom Astro components:
- `IdeaHero` - Stunning hero sections with status badges and actions
- `FeatureGrid` - Responsive layouts for showcasing features  
- `FeatureCard` - Interactive cards with hover effects and icons
- `ActionButton` - CTA buttons with multiple variants and animations
- `CustomFooter` - Attribution footer with code-agents.com branding