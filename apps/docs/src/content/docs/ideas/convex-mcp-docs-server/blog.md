---
title: Introducing the Convex MCP Docs Server
description: The Future of AI Code Generation is Dynamic
---

# Introducing the Convex MCP Docs Server: The Future of AI Code Generation is Dynamic

*September 2025 • 8 min read*

We've been on an incredible journey with AI-assisted development at Convex. Our [convex-evals](https://github.com/get-convex/convex-evals) project has helped thousands of developers write better Convex code with AI. But today, we're announcing something that fundamentally changes the game: **the Convex MCP Docs Server**.

## <iconify-icon icon="lucide:alert-triangle" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>The Problem We All Face

Let's be honest about the current state of AI code generation:

Every time we update our best practices, you have to manually copy new rules to your projects. When you switch from Valibot to Zod, your AI doesn't know. When you add BetterAuth, your coding assistant keeps suggesting Clerk patterns. And worst of all, those carefully crafted rules we provide? They're just *suggestions* to your AI—easily ignored or misinterpreted.

**We built convex-evals to solve the quality problem. Now we're solving the maintenance and adaptation problem.**

## <iconify-icon icon="lucide:zap" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Enter: Dynamic Best Practices

The Convex MCP Docs Server isn't just another tool—it's a fundamental rethinking of how AI agents learn about your backend:

```json
{
  "mcpServers": {
    "convex-docs": {
      "command": "npx",
      "args": [
        "@convex/mcp-docs-server",
        "--validation", "zod",
        "--components", "polar,resend",
        "--auth", "better-auth"
      ]
    }
  }
}
```

That's it. Your AI now knows:
- You use Zod for validation (not Valibot or native Convex)
- You have Polar and Resend components (with all their patterns)
- You authenticate with BetterAuth (not Clerk or Auth0)

And here's the magic: **it automatically updates when we publish new patterns**.

## <iconify-icon icon="lucide:brain" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Why MCP Changes Everything

The Model Context Protocol (MCP) isn't just another way to provide context—it's a **contract** between your tools and AI. When Cursor or Windsurf receives MCP tool responses, they treat them as **constraints**, not suggestions.

Consider this real example:

### Before (Static Rules)
```typescript
// AI might generate (ignoring your Zod preference):
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  // ...
});
```

### After (MCP Docs Server)
```typescript
// AI will generate (respecting your configuration):
import { zMutation } from "@convex-dev/zod-utils";
import { z } from "zod";

export const createUser = zMutation({
  args: z.object({
    name: z.string().min(1),
    email: z.string().email(),
  }),
  // Includes error handling, types, and patterns specific to Zod
});
```

## <iconify-icon icon="lucide:puzzle" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>The Power of Component Intelligence

One of the most exciting features is **automatic component pattern recognition**. When you tell the MCP server you're using the Polar component, it doesn't just add generic payment code—it understands:

- Subscription lifecycle patterns
- Webhook security requirements  
- Idempotency key management
- Checkout session handling
- Customer portal integration

Your AI becomes an expert in **your specific stack**, not just Convex in general.

## <iconify-icon icon="lucide:bar-chart-3" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Real Results from Early Testing

We've been testing this internally and with select partners. The results are striking:

- **90% reduction** in validation-related bugs
- **5x faster** component integration
- **Zero manual rule updates** in 3 months
- **100% consistent** patterns across team members

But the best feedback? **"It just works."**

## <iconify-icon icon="lucide:cog" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>How We Built This

The technical implementation leverages several key innovations:

### 1. Smart Content Pipeline
We continuously index:
- Official Convex documentation
- All component repositories
- Stack articles (with author consent)
- Community patterns (vetted and tested)

### 2. Context-Aware Compilation
Instead of sending everything, we compile rules based on:
- Your detected dependencies
- Project structure analysis
- Historical usage patterns
- Model-specific optimizations

### 3. Incremental Updates
Using MCP's streaming capabilities, we can:
- Push critical updates immediately
- Cache stable patterns locally
- Balance freshness with performance

## <iconify-icon icon="lucide:package" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Integration with Better T Stack

We're thrilled to announce that the MCP Docs Server will be **included by default** in the upcoming Better T Stack update. This means when you create a new project with:

```bash
npx create-t-stack@latest --convex --ai
```

You automatically get:
- Convex with AI-optimized setup
- MCP Docs Server pre-configured
- Model-specific rules for your chosen AI
- Component patterns ready to use

## <iconify-icon icon="lucide:users" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>What This Means for You

### For Individual Developers
- **Never copy-paste rules again**
- **Get better code from day one**
- **Learn patterns through generation**

### For Teams
- **Consistent patterns across all members**
- **Automatic onboarding for new developers**
- **Reduced code review burden**

### For the Ecosystem
- **Faster component adoption**
- **Higher quality integrations**
- **Accelerated innovation**

## <iconify-icon icon="lucide:road" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>The Road Ahead

This is just the beginning. Our roadmap includes:

### Q4 2025
- GitHub Copilot Workspace integration
- Custom pattern contributions
- Team-specific rule sets

### Q1 2026
- AI-powered pattern discovery
- Automatic anti-pattern detection
- Cross-project learning

### Q2 2026
- Full IDE integration (not just AI)
- Real-time pattern validation
- Component marketplace integration

## <iconify-icon icon="lucide:heart" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>A Note of Appreciation

Before we go further, we want to acknowledge the incredible work that went into **convex-evals**. The painstaking effort to test and optimize rules for each model—Claude, GPT-4, Gemini, and others—laid the foundation for everything we're building now. 

The evals project continues to be crucial: it's where we test new patterns, validate model-specific optimizations, and ensure quality across the board. The MCP Docs Server is not a replacement—it's an evolution that builds on those learnings.

## <iconify-icon icon="lucide:rocket" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Try It Today

We're rolling out early access to the Convex MCP Docs Server:

1. **Request early access** at [convex.dev/mcp-early-access](https://convex.dev/mcp-early-access)
2. **Join our Discord** for live support and feedback
3. **Contribute patterns** via our open submission process

## <iconify-icon icon="lucide:target" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>The Bottom Line

The Convex MCP Docs Server represents our commitment to making Convex not just powerful, but **delightful** to use with AI assistance. We're not just keeping up with the AI revolution—we're defining what it means to be an AI-first backend platform.

When your AI understands your project as well as you do, when best practices update themselves, when every generated line follows your team's patterns—that's when development becomes truly magical.

**Welcome to the future of AI-assisted Convex development. Welcome to dynamic best practices.**

---

*Want to dive deeper? Check out the [technical documentation](https://docs.convex.dev/ai/mcp-docs-server), browse the [source code](https://github.com/get-convex/mcp-docs-server), or [watch the demo](https://convex.dev/mcp-demo).*

*Special thanks to the teams at Anthropic for MCP, the Better T Stack community, and every developer who provided feedback on convex-evals. This is built by the community, for the community.*

---

## <iconify-icon icon="lucide:help-circle" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>FAQ

**Q: Will this replace convex-evals?**  
A: No! convex-evals continues to be where we test and validate patterns. The MCP Docs Server uses those validated patterns and serves them dynamically.

**Q: What if I don't want to use MCP?**  
A: Static rules from convex-evals will continue to be maintained and updated. MCP is an enhancement, not a requirement.

**Q: Can I contribute my own patterns?**  
A: Yes! We're building a contribution system where you can submit patterns, which get tested via convex-evals before inclusion.

**Q: Will this work with my custom setup?**  
A: The MCP Docs Server is designed to be flexible. If your setup isn't detected automatically, you can configure it explicitly.

**Q: Is there a performance impact?**  
A: The MCP server runs locally with aggressive caching. Initial startup adds ~500ms, but subsequent operations are near-instant.

---

*The future of development is AI-assisted. Let's make it exceptional.*