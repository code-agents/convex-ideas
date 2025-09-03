---
title: Contribute Your Ideas
description: Learn how to submit and structure your Convex ideas for maximum impact.
---

# <iconify-icon icon="lucide:rocket" width="28" height="28" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Contribute Your Ideas

Have an innovative idea for Convex? We'd love to hear it! This guide will help you structure your contribution to maximize its impact and usefulness for the Convex development team.

## <iconify-icon icon="lucide:clipboard-list" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Idea Structure

Every Convex idea should include **three essential components**:

### 1. <iconify-icon icon="lucide:home" width="20" height="20" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>**Value Proposition** (Landing Page)
**Purpose:** Clearly communicate the idea's value and inspire action  
**Audience:** Product managers, stakeholders, and community members

**Include:**
- Clear problem statement and target audience
- Value proposition and key benefits
- Success metrics and impact assessment
- Visual mockups or diagrams (if applicable)
- Competitive analysis or inspiration

### 2. <iconify-icon icon="lucide:clipboard-list" width="20" height="20" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>**Product Requirements Document (PRD)**
**Purpose:** Provide detailed technical specifications for implementation  
**Audience:** Engineering teams and technical stakeholders

**Include:**
- Functional requirements and user stories
- Technical architecture and implementation approach
- API specifications and data models
- Security and performance considerations
- Testing strategy and acceptance criteria
- Timeline estimates and milestones

### 3. <iconify-icon icon="lucide:book-open" width="20" height="20" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>**Release Story** (Blog Entry)
**Purpose:** Demonstrate go-to-market vision and user communication  
**Audience:** Marketing, developer relations, and community

**Include:**
- Announcement narrative and positioning
- Key features and benefits explanation
- Code examples and usage patterns
- Migration guide (if applicable)
- Community impact and adoption strategy

## <iconify-icon icon="lucide:folder" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>File Organization

Organize your idea using this structure:

```
/ideas/[idea-name]/
├── index.mdx         # Value Proposition (Rich Landing Page)
├── prd.md           # Product Requirements Document  
└── blog.md          # Release Story
```

**Structure Notes:**
- All ideas are in `/ideas/` directory (no category folders)
- Landing pages use `.mdx` for rich interactive components
- Ideas can span multiple domains and categories

## <iconify-icon icon="lucide:git-branch" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Contribution Process

1. **Fork the repository** and create a new branch
2. **Create your idea directory** following the structure above
3. **Write your three components** using the templates provided
4. **Submit a pull request** with a clear description
5. **Engage with feedback** from the community and maintainers

## <iconify-icon icon="lucide:file-text" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Templates

### Value Proposition Template
```markdown
---
title: [Idea Name]
description: Brief description for SEO and navigation
---

# [Idea Name]

## The Problem
What specific pain point does this solve?

## The Solution
How does your idea address this problem?

## Target Audience
Who benefits most from this feature?

## Key Benefits
- Benefit 1
- Benefit 2
- Benefit 3

## Success Metrics
How will we measure success?

## Visual Mockups
[Include diagrams, wireframes, or examples]
```

### PRD Template
```markdown
---
title: [Idea Name] - PRD
description: Product Requirements Document
---

# [Idea Name] - Product Requirements Document

## Executive Summary
Brief overview of the feature and its objectives.

## User Stories
- As a [user type], I want [goal] so that [benefit]

## Functional Requirements
Detailed list of what the feature must do.

## Technical Architecture
Implementation approach and system design.

## API Specifications
Proposed APIs, schemas, and interfaces.

## Success Criteria
Measurable outcomes that define success.
```

### Release Story Template
```markdown
---
title: Introducing [Idea Name]
description: Release announcement and user guide
---

# Introducing [Idea Name]

We're excited to announce [feature name], a new capability that [core benefit].

## What's New
Description of the feature and its capabilities.

## Getting Started
Step-by-step guide for users.

## Code Examples
```typescript
// Example usage
```

## Community Impact
How this benefits the Convex ecosystem.
```

## <iconify-icon icon="lucide:target" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Tips for Great Ideas

- **Start with the problem**: Clearly articulate the pain point
- **Be specific**: Provide concrete examples and use cases
- **Think holistically**: Consider implementation, adoption, and maintenance
- **Reference existing patterns**: Build on familiar Convex concepts
- **Consider the ecosystem**: How does this fit with existing features?

## <iconify-icon icon="lucide:users" width="24" height="24" style="color: var(--sl-color-accent); vertical-align: middle; margin-right: 0.5rem;"></iconify-icon>Community Guidelines

- Be respectful and constructive in discussions
- Focus on the technical merit of ideas
- Provide specific feedback on proposed solutions
- Help refine and improve community contributions
- Celebrate innovative thinking and collaboration

---

**Ready to contribute?** Start by exploring existing ideas to understand the format, then create your own following this structure. The Convex community is excited to see your innovative vision!