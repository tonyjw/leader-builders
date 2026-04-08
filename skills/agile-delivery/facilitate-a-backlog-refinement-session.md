---
title: Facilitate a backlog refinement session
slug: facilitate-a-backlog-refinement-session
status: active

category: agile-delivery
tags: [backlog-refinement, sprint-planning, estimation, user-stories, agile]
difficulty: intermediate
works-with: [all]

when-to-use: >
  Before sprint planning when you need to get the top of your backlog into a
  "ready" state — stories are understood by the whole team, have clear
  acceptance criteria, and are sized well enough to be pulled into a sprint
  with confidence.

not-for: >
  Strategic prioritization of what belongs on the roadmap. Refinement is for
  making already-prioritized work ready to execute — not for deciding what to
  build or reordering the roadmap.

time-to-run: 15 minutes

---

## The reasoning

The most expensive place to discover that a story is unclear is mid-sprint, when an engineer hits an ambiguous requirement and either blocks other work waiting for a decision or makes an assumption that leads to rework. [Research on the cost of requirements defects](https://www.computer.org/csdl/magazine/so/2007/03/s3024/13rRUxASuqg) consistently shows that defects found in development cost 5–10× more to fix than those found in planning. Refinement is the checkpoint that catches these issues before they become sprint disruptions.

The [INVEST criteria](https://www.agilealliance.org/glossary/invest/) (Independent, Negotiable, Valuable, Estimable, Small, Testable) from Bill Wake provide the definition of a ready story — but applying them mechanically to every ticket in a refinement session creates tedium without insight. In practice, the most useful question for any given ticket is: what would an engineer need to know on day one of picking this up to make a decision without blocking? If the answer involves another meeting, the story isn't ready.

[Kahneman's research on the planning fallacy](https://psycnet.apa.org/record/1979-09397-001) is directly applicable to estimation: teams systematically underestimate effort on complex work because they plan for the best case. The antidote in refinement isn't more precise estimates — it's splitting. Stories that feel large and uncertain are almost always underestimated; stories that can be described as a specific, observable change to a specific part of the system are almost always correctly estimated.

This prompt produces a pre-work document that can be shared before the meeting, reducing the amount of time the team spends discovering questions during the session itself.

---

## The prompt

```
You are helping me prepare for a backlog refinement
session.

**Team:**
{{TEAM_DESCRIPTION}}

**Sprint length:**
{{SPRINT_LENGTH}}

**Backlog items to refine:**
{{BACKLOG_ITEMS}}

**Our current definition of ready (if we have one):**
{{DEFINITION_OF_READY}}

**Items known to be large or technically uncertain:**
{{KNOWN_COMPLEXITY}}

Please produce for each backlog item:

1. A readiness assessment against the INVEST criteria,
   noting only the criteria that are at risk — not a
   full checklist for items that are clearly ready.

2. Three to five specific questions to bring into the
   refinement session that would unblock an engineer
   picking up this story. Focus on: ambiguous
   requirements, missing acceptance criteria, unclear
   dependencies, and decisions that need a named owner.

3. Suggested acceptance criteria if none exist or if
   existing criteria are too vague to be testable.

4. A splitting recommendation for any item that looks
   too large or uncertain for a single sprint — with a
   specific suggestion for where to draw the split line
   and what vertical slice could ship first.

Then produce:

5. A refinement session agenda that sequences the items
   by complexity — simpler items first to build momentum,
   complex or uncertain items when the group is most
   engaged. Include a time budget per item and a
   facilitator note for each.
```

---

## Variables

`{{TEAM_DESCRIPTION}}` — Brief description of the team and what they build.
Example: `Search team — owns the search index, query pipeline, and results ranking for a B2B SaaS product`
Required.

`{{SPRINT_LENGTH}}` — Your sprint duration.
Example: `Two weeks`
Required. Affects what "too large for a sprint" means in the splitting recommendations.

`{{BACKLOG_ITEMS}}` — The stories or tasks to refine. Include titles and any existing descriptions or acceptance criteria.
Example:
```
1. Add faceted filtering to search results (no AC written yet)
2. Improve search latency for queries > 3 terms (target: <200ms p95)
3. Fix: filters reset when navigating back from result detail page (bug, reported in prod)
4. Reindex legacy document corpus after schema migration (tech debt, ~50k docs)
5. Add search analytics event tracking for click-through rate measurement
```
Required. The more context per item, the more specific the questions and AC suggestions will be.

`{{DEFINITION_OF_READY}}` — Your team's existing definition of ready, if you have one.
Example: `Story has acceptance criteria, is estimated at ≤5 story points, has no open dependencies blocking start, and has been reviewed by at least one engineer before the session.`
Optional. If you don't have a definition of ready, the prompt will apply INVEST as the default.

`{{KNOWN_COMPLEXITY}}` — Items you already know are large, technically uncertain, or likely to need splitting.
Example: `The faceted filtering story is a significant frontend + backend change. The reindexing task has unknown performance characteristics on prod data.`
Optional. Used to flag these for deeper analysis and splitting recommendations.

---

## What good output looks like

> **Item 3 — Fix: filters reset on back navigation**
> *Readiness:* Testable is at risk — "filters reset" needs a specific definition. Does this mean all filters clear, or just the last applied? In what browsers? After how many navigation levels?
>
> *Questions for session:*
> - What's the expected behavior: restore all filters to the state before navigation, or restore the last search state?
> - Is this reproducible in all browsers or specific to Chrome/Safari?
> - Is there an existing browser history API approach we've used elsewhere, or is this greenfield?
>
> *Suggested acceptance criteria:*
> - When a user navigates back to the search results page from a result detail page, all previously applied filters are restored to their state at the time of navigation
> - Behavior is consistent in Chrome, Firefox, and Safari (latest 2 versions)
> - Existing search URL structure is preserved (no breaking change to shareable links)
>
> *Splitting:* No split needed — clear enough to take as-is once AC is confirmed.
>
> ---
>
> **Item 1 — Faceted filtering**
> *Readiness:* Estimable and Small are both at risk. No AC, no scope boundary, and "faceted filtering" spans at minimum: UI components, filter state management, query modification, and results re-ranking.
>
> *Splitting recommendation:* Split into: (a) Filter UI — display-only, no functionality; (b) Single-filter query integration — one filter type working end-to-end; (c) Multi-filter combination logic. Ship (b) as the first sprint slice — it's the highest-value vertical cut and lets you validate the query layer before building the full UI.

---

## What poor output looks like — and why

If `{{BACKLOG_ITEMS}}` contains only ticket titles without descriptions — "Add faceted filtering" — the analysis is forced to ask generic questions:

> *Questions for session:* What are the requirements? What does success look like?

These aren't useful questions for a refinement session — they're symptoms of work that shouldn't be in refinement yet. The stories that benefit from refinement are the ones where the broad intent is clear but the specific behavior, edge cases, and acceptance criteria are not. Paste in whatever description and context you have — even rough notes are enough to generate specific, useful questions.

---

## Failure modes

**Refinement becomes a design session**
The team enters a story and spends 30 minutes deciding what to build rather than clarifying what's already been decided. The facilitator's job is to distinguish between questions that have a known answer (acceptance criteria gap — document it and move on) and questions that reveal an open design decision (scope the story and schedule a separate design conversation). Don't resolve design decisions in refinement.

**Stories exit refinement with open questions still open**
The team surfaces a question during refinement, can't answer it immediately, and moves on with the story still "in refinement." Open questions need owners and a resolution deadline — not just a note that the question exists. If a question can't be answered before sprint planning, the story isn't ready.

**Estimation overrides readiness**
The team spends the session estimating stories rather than assessing readiness. A story can be estimated and still not be ready — and a story that is ready is usually easy to estimate. Readiness first; estimation is a byproduct.

**Refining too far ahead**
The team refines stories that are 3–4 sprints out and won't be touched for a month. Refinement takes effort, and detail on distant stories becomes stale as context changes. Focus refinement on the next 1–2 sprints of work; keep further-out items as rough sketches until they enter the window.

---

## Changelog

**1.0** — Initial release.

---
