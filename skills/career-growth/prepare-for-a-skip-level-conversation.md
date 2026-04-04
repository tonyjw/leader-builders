---
title: Prepare for a skip-level conversation
slug: prepare-for-a-skip-level-conversation
version: 1.0
last-updated: 2026-04-03
status: active

category: career-growth
tags: [skip-level, career, executive-communication, visibility, stakeholders]
difficulty: intermediate
works-with: [all]

when-to-use: >
  Before a scheduled or spontaneous conversation with your manager's manager —
  whether it's a routine check-in or a high-stakes meeting — when you want to
  show up with clarity about your work, your team's priorities, and the
  impressions you want to leave.

not-for: >
  Situations where the skip-level conversation is explicitly a performance
  conversation about you. That requires different preparation focused on
  specifics and advocacy, not presence and alignment.

time-to-run: 10–15 minutes

changelog:
  - version: 1.0
    date: 2026-04-03
    changes: Initial release
---

## The reasoning

Skip-level conversations are high-stakes for a simple reason: they're sparse, so each one has [outsized influence on how senior leaders perceive your work and your team](https://larahogan.me/blog/first-one-on-one-questions/). The preparation failure mode isn't being unprepared on facts — most managers know their own work. It's arriving without a clear sense of what impression you want to leave or what you need from the conversation. Widely documented in practitioner literature: managers who treat skip-levels as status updates leave as invisible as they arrived; those who arrive with a point of view and a specific ask use the time to build the relationship that matters for career advancement and organizational influence.

---

## The prompt

```
Help me prepare for a skip-level conversation with {{SKIP_LEVEL_ROLE}}.

**My role and context:**
{{YOUR_CONTEXT}}

**What my team has been working on:**
{{TEAM_WORK}}

**What I know about their priorities and concerns:**
{{THEIR_PRIORITIES}}

**The format and likely topics:**
{{CONVERSATION_FORMAT}}

**What I want to get out of this conversation:**
{{YOUR_GOAL}}

Please help me with:

1. Three talking points about my team's work that connect directly to what
   this leader cares about — not a status update, but a framing that positions
   our work in terms of organizational impact.

2. The one thing I most want them to remember after this conversation —
   and how to land it without it feeling like self-promotion.

3. Two smart questions to ask that demonstrate strategic thinking and leave
   a positive impression, given what I know about their priorities.

4. One risk or challenge I should proactively raise — the kind of thing that
   builds credibility when raised early, rather than surfacing as a surprise
   later.

5. What to avoid: topics, framings, or moves that are likely to land poorly
   given this person's context and communication style.
```

---

## Variables

`{{SKIP_LEVEL_ROLE}}` — Their title and your relationship to them.
Example: `VP of Engineering — my manager's manager. I've met them 3 times in all-hands settings but this is our first 1:1.`
Required. Familiarity level changes the conversational register significantly.

`{{YOUR_CONTEXT}}` — Your role, how long you've been in it, and your team.
Example: `Engineering Manager for the data platform team, 8 months in role, team of 6. Previously a senior IC on this same team.`
Required.

`{{TEAM_WORK}}` — What your team has been working on in the last 60–90 days, specifically.
Example: `Shipped a new ingestion layer that reduced data latency from 4 hours to 15 minutes. Currently mid-way through a migration to multi-tenant storage. Also absorbed a 20% scope increase when the infrastructure team was reorganized.`
Required. Specific accomplishments produce much stronger talking points than general descriptions.

`{{THEIR_PRIORITIES}}` — What you know or can infer about what they're focused on.
Example: `Based on all-hands comments and what my manager has shared: they're focused on reducing infrastructure costs, improving engineering reliability metrics, and building a bench of senior ICs for the next growth phase.`
Required. Even imperfect inference here is much better than nothing — the model will flag what's assumption vs. known.

`{{CONVERSATION_FORMAT}}` — How the meeting is structured and how long it is.
Example: `30-minute 1:1, agenda-free from their side. They usually open with "what's on your mind?"`.
Required.

`{{YOUR_GOAL}}` — What you actually want from this conversation, honestly.
Example: `I want them to know who I am and what my team does. Secondary: I'd like their perspective on whether the multi-tenant migration is the right priority given what they're hearing from the business.`
Required. "Make a good impression" is not a goal — be specific about what you need from this person.

---

## What good output looks like

> **Talking point 1 — connect to their cost priority:**
> "The ingestion latency improvement we shipped last quarter also had a cost side — we cut the compute running our old batch jobs by about 30%. I want to make sure that's visible because it's the kind of thing that doesn't show up in feature metrics."
> (Why this works: it's specific, quantified, and relevant to something they care about — without being a status report.)
>
> **The one thing to land:**
> You want them to leave knowing that your team has momentum and that you're operating with awareness of the org's broader direction — not just shipping in a vacuum. Land it by connecting your current multi-tenant migration to the enterprise readiness goal you heard in the last all-hands: "We're scoping the migration to be enterprise-ready by Q3 — that's our contribution to what I heard about the enterprise push."
>
> **Question 1:**
> "What would change your view on our infrastructure priorities over the next two quarters?" (Shows you're thinking about your roadmap in terms of their frame, not just your own.)
>
> **Question 2:**
> "Is there anything about how the data platform team operates that you'd want to see differently?" (Invites feedback, signals openness, and gives them a chance to share concerns before they become a pattern.)
>
> **Proactive risk to raise:**
> The scope increase from the infrastructure reorg is worth naming: "We absorbed some additional scope when the infra team reorganized — I want to flag that it's not blocking us now, but if we get another unplanned intake before the migration lands, I'd want to flag it early rather than quietly stretch the team."
>
> **What to avoid:**
> Don't lead with team health issues or personnel challenges in a first 1:1 — those require established trust to land well. Don't over-prepare a list and read from it. Don't leave without asking at least one question.

---

## What poor output looks like — and why

When `{{THEIR_PRIORITIES}}` is left as "I'm not sure what they care about," the talking points default to inside-out framing:

> "Talk about your team's recent accomplishments. Mention the latency improvement. Ask if they have any questions about your team's roadmap."

This is a status update structure, not a skip-level strategy. It gives the leader no particular reason to remember you or your team. The model has no basis for connecting your work to their frame without knowing what their frame is — even a rough inference ("they seem focused on reliability based on what I've heard") is enough to produce substantively different output.

---

## Failure modes

**Treating it as a status update**
Showing up with a list of what your team shipped is the lowest-value use of a skip-level. Leaders at this level have many direct reports' managers; they're not tracking your sprint output. The goal is relationship and visibility, not reporting.

**Not having an ask**
Skip-levels are an opportunity to get something: information, a decision, feedback, sponsorship. Leaving without any ask signals that you don't know what you need or aren't confident asking for it. Even a low-stakes ask ("I'd love your perspective on X") is better than no ask.

**Raising problems without framing**
Surfacing challenges without framing them as "I'm flagging this early because I think it's manageable" sounds like complaining or escalating. The proactive-risk structure in this prompt specifically packages the problem as responsible management, not a distress signal.

**Over-rehearsing**
A skip-level that sounds scripted is worse than an informal one. Use the output to understand your talking points and what you want to land — not to memorize a sequence.

---

## Changelog

### v1.0 — April 3, 2026
Initial release.
