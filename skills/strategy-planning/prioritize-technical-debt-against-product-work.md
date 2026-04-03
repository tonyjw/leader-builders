---
title: Prioritize technical debt against product work
slug: prioritize-technical-debt-against-product-work
version: 1.0
last-updated: 2026-04-03
status: active

category: strategy-planning
tags: [technical-debt, prioritization, roadmap, engineering-strategy, product-engineering]
difficulty: advanced
works-with: [claude, chatgpt]

when-to-use: >
  When you need to make a defensible case — to your team, your product
  counterpart, or leadership — about how much engineering capacity to allocate
  to debt work versus new features, and why.

not-for: >
  Identifying or cataloguing technical debt. This skill assumes you already
  know what debt you have. It helps you prioritize and make the case for
  addressing it — not audit your codebase.

time-to-run: 15–20 minutes

changelog:
  - version: 1.0
    date: 2026-04-03
    changes: Initial release
---

## The reasoning

The original "technical debt" metaphor — coined by Cunningham to explain to business stakeholders why code sometimes needs to be refactored [Cunningham, 1992] — was useful precisely because it made an engineering concern legible to non-engineers. The problem is that the metaphor is now overloaded: teams use "tech debt" to describe everything from outdated dependencies to fundamental architectural decisions, making prioritization nearly impossible [Kruchten et al., 2012]. Kruchten's research proposes a more useful distinction: debt that actively slows down current work (high interest) versus debt that is dormant but represents future risk. This prompt builds that distinction into the prioritization framework so that the output is a ranked list with a business-legible rationale, not just an engineering wishlist.

---

## The prompt

```
I'm a {{YOUR_ROLE}} and I need to prioritize technical debt work against product
feature work for {{TEAM_CONTEXT}}.

**Current debt inventory (name the specific items):**
{{DEBT_ITEMS}}

**Current product roadmap pressure:**
{{PRODUCT_ROADMAP}}

**Team capacity:**
{{TEAM_CAPACITY}}

**Business context:**
{{BUSINESS_CONTEXT}}

Please help me produce:

1. A prioritization framework that scores each debt item on two dimensions:
   - Interest rate: how much is this debt actively slowing us down today?
   - Risk: what's the probability and severity of a future failure if we ignore it?
   Apply this framework to the specific items I've listed.

2. A recommended allocation for the next quarter: what percentage of capacity
   should go to debt vs. features, and why — with a business rationale, not
   just an engineering one.

3. A "debt that can wait" list: which items from my list can be reasonably
   deferred without material cost, and what would change that calculus?

4. Two ways to frame this tradeoff to a product manager or executive who is
   skeptical of engineering time spent on "cleanup work."

5. The single highest-priority debt item from my list and a one-paragraph case
   for why it should be addressed now rather than deferred.
```

---

## Variables

`{{YOUR_ROLE}}` — Your title and scope.
Example: `Engineering Manager for a 10-person product engineering team`
Required.

`{{TEAM_CONTEXT}}` — What the team builds and what it's focused on.
Example: `A consumer mobile app team building a subscription product, currently in a growth phase with aggressive feature targets`
Required.

`{{DEBT_ITEMS}}` — The specific debt items you're weighing. Name them.
Example: `1. Auth service built on a deprecated OAuth library with no upgrade path. 2. Mobile codebase has no test coverage on payment flows. 3. Background job infrastructure uses a homegrown queue that's unreliable above 500 jobs/hour. 4. Four-year-old analytics schema that can't support the reporting features product wants.`
Required. Generic descriptions ("we have a lot of legacy code") produce useless rankings. Name the items.

`{{PRODUCT_ROADMAP}}` — What product wants to ship this quarter.
Example: `New onboarding flow (6 weeks), referral program (4 weeks), two customer-requested integrations (3 weeks each)`
Required. The model needs to understand the opportunity cost of debt time.

`{{TEAM_CAPACITY}}` — How much engineering time you have to work with.
Example: `10 engineers, roughly 8 usable sprints in the quarter after PTO and on-call`
Required.

`{{BUSINESS_CONTEXT}}` — Stage, growth phase, any external pressure.
Example: `Series B, growing 15% MoM, board review in 8 weeks. Leadership is focused on growth metrics, not infrastructure.`
Required. A pre-IPO company with a board review next month has a different calculation than a stable B2B product.

---

## What good output looks like

> **Prioritization scoring:**
>
> | Debt item | Interest rate | Risk | Priority |
> |---|---|---|---|
> | Background job queue | High — breaks above 500 jobs/hr, we're at 420 avg | High — growth means we hit the limit within 60 days | **Address now** |
> | Auth library (deprecated OAuth) | Low — still works, no active failures | High — no upgrade path means forced migration when vendor drops support | **Address in 90 days** |
> | Payment flow test coverage | Medium — no test failures, but every payment deploy is manual-QA-heavy | High — any regression here is catastrophic | **Address this quarter, not sprint 1** |
> | Analytics schema | Low — no current breakage | Medium — blocks product roadmap items in Q3 | **Defer — address when product needs it** |
>
> **Recommended allocation:** 20% debt / 80% features this quarter. Rationale: the background job queue is the only item that will actively break during the quarter if unaddressed. Everything else is investment in future capacity. At your growth rate, 20% now avoids a 40% allocation in Q3.
>
> **Framing for product leadership:**
> "The background job queue will fail at our projected load in 60 days. When it does, we'll spend 3–4 weeks in reactive mode instead of shipping. Addressing it now costs 2 engineer-weeks. Addressing it reactively during an outage costs 6–8 engineer-weeks and a customer-visible incident."

---

## What poor output looks like — and why

When `{{DEBT_ITEMS}}` is vague — "we have technical debt across the codebase" — the output becomes a framework lecture:

> "Technical debt can be categorized into four types: architectural debt, code debt, dependency debt, and test debt. For each type, you should evaluate the interest rate and risk..."

This is a tutorial, not a prioritization. The model has nothing to rank, so it explains how ranking works instead. Fill in the actual items — even rough descriptions are enough to produce a meaningful ordered list.

---

## Failure modes

**Treating all debt as equal**
Lumping together a deprecated library (dormant risk) and a failing queue (active cost) and presenting them as a single "debt backlog" to product stakeholders makes every item sound like cleanup. The prioritization framework forces differentiation, which is what makes the conversation with product productive.

**Framing debt as engineering housekeeping**
"We need to pay down tech debt" is an engineering-internal framing. Product stakeholders need to hear the business impact: slowed delivery, incident risk, blocked features. The model will produce business-framed language if `{{BUSINESS_CONTEXT}}` is filled in honestly.

**Asking for 30–40% allocation without justification**
Large allocation requests without specific high-interest debt items get rejected by product leadership. The prioritization output shows how to make the case for specific items with specific impact — start there, not with the percentage.

**Ignoring the "debt that can wait" list**
Not all debt needs to be addressed. Including low-interest, low-risk items in the prioritization conversation undermines credibility. The model produces a "can wait" list specifically so you can pre-empt the "why can't this wait?" question for items that can't.

---

## Sources

[practitioner] Cunningham, W., "The WyCash Portfolio Management System," OOPSLA Experience Report, 1992. Available at c2.com.
The original formulation of the technical debt metaphor — coined specifically as a communication tool for explaining refactoring to business stakeholders. The financial metaphor (interest, principal) comes from this paper and directly informs the interest-rate scoring in this skill.

[research] Kruchten, P., Nord, R.L., & Ozkaya, I., "Technical Debt: From Metaphor to Theory and Practice," *IEEE Software*, Vol. 29, No. 6, 2012, pp. 18–21.
Proposes a more rigorous taxonomy distinguishing intentional vs. unintentional debt and active vs. dormant debt. The two-dimensional scoring (interest rate × risk) in this skill is derived from this framework.

---

## Changelog

### v1.0 — April 3, 2026
Initial release.
