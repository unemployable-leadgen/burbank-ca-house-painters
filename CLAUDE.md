# CLAUDE.md, House Painting (lead-gen site)

## What this project is
A local lead-generation website for **house painters in Burbank, California**.
Static site, rented/handed to a local business owner later. Built to
rank in organic search (no reliance on GMB initially) and convert
visitors into calls.

## Build constraints (important)
- **Static HTML/CSS only. No framework** (no React/Next.js). A small
  amount of vanilla JS is fine for the mobile menu and contact form
  only.
- Keep pages fast and lightweight (small images, minimal JS). Page
  speed is an SEO factor.
- Deployed on Cloudflare (Workers static assets) later; keep output as
  plain static files.

## The rules live in ./shared-rules (git submodule, DO NOT edit here)
All writing, SEO, and structure rules are in the `shared-rules/`
submodule. Read them before writing anything. They are the source of
truth:
- `shared-rules/project-instructions.md`, the master rules (limits,
  style, banned phrases, banned punctuation, SEO). Numbers live here.
- `shared-rules/content-writing-rules.md`, HOW to write pages.
- `shared-rules/homepage-structure.md`, exact homepage layout.
- `shared-rules/checklist-pre-output.md`, run this before delivering
  any page.
- `shared-rules/google-trends-rules.md`, service-list + keyword
  validation.
- `shared-rules/niche-city-criteria.md`, niche/city selection
  criteria.
- `shared-rules/new-site-setup.md`, repo/submodule/CLAUDE.md setup
  for a brand-new site.

If a rule and this file ever disagree on a NUMBER,
`project-instructions.md` wins. Do not restate the numbers in this
file.

## Site specifics
- **Service:** House painting (residential focus; interior and
  exterior; include related sub-services found via competitor
  research; validate every candidate service with Google Trends
  before adding a page).
- **City:** Burbank, California (dense mix of 1920s-1960s single-family
  housing stock, stucco and wood-sided homes, dry hot summers and mild
  winters that drive exterior repaint cycles and sun/UV fading, plus a
  large rental/turnover market feeding interior repaint demand).
- **Primary keyword pattern:** "house painters Burbank CA" (primary
  first in title tag; H1 slightly different).
- **Pages:** homepage + one page per validated service. Follow the
  service page structure in content-writing-rules.md.

## Finalized service list (Google Trends-validated, see planning research)
- **Homepage**, house painting (interior + exterior overview).
  Primary: `house painters Burbank CA`.
- **Interior Painting** page. Primary: `interior painting Burbank CA`.
  Mentions (not standalone pages): cabinet painting/refinishing,
  drywall repair, wallpaper removal.
- **Exterior Painting** page. Primary: `exterior painting Burbank CA`.
  Mentions (not standalone pages): stucco repair, wood rot repair,
  pressure washing (adjacent trade, bundled as exterior prep only,
  decided against a standalone page to keep site focus on painting).
- **Deck & Fence Staining** page. Primary: `deck and fence staining
  Burbank CA`.
- Excluded: roofing/roof coatings (blacklisted niche), commercial/HOA/
  apartment painting (different customer segment, out of scope for
  this residential lead-gen site).

## Sibling repos (reference structure only, never copy content)
This project has multiple sites built from the same shared-rules
system. When any of these are cloned or consulted for CSS/HTML
structure, reuse the structure only, never the written sentences,
palette, or logo (see shared-rules/project-instructions.md "Content
Originality" and shared-rules/homepage-structure.md "Visual
Reference"):
- Burbank, CA landscaping (same city, different niche)
- Burbank, CA window cleaning (same city, different niche)
- Tracy, CA house painters (same niche, different city), the most
  relevant structural reference for this build since it's the same
  trade. Use it for CSS/HTML structure only. Its palette, logo, and
  every sentence of written content must NOT be reused. If this
  site's structure is cloned from that repo, run the actual text-diff
  check in shared-rules/checklist-pre-output.md before delivery.

## Workflow for this build
1. Read the shared-rules files first (especially
   content-writing-rules.md and homepage-structure.md).
2. Do competitor content research per content-writing-rules.md: average
   broad-area top rankers + any same-city competitors. Original content
   only.
3. Build the homepage to homepage-structure.md.
4. Build each validated service page to the service-page structure.
5. Run checklist-pre-output.md against every page before considering it
   done.

## Hard guardrails (from project-instructions.md, never violate)
- No em dashes anywhere. Use a period or comma.
- No banned phrases (see project-instructions.md).
- All content original, never copy competitor text, and never copy a
  sibling repo's written content even when its structure is reused.
- No keyword stuffing.
- End every page with a clear call to action.

## Placeholders (flag to user until real values are supplied)
- Phone: (847) 242-8940, still a placeholder, matches other rented sites
  for now
- Domain: burbankhousepainters.com, confirmed real. Purchased and
  connected to Cloudflare Workers (custom domain attached to the
  burbank-ca-house-painters Worker, production environment). Canonical
  tags, Open Graph URLs, sitemap.xml, and robots.txt already use this
  domain since it was used as the working domain from the start, so no
  code changes were needed.
- Formspree form action: https://formspree.io/f/xjybkpje (live)
- Photography: complete. Real photos generated, resized, optimized, and
  wired in across all pages (see image-prompts.md, status: complete)
