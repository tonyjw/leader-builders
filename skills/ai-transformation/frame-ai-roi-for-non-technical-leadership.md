---
title: Frame AI ROI for non-technical leadership
slug: frame-ai-roi-for-non-technical-leadership
version: 1.0
last-updated: 2026-04-03
status: active

category: ai-transformation
tags: [ai-adoption, roi, executive-communication, business-case, leadership]
difficulty: intermediate
works-with: [claude, chatgpt]

when-to-use: >
  When you need to present the business case for an AI tooling investment to
  a CFO, CEO, or board — people who will ask "what's the return?" and won't
  accept "productivity gains" as an answer without specifics and honesty about
  uncertainty.

not-for: >
  Internal engineering team communication about AI adoption. Engineers need
  a different framing — more honest about limitations, more focused on workflow
  specifics. Use the "Build an AI adoption plan" skill for that audience.

time-to-run: 15–20 minutes

changelog:
  - version: 1.0
    date: 2026-04-03
    changes: Initial release
---

## The reasoning

The most common mistake in AI ROI presentations to leadership is overclaiming: citing headline productivity figures (the [55% task-completion-speed improvement from GitHub's Copilot research](https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)) without acknowledging that those numbers come from controlled studies on specific task types, not whole-team productivity. [McKinsey's sector analysis](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai) projects 20–45% productivity gains in software engineering but explicitly notes that gains are unevenly distributed across task types. Presenting these numbers without that context creates a credibility gap when early results don't match expectations. This prompt builds an ROI frame that is specific to your actual context, honest about the uncertainty, and structured around the business outcomes leadership actually cares about — not engineering metrics.

---

## The prompt

```
Help me frame the business case for an AI tooling investment to
{{AUDIENCE_DESCRIPTION}}.

**The investment I'm proposing:**
{{INVESTMENT_DESCRIPTION}}

**What we know from our own data (baseline):**
{{BASELINE_METRICS}}

**What I'm projecting the gains to be:**
{{PROJECTED_GAINS}}

**Timeline to measurable results:**
{{TIMELINE}}

**Risks I need to acknowledge:**
{{KNOWN_RISKS}}

**Comparable investments for context:**
{{COMPARABLES}}

Please produce:

1. An executive summary (4–6 sentences) that leads with the business outcome,
   not the technology. What problem does this solve? What is the expected
   return? What is the cost of not doing it?

2. A translation of the productivity gains into business terms — not "55% faster
   task completion" but what that means for our specific output, cost structure,
   or time-to-market given the baseline metrics I've provided.

3. The 3 most important risks and caveats to name upfront — presented as
   responsible stewardship, not hedging. Include what we're doing to mitigate each.

4. A comparison to how the organization has evaluated similar investments —
   what's the right analogy from their existing mental model?

5. A "what we'll measure" section: 2 leading indicators visible within 60 days
   and 1 lagging indicator at 6 months. Be specific — not "track adoption" but
   exactly what metric, how measured, and what threshold indicates success.
```

---

## Variables

`{{AUDIENCE_DESCRIPTION}}` — Who you're presenting to and what they care about.
Example: `CFO and CEO at a 300-person B2B SaaS company. CFO is focused on cost efficiency and skeptical of technology spending that doesn't have clear ROI. CEO is growth-oriented but has been burned by overpromised AI initiatives before.`
Required. Audience shapes tone, specificity, and which risks to lead with.

`{{INVESTMENT_DESCRIPTION}}` — What you're asking them to approve.
Example: `GitHub Copilot Enterprise for 45 engineers ($19/seat/month = ~$10K/month) plus 20% of one senior engineer's time for the first 90 days to run the adoption program.`
Required. Include the full cost — licensing, implementation time, and any infrastructure changes.

`{{BASELINE_METRICS}}` — What you can actually measure today as a starting point.
Example: `Current deployment frequency: 8 deploys/week across 6 teams. Average PR cycle time: 4.2 days from open to merge. Engineering team cost: ~$6M/year fully loaded.`
Required. The ROI calculation is only credible if it starts from real numbers. If you don't have these metrics, say so — and the model will produce a case that acknowledges the measurement gap.

`{{PROJECTED_GAINS}}` — Your honest projection of what will change, and over what timeframe.
Example: `10–15% reduction in PR cycle time within 90 days based on Copilot research benchmarks, discounted by ~50% for our adoption rate assumptions. No projection on deployment frequency yet — too many other variables.`
Required. Be honest about uncertainty. "20–45% productivity gain" without qualification will undermine your credibility.

`{{TIMELINE}}` — When leadership can expect to see results.
Example: `30-day: usage metrics and early qualitative signal from champions. 90-day: PR cycle time comparison. 6-month: review of engineering velocity trends against pre-AI baseline.`
Required.

`{{KNOWN_RISKS}}` — The real risks, not the ones that make the investment look safer.
Example: `1. Adoption risk — engineers may not change their workflows. 2. Attribution risk — hard to isolate AI impact from other process changes. 3. Hype risk — we may have to reset expectations if early numbers don't match industry benchmarks.`
Required. Naming risks first makes the overall case more credible, not weaker.

`{{COMPARABLES}}` — Other investments this audience has approved that you can use as a reference point.
Example: `We spent $180K/year on Datadog, which the org approved based on incident reduction and MTTR improvement — similar ROI profile.`
Optional but makes the business case significantly more concrete.

---

## What good output looks like

> **Executive summary:**
> We're proposing GitHub Copilot Enterprise for the engineering team at $10K/month. Based on published research adjusted for our likely adoption rate, we expect a 10–15% reduction in PR cycle time within 90 days — which at our current velocity translates to roughly 0.5 additional features shipped per month per team. The cost is fully offset if we see an 8% improvement in engineering throughput; our conservative projection is twice that. The risk of not acting: our competitors' engineering orgs are already running on AI tooling, and the gap in output-per-engineer will compound.
>
> **Productivity gains in business terms:**
> Our engineering team costs approximately $6M/year fully loaded. A 10% throughput improvement is equivalent to adding 4.5 engineers — at $133K/year each fully loaded, that's $600K in equivalent capacity. We're spending $120K/year on Copilot to access that capacity gain, assuming our conservative adoption scenario. If adoption is higher, the ratio improves further.
>
> **Risk 1 — Adoption may be lower than benchmarks:**
> Industry studies showing 55% productivity gains assume high adoption rates. We're planning for 60–70% active adoption at 90 days, which is realistic but not guaranteed. Mitigation: we'll track weekly active usage from day 1 and pivot to a champion model if adoption stalls.

---

## What poor output looks like — and why

When `{{BASELINE_METRICS}}` is absent — "we want to improve engineering productivity" — the output can only produce generic assertions:

> "Research shows that AI coding tools improve developer productivity by up to 55%. This represents a significant opportunity for your organization."

This is exactly what non-technical leadership has heard before and doesn't believe. It makes no connection to the actual cost or output of your engineering team. Without baseline numbers, there is no credible ROI case — only benchmarks that don't apply to your context. If you don't have the metrics, the honest path is to name that gap and propose a 30-day measurement phase before committing to specific ROI claims.

---

## Failure modes

**Leading with technology, not outcome**
Starting with "AI coding assistants can..." is an engineering pitch, not an executive one. Leadership wants to know what problem this solves and what it costs if you don't solve it. The executive summary should be leadable without any mention of AI until sentence two.

**Citing benchmark numbers without adjustment**
The 55% task-completion-speed improvement from Copilot studies is real — in a controlled study on specific tasks. Presenting it as your expected result without the context of adoption rates, task mix, and measurement methodology will be challenged by any financially literate audience. Discount the benchmarks explicitly and explain why.

**Refusing to name the downside**
Leadership will ask "what if this doesn't work?" If you haven't prepared an honest answer, you'll look like you haven't thought it through. Name the downside scenario, its probability, and your mitigation.

**No measurable threshold for success**
"We'll track adoption" is not a success criterion. Specify what number, measured how, by when — and what decision you'll make if you don't hit it. This signals that you're managing an investment, not running an experiment with no accountability.

---

## Changelog

### v1.0 — April 3, 2026
Initial release.
