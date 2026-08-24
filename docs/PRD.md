# PRD: 랜딩 페이지 생성

| Metadata | Value |
|---|---|
| Project name | 랜딩 페이지 생성 |
| One-liner | Landing page that enables visitors to quickly understand the service and proceed to application/inquiry by clicking the CTA button. |
| Device target | web_app |
| Device target detail | [TBD: no additional device, viewport, or browser details were provided] |
| IDE target | cubivora |
| Locales | `ko` |
| Default locale | `ko` |
| UI language requirement | Korean is the only supported UI language for the MVP. Do not add additional locale catalogs unless explicitly requested. |
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Backend | 없음 |
| Database | 없음 |
| Deployment | Build configuration suitable for static hosting; production deployment is excluded. |
| Visual direction | Clean and simple structure, white base, one point color, large headings, short sentences, and one message per screen. |
| Design tone | Trustworthy and clean |

## 1. Product Overview

### Product purpose

This product is a Korean, responsive web landing page for consumers who are considering furniture purchases. It must help visitors:

1. Understand that comparing furniture prices can be difficult.
2. Understand that store visits can be inconvenient.
3. Learn that the service helps them find furniture products matching their needs by comparing prices.
4. Continue to the designated sign-up or service-start destination through a CTA.

### User problem

- Furniture buyers have difficulty comparing prices across multiple products.
- Visiting furniture stores in person is inconvenient.
- Consumers want to compare products rationally before purchasing.
- The landing page must communicate this value quickly and clearly.

### Killer differentiator

The service helps customers find and purchase furniture products that match their needs by comparing furniture prices.

### Product principles

- Use short Korean copy focused on furniture price comparison and reduced store visits.
- Keep one primary message per section.
- Use a white-based visual system with one point color.
- Make the CTA visible and usable on both mobile and PC.
- Do not include unverified numerical claims, dates, customer counts, savings amounts, or forecasts.
- Use actual testimonial content only when it is supplied or approved. Do not fabricate reviews or results.

### MVP success measures

| KPI | Target | Measurement window |
|---|---|---|
| 랜딩 페이지 방문 수 | [미정: 목표 수치가 프로필에 제공되지 않음] | 30d |
| CTA 클릭률 | [미정: 목표 수치가 프로필에 제공되지 않음] | 30d |

## 2. Out of Scope

- Furniture product search, filtering, comparison, or purchasing functionality.
- Furniture catalog, product detail pages, shopping cart, or checkout.
- User account creation, login, OAuth, or role-based access control.
- Actual sign-up or service-start implementation after the CTA destination.
- Admin CMS for editing sections or testimonials.
- Production deployment.
- Production domain connection.
- Payment processing or payment gateway integration.
- MCP servers.
- AI model integration.
- Arbitrarily adding features, screens, or APIs not specified in this PRD.
- Presenting unverified figures, dates, forecasts, review counts, savings, or performance claims as facts.
- Hardcoding API keys, secrets, ad keys, analytics keys, or payment gateway keys.
- Adding user-generated testimonials without an approved content source.
- Supporting UI languages other than Korean in the MVP.

## 3. Target Users

| User group | Need | Landing-page message implication |
|---|---|---|
| Consumers planning furniture purchases | Understand where to start and what to compare | Explain the service in simple terms and expose a clear CTA. |
| Customers comparing furniture prices | Compare options rationally before purchase | Emphasize furniture price comparison and matching products to needs. |
| People who find store visits inconvenient | Reduce unnecessary offline visits | Communicate that the service can help them explore suitable furniture before visiting stores. |

### Primary persona

Consumers planning to purchase furniture who want to rationally compare products matching their needs and reduce store visits.

### User journey

1. Visitor opens a landing-page section.
2. Visitor sees the logo and understands the service identity.
3. Visitor identifies with the furniture price-comparison and store-visit problem.
4. Visitor learns how the service helps.
5. Visitor reviews approved testimonials and results.
6. Visitor clicks the hero or final CTA.
7. Visitor is navigated to the designated sign-up or service-start page.
8. The visit and CTA click are recorded independently of the navigation result.

### Content constraints

- All user-facing MVP copy must be Korean.
- English identifiers may be used in code and data fields.
- Testimonials must represent actual user experiences and specific results only when verified.
- Missing brand assets, CTA destination, approved copy, testimonial content, and point color are `[TBD]` items and must not be invented.

## 4. Core Features (Features)

| ID | Feature | Priority | Implementation requirement | Definition of done |
|---|---|---:|---|---|
| F1 | Logo display at top | Must | Display the logo in a fixed or persistent top header. Preserve aspect ratio and make it clickable. | Logo is visible at the top, is not clipped or distorted across supported viewport sizes, and clicking it returns to the landing page start position or representative page destination. Exact logo asset and representative destination: `[TBD: not provided]`. |
| F2 | Mobile/PC responsive support | Must | Build responsive layouts for mobile and PC using Next.js and Tailwind CSS. Keep section order and CTA flow consistent. | Text, images, controls, and CTA do not overlap, overflow, or become unusable when the viewport width changes. Supported browser list: `[TBD: not provided]`. |
| F3 | Basic SEO meta tags | Must | Add a unique page title, meta description, canonical URL, language metadata, and social share metadata. | The rendered page contains service-relevant Korean title and description metadata, a canonical URL, and Korean language settings. Exact canonical domain and OG image: `[TBD: production domain and asset not provided]`. |
| F4 | User testimonials section | Must | Add a dedicated testimonial section showing approved positive reviews and concrete results related to furniture price comparison or reduced store visits. | Approved testimonial text and visual assets render without missing or broken content on mobile and PC. Testimonial source and final content: `[TBD: no approved testimonial content was provided]`. |
| F5 | CTA button click | Must | Place a primary CTA in the hero and final CTA sections. On click, record the CTA event and navigate to the designated sign-up or service-start destination. | CTA works on mobile and PC and does not navigate to an invalid, blank, or error destination. Exact destination URL/path: `[TBD: not provided]`. |
| F6 | Visit and CTA click event tracking | Must | Record separate visit and CTA click events. Tracking failures must not block page rendering or CTA navigation. | A page visit creates a `page_view` event and a CTA click creates a `cta_click` event; the events use consistent names and can be distinguished for CTA click-rate calculation. Analytics provider and server persistence: `[TBD: not provided]`. |
| F7 | Section-based landing-page flow | Must | Implement the specified hero, problem, service introduction, key benefits, testimonial, and final CTA content flow without adding unrelated screens. | Visitors can understand the service from top to bottom, with one primary message per section and a CTA at the intended conversion points. |

### Required section content

| Section | Required content |
|---|---|
| Hero | Service value proposition, furniture price-comparison benefit, and a free-start CTA. Exact Korean headline and CTA label: `[TBD: approved copy not provided]`. |
| Problem statement | Difficulty comparing furniture prices and inconvenience of visiting stores. |
| Service introduction | Explain the service flow from visitor need/input to finding or comparing suitable furniture. Do not imply that this landing page itself performs product matching. |
| Key benefits | Communicate easy start, fast organization of comparison information, and usefulness for subsequent development/service use only if approved by product stakeholders. Exact copy: `[TBD: approved benefit copy not provided]`. |
| Testimonials | Approved real-user reviews and specific results. Do not generate fictional names, quotes, percentages, or savings. |
| Final CTA | Repeat the primary conversion action with a create-plan or service-start CTA only if that is the approved destination action. Exact label and destination: `[TBD: not provided]`. |

## 5. Screens & Routes

The routes below are the specified landing-page section routes. Implement them as section-level routes or navigable page anchors according to the Cubivora project routing convention. Do not add other product screens.

| Route | Screen/section | Purpose | Required behavior |
|---|---|---|---|
| `/hero` | Hero section | Display the core value proposition and free-start CTA button. | Show logo/header context, primary headline, supporting sentence, and CTA. |
| `/screen` | Problem statement section | Present user pain points to drive empathy. | Explain furniture price comparison difficulty and store-visit inconvenience. |
| `/screen-2` | Service introduction section | Guide the flow from idea/input to plan generation. | Explain the service flow without implementing the downstream service. |
| `/screen-3` | Key benefits section | Communicate easy start, fast organization, and development utilization. | Use concise benefit blocks with responsive layout. |
| `/cta` | Final CTA section | Drive conversion with a create-plan button. | Record CTA click and navigate to the configured destination. |

### Required visual structures

- Fixed header bar type for the logo.
- Full-screen or section-based scroll presentation for the responsive landing flow.
- Hero full-screen presentation for the CTA entry point.
- Dedicated user testimonials section.
- OG preview card metadata for social sharing.
- Hero scroll/visit tracking behavior for analytics events.

### Responsive behavior

- Preserve the content order:
  1. Hero
  2. Problem statement
  3. Service introduction
  4. Key benefits
  5. Testimonials
  6. Final CTA
- On narrow screens, stack columns vertically rather than allowing overlap.
- Keep the primary CTA reachable without requiring precision gestures.
- Use responsive image sizing and preserve image aspect ratios.
- Exact breakpoint values and image-resolution switching rules: `[TBD: not provided]`.
- Do not hide the core value proposition or CTA solely because the viewport is narrow.

### Navigation behavior

- Logo click must return to the landing-page start position or configured representative destination.
- Hero CTA and final CTA must use the same configured CTA destination unless a different destination is explicitly provided.
- Exact CTA destination: `[TBD: sign-up or service-start URL/path not provided]`.
- If the destination is not configured, fail safely during development with a visible implementation error and do not silently navigate to an arbitrary page.

## 6. Data Model

The MVP has no configured backend or database. These types define the content and analytics contract for static content, client-side rendering, and any future API adapter. Static seed data must be stored in typed local content modules rather than hardcoded throughout JSX.

### `LandingPageSection`

| Field | Type | Required | Description |
|---|---|---:|---|
| `id` | `string` | No | Stable section identifier. |
| `type` | `string` | No | Section type such as `hero`, `problem`, `service_intro`, `benefits`, `testimonials`, or `cta`. |
| `title` | `string` | No | Korean section title. |
| `content` | `string` | No | Korean section body content or serialized content reference. |
| `order` | `number` | No | Display order. |

### `Testimonial`

| Field | Type | Required | Description |
|---|---|---:|---|
| `id` | `string` | No | Stable testimonial identifier. |
| `quote` | `string` | No | Approved Korean user quote. |
| `author` | `string` | No | Approved author display name or anonymized label. |
| `result` | `string` | No | Approved concrete result connected to price comparison or reduced store visits. |

Testimonial content is potentially personal information if it identifies a real person. The MVP should use approved, minimally identifying display values. Server retention period: `[TBD: no server-side testimonial storage decision was provided]`.

### `AnalyticsEvent`

| Field | Type | Required | Description |
|---|---|---:|---|
| `name` | `string` | Yes | `page_view` or `cta_click`. |
| `pagePath` | `string` | Yes | Page or section path where the event occurred. |
| `occurredAt` | `datetime` | Yes | Event timestamp in ISO 8601 format. |

If analytics events are persisted by a future server, retention period is `[TBD: analytics retention policy was not provided]`. Do not collect names, emails, account identifiers, or unnecessary personal data for these events.

### `CtaConfig`

| Field | Type | Required | Description |
|---|---|---:|---|
| `label` | `string` | Yes | Korean CTA label. |
| `destination` | `string` | Yes | Absolute URL or application path for sign-up/service start. |
| `trackingName` | `string` | Yes | Must be `cta_click`. |
| `ariaLabel` | `string` | Yes | Accessible Korean label describing the action. |

Configured CTA label and destination: `[TBD: not provided]`.

### `SeoMetadata`

| Field | Type | Required | Description |
|---|---|---:|---|
| `title` | `string` | Yes | Unique Korean document title. |
| `description` | `string` | Yes | Korean service/value summary. |
| `canonicalUrl` | `string` | Yes | Canonical landing-page URL. |
| `locale` | `string` | Yes | Must be `ko_KR` for the Korean UI. |
| `ogImageUrl` | `string` | No | Social share image URL. |

Canonical URL and OG image asset: `[TBD: production domain and approved social image were not provided]`.

## 7. API Design (Backend Contract)

The declared backend is none and the database is none. Therefore, the MVP must remain deployable as a static frontend. The endpoints below are the specified backend contract for a future or externally hosted content/analytics service; do not create an unrequested production backend.

All endpoints use JSON and return JSON. `guest` means no authentication is required.

| Method | Path | Purpose | Request body | Success response | Error codes | Auth |
|---|---|---|---|---|---|---|
| `POST` | `/landingpagesections` | Create a landing-page section record. | `{ "type": "string", "title": "string", "content": "string", "order": 0 }` | `{ "id": "string", "created_at": "datetime" }` | `400` | `guest` |
| `GET` | `/landingpagesections` | List landing-page sections in display order. | None | `[ { "id": "string", "type": "string", "title": "string", "content": "string", "order": 0 } ]` | `401` | `guest` |
| `PUT` | `/landingpagesections/{id}` | Update a landing-page section. | Partial `LandingPageSection` object. | Updated `LandingPageSection` | `400`, `404` | `guest` |
| `DELETE` | `/landingpagesections/{id}` | Delete a landing-page section. | None | `{ "deleted": true }` | `404` | `guest` |
| `POST` | `/testimonials` | Create an approved testimonial record. | `{ "quote": "string", "author": "string", "result": "string" }` | `{ "id": "string", "created_at": "datetime" }` | `400` | `guest` |
| `GET` | `/testimonials` | List testimonials for the landing page. | None | `[ { "id": "string", "quote": "string", "author": "string", "result": "string" } ]` | `401` | `guest` |
| `POST` | `/analyticsevents` | Record a visit or CTA click event. | `{ "name": "page_view|cta_click", "pagePath": "string", "occurredAt": "datetime" }` | `{ "id": "string", "created_at": "datetime" }` | `400` | `guest` |
| `GET` | `/analyticsevents` | Retrieve recorded analytics events for reporting. | None | `[ { "name": "string", "pagePath": "string", "occurredAt": "datetime" } ]` | `401` | `guest` |

### Static MVP behavior

- Page content must render from local typed seed data when no backend is configured.
- Analytics calls must be non-blocking.
- A failed analytics request must not prevent the page from rendering or prevent CTA navigation.
- The frontend may expose an analytics adapter with the endpoint contract above, but no API key or secret may be embedded in client code.
- API base URL, if needed, must come from an environment variable such as `NEXT_PUBLIC_API_BASE_URL`; exact environment configuration is `[TBD: hosting/API provider not provided]`.

## 8. Auth & Permissions

| Area | Decision |
|---|---|
| Authentication required | No |
| Auth method | `none` |
| Roles | None |
| Guest access | All landing-page sections and CTA interactions are public. |
| Content management permissions | Not implemented in this MVP. |
| Analytics write permission | Guest/client event recording is permitted by the declared contract. |
| Analytics read permission | The profile marks the endpoint scope as `guest`; implement no authenticated dashboard because no dashboard is specified. |

Additional rules:

- Do not add login, signup forms, OAuth buttons, account sessions, or role checks to the landing page.
- Do not collect personal information through the landing page unless a future explicit requirement adds a form.
- The CTA only navigates to the configured downstream destination; it does not implement authentication itself.
- If the downstream destination requires authentication, that behavior belongs to the downstream service and is outside this MVP.

## 9. External Integrations (PG, OAuth, MCP, AI models)

### Payment gateway

- Enabled: No.
- Provider: Not applicable.
- Payment modes: None.
- Sandbox-first: Not applicable.
- Webhooks: Not required.
- Payment environment variables: None.
- Do not add payment or checkout functionality.

### OAuth

- Enabled: No.
- Providers: None.
- Callback path: None.
- OAuth environment variables: None.
- Do not add social login or account authorization.

### MCP

- Enabled: No.
- Servers: None.
- Do not configure MCP servers.

### AI models

- No AI model integration is specified.
- Do not add model APIs, prompt execution, generated testimonials, or AI-generated product claims.

### Analytics

The feature profile requires visit and CTA click event tracking, while `monetization.analytics_tracking` is `false`. Treat this as product event measurement required for the landing-page feature, not as an advertising or third-party analytics integration.

- Required events:
  - `page_view`: recorded when the landing page is viewed.
  - `cta_click`: recorded when a CTA is activated.
- Provider: `[TBD: analytics provider was not provided]`.
- Do not claim Google Analytics is integrated.
- If a provider is later selected, credentials must be supplied through environment variables.
- Tracking failure must never block rendering or CTA navigation.

### Advertising

- Monetization model: Ads.
- Ads required: Yes.
- Ad provider, placement, format, and ad configuration: `[TBD: not provided]`.
- Do not invent an ad provider, ad copy, ad slot dimensions, or ad network key.
- Do not allow an unresolved ad configuration to obscure the primary value proposition or CTA.

## 10. Monetization & Analytics

### Monetization

- Model: Ads.
- Payment: Not required.
- Subscriptions: Not specified and must not be added.
- The MVP must reserve monetization integration for ads, but the exact provider and placements remain `[TBD: required advertising details were not provided]`.
- Never hardcode advertising keys or secrets. Use environment variables when a provider is specified.

### Analytics event schema

| Event name | Trigger | Required properties |
|---|---|---|
| `page_view` | Landing page becomes viewable. | `name`, `pagePath`, `occurredAt` |
| `cta_click` | Visitor activates any primary CTA. | `name`, `pagePath`, `occurredAt` |

### KPI calculation

- Landing-page visits: count `page_view` events.
- CTA clicks: count `cta_click` events.
- CTA click rate for the `30d` window: `cta_click events / page_view events`.
- KPI target values remain `[미정: 목표 수치가 프로필에 제공되지 않음]`.
- Event naming and payload structure must remain consistent across all CTA placements.
- Analytics failures must be caught and logged without interrupting the user flow.

## 11. Acceptance Criteria (Given/When/Then)

### AC1 — Responsive landing-page rendering

- **Given** a visitor opens the landing page
- **When** `GET /landingpagesections` is requested or local static content is rendered on a mobile or PC screen
- **Then** the content and CTA display without breaking and fit the available screen width
- **And** text, images, and buttons do not overlap or become clipped when the viewport width changes.

### AC2 — Hero and final CTA navigation

- **Given** a visitor sees the hero or final CTA button
- **When** `POST /analyticsevents` is attempted for `cta_click` and the CTA button is clicked
- **Then** the visitor navigates to the configured sign-up or service-start destination
- **And** the destination is not an empty, invalid, or error page.

### AC3 — Visit tracking

- **Given** a visitor accesses the landing page
- **When** `POST /analyticsevents` is called with `name: "page_view"` and the current `pagePath`
- **Then** a visit event is recorded or handed to the configured analytics adapter
- **And** the event is distinguishable from `cta_click`.

### AC4 — CTA tracking failure isolation

- **Given** a visitor clicks a CTA
- **When** `POST /analyticsevents` fails, times out, or the analytics provider is unavailable
- **Then** the CTA navigation still proceeds to the configured destination
- **And** the analytics failure does not prevent page rendering or interaction.

### AC5 — Logo behavior

- **Given** a visitor views any landing-page section
- **When** the header is rendered
- **Then** the logo is visible at the top and maintains its aspect ratio without clipping or distortion
- **And** when the logo is clicked, the visitor returns to the landing-page start position or configured representative page.

### AC6 — SEO metadata

- **Given** a search engine crawler or browser loads the landing page
- **When** the page document is rendered
- **Then** it contains a unique Korean title, a Korean service/value meta description, a canonical URL, and Korean language metadata
- **And** the metadata matches the actual landing-page content.

### AC7 — Testimonials

- **Given** approved testimonial records are available from local content or `GET /testimonials`
- **When** the testimonial section is rendered
- **Then** each testimonial displays its quote, author label, and result without broken text or missing images
- **And** each result relates to furniture price comparison or reduced store-visit burden.

### AC8 — Public access and no authentication

- **Given** an unauthenticated visitor opens any specified route
- **When** `GET /landingpagesections` or `GET /testimonials` is requested
- **Then** the public landing-page content can be displayed without login, OAuth, or role verification
- **And** the implementation does not expose an account creation or login requirement.

### AC9 — Static-hosting compatibility

- **Given** the project is built using the configured Next.js and TypeScript setup
- **When** the static hosting build command is run
- **Then** the landing-page assets and specified section routes are generated in a static-hosting-compatible form
- **And** no production deployment or production domain connection is performed.

## 12. AI Workflow (IDE-specific)

The IDE target is `cubivora`. The repository also identifies the coding tool as Cursor, so use Cubivora’s project workflow together with Cursor-compatible rule files where the environment supports them.

### Required planning workflow

1. Read this PRD before editing code.
2. Inspect the existing repository structure and preserve existing conventions.
3. Create a short implementation plan covering:
   - Page and section structure.
   - Typed local content models.
   - Responsive layout.
   - SEO metadata.
   - CTA destination configuration.
   - Non-blocking analytics adapter.
   - Static-hosting build behavior.
4. Identify every `[TBD: ...]` item before implementation.
5. Implement only specified functionality.
6. Run type checks, linting, build validation, and route checks.
7. Review the implementation against every acceptance criterion.

### Cubivora project artifacts

Create or update the following project guidance artifacts if supported by the repository:

- `.cursor/rules/product-prd.mdc`
  - Treat this PRD as the single source of truth.
  - Enforce no invented features, claims, integrations, or secrets.
  - Require Korean user-facing copy and English code identifiers.
  - Require responsive behavior and static-hosting compatibility.
- `.cursor/rules/frontend-quality.mdc`
  - Require typed components.
  - Require accessible buttons and links.
  - Require non-blocking analytics.
  - Require metadata validation.
- `CLAUDE.md`
  - If the project uses Claude Code-compatible execution within Cubivora, summarize the same implementation constraints and validation commands.
- Cubivora task/feature records
  - Track F1–F7 individually.
  - Link each task to the relevant acceptance criteria.

### Agent/task decomposition

Use sub-agents or parallel tasks only for clearly separated work:

| Task | Scope | Must not do |
|---|---|---|
| `layout_agent` | Build the specified sections, header, and responsive layout. | Add unrelated screens or interactions. |
| `content_model_agent` | Create typed local models and approved-content placeholders. | Invent testimonials or product claims. |
| `seo_agent` | Add title, description, canonical, language, and OG metadata. | Invent a production domain or social image URL. |
| `analytics_agent` | Implement `page_view` and `cta_click` adapter behavior. | Block CTA navigation or add unapproved analytics providers. |
| `qa_agent` | Validate routes, responsive behavior, build output, and acceptance criteria. | Change product scope without approval. |

### Implementation conventions

- Use English `camelCase` or `snake_case` identifiers.
- Keep Korean copy in content/config modules and quote it in source when necessary.
- Put unresolved values behind explicit configuration such as `ctaConfig.destination`, not arbitrary fallback destinations.
- Use environment variables for all future external service keys.
- Do not mark a feature complete until its acceptance criteria are tested.
- Do not perform production deployment or domain connection.

## 13. Do NOT (AI forbidden rules)

- Do not add features, screens, or APIs not specified in this PRD.
- Do not turn the landing page into a furniture marketplace, comparison engine, checkout, or account product.
- Do not add login, signup forms, OAuth, roles, or permissions.
- Do not add payment processing, subscriptions, or a payment gateway.
- Do not add MCP servers or AI model integrations.
- Do not fabricate testimonials, user names, ratings, results, savings, customer counts, dates, or forecasts.
- Do not present any unverified figure as a factual claim.
- Do not invent the CTA destination. Keep it `[TBD]` until an approved URL/path is supplied.
- Do not invent the logo asset, brand name, point color, OG image, ad provider, browser list, breakpoint values, or analytics provider.
- Do not claim that the product collects no personal data if testimonials or analytics are stored on a server.
- Do not store identifiable testimonial information on a server without approved content and a defined retention policy.
- Do not hardcode API keys, secrets, ad keys, analytics credentials, or payment gateway keys.
- Do not connect a production domain or deploy to production.
- Do not make analytics failure block page rendering or CTA navigation.
- Do not allow responsive layouts to overlap, clip, distort, or hide the primary CTA.
- Do not silently replace missing required content with fictional content.
- Do not add UI languages other than Korean.
- Do not change the required routes `/hero`, `/screen`, `/screen-2`, `/screen-3`, and `/cta` without explicit approval.
- Do not treat deferred feature-gap statuses as permission to remove the corresponding must-have features from this PRD.