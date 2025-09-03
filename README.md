# Convex Ideas

**A community-driven hub for innovative Convex feature concepts**

Created and maintained by [code-agents.org](https://code-agents.org) • Built by [@gunta](https://github.com/gunta)

🌐 **Live Site:** [code-agents.github.io/convex-ideas](https://code-agents.github.io/convex-ideas)

## About

**Convex Ideas** showcases innovative concepts for enhancing Convex with focus on:

- **🤖 Coding Agents** - AI-powered development tools and intelligent assistance
- **⚡ Developer Experience** - Workflow improvements and enhanced tooling  
- **🏗️ Platform Features** - Core enhancements and new capabilities

Each idea includes three essential components:
- **Value Proposition** - Rich landing page with compelling use case
- **PRD** - Detailed Product Requirements Document
- **Release Story** - Blog-style narrative for go-to-market vision

## Technology Stack

- **Astro Starlight** - Modern documentation framework
- **TypeScript** - Type-safe development
- **Iconify** - Beautiful SVG icons on-demand
- **Inter Font** - Professional typography
- **Custom Components** - Rich interactive experiences

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Convex Setup

This project uses Convex as a backend. You'll need to set up Convex before running the app:

```bash
bun dev:setup
```

Follow the prompts to create a new Convex project and connect it to your application.

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
Your app will connect to the Convex cloud backend automatically.





## Project Structure

```
convex-ideas/
├── apps/
│   └── docs/        # Convex Ideas showcase site (Astro Starlight)
├── packages/
│   └── backend/     # Convex backend (example functionality)
└── .github/
    └── workflows/   # GitHub Pages deployment
```

### Idea Structure

```
/ideas/[idea-name]/
├── index.mdx        # Rich landing page with custom components
├── prd.md          # Product Requirements Document  
└── blog.md         # Release story and announcement
```

## Development

```bash
# Install dependencies
bun install

# Start development server
cd apps/docs && bun dev

# Build for production
cd apps/docs && bun build

# Type checking
bun check-types
```

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to `main`.

**Live at:** [code-agents.github.io/convex-ideas](https://code-agents.github.io/convex-ideas)

## Contributing

1. **Browse existing ideas** at `/ideas`
2. **Follow the contribution guide** at `/contribute`  
3. **Use the template structure** for consistency
4. **Submit via pull request** with complete idea package

Each idea should include compelling value proposition, detailed PRD, and release narrative.

## Credits

- **Created by:** [@gunta](https://github.com/gunta) ([@gunta85](https://x.com/gunta85))
- **Organization:** [code-agents.org](https://code-agents.org)
- **Framework:** [Astro Starlight](https://starlight.astro.build)
- **Hosting:** [GitHub Pages](https://pages.github.com)

## License

MIT License - See [LICENSE](LICENSE) for details.
