---
title: Write your own promotion case
slug: write-your-own-promotion-case
version: 1.0
last-updated: 2026-04-03
status: active

category: career-growth
tags: [promotion, career-growth, self-advocacy, leveling, staff-engineer]
difficulty: intermediate
works-with: [all]

when-to-use: >
  When you're building a written case for your own promotion — either as a
  self-nomination document, a packet for a calibration committee, or prep
  material for your manager to advocate on your behalf.

not-for: >
  Annual performance self-reviews that aren't tied to a promotion decision.
  Those have a different purpose — this skill is specifically for the promotion
  case document that will be read by people who don't know you well.

time-to-run: 20–30 minutes

changelog:
  - version: 1.0
    date: 2026-04-03
    changes: Initial release
---

## The reasoning

The most common failure in self-written promotion cases is [describing activity rather than impact](https://www.noidea.dog/glue): what the person did rather than what changed because they did it. Promotion committees at calibration aren't evaluating effort — they're evaluating evidence that the person is already operating at the next level. [Larson's framework for leveling](https://lethain.com/sharing-your-managers-context/) distinguishes between demonstrating competence at your current level (which is expected, not promotable) and demonstrating scope, judgment, and leverage that exceed your current role. This prompt structures the case around that distinction: not "what I did" but "what the org can now do because of how I operated."

---

## The prompt

```
Help me write a compelling promotion case for myself.

**My current role and level:**
{{CURRENT_ROLE}}

**The role and level I'm being considered for:**
{{TARGET_ROLE}}

**My company's promotion criteria (if documented):**
{{PROMOTION_CRITERIA}}

**My strongest impact examples from the last 12–18 months:**
{{IMPACT_EXAMPLES}}

**How I've operated above my current level:**
{{ABOVE_LEVEL_EVIDENCE}}

**Who will read this and make the decision:**
{{DECISION_MAKERS}}

**My manager's current posture:**
{{MANAGER_POSTURE}}

Please produce:

1. An opening paragraph (3–5 sentences) that frames my case in terms of
   organizational impact — not tenure, not effort, not "I've been doing senior
   work" — but what the org can do now that it couldn't before.

2. For each of my top 3 impact examples: a structured entry with the situation,
   what I specifically did (not the team), the measurable outcome, and why it
   demonstrates the target-level criteria. Make the evidence concrete.

3. A "scope and leverage" section: how my influence has extended beyond my
   immediate work — other teams, newer engineers, organizational decisions I've
   shaped.

4. The most likely objection the committee will raise and how to preempt it —
   either in the document itself or in how my manager should frame it.

5. A closing paragraph that states the ask directly and names what I commit to
   in the next 6 months in the new role.
```

---

## Variables

`{{CURRENT_ROLE}}` — Your current title and level.
Example: `Senior Software Engineer (L5 equivalent)`
Required.

`{{TARGET_ROLE}}` — The role and level you're being promoted to.
Example: `Staff Software Engineer (L6 equivalent)`
Required. The gap between current and target shapes the entire case — an L5→L6 case is different from an L4→L5 one.

`{{PROMOTION_CRITERIA}}` — Your company's documented criteria for the target level, if they exist.
Example: `Our L6 criteria require: significant technical scope across multiple teams, measurable impact on engineering effectiveness, demonstrated judgment in ambiguous situations, and mentorship that accelerates others.`
Required if available. If undocumented, provide your best inference: `Undocumented — based on what I've observed, L6 requires leading cross-team technical initiatives and being the decision-maker (not just contributor) on architectural decisions.`

`{{IMPACT_EXAMPLES}}` — Your 3–5 strongest examples of impact in the last 12–18 months. Be specific.
Example: `1. Led the redesign of our API rate limiting system — reduced false-positive rate from 12% to 0.4%, directly unblocking two enterprise deals. 2. Identified and resolved a data consistency bug affecting 8% of payments before it became customer-visible — required coordinating 4 teams. 3. Designed and implemented the new service mesh architecture now used by all backend teams.`
Required. Vague examples produce vague cases. Use numbers where possible.

`{{ABOVE_LEVEL_EVIDENCE}}` — Specific examples of operating beyond your current scope.
Example: `I've been the de facto technical lead for the platform team for 6 months without the title. I'm the person other senior engineers come to for architecture reviews. I've been in leadership calibration meetings as an observer at my manager's request.`
Required. This is where the "already operating at the next level" argument lives.

`{{DECISION_MAKERS}}` — Who will read this at calibration and what they know about you.
Example: `My VP (knows my work well), two peer EMs (don't know my work directly), the CTO (has seen me in architecture reviews twice).`
Required. Shapes how much context to include and what to make explicit vs. assumed.

`{{MANAGER_POSTURE}}` — How strong your manager's support is and what they've said.
Example: `My manager is fully supportive and has said they'll advocate for me. They've flagged that the main committee concern will be "is the scope really there?" not my technical quality.`
Required. A strong manager advocate changes the document strategy — you can be more concise because they'll fill gaps. A neutral or absent manager means the document has to do more work.

---

## What good output looks like

> **Opening paragraph:**
> Over the past 18 months, the backend platform at [Company] has moved from a collection of independent services with no shared reliability standards to a system where every team ships with consistent observability, error handling, and on-call practices — and I built the infrastructure and the adoption playbook that made that possible. This isn't something I was asked to do; it's something I identified as a gap, proposed, staffed informally, and delivered across eight teams. The org's ability to scale reliability practices without adding headcount is a direct result of this work.
>
> **Impact example — API rate limiting:**
> *Situation:* Our API rate limiting system was generating false positives at 12%, blocking legitimate enterprise customers and requiring manual intervention from the support team 20+ times per week.
> *What I did:* Diagnosed the root cause (a flawed token-bucket implementation that didn't account for burst patterns), proposed a redesign, led the implementation across 3 engineers over 6 weeks, and ran the rollout with a staged flag to avoid customer impact.
> *Outcome:* False-positive rate dropped to 0.4%. Two enterprise deals that had been stalled due to API reliability concerns closed within 30 days of the fix. Support manual interventions dropped from 20+/week to under 2.
> *Why this is L6:* This wasn't just a senior engineering contribution — it required diagnosis across a system I didn't own, coordination with teams I had no authority over, and judgment about risk during rollout. An L5 could have built the fix; the cross-functional scope and the business outcome connection are what make it L6 evidence.
>
> **Most likely objection:**
> The committee will question whether my scope is "really" cross-team or primarily within my immediate org. Preempt this in the document by including the two examples where teams outside my reporting chain explicitly adopted work I led — and have my manager name those teams specifically in their verbal advocacy.

---

## What poor output looks like — and why

When `{{IMPACT_EXAMPLES}}` describes activities rather than outcomes — "I led the migration project and worked closely with other teams" — the structured entries become activity summaries:

> *What I did:* Led the migration project, coordinated with 3 teams, wrote design docs, ran weekly syncs.
> *Outcome:* Migration completed successfully.

This is a resume bullet, not a promotion case. "Completed successfully" is the expected outcome of any project — it demonstrates competence at your current level, not readiness for the next. Every impact entry needs a "what changed in the org or product because of this" statement with a number or a named business outcome attached. If you can't produce that, the work may not be strong enough evidence yet.

---

## Failure modes

**Activity vs. impact**
Listing what you did instead of what changed. Promotion committees are evaluating whether the org runs better because of you — not whether you worked hard. Every example needs a "so what" that goes beyond "it shipped."

**Underselling scope**
Many strong candidates write promotion cases that describe their individual contribution accurately but omit the organizational influence — the design reviews they ran for other teams, the engineers they unblocked, the decisions they shaped informally. If you had influence beyond your project, name it explicitly.

**Waiting for the case to be made for you**
In most engineering organizations, promotion happens to people who advocate for themselves with specifics, not to people who wait to be recognized. The document is your advocacy — write it as if your manager will read it and have 5 minutes to make the case to a skeptical committee.

**Not addressing the obvious objection**
Every promotion case has a predictable weak point. If your case is "I did great work on one large project," the objection is "is this a pattern or a one-time thing?" Address it in the document rather than leaving it for the committee to raise unchallenged.

---

## Changelog

### v1.0 — April 3, 2026
Initial release.
