---
title: Run a team working agreement workshop
slug: run-a-team-working-agreement-workshop
status: active

category: agile-delivery
tags: [working-agreement, team-norms, facilitation, psychological-safety, onboarding]
difficulty: intermediate
works-with: [all]

when-to-use: >
  When forming a new team, after significant team composition changes (new
  manager, major additions or departures), or when recurring friction suggests
  unspoken norms are breaking down and need to be made explicit.

not-for: >
  Resolving a specific interpersonal conflict between two people — a working
  agreement addresses team-level norms, not bilateral disputes. Use a
  difficult feedback conversation framework for those instead.

time-to-run: 20 minutes

---

## The reasoning

[Google's Project Aristotle research](https://rework.withgoogle.com/guides/understanding-team-effectiveness/) found that the highest predictor of team effectiveness wasn't who was on the team but how the team operated together — and specifically whether there were shared norms that team members felt safe to invoke. A working agreement is the operational artifact that makes those norms explicit and referenceable.

The most common working agreement failure is the compliance document: a list of rules created by the manager and signed off by the team. [Amy Edmondson's research on psychological safety](https://www.jstor.org/stable/2666999) explains why this fails — norms that aren't co-created aren't internalized, and unenforced norms are worse than no norms because they signal that stated values don't match actual behavior. The facilitation process matters as much as the output.

A second failure mode is scope creep: workshops that try to cover everything (communication norms, technical standards, meeting culture, escalation paths) in one session produce documents no one reads. Effective working agreements focus on the friction points that are actually present, not all possible friction points. This prompt uses the trigger context and known friction to focus the session on what matters most for this specific team at this specific moment.

[Patrick Lencioni's research on team dysfunction](https://www.tablegroup.com/the-five-dysfunctions-of-a-team/) shows that trust is built through small, repeated acts of reliability — and working agreements work when they create the conditions for those acts: clear expectations about availability, decision-making, and how disagreements are handled. The agreement is a starting point, not a finished product.

---

## The prompt

```
You are helping me design and facilitate a team working
agreement workshop.

**Team:**
{{TEAM_DESCRIPTION}}

**Team size:**
{{TEAM_SIZE}}

**What prompted this workshop:**
{{TRIGGER_CONTEXT}}

**Known friction points or recurring issues:**
{{KNOWN_FRICTION}}

**Time available:**
{{TIME_AVAILABLE}}

Please produce:

1. An opening framing (3–5 minutes) that explains why
   we're doing this without making it feel punitive or
   like a response to failure. The framing should create
   genuine buy-in, not compliance.

2. A structured workshop agenda with specific facilitator
   prompts for each section. Focus on surfacing implicit
   norms the team already has but hasn't named — not
   starting from scratch.

3. For each of the following categories, one or two
   specific questions that will surface the most useful
   norm for this team given the trigger context and
   friction points:
   - Communication (async vs. sync, response time
     expectations, where decisions get documented)
   - Meetings (preparation expectations, decision rights,
     what constitutes "ready" for a call)
   - Work (definition of done, PR/review norms, when to
     ask for help vs. figure it out)
   - Conflict (how disagreements get surfaced, escalation
     path, how to raise process concerns)

4. A method for handling contested items — where team
   members genuinely disagree on a norm. This should
   not default to manager deciding.

5. A format for the final agreement document that the
   team will actually reference — not a wall of text.
   Include a recommended review cadence.
```

---

## Variables

`{{TEAM_DESCRIPTION}}` — Who the team is, what they work on, and how long they've been together.
Example: `Mobile team of 6 engineers, 1 EM, 2 designers. We own the iOS and Android apps. Team has been together ~18 months but added 2 new engineers last month.`
Required.

`{{TEAM_SIZE}}` — Total number of people in the workshop.
Example: `9`
Required. Affects facilitation format — teams above 8 need more structured turn-taking to prevent dominant voices.

`{{TRIGGER_CONTEXT}}` — What prompted the need for a working agreement right now.
Example: `Two new engineers joined last month and we've had miscommunications about code review expectations and on-call responsibilities. We've never written down our norms explicitly.`
Required. Shapes which sections of the workshop to emphasize and how to frame the opening.

`{{KNOWN_FRICTION}}` — Specific recurring issues or tensions the agreement should address, if any.
Example: `Code review turnaround varies a lot — some PRs wait 3+ days, which blocks others. There's also confusion about when to use Slack vs. when to write a doc.`
Optional. Can be left blank if you're starting from scratch or don't want to anchor the workshop on existing problems.

`{{TIME_AVAILABLE}}` — How long the workshop can run.
Example: `90 minutes, in-person`
Required. A 45-minute remote session and a 2-hour in-person session need very different agendas.

---

## What good output looks like

> **Opening framing:**
> "We're doing this because we've grown. Two people who weren't here six months ago now make up a third of the team — and norms that were implicit when we were all in the room together haven't been explained to them. That's not a failure, it's just growth. The goal today isn't to fix what's broken; it's to name what we already do well and make it explicit, and to identify the places where we have different mental models and agree on one."
>
> **Agenda (90 min):**
> - *What we're already doing well* (15 min): Each person names one norm that's working — something the team does that they'd want to preserve if the team doubled in size. Facilitator lists on whiteboard.
> - *Where we have different mental models* (25 min): Using the known friction as a starting point, structured discussion on code review and async communication norms. Specific prompt: "What's your current mental model for when a PR is urgent vs. when it can wait? Go around once before open discussion."
> - *Drafting norms together* (30 min): Small groups of 2–3 draft 1–2 norms per category. Facilitator merges and the group refines.
> - *Handling disagreements* (10 min): Present contested items. Use fist-to-five — those who score 3+ can live with it; those scoring 1–2 have to say what would get them to a 3.
> - *Document and close* (10 min): Read back the full agreement; each person confirms one norm they're committing to.
>
> **Conflict handling:** Use fist-to-five consent (not consensus). A score of 3 means "I can live with this." Scores of 1–2 require the person to say: "I could live with this if ___." The goal is a workable agreement, not unanimous enthusiasm.

---

## What poor output looks like — and why

If `{{TRIGGER_CONTEXT}}` is too vague — "the team wants to improve how we work together" — the agenda becomes generic:

> **Workshop prompt:** "What norms are important to your team? Discuss in groups."

This produces a list of abstract values ("we value communication," "we believe in transparency") that no one will reference after the meeting. The opening framing and specific questions need to be anchored in what's actually happening on this team. Fill in the specific friction — even one example — and the prompts shift from values to behaviors.

---

## Failure modes

**The manager-written agreement**
The manager drafts the working agreement before the workshop and asks the team to "improve it." The team makes small edits and the output feels like ratification rather than co-creation. The prompts in step 3 are specifically structured to surface what the team already does — not to define what they should do. Start with observation, not prescription.

**Everything in one session**
The workshop tries to cover communication, meetings, technical standards, escalation paths, and team values in 60 minutes. The output is a 3-page document that lives in a folder. Scope to the 3–4 norms that matter most for this team right now — those norms should be able to fit on a single page.

**Contested items deferred to the manager**
When the team disagrees on a norm, the facilitator defaults to "let's take this offline" — which means the manager decides unilaterally after the meeting. The fist-to-five consent method is specifically designed to resolve contested items in the room, in a way that everyone can live with. Use it.

**Agreement never reviewed**
The working agreement is created and never revisited. A document that reflects a team's norms at month 0 will be increasingly irrelevant at month 6. Build in a review — either as a standing item in the quarterly retrospective or as a 15-minute exercise when the team composition changes.

---

## Changelog

**1.0** — Initial release.

---
