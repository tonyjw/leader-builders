[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

# eng.builders

A structured skill library for engineering managers and leaders. Every skill is a prompt you can use directly in Claude, ChatGPT, or any LLM — backed by research, practitioner evidence, and honest failure modes.

**Live site:** [https://eng.builders](https://eng.builders)

---

## Why this is different

Most prompt libraries are collections of templates with no explanation of why they work. eng.builders takes a different approach: every skill includes the reasoning behind the prompt design, grounded in research and practitioner literature, so you understand what the prompt is optimizing for and can adapt it intelligently. Failure modes are documented so you know where the skill breaks down.

---

## Repo structure

```
leader-builders/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Cloudflare Pages deploy on push to main
├── .schema/
│   └── SKILL-SCHEMA.md         # Full schema spec — read before contributing
├── skills/
│   ├── people-management/
│   │   ├── prepare-difficult-feedback-conversation.md
│   │   ├── run-an-effective-team-retrospective.md
│   │   ├── navigate-a-low-performer-conversation.md
│   │   └── build-psychological-safety-on-a-new-team.md
│   ├── strategy-planning/
│   │   ├── write-a-technical-strategy-document.md
│   │   └── prioritize-technical-debt-against-product-work.md
│   ├── hiring-talent/
│   │   ├── write-an-engineering-manager-job-description.md
│   │   └── design-a-take-home-technical-assessment.md
│   ├── ai-transformation/
│   │   ├── build-ai-adoption-plan.md
│   │   └── frame-ai-roi-for-non-technical-leadership.md
│   └── career-growth/
│       ├── prepare-for-a-skip-level-conversation.md
│       └── write-your-own-promotion-case.md
├── site/                       # Astro site — reads from skills/ at build time
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.astro
│   │   │   ├── skills/[slug].astro
│   │   │   └── [category]/index.astro
│   │   ├── layouts/Base.astro
│   │   ├── lib/skills.ts
│   │   └── styles/global.css
│   ├── astro.config.mjs
│   └── wrangler.toml
├── README.md
└── LICENSE
```

---

## Using a skill

1. Browse skills at [eng.builders](https://eng.builders) or in the `skills/` directory
2. Open the skill page and read **The reasoning** section — it explains what the prompt is optimizing for
3. Click **Copy** to copy the prompt, or copy it directly from the markdown file
4. Fill in the `{{VARIABLES}}` with your specific context — the quality of your inputs determines the quality of the output
5. Review the **Variables** section for guidance on what each field needs
6. Check **What poor output looks like** to calibrate whether your output is on track

---

## Contributing a skill

The quality bar is intentional. Before submitting a skill, read [.schema/SKILL-SCHEMA.md](.schema/SKILL-SCHEMA.md) in full.

**The non-negotiables:**

- Every inline citation must have a matching full entry in `## Sources`
- Do not fabricate citations. If you're uncertain about a source, use `"widely documented in practitioner literature"` rather than inventing an author or title
- At least 3 named failure modes with cause and mitigation
- A realistic good output example — not a sanitized ideal
- At least 4 `{{VARIABLES}}` in the prompt

**PR process:**

1. Fork the repo and create a branch: `skill/your-skill-name`
2. Write your skill in the appropriate `skills/<category>/` directory
3. Verify all required front-matter fields are present (see schema)
4. Open a PR — the description should note your evidence sources and evidence strength rating
5. PRs are r
5. PRs are reviewed for schema compliance
---

## Running the site locally

```bash
cd site
npm install
npm run dev
```

The site reads skill files directly from `../skills/` at build time. Adding or editing a skill file and saving will hot-reload the dev server.

---

## License

MIT — see [LICENSE](./LICENSE).
