# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Convex Ideas** is a community-driven hub for innovative Convex feature concepts. Built with Better-T-Stack (Astro Starlight + Convex backend), it showcases ideas for coding agents, developer experience enhancements, and platform features. Each idea includes three components: Value Proposition (landing page), PRD (Product Requirements Document), and Release Story (blog-style narrative).
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
- `/coding-agents/` - AI-powered development tool ideas
- `/developer-experience/` - Workflow and tooling improvement ideas  
- `/platform-features/` - Core platform enhancement ideas
- Each idea contains: `index.md` (value prop), `prd.md` (requirements), `blog.md` (release story)

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

## Documentation

Documentation is built with Astro Starlight in `apps/docs/`. The site includes documentation about the project structure and setup.