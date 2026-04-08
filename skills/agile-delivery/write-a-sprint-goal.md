---
title: Write a sprint goal
slug: write-a-sprint-goal
status: active

category: agile-delivery
tags: [sprint-planning, sprint-goal, agile, scrum, focus]
difficulty: beginner
works-with: [all]

when-to-use: >
  At sprint planning when your team needs a clear, motivating statement of
  what success looks like — not a list of tickets, but a single sentence that
  explains why this sprint's work matters and what you'll be able to do when
  it's done.

not-for: >
  Quarterly OKRs, team mission statements, or product roadmap milestones.
  This skill is specifically for 1–4 week sprint commitments where the goal
  helps the team make trade-off decisions during the sprint itself.

time-to-run: 5 minutes

---

## The reasoning

The [Scrum Guide](https://scrumguides.org/scrum-guide.html) defines the sprint goal as the single objective for the sprint — but most teams write either a summary of their ticket list ("complete the auth refactor and fix the CSV export bug") or an aspirational statement so vague it provides no guidance ("improve platform stability"). Neither version helps.

A well-formed sprint goal does one specific thing: it helps the team make decisions during the sprint. When a dependency blocks a ticket mid-sprint, the goal should tell the team whether to pull in substitute work or stop. [Roman Pichler's Product Goal framework](https://www.romanpichler.com/blog/sprint-goal-tips/) identifies this trade-off function as the core test: if the team couldn't use the goal to decide whether a substitute ticket is in or out, the goal isn't doing its job.

[Research on team motivation and goal clarity](https://psycnet.apa.org/record/1981-25463-001) (Locke & Latham's goal-setting theory) shows that specific, outcome-oriented goals outperform both vague goals and no-goal conditions on both performance and satisfaction. The mechanism is commitment: a team that agreed to an outcome goal — not a task list — has a shared commitment to the result rather than a shared obligation to the tasks. This distinction matters when the sprint hits friction.

This prompt generates three candidate goals from the same backlog. Generating alternatives forces the team to choose, which builds more shared ownership than ratifying a single proposed goal.

---

## The prompt

```
You are helping me write a sprint goal for our upcoming sprint.

**Team:**
{{TEAM_DESCRIPTION}}

**Sprint length:**
{{SPRINT_LENGTH}}

**Planned backlog items:**
{{SPRINT_BACKLOG}}

**Business context:**
{{BUSINESS_CONTEXT}}

Please produce:

1. Three candidate sprint goals. Each should be:
   - A single sentence
   - Outcome-oriented (describes what we'll be able to
     do or what customers will experience) not task-
     oriented (not a list of what we'll complete)
   - Testable at sprint end — someone could make a
     clear yes/no judgment about whether we achieved it
   - Stable enough that it would remain valid if 1–2
     of the planned tickets were swapped out

2. For each candidate, one sentence explaining what the
   goal does NOT include — the explicit scope boundary
   that helps the team say no to unplanned work that
   looks adjacent.

3. A recommended goal from the three, with a one-
   paragraph rationale explaining why it best fits the
   backlog and business context.
```

---

## Variables

`{{TEAM_DESCRIPTION}}` — Brief description of who the team is and what they own.
Example: `Payments team — owns checkout flow, payment provider integrations, and subscription billing`
Required.

`{{SPRINT_LENGTH}}` — Length of the sprint.
Example: `Two weeks`
Required.

`{{SPRINT_BACKLOG}}` — The main stories or tasks planned for this sprint. Titles and brief descriptions are enough.
Example:
```
- Migrate Stripe integration to new API version (required by Stripe by end of quarter)
- Add retry logic for failed payment webhooks
- Fix subscription renewal failure for users with expired cards (high support volume)
- Update payment failure email copy (copy provided by marketing)
```
Required. The more specific the backlog items, the more accurate the goal candidates. Ticket titles without descriptions will produce generic goals.

`{{BUSINESS_CONTEXT}}` — What's happening in the business or product that makes this sprint's work matter beyond the tickets themselves.
Example: `Stripe is deprecating the API version we're on in 6 weeks. Payment failures are our top support ticket category this month. Q2 renewal cycle starts in 3 weeks.`
Required. Without this, goals default to describing tasks rather than business outcomes.

---

## What good output looks like

> **Candidate 1:** "By the end of this sprint, customers with expired cards can successfully renew their subscriptions, and our Stripe integration is on the current API version ahead of the deprecation deadline."
> *Not included:* New payment methods, checkout flow redesign, or any work outside the existing subscription billing path.
>
> **Candidate 2:** "By the end of this sprint, payment failures due to integration issues and expired cards are handled automatically — without requiring customer support intervention."
> *Not included:* Proactive dunning campaigns or billing portal changes.
>
> **Candidate 3:** "By the end of this sprint, our payments infrastructure is current and resilient — Stripe migration complete, webhook failures retried, and renewal failures addressed for the Q2 cycle."
> *Not included:* Any new payment method support or frontend checkout changes.
>
> **Recommended:** Candidate 3 — it captures the full sprint coherently as an infrastructure resilience goal, which gives the team a clear frame for the Stripe migration (necessary) and the renewal fix (timely). The framing around "Q2 cycle" connects the sprint to the business calendar without overpromising a business outcome the team doesn't fully control.

---

## What poor output looks like — and why

If `{{BUSINESS_CONTEXT}}` is left blank, candidate goals become task summaries:

> **Candidate 1:** "Complete the Stripe API migration and fix subscription renewal failures."

This is a ticket list, not a goal. It describes what the team will do, not why it matters or what it enables. The team can't use it to make trade-off decisions — if the Stripe migration runs long and crowds out the renewal fix, is that acceptable? The goal doesn't say. Fill in the business context with even one sentence about why the timing matters.

---

## Failure modes

**The task-list goal**
The goal reads as a summary of the sprint backlog rather than an outcome. A reliable test: can the team use the goal to decide whether a substitute ticket belongs in the sprint? If not, the goal is describing tasks, not outcomes.

**The unachievable goal**
The goal is framed around a business outcome the team doesn't fully control ("increase payment conversion by 10%"). Sprint goals should describe capabilities the team delivers, not business results that depend on factors outside engineering. Reframe from results to readiness: "customers can…" rather than "customers will…"

**No team input on the goal**
The manager or tech lead presents the sprint goal as given rather than choosing among candidates together. Sprint goals work because of the commitment they create — and commitment requires choice. Even in a fully planned sprint, generating and selecting among candidates gives the team a moment of genuine ownership.

**Goal set and forgotten**
The sprint goal is written at planning and never referenced again. It should appear in the first standup ("are we still on track for the goal?") and be explicitly evaluated at the sprint review. If the team couldn't answer "did we achieve the goal?" at the review, the goal wasn't specific enough.

---

## Changelog

**1.0** — Initial release.

---
