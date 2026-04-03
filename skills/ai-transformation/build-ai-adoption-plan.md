---
title: Build an AI adoption plan for your engineering team
slug: build-ai-adoption-plan
version: 1.0
last-updated: 2025-04-01
status: active

category: ai-transformation
tags: [ai-adoption, copilot, llm, change-management, rollout, measurement]
difficulty: advanced
works-with: [claude, chatgpt]

evidence-strength: moderate
evidence-types: [research, practitioner, field]
primary-sources:
  - "Forsgren et al., Accelerate, 2018"
  - "McKinsey Global Institute, The Economic Potential of Generative AI, 2023"
  - "Kalliamvakou, GitHub Copilot Research, 2022"

when-to-use: >
  When planning or mid-execution on an AI tooling rollout — coding assistants,
  production LLM integrations, or internal AI tooling — and you need a
  structured adoption plan that includes the change management layer, not just
  the technical one.

not-for: >
  Point decisions about which AI tool to buy. Use a vendor evaluation framework
  for that first. This skill assumes the tool decision has been made and focuses
  on adoption strategy.

time-to-run: 20–30 minutes

changelog:
  - version: 1.0
    date: 2025-04-01
    changes: Initial release
---

## The reasoning

Most AI adoption efforts in engineering orgs fail the same way enterprise software
adoptions have always failed: the technical rollout is treated as the hard part,
and the change management layer is treated as communication. They are not the same
thing, and confusing them is expensive.

The most relevant quantitative evidence here is GitHub's own research on Copilot
adoption [Kalliamvakou, 2022], which found that developers using Copilot completed
tasks 55% faster — but the variance in that number was enormous. Teams with low
adoption rates got little benefit; teams with high adoption rates exceeded the
average significantly. Adoption rate, not tool quality, was the primary driver of
outcome. This finding holds for LLM tooling broadly: a tool used by 20% of the
team at low intensity delivers a fraction of the value of one used by 80% at high
intensity.

The McKinsey analysis [McKinsey, 2023] adds useful sector-level framing: software
engineering is one of the highest-leverage domains for generative AI, with
estimated productivity gains of 20–45% on coding tasks. But their analysis also
flags that gains are not uniformly distributed — they skew toward certain task
types (boilerplate, test generation, documentation) and away from others (complex
architectural reasoning, cross-system debugging). This shapes what you ask the
team to use AI for in the first 90 days.

The change management research is less AI-specific but directly applicable.
Prosci's ADKAR model [Hiatt, 2006] — Awareness, Desire, Knowledge, Ability,
Reinforcement — maps cleanly onto AI adoption patterns. The failure mode most
common in engineering teams is skipping from Awareness directly to Ability
(training + enablement) without building Desire. Engineers who don't see why they
should change their workflow will not change their workflow, regardless of how
good the training is. Champions — engineers who are genuinely curious and credible
to their peers — are the mechanism for building Desire. They are more important
than mandates.

---

## The prompt

```
I'm leading an AI tooling rollout for my engineering organization. Help me build
a structured 90-day adoption plan that treats change management as seriously as
technical enablement.

**My context:**
- My role: {{YOUR_ROLE}}
- Total engineers in scope: {{TEAM_SIZE}}
- Team structure: {{TEAM_STRUCTURE}}
- Tools being rolled out: {{AI_TOOLS}}
- Company stage and industry: {{COMPANY_CONTEXT}}

**Current state:**
- Current AI usage: {{CURRENT_USAGE}}
- Team technical sophistication: {{TECHNICAL_SOPHISTICATION}}
- Leadership appetite for this: {{LEADERSHIP_APPETITE}}
- Compliance or data constraints: {{COMPLIANCE_CONSTRAINTS}}

**Goals and measurement:**
- Primary goal: {{PRIMARY_GOAL}}
- How I'll be measured: {{SUCCESS_METRICS}}
- Timeline pressure: {{TIMELINE}}

Please produce:

1. A phased 90-day rollout plan with specific activities per phase (weeks 1–4,
   5–8, 9–12). For each phase, name the primary objective, 3–4 key activities,
   and what "done" looks like.

2. A champion identification and activation guide — who to look for, how to
   equip them, and how to use them to pull adoption without mandates.

3. The 3 most common failure modes in engineering AI adoption and specific
   mitigation for each given my context.

4. A measurement framework with 3 leading indicators (visible within 30 days)
   and 2 lagging indicators (visible at 90 days). Be specific — not "track
   adoption" but "track X using Y method."

5. Communication templates for two audiences: what to say to engineers (honest,
   not hype), and what to say to leadership (outcomes-focused).
```

---

## Variables

`{{YOUR_ROLE}}` — Your title and level.
Example: `Director of Engineering`
Required. A Director with budget authority runs a different plan than a manager
trying to influence up.

`{{TEAM_SIZE}}` — Total engineers in scope for this rollout.
Example: `45 engineers across 6 teams`
Required.

`{{TEAM_STRUCTURE}}` — How teams are organized.
Example: `4 product squads, 1 platform team, 1 data engineering team`
Required. Structure affects sequencing — platform teams often make the best
early adopters because their work (tooling, infrastructure, automation) maps well
to AI assistance.

`{{AI_TOOLS}}` — Specific tools being rolled out.
Example: `GitHub Copilot for all engineers; Claude Code for senior ICs and above;
AWS Bedrock for one experimental production use case`
Required. The more specific, the better — different tools need different adoption
strategies. A coding assistant adoption is not the same as a production LLM
integration.

`{{COMPANY_CONTEXT}}` — Stage, industry, and any context that shapes the rollout.
Example: `Series B healthtech, HIPAA-covered data, 200 employees total`
Required. Regulated industries need a compliance layer before any adoption begins.
This variable should flag if you're in one.

`{{CURRENT_USAGE}}` — Where your team is starting from.
Example: `Informal — some engineers using ChatGPT personally, nothing sanctioned
or measured`
Required. "None" and "informal" produce very different phase 1 plans.

`{{TECHNICAL_SOPHISTICATION}}` — How technically capable your engineers are.
Example: `High — mostly senior engineers, comfortable with APIs and tooling`
Required. High-sophistication teams need less structured onboarding and more
governance; lower-sophistication teams need the inverse.

`{{LEADERSHIP_APPETITE}}` — How much support you have from above.
Example: `Enthusiastic but not yet committed to specific targets`
Required. This shapes how much top-down mandate you can rely on vs. how much
you need to pull adoption bottom-up.

`{{COMPLIANCE_CONSTRAINTS}}` — Data handling, IP, or regulatory constraints.
Example: `HIPAA — no PHI can leave our network. All tools must be configured for
enterprise data privacy before rollout.`
Required if any apply. Can be `None known` if truly unconstrained. Do not guess
here — confirm before rollout begins.

`{{PRIMARY_GOAL}}` — What success means.
Example: `Measurable reduction in cycle time on feature delivery within 90 days`
Required. "Productivity" is too vague. "20% reduction in time from PR open to
merge" is a goal the plan can be built around.

`{{SUCCESS_METRICS}}` — How you'll actually be measured by your organization.
Example: `Adoption rate (target: 70% of engineers using weekly by day 60) and
self-reported time savings (via monthly survey)`
Required. Knowing your metrics upfront shapes phase sequencing and data collection
setup.

`{{TIMELINE}}` — How much pressure you're under to show results.
Example: `Need to show meaningful adoption numbers to the board in 60 days`
Required. Timeline pressure changes phase 1 priorities significantly.

---

## What good output looks like

> **Phase 1 (Weeks 1–4): Foundation without mandate**
>
> *Objective:* Get the right people equipped and generating early signal.
>
> *Key activities:*
> - Identify 4–6 champions across teams — look for engineers who are genuinely
>   curious (not just the most senior), and who have credibility with their peers.
>   Schedule 1:1s with each to gauge interest and share early access.
> - Complete compliance review and enterprise configuration before any team
>   access is granted. One HIPAA incident at week 1 kills the rollout.
> - Run a champions-only setup session: hands-on, 90 minutes, focused on the
>   specific workflows where the tool has most demonstrated value (test generation,
>   documentation, boilerplate). Not a general demo.
> - Begin baseline measurement now: pull last 60 days of PR cycle time, deployment
>   frequency, and any existing survey data on developer satisfaction.
>
> *Done looks like:* 4–6 champions equipped and actively using the tool on real
> work. Compliance cleared. Baseline metrics captured.
>
> **Champion communication template (to engineers):**
> "We're rolling out [Tool]. I want to be honest about what we know and what we
> don't: there's strong evidence it helps with specific tasks — writing tests,
> generating documentation, exploring unfamiliar APIs. There's less evidence it
> helps with complex architectural work. We're going to measure whether it
> actually changes things for us, not just assume it will. [Champion names] are
> starting first and will share what they learn. You'll get access in [timeframe]."

---

## What poor output looks like — and why

Under-specified `{{COMPLIANCE_CONSTRAINTS}}` — written as "N/A" for a HIPAA-covered
company — produces a rollout plan with no compliance gate in phase 1. This is
dangerous. The model has no way to know your regulatory context unless you tell it.

A vague `{{PRIMARY_GOAL}}` like "improve productivity" produces a measurement
framework full of non-specific indicators ("track usage," "gather feedback") that
won't satisfy a board or a CFO. The quality of the measurement output is almost
entirely determined by how specific you are here.

---

## Failure modes

**Treating compliance as phase 2**
In any regulated environment, compliance configuration must precede access — not
run in parallel with it. One data handling incident in the first two weeks of a
rollout creates organizational scar tissue that takes months to heal. The model
will flag this if you fill in `{{COMPLIANCE_CONSTRAINTS}}` honestly; it won't if
you leave it blank.

**Skipping champions, going straight to mandate**
Mandated AI adoption in engineering orgs produces resentment and metric gaming,
not genuine behavior change. Engineers are highly sensitive to top-down tool
mandates, especially for workflows that feel personal (how I write code). Champions
work because they speak peer-to-peer, share failures honestly, and demonstrate use
cases the team finds credible.

**Measuring the wrong things**
The most common early metric is "accounts activated" or "seats used." Both are
nearly meaningless — they measure access, not adoption. Leading indicators that
actually predict lagging outcomes: weekly active usage rate, number of engineers
who used the tool on a PR in the last 7 days, and qualitative signals from
champions about which use cases are landing.

**The AI hype problem**
Overpromising to leadership in the first 30 days creates a credibility gap that
undermines the rollout when reality doesn't match expectations. Use the
"communication to leadership" template from the output, which is calibrated to be
outcomes-focused without being hype-forward.

**Treating all engineers the same**
Staff and senior engineers often have the sharpest initial skepticism and the most
to gain from AI on the specific tasks they find tedious. New engineers often
over-rely on AI output before they have the judgment to evaluate it. These are
different problems that need different rollout approaches. The prompt surfaces this
if you provide `{{TECHNICAL_SOPHISTICATION}}` in enough detail.

---

## Prompt notes

**Claude** produces more nuanced failure mode analysis and is more likely to push
back on unrealistic timelines. If your timeline pressure is extreme, Claude may
explicitly flag that the goal and the timeline are in tension — treat this as
useful signal, not obstruction.

**ChatGPT (GPT-4o)** tends to produce more structured phase plans with cleaner
formatting. If you need something closer to a slide-ready output, GPT-4o often
requires less cleanup. For the reasoning and failure mode sections, Claude
typically goes deeper.

**Both models** will produce better compliance guidance if you name your specific
regulatory framework (HIPAA, SOC 2, GDPR, FedRAMP) rather than describing it
generically.

---

## Sources

[research] Kalliamvakou, E., "Research: quantifying GitHub Copilot's impact on
developer productivity and happiness," GitHub Blog, 2022.
https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/
The most rigorous published study on coding assistant productivity impact.
55% faster task completion; adoption rate as the primary variance driver.

[research] McKinsey Global Institute, "The economic potential of generative AI:
The next productivity frontier," June 2023.
https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai
Sector-level productivity estimates with software engineering as a high-leverage
domain. Useful for framing the opportunity to leadership without overpromising.

[practitioner] Forsgren, N., Humble, J., & Kim, G., *Accelerate: The Science of
Lean Software and DevOps*, IT Revolution, 2018.
Establishes the DORA metrics framework (deployment frequency, lead time, change
failure rate, MTTR) which provides the best pre-existing baseline measurement
system for AI adoption impact. Directly informs the measurement framework section.

[practitioner] Hiatt, J., *ADKAR: A Model for Change in Business, Government and
our Community*, Prosci Learning Center, 2006.
The ADKAR model (Awareness, Desire, Knowledge, Ability, Reinforcement) is the
most widely validated change management framework and maps cleanly onto AI
adoption patterns in engineering teams. The champion strategy in this skill is
directly derived from the Desire phase of ADKAR.

[field] Anonymous, Director of Engineering, Series B SaaS company, 100 engineers,
2024. Rolled out GitHub Copilot across 8 teams over 90 days. Adoption at day 30
was 18% (seat-based). After shifting from mandate to champion model at day 45,
adoption reached 71% at day 90. Primary insight: the two engineers who were most
vocal skeptics in week 1 became the most effective champions by week 6 after
being given early access and genuine autonomy to evaluate.

---

## Changelog

### v1.0 — April 1, 2025
Initial release. The field evidence entry is a single anonymized case; additional
field cases will be added as community submissions are reviewed.
