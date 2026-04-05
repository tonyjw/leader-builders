# leader.builders — Design System

A reference for Claude Code and any contributor. Before writing layout, component, or style code, read this file. It defines the aesthetic contract for the site.

---

## Brand Identity

**What this site is:** A curated library of structured prompts for engineering leaders — serious, researched, practitioner-grade. Not a blog. Not a startup marketing site. Think a well-edited field guide or practitioner handbook.

**Tone:** Authoritative without being academic. Spare without being cold. The design should feel typeset — as if the content was important enough to be treated like a book.

**One word:** *Considered.*

**Design reference:** Edward Tufte — specifically his approach to presenting analytical information: hierarchy through type alone, no decorative color, generous whitespace, scholarly restraint.

---

## Aesthetic Direction

**Primary aesthetic:** Typeset / scholarly. Heavy emphasis on typography as the primary (and almost only) visual element. Hierarchy is expressed through weight, size, and italic — not color or decoration.

**What we are not:**
- A SaaS product landing page (no hero sections, no gradient CTAs)
- A developer tool (no dark mode defaults, no chrome)
- A content farm (no card grids, no noise)
- Generic AI-generated UI (no Inter/Roboto, no purple gradients, no rounded card shadows)

---

## Color System

Tufte-influenced: near-monochromatic. Color does not carry meaning here — type does. The palette exists to get out of the way.

```css
:root {
  /* Base — Tufte's own values */
  --color-paper:       #FFFFF8;   /* barely-cream white, almost pure but not */
  --color-ink:         #111111;   /* near-black, primary text */
  --color-ink-muted:   #555555;   /* secondary text, metadata, labels */
  --color-ink-faint:   #999999;   /* tertiary, placeholders */

  /* Structure */
  --color-rule:        #DADADA;   /* horizontal rules, borders */
  --color-surface:     #F3F3EC;   /* code/prompt block background — same cream family, slightly recessed */

  /* No accent color. Hierarchy is typographic, not chromatic. */
}
```

**Usage rules:**
- `--color-paper` is the page background, always. Never pure white, never gray.
- `--color-surface` is used exclusively for code and prompt blocks. It reads as a subtle recess without introducing a new hue — same cream family, a few steps darker.
- There is no accent color. Do not add one. If something needs emphasis, use italic or small caps in the same typeface.
- Links: `--color-ink`, underlined via `text-decoration-color: var(--color-rule)`. On hover: `text-decoration-color: var(--color-ink)`. No color change — only the underline darkens.

---

## Typography

Typography is the entire design. Every sizing and weight decision matters. No element should need color or decoration to communicate its role.

### Typefaces

| Role | Family | Source |
|---|---|---|
| All prose — headings, body, labels | **ET Book** | Self-hosted (see below) |
| Code blocks and prompt blocks | **Fira Code** | Google Fonts |

**ET Book** is the digitization of the typeface used in Tufte's own books. It has true italics, old-style figures, genuine small caps, and book proportions. It is not on Google Fonts — self-host it.

```
Download: https://github.com/edwardtufte/et-book
Files needed: et-book-roman-line-figures, et-book-display-italic-old-style-figures,
              et-book-bold-line-figures, et-book-roman-old-style-figures
Place in: /fonts/
```

```css
@font-face {
  font-family: 'ET Book';
  src: url('/fonts/et-book-roman-line-figures.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'ET Book';
  src: url('/fonts/et-book-bold-line-figures.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'ET Book';
  src: url('/fonts/et-book-display-italic-old-style-figures.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
```

For the prompt/code environment, load Fira Code:
```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

**Never use:** Inter, Roboto, System UI, Arial, Space Grotesk, DM Mono, Playfair Display, Source Serif, or any other typeface. ET Book for all prose; Fira Code for monospace only.

### Type Scale

```css
:root {
  --text-xs:   0.75rem;    /* 12px — fine print only */
  --text-sm:   0.875rem;   /* 14px — metadata, small labels */
  --text-base: 1.0625rem;  /* 17px — body copy */
  --text-lg:   1.2rem;     /* ~19px — lead paragraphs */
  --text-xl:   1.5rem;     /* 24px — h2 section headings */
  --text-2xl:  2rem;       /* 32px — h1 page headings */
  --text-3xl:  2.75rem;    /* 44px — display only */

  --leading-tight:  1.2;
  --leading-prose:  1.75;   /* book leading — generous */
  --leading-snug:   1.45;

  --tracking-sc:    0.06em; /* small caps letter-spacing */
}
```

### Typography Rules

- **H1:** ET Book 700, `--text-2xl`, `--leading-tight`. Never italic at heading size.
- **H2 (section/category headings):** ET Book 400, `--text-xl`, `--leading-tight`. Weight comes from size and the rule above, not bold.
- **Body:** ET Book 400, `--text-base`, `--leading-prose`. Should feel like reading a well-set book.
- **Labels and metadata** (category names, "When to use" section headers, level indicators): ET Book small caps via `font-variant: small-caps`, `--text-sm`, `--color-ink-muted`, `--tracking-sc`. Same typeface — not a different font. This is the Tufte approach.
- **Italic:** ET Book italic for "When to use / When not to use" body text, inline emphasis in prose, and the site logotype in nav.
- **Links:** `--color-ink`, `text-decoration: underline`, `text-decoration-color: var(--color-rule)`. On hover: `text-decoration-color: var(--color-ink)`. No color shift.

---

## Layout & Spacing

### Grid

Single-column reading experience. Width constrained by reading measure.

```css
:root {
  --max-prose:    680px;   /* skill body, homepage intro */
  --max-content:  820px;   /* skill index list */
  --max-site:    1100px;   /* nav, footer wrapper */

  --space-xs:    0.25rem;
  --space-sm:    0.5rem;
  --space-md:    1rem;
  --space-lg:    2rem;
  --space-xl:    4rem;
  --space-2xl:   8rem;
}
```

**Page structure:**
```
[nav — max-site]
[header — max-prose, --space-2xl top padding]
[content — max-prose or max-content]
[footer — max-site]
```

**Spacing rules:**
- Category headings on the index: full-width `--color-rule` above, `--space-xl` below before the first skill
- Between skill items in the index: `--space-lg`
- Between skill title and its summary blurb: `--space-xs`
- Inner pages: `--space-2xl` from nav bottom to H1

### Responsive

Mobile-first. At `< 640px`:
- Body font stays at `--text-base` (ET Book reads well at 17px on mobile)
- H1 drops to `--text-xl`
- Horizontal page padding: `1.25rem`

---

## Components

### Nav

- Left: `leader.builders` in ET Book italic, `--text-base`, linking home
- Right: GitHub link, ET Book roman, `--text-sm`, `--color-ink-muted`
- No background fill. Sits on `--color-paper`. `1px` bottom rule in `--color-rule`.
- Not sticky.

### Skill Index List

Bibliography-style rows. No cards, no boxes.

```
[Full-width rule in --color-rule]
CATEGORY NAME                       ← ET Book small caps, --color-ink-muted, --tracking-sc

Skill title                         ← ET Book roman, --text-base, link underline on hover
When to use summary...              ← ET Book italic, --text-base, --color-ink-muted
```

No box-shadow. No border-radius. No hover backgrounds. Title underline is the only hover affordance.

### Skill Page

```
Breadcrumb: All skills / Category   ← ET Book small caps, --text-sm, --color-ink-muted

H1: Skill title                     ← ET Book bold, --text-2xl, --leading-tight

[full-width rule]
WHEN TO USE                         ← ET Book small caps label
Body in ET Book italic...

[full-width rule]
WHEN NOT TO USE                     ← same treatment

[full-width rule]
THE REASONING                       ← small caps label, ET Book roman prose below

[full-width rule]
THE PROMPT                          ← small caps label, prompt block below

[full-width rule]
VARIABLES                           ← small caps label, definition list below
```

Section dividers: `1px` rule in `--color-rule`. No boxes, no colored sections, no shading.

### Level Indicator

Not a boxed badge — an inline annotation in small caps.

```css
.skill-level {
  font-family: 'ET Book', serif;
  font-variant: small-caps;
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  letter-spacing: var(--tracking-sc);
}
```

No border, no box, no color. Reads as a quiet annotation alongside the H1.

### Prompt Block

The prompt is the product. Fira Code gives it a distinct "this is a tool" feel while `--color-surface` keeps it in the same cream family — it recedes rather than pops.

```css
.prompt-block {
  font-family: 'Fira Code', monospace;
  font-size: var(--text-sm);
  line-height: 1.7;
  background: var(--color-surface);       /* #F3F3EC — cream family, slightly recessed */
  border-top: 1px solid var(--color-rule);
  border-bottom: 1px solid var(--color-rule);
  padding: var(--space-lg);
  white-space: pre-wrap;
  color: var(--color-ink);
  margin: var(--space-lg) 0;
}
```

**Key decisions:**
- `--color-surface` is in the same cream family as `--color-paper` — not a contrasting box
- Full-width top/bottom rules contain it without boxing it — typeset, not UI component
- No left accent bar
- Fira Code is legible and slightly warmer than typical monospace; suits the palette

**Copy button:** ET Book small caps, `--text-xs`, `--color-ink-muted`, positioned top-right of block. On success: text changes to "Copied" for 1.5s. Instant swap — no animation.

### Variable List

Rendered as a definition list:

```css
.variable-term {
  font-family: 'Fira Code', monospace;
  font-size: var(--text-sm);
  color: var(--color-ink);
  margin-top: var(--space-lg);
}

.variable-definition {
  font-family: 'ET Book', serif;
  font-style: italic;
  font-size: var(--text-base);
  color: var(--color-ink-muted);
  margin: var(--space-xs) 0;
}

.variable-example {
  font-family: 'ET Book', serif;
  font-size: var(--text-sm);
  color: var(--color-ink-faint);
}
```

### Search

- Full-width within content column, ET Book roman, `--text-base`
- `1px` bottom border in `--color-rule` only — no box, no border-radius, background is `--color-paper`
- Placeholder: `--color-ink-faint`
- Results filter inline, immediate

### Footer

- ET Book roman, `--text-sm`, `--color-ink-muted`
- `1px` top rule in `--color-rule`, `--space-xl` top margin
- Links follow body link treatment

---

## Motion & Interaction

None. A typeset book does not animate. Static, immediate, permanent.

- No entrance animations
- No hover transforms or lifts
- No CSS transitions on any property
- No scroll effects or parallax
- The copy button "Copied" state is the single allowed interaction — instant text swap, no fade or color animation

---

## What to Avoid

| ❌ Don't | ✓ Do instead |
|---|---|
| Inter, Roboto, DM Mono, or any non-ET Book font for prose | ET Book for all prose and labels |
| Color for hierarchy or emphasis | Weight (bold), style (italic), small caps |
| Accent colors, colored links, hover color shifts | Underline darkening only (`text-decoration-color`) |
| Pure `#ffffff` background | Tufte cream `#FFFFF8` |
| Contrasting background for prompt block | `--color-surface` (#F3F3EC) — same cream family |
| Left-border accent on prompt block | Full-width top/bottom rules |
| Boxed badges with borders or fills | Inline small caps annotation |
| Card grids, box-shadows, border-radius > 0 | Flat list rows, typographic hierarchy only |
| CSS transitions, animations, hover transforms | Static, immediate rendering |
| Adding colors outside the defined palette | Use opacity or existing tokens |
| `text-transform: uppercase` to fake small caps | `font-variant: small-caps` with ET Book's true small caps |

---

## Implementation Notes for Claude Code

1. **ET Book must be self-hosted** — download from `https://github.com/edwardtufte/et-book`, serve from `/fonts/`. Not on Google Fonts.
2. **Always use CSS custom properties** — never hardcode hex values, font names, or sizes.
3. **Small caps via `font-variant: small-caps`** — ET Book has true small caps; never fake them with `text-transform: uppercase` at reduced size.
4. **Semantic HTML** — `<article>`, `<nav>`, `<main>`, `<dl>`/`<dt>`/`<dd>` for variables, `<time>` where appropriate.
5. **Reading measure** — body text must stay within `--max-prose`. Wider than that is a bug.
6. **No motion** — if you find yourself writing a `transition` or `animation` property, stop.
7. **Test at 375px** — ET Book on mobile should feel like a well-formatted ebook, not a shrunken desktop layout.

---

*Last updated: 2026. Reference this file before generating any layout, style, or component code for leader.builders.*
