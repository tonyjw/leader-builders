---
title: Write a technical strategy document
slug: write-a-technical-strategy-document
version: 1.0
last-updated: 2026-04-03
status: active

category: strategy-planning
tags: [strategy, technical-vision, architecture, roadmap, engineering-leadership]
difficulty: advanced
works-with: [claude, chatgpt]

when-to-use: >
  When your team or organization needs a written technical direction document —
  to align engineering on approach, make tradeoffs legible to stakeholders, or
  establish a shared foundation before a major build.

not-for: >
  Architecture decision records (ADRs) for individual technical decisions, or
  quarterly roadmap documents. This skill produces the strategy layer above those:
  the "why we're going this direction" document, not the detailed implementation plan.

time-to-run: 20–30 minutes

changelog:
  - version: 1.0
    date: 2026-04-03
    changes: Initial release
---

## The reasoning

Technical strategy documents fail most often because they describe what will be built without explaining why the current state is insufficient or what tradeoffs are being accepted [Larson, 2019]. The result is a document that's aspirational but not actionable — engineers can't use it to make decisions because it doesn't tell them what to optimize for. Reilly's framework for staff-level technical work emphasizes that a useful strategy document must name the constraints explicitly, because constraints are what make the strategy real rather than theoretical [Reilly, 2022]. This prompt structures the document to lead with diagnosis rather than solution, which is the structural difference between a strategy and a roadmap.

---

## The prompt

```
Help me write a technical strategy document for {{ORGANIZATION_CONTEXT}}.

**Problem I'm solving:**
{{PROBLEM_SCOPE}}

**Current state — what's true today:**
{{CURRENT_STATE}}

**Constraints that shape the solution space:**
{{CONSTRAINTS}}

**Time horizon for this strategy:**
{{TIME_HORIZON}}

**Primary audience:**
{{AUDIENCE}}

Please produce a structured technical strategy document with these sections:

1. **Situation** (2–3 paragraphs): What is the current state and why is it insufficient?
   Name the actual problem — not symptoms, but the underlying structural issue.
   Be specific about what's breaking, what's slowing the team down, or what
   opportunity is being missed.

2. **Complicating factors** (bullet list): What makes this hard? What constraints or
   tensions exist that a simple solution would ignore?

3. **Proposed direction** (3–4 paragraphs): The approach we're taking and why. This
   should explain the logic, not just describe the plan. For each key choice, name
   the alternatives considered and why this direction wins given our constraints.

4. **What we're not doing** (bullet list): Explicit non-goals. What reasonable
   approaches are we ruling out, and why?

5. **Success criteria** (3–5 items): How do we know this strategy is working 6 months
   in? Be specific — not "improved reliability" but "P99 latency under X ms for Y."

6. **Key risks and mitigations**: The 3 most likely ways this strategy fails and
   what we're doing to reduce each.

7. **Open questions**: What do we still need to figure out? This section makes the
   document honest about its own limits.
```

---

## Variables

`{{ORGANIZATION_CONTEXT}}` — Company stage, size, and what the engineering org does.
Example: `A 60-person engineering org at a Series C B2B SaaS company building a data pipeline platform`
Required.

`{{PROBLEM_SCOPE}}` — What technical problem or opportunity this strategy addresses.
Example: `Our data ingestion layer was built for single-tenant customers and can't support the multi-tenant architecture our enterprise customers require. Every new enterprise deal requires custom infrastructure work.`
Required. The more specific the problem, the more actionable the strategy.

`{{CURRENT_STATE}}` — What's true today — architecture, team structure, technical decisions already made.
Example: `Monolithic ingestion service, PostgreSQL for all storage, no tenant isolation at the data layer. 12 engineers on the data platform team, 3 of whom understand the existing architecture deeply.`
Required. This is the baseline the strategy departs from.

`{{CONSTRAINTS}}` — Real limits: team size, budget, timeline, legacy systems, org politics.
Example: `Can't rewrite from scratch — we have 200 active customers on the current system. 2 engineers available for platform work while the rest support existing customers. Board review in 6 months where we need to show enterprise readiness.`
Required. Constraints are what make strategy decisions real. Generic constraints produce generic strategies.

`{{TIME_HORIZON}}` — How far out this strategy is written for.
Example: `12 months`
Required. 3-month strategies look different from 3-year ones.

`{{AUDIENCE}}` — Who will read this and what they need from it.
Example: `Engineering team (primary), CTO (secondary), product leadership (context only)`
Required. Audience shapes the level of technical detail and the framing of tradeoffs.

---

## What good output looks like

> **Situation**
>
> Our data ingestion layer was designed in 2021 for a single-tenant world. Each customer's data flows through a shared ingestion service that was never built to isolate compute, storage, or failure domains by tenant. This worked at 50 customers. At 200 it is beginning to fail: a single large-volume customer can saturate shared resources and degrade performance for others. We can't offer the SLA guarantees enterprise customers require because we can't isolate them.
>
> The underlying structural problem is not the ingestion service itself — it's that our data model has no tenant concept at the infrastructure layer. Tenant isolation exists only at the application layer (query-time filtering), which means isolation failures require application-level fixes, not infrastructure controls.
>
> **Complicating factors:**
> - We cannot take the ingestion service offline to migrate — it processes $2M/month in customer data
> - Three engineers who designed the current system are the only people who understand it fully; two of them are at risk of attrition
> - Our PostgreSQL schema assumes single-tenancy at 8 levels of nesting; a migration is months of work
> - Enterprise deals are closing now; we need to show a credible path within 6 months, not deliver it
>
> **Proposed direction**
>
> We will introduce tenant isolation at the infrastructure layer incrementally, using a strangler fig pattern — new enterprise tenants get isolated infrastructure from day one, while existing tenants migrate on a rolling basis with no service interruption...

---

## What poor output looks like — and why

When `{{CURRENT_STATE}}` is underspecified — "we have some technical debt and need to modernize" — the strategy document becomes generic:

> "We will invest in modernizing our technical infrastructure to support future growth. This includes improving reliability, scalability, and developer productivity."

This isn't a strategy — it's a goal statement. It tells no one what to do when they face a decision in three months. The model needs the actual architectural and organizational state to produce a strategy that makes choices rather than just aspirations. If you can't fill in current state specifically, the strategy document isn't ready to be written.

---

## Failure modes

**Describing the solution before the diagnosis**
Starting with "we will build X" before establishing why the current state is insufficient. The audience can't evaluate the solution if they don't share the diagnosis. The "situation" section must come first and stand on its own.

**Absent non-goals**
Without a "what we're not doing" section, the document will be read as endorsing every adjacent approach that isn't explicitly excluded. Non-goals also prevent the strategy from scope-creeping in execution.

**Vague success criteria**
"Improved performance" is not a success criterion. Every success criterion should be falsifiable: either we hit it or we didn't. The model will produce specific criteria if you provide specific problem context — but will produce vague ones if the problem is vague.

**Writing for the wrong audience**
A strategy document written for the CTO and read by ICs produces misalignment. Fill in `{{AUDIENCE}}` specifically — the level of technical detail and the framing of tradeoffs change significantly.

---

## Sources

[practitioner] Larson, W., *An Elegant Puzzle: Systems of Engineering Management*, Stripe Press, 2019.
The most practical guide to engineering strategy at scale. The "situation → complicating factors → proposed direction" structure in this skill is adapted from Larson's strategy document framework, with emphasis on leading with diagnosis.

[practitioner] Reilly, T., *The Staff Engineer's Path: A Guide for Individual Contributors Navigating Growth and Change*, O'Reilly Media, 2022.
Covers the role of written technical strategy in staff-level work, including how to make tradeoffs legible and how to handle the "constraints first" structure. Directly informs the non-goals and constraints sections.

---

## Changelog

### v1.0 — April 3, 2026
Initial release.
