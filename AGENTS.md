# AGENTS.md — Landing Page Generation

## Project snapshot
- **Product**: Landing page for furniture service
- **Core goal**: Convert visitors to CTA clicks (sign-up/inquiry)
- **Key features**: Responsive design, SEO, testimonials, CTA tracking
- **Tech stack**: Next.js (TypeScript), Tailwind CSS

## Working environment
- **OS**: macOS/Linux/Windows (WSL)
- **CLI**: Bash/Zsh/PowerShell
- **Package manager**: `pnpm`
- **Ports**: `<!-- TBD: Available free port for dev server -->`

## Build & test commands
| Purpose | Command | When |
|---------|---------|------|
| Start dev server | `pnpm dev` | Local development |
| Build production | `pnpm build` | Deployment prep |
| Lint code | `pnpm lint` | PR reviews |
| Run tests | `<!-- TBD: Test framework not specified -->` | `<!-- TBD: Test coverage not defined -->` |

## Repository map
| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js pages, components, UI logic |
| `public/` | Static assets (logos, testimonial images) |
| `styles/` | Global Tailwind/CSS overrides |
| `lib/` | Utility functions, analytics integration |
| `env.local` | Environment variables (analytics keys) |

## Coding rules
- **File structure**: Follow Next.js App Router conventions
- **Component naming**: `PascalCase` (e.g., `TestimonialCard.tsx`)
- **SEO**: Use `next-seo` package for meta tags
- **Analytics**: Wrap CTA buttons with tracking events (`<!-- TBD: Tracking provider? -->`)
- **Images**: Optimize via `next/image` with responsive sizes
- **Responsive**: Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)

## Commit discipline
- **Conventional commits**: `feat:`, `fix:`, `chore:`, `docs:`
- **Branch naming**: `feat/landing-page`, `hotfix/broken-cta`
- **PR titles**: Start with `PRD §<id>` (e.g., `PRD §F1.1: Persistent logo display`)

## Things to ask before doing
- **Analytics**: Which provider should be used for event tracking?
- **CTA destination**: What is the exact URL for the post-click page?
- **Testimonials**: Are images/videos provided, or are placeholder mocks needed?
- **SEO**: Who approves the final meta tags (title/description)?
- **Logo**: What file format and size should be used for responsive display?