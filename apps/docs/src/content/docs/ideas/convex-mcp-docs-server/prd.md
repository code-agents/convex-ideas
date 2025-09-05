---
title: Convex MCP Docs Server - PRD
description: Product Requirements Document for dynamic AI best practices through Model Context Protocol
---

# Convex MCP Docs Server - Product Requirements Document

## Executive Summary

The Convex MCP Docs Server represents the next evolution in AI-assisted development for Convex applications. Building upon the successful foundation of convex-evals, this Model Context Protocol (MCP) server delivers **dynamic, context-aware best practices** directly to AI coding agents, ensuring consistently high-quality code generation that adapts to each project's unique requirements.

## User Stories

### Primary User Stories

**As an AI-assisted developer**, I want my coding agent to automatically know my project's validation library, auth system, and components so that generated code follows my exact stack without manual configuration.

**As a team lead**, I want consistent patterns across all team members so that code reviews focus on business logic rather than style and structural issues.

**As a developer using Convex components**, I want my AI to understand component-specific patterns so that integrations are implemented correctly the first time.

**As a maintainer of multiple projects**, I want best practices to update automatically so that all my projects benefit from new patterns without manual intervention.

### Secondary User Stories

**As a new Convex developer**, I want my AI to teach me best practices through generated code so that I learn while building.

**As an organization scaling Convex usage**, I want standardized patterns across projects so that developers can move between codebases seamlessly.

**As a contributor to the Convex ecosystem**, I want a way to share patterns so that the community benefits from accumulated knowledge.

## Functional Requirements

### Core Features

#### 1. Project Configuration Detection
- **Auto-detection** from package.json, imports, and existing code patterns
- **Manual configuration** via CLI flags and config files
- **Interactive setup** wizard for new projects
- **Configuration validation** with helpful error messages

#### 2. Dynamic Rule Compilation
- **Source integration** from official docs, components, Stack articles, and community patterns
- **Context-aware filtering** to load only relevant guidelines for the detected stack
- **Model optimization** with format-specific output (JSON for GPT-4, XML for Claude, etc.)
- **Real-time updates** when new patterns are published

#### 3. MCP Protocol Implementation
- **Tool interface** providing getBestPractice, generatePattern, validateCode, and searchDocs methods
- **Streaming updates** for real-time rule synchronization
- **Caching layer** with intelligent cache invalidation
- **Performance monitoring** and optimization

#### 4. Editor Integration
- **One-click setup** for Cursor with deep integration
- **Manual configuration** support for Windsurf, VS Code, and Claude Desktop
- **Better T Stack integration** with automatic inclusion in new projects
- **Configuration templates** for different development environments

### Technical Requirements

#### Architecture
```typescript
interface ProjectConfig {
  validation: 'zod' | 'valibot' | 'convex-native';
  auth: 'clerk' | 'better-auth' | 'auth0' | 'custom';
  components: string[]; // ['polar', 'resend', 'ai-agent', etc.]
  model: 'anthropic' | 'openai' | 'google' | 'auto';
  features: {
    helpers: boolean;      // Use convex-helpers
    tanstack: boolean;     // TanStack Query integration
    testing: boolean;      // Include testing patterns
  };
}
```

#### Performance Targets
- **Startup time**: <500ms
- **Rule compilation**: <100ms
- **Memory usage**: <50MB
- **Cache hit rate**: >90%

#### MCP Tools
```typescript
interface ConvexDocsMCPTools {
  getBestPractice(topic: string): BestPractice;
  generatePattern(type: 'query' | 'mutation' | 'action', context: Context): Code;
  validateCode(code: string): ValidationResult;
  getComponentUsage(component: string): UsageExample[];
  searchDocs(query: string): SearchResult[];
  getProjectConfig(): ProjectConfig;
  updateConfig(updates: Partial<ProjectConfig>): void;
}
```

## Non-Functional Requirements

### Performance
- Initial load time under 500ms
- Rule queries respond in under 100ms
- Memory footprint under 50MB
- 99.9% uptime for rule retrieval

### Scalability
- Support for 10,000+ concurrent AI agents
- Handle 1M+ rule queries per day
- Graceful degradation under high load
- CDN distribution for global performance

### Security
- No sensitive data transmission
- Local rule caching for privacy
- Secure pattern validation pipeline
- Safe community contribution system

### Compatibility
- Node.js 18+ support
- Works with all major MCP-compatible editors
- Cross-platform (Windows, macOS, Linux)
- Backwards compatibility with convex-evals

## User Experience Requirements

### Installation & Setup
- **One-command install**: `npx @convex/mcp-docs-server install --editor=cursor`
- **Automatic detection** of project configuration in 90% of cases
- **Clear error messages** with actionable resolution steps
- **Migration assistant** from existing convex-evals setups

### Runtime Experience
- **Invisible operation** - no user intervention required after setup
- **Immediate benefits** - better code generation from the first query
- **Consistent patterns** across all AI interactions
- **Real-time updates** without service interruption

### Developer Experience
- **Zero configuration** for standard setups
- **Flexible customization** for complex projects
- **Observable behavior** through debug logging
- **Community contribution** pathways

## Success Metrics

### Adoption Metrics
- **50% of Cursor users** adopt within 3 months of launch
- **10,000+ projects** using MCP docs server within 6 months
- **5x reduction** in setup time vs manual rule management

### Quality Metrics
- **90% reduction** in common Convex anti-patterns in generated code
- **2x faster** development velocity measured by feature completion time
- **95% satisfaction** rate from developers in quarterly surveys

### Performance Metrics
- **<100ms** average response time for rule queries
- **>99%** uptime for the MCP server
- **Zero manual updates** required for rule synchronization

## Technical Implementation

### Phase 1: Foundation (Weeks 1-4)
- Core MCP server implementation
- Basic rule compilation engine
- Project configuration detection
- Cursor integration and testing

### Phase 2: Content Pipeline (Weeks 5-8)
- Auto-indexing system for docs and articles
- Component documentation integration
- Rule optimization and caching
- Multi-model format support

### Phase 3: Advanced Features (Weeks 9-12)
- Better T Stack integration
- Community contribution system
- Advanced analytics and telemetry
- Performance optimization

### Phase 4: Polish & Launch (Weeks 13-16)
- Comprehensive documentation
- Migration tools from convex-evals
- Public launch and marketing
- Community onboarding programs

## Risk Mitigation

### Technical Risks
- **MCP protocol changes**: Abstract protocol implementation to minimize impact
- **Performance degradation**: Implement aggressive caching and CDN distribution
- **AI model compatibility**: Build model-specific adapters for different response formats

### Adoption Risks
- **Learning curve**: Provide comprehensive tutorials and one-click setup tools
- **Migration friction**: Build automated migration tools and compatibility modes
- **Integration complexity**: Maintain extensive testing matrix across editors and platforms

### Content Risks
- **Pattern quality**: Establish rigorous validation pipeline using convex-evals testing
- **Community contributions**: Implement moderation and testing before pattern inclusion
- **Documentation drift**: Automated synchronization with official Convex documentation

## Competitive Analysis

### Current Landscape
- **Supabase**: Static code snippets with no AI-specific tooling
- **Firebase**: Basic documentation integration, no dynamic patterns
- **Prisma**: Code generation focused, not AI-optimized
- **Drizzle**: Manual documentation approach

### Convex Advantages
- **First dynamic MCP implementation** for backend platforms
- **Component ecosystem** provides rich pattern library
- **Auto-updating best practices** eliminate maintenance burden
- **Project-aware intelligence** adapts to specific technology choices

## Future Vision

### Q4 2025
- GitHub Copilot Workspace integration
- Custom team-specific pattern sets
- Advanced pattern contribution workflows

### Q1 2026
- AI-powered pattern discovery from community code
- Automatic anti-pattern detection and suggestions
- Cross-project pattern learning and optimization

### Q2 2026
- Full IDE integration beyond AI assistance
- Real-time pattern validation in editors
- Integration with component marketplace

## Migration from convex-evals

### Compatibility Approach
- **Side-by-side operation** during transition period
- **Automatic import** of existing convex-evals rules
- **Gradual migration path** with user control
- **Feature parity** before any deprecation

### Benefits of Migration
- Eliminate manual rule updates across projects
- Gain project-specific optimization capabilities
- Achieve stronger AI compliance through MCP protocol
- Access to broader pattern library including components

### Migration Timeline
- **Month 1**: Launch with convex-evals compatibility mode
- **Month 3**: Provide migration tools and documentation
- **Month 6**: Begin gentle migration prompts for users
- **Month 12**: Consider convex-evals maintenance mode (not deprecation)

---

## Call to Action

The Convex MCP Docs Server represents a **paradigm shift** in how developers interact with backend platforms through AI. By building this feature, Convex will:

1. **Establish market leadership** in AI-assisted backend development
2. **Reduce developer support burden** through consistently better generated code
3. **Accelerate platform adoption** by lowering the learning curve
4. **Create a competitive moat** through superior developer experience

**This is not just an improvement—it's the definition of what an AI-first backend platform should be.**