# SKILL.md schema specification
# manager.builders — version 1.0

Every skill file in this repo follows this schema exactly.
The website parses every field. Missing fields break the build.
Required fields are marked [required]. Optional fields are marked [optional].

---

## Front matter (YAML)

```yaml
---
# ── Identity ──────────────────────────────────────────────
title: [required]
  # Short, verb-forward name. "Prepare a difficult feedback conversation."
  # Not a topic label ("Feedback") — a thing you do.

slug: [required]
  # URL-safe version of the title. kebab-case. Used as the page URL.
  # e.g. prepare-difficult-feedback-conversation

version: [required]
  # Semantic version. Start at 1.0. Increment minor for content changes,
  # major for structural changes to the prompt itself.
  # e.g. 1.0 / 1.2 / 2.0

last-updated: [required]
  # ISO date. e.g. 2025-04-01

status: [required]
  # draft | active | deprecated
  # draft = not yet published to site
  # active = published and maintained
  # deprecated = superseded, kept for reference

# ── Classification ────────────────────────────────────────
category: [required]
  # One of: people-management | strategy-planning | hiring-talent |
  #         ai-transformation | career-growth

tags: [required]
  # List of 3–6 lowercase tags. These power site filtering.
  # e.g. [feedback, performance, difficult-conversations, coaching]

difficulty: [required]
  # beginner | intermediate | advanced
  # beginner = works well with minimal context
  # intermediate = requires thoughtful variable completion
  # advanced = requires significant context; output needs expert review

works-with: [required]
  # List: [claude, chatgpt, gemini] or [all]
  # Note any model-specific behavior in prompt-notes below

# ── Usage metadata ────────────────────────────────────────
when-to-use: [required]
  # 1–2 sentence description of the specific situation this addresses.
  # This becomes the card description on the site.

not-for: [optional]
  # Situations where this skill is the wrong tool.
  # Prevents misapplication. Shown as a warning on the site.

time-to-run: [optional]
  # Rough estimate of time to complete the prompt + review output.
  # e.g. "5 minutes" / "15–20 minutes"

# ── Changelog ─────────────────────────────────────────────
changelog: [required]
  # List of version entries, newest first.
  # Each entry:
  #   version: 1.0
  #   date: 2025-04-01
  #   changes: "Initial release"
  #   reason: [optional — why the change was made]
---
```

---

## Body sections

The body follows the front matter in this exact order.
Section headings are fixed — do not rename them.

### 1. `## The reasoning` [required]

The core "why" section. This is what differentiates evidence-backed skills from
plain prompt libraries.

Structure:
- 2–4 paragraphs
- Explains what problem this skill addresses and why it's hard
- Grounds the approach in the primary sources
- Honest about tradeoffs and limitations

Tone: A knowledgeable colleague explaining their thinking, not an academic paper.
Write for someone who will read this once and then use the skill.

Link format: embed links inline in the prose where the concept is introduced.
Do not use `[Author, Year]` citation markers — link the natural phrase instead.

Example:
> Feedback conversations fail most often not because the content is wrong, but
> because the framing activates defensiveness before the message lands.
> [Kluger and DeNisi's 1996 meta-analysis](https://psycnet.apa.org/record/1996-02773-003)
> found that over a third of feedback interventions actually decreased performance —
> and the primary predictor was whether feedback threatened the recipient's sense of self.

---

### 2. `## The prompt` [required]

The actual prompt. Exactly as it should be pasted into a model.

Format:
- Wrapped in a fenced code block
- Variables in `{{DOUBLE_BRACES}}` — uppercase, underscore-separated
- No explanatory text inside the prompt itself
- Broken into labeled sections where helpful (use bold headers inside the prompt)

---

### 3. `## Variables` [required]

A definition list of every `{{VARIABLE}}` in the prompt.

For each variable:
- Name
- What to put here (1 sentence)
- Example value (inline, in backticks)
- Whether it's required or optional

---

### 4. `## What good output looks like` [required]

A realistic example of strong output. Not a sanitized ideal — something that
looks like what the model actually produces when the variables are filled in well.

This section exists because practitioners need to calibrate expectations, and
because weak examples undermine trust in the skill.

---

### 5. `## What poor output looks like — and why` [optional but strongly recommended]

A short example of output that seems OK but isn't — and an explanation of what
went wrong (usually: underspecified variables, wrong context, wrong model).

This section teaches people to use the skill correctly by showing failure modes.

---

### 6. `## Failure modes` [required]

A list of 3–5 specific ways this skill breaks down in practice.

Format: Each failure mode has:
- A name (bold)
- What happens
- How to avoid it

This section is distinct from "poor output" — it covers situational failures
(wrong context, misapplied, misread output) not just prompt execution failures.

---

### 7. `## Prompt notes` [optional]

Model-specific behavior, known quirks, version sensitivity.
Only include if there are meaningful differences across models or versions.

---

### 8. `## Changelog` [required]

Human-readable version of the front-matter changelog.
Narrative format — not just "fixed typo."

Each entry explains:
- What changed in the prompt or content
- Why the change was made
- What the previous version got wrong or missed

---

## Website rendering map

| Schema field / section | Rendered as on site |
|---|---|
| `title` | Page H1, card title |
| `when-to-use` | Card subtitle, page lede |
| `difficulty` | Badge on card and page header |
| `## The reasoning` | Full-width editorial section, above the prompt |
| `## The prompt` | Syntax-highlighted copy block with one-click copy |
| `## Variables` | Interactive variable table with inline editing (phase 2) |
| `## What good output looks like` | Collapsible example panel |
| `## Failure modes` | Warning-styled callout list |
| `changelog` | Expandable version history timeline |
| `not-for` | Yellow warning callout below the lede |
| `tags` | Filterable tag pills on card and page |
