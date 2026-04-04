---
title: Build psychological safety on a new team
slug: build-psychological-safety-on-a-new-team
status: active

category: people-management
tags: [psychological-safety, team-health, new-manager, trust, culture]
difficulty: intermediate
works-with: [all]

when-to-use: >
  When you're new to a team, inheriting a team that has low trust or low
  candor, or when you've observed that people aren't raising problems, aren't
  disagreeing in meetings, or aren't admitting mistakes early.

not-for: >
  Teams where safety isn't the real problem — if people are speaking up and
  problems still aren't getting resolved, the issue is decision-making or
  follow-through, not safety. Don't diagnose safety problems when the
  actual issue is unclear ownership.

time-to-run: 15 minutes

---

## The reasoning

[Edmondson's 1999 research](https://journals.sagepub.com/doi/10.2307/2666999) across hospital nursing teams found that teams with higher psychological safety made more errors on record — not because they were worse teams, but because they reported more. The counterintuitive result: safety and performance are positively correlated precisely because safe teams surface problems early rather than hiding them. Her [follow-up work on building fearless organizations](https://www.ted.com/talks/amy_edmondson_how_to_turn_a_group_of_strangers_into_a_team) identified the manager's behavior as the primary driver of team safety levels — not team composition, not org culture, and not tenure. The actions most predictive of safety were: publicly admitting uncertainty, inviting dissent specifically, and responding to bad news with curiosity rather than judgment. This prompt builds those behaviors into a concrete action plan rather than a set of principles to aspire to.

---

## The prompt

```
I'm a {{YOUR_ROLE}} and I want to build genuine psychological safety on
{{TEAM_DESCRIPTION}}.

**Current state:**
{{CURRENT_STATE}}

**What I've observed that signals low safety (if anything):**
{{SAFETY_SIGNALS}}

**My constraints:**
{{CONSTRAINTS}}

Please help me with:

1. Three specific behaviors I should model in the next 30 days that research
   shows drive safety — not platitudes, but observable actions with specific
   examples of what they look like in practice.

2. Two meeting or team ritual changes I can make in the next two weeks that
   create structural space for dissent and problem-raising — not just norms, but
   mechanisms.

3. The most common way managers accidentally undermine safety while trying to
   build it, given the context I've described — and what to do differently.

4. A 60-day check: what specific observable signals would tell me whether safety
   is improving, and what would tell me it isn't?
```

---

## Variables

`{{YOUR_ROLE}}` — Your title and how long you've been in this role with this team.
Example: `Engineering Manager, 6 weeks into the role`
Required. Tenure shapes which behaviors are most available to you.

`{{TEAM_DESCRIPTION}}` — Who the team is and what they work on.
Example: `A backend platform team of 7 engineers, most of whom have been together for 2+ years`
Required.

`{{CURRENT_STATE}}` — What you know about the team's current trust and candor levels.
Example: `The previous manager was directive and didn't tolerate pushback. I've been told the team is technically strong but doesn't speak up in cross-functional meetings and rarely surfaces problems before they become crises.`
Required. This is the most important variable — the specific history shapes the diagnosis and the interventions.

`{{SAFETY_SIGNALS}}` — Observable things you've noticed that indicate low (or high) safety.
Example: `In three sprint reviews I've observed, no one raised concerns even when I could see things were going sideways. Post-meeting, engineers came to me individually to share concerns they didn't raise in the room.`
Optional but makes output significantly more specific. Can be `None observed yet — I'm preemptively building this.`

`{{CONSTRAINTS}}` — Anything that limits your options.
Example: `Team is fully remote across 3 time zones. I only have 1 synchronous hour per week with the full group.`
Required. Remote, asynchronous, and cross-timezone teams need different mechanisms.

---

## What good output looks like

> **Three behaviors to model (next 30 days):**
>
> *1. Publicly say "I don't know" before someone else can say it for you.*
> In your next sprint planning or architecture discussion, when a question comes up that you're uncertain about, say: "I don't have a strong view on this — what do you all think?" Don't add a hedge afterward like "but I'm leaning toward X." Let the uncertainty sit. This signals that not knowing is acceptable in your team's norms.
>
> *2. When someone brings you a problem, your first response is a question, not an answer.*
> When an engineer tells you something went wrong, respond with: "Walk me through what happened" rather than moving immediately to what should have been done differently. Judgment-first responses — even mild ones — train people to filter what they bring to you.
>
> *3. Disagree with yourself in public.*
> Once in the next two weeks, say something like: "I pushed for X in last week's planning and I think I was wrong about it." This doesn't need to be dramatic. It models that position changes are normal and that being wrong isn't a career risk.
>
> **Two structural changes (next 2 weeks):**
>
> *1. Add a standing "what's stuck?" slot to your weekly team meeting.*
> Not "how are things going" — that gets "fine." Specifically: "What's one thing that's harder than it should be right now?" This frames friction as a team concern rather than an individual failure.
>
> *2. In your next 1:1 with each engineer, ask: "What's something you've been hesitant to raise in a group setting?"*
> This isn't a trap — it's a signal that you want to hear things. Follow it with action on at least one item, and explicitly tell the person you acted on it.
>
> **60-day check:**
> Improving: engineers surface problems in sprint planning before they become crises; people push back in design discussions without waiting until after the meeting; someone publicly says "I don't know" or "I was wrong."
> Not improving: conversations still bifurcate into public agreement and private concern; no one raises a risk until it's visible; you're still the primary source of "bad news" in the team.

---

## What poor output looks like — and why

If `{{CURRENT_STATE}}` is vague — "I want to build a positive team culture" — the output becomes a list of general leadership platitudes:

> "Be approachable and open to feedback. Create a culture where people feel comfortable sharing ideas. Lead by example and demonstrate vulnerability."

These are not behaviors — they're aspirations. The model has no context for what's actually going on with this team, so it produces advice that could apply to any team anywhere. Fill in what you've actually observed. Even "nothing specific yet" with team history context produces dramatically better output.

---

## Failure modes

**Performing safety without building it**
Saying "this is a safe space" or "I have an open door" without changing behavior. Edmondson's research found that stated norms matter far less than behavioral signals from the manager. The prompt generates behaviors, not declarations — use the behaviors.

**Confusing silence with safety**
A team that doesn't complain might have high safety (no real problems) or very low safety (problems not surfaced). The 60-day observable signals from this prompt are specifically designed to distinguish between the two.

**Going too fast**
Teams with histories of low safety take months to shift, not weeks. If the previous manager punished dissent, a few good 1:1 conversations won't override years of conditioned behavior. The prompt generates a 30-day plan because that's what's actionable — expect the real shift to take two to three times longer.

**Misdiagnosing the root cause**
Not all silence is psychological safety failure. If engineers are technically confident but not speaking up, check whether decisions are actually made in the meetings they're in — if the decision is already made before the meeting, silence is rational, not fearful.

---
