---
title: Run an effective team retrospective
slug: run-an-effective-team-retrospective
status: active

category: agile-delivery
tags: [retrospective, agile, facilitation, team-health, continuous-improvement]
difficulty: intermediate
works-with: [all]

when-to-use: >
  At the end of a sprint, quarter, or project cycle when you want a structured
  retrospective that produces real action items — not a venting session that
  ends with a list no one follows.

not-for: >
  Post-mortems after serious incidents or outages — those require a blameless
  root-cause structure, not a team improvement cycle. Use the blameless
  postmortem skill for those instead.

time-to-run: 15 minutes

---

## The reasoning

[Most retrospectives fail at the action item stage](https://estherderby.com/improving-retrospectives/): a meeting produces a list, the list disappears, and the next retrospective opens with the same complaints. The fix is structural — cap action items at two per retrospective, each with a named owner and a check-in date — a principle rooted in [Kerth's prime directive for retrospectives](https://retrospectivewiki.org/index.php?title=The_Prime_Directive). The opening activity also matters disproportionately: teams that don't psychologically separate from the work they just finished spend the first 20 minutes relitigating it rather than reflecting on it. This prompt builds those three elements in sequence — an honest opening, a prioritization gate, and accountable closings.

---

## The prompt

```
You are helping me facilitate a team retrospective.

**Team context:**
- Team: {{TEAM_DESCRIPTION}}
- Team size: {{TEAM_SIZE}} people
- Work cadence: {{WORK_RHYTHM}}
- Available time: {{TIME_AVAILABLE}}

**What happened in this period:**
{{RETROSPECTIVE_CONTEXT}}

**Specific focus or theme (leave blank if general):**
{{FOCUS_THEME}}

Please produce:

1. An opening activity (5 minutes) that gets people
   honest and present — not a generic icebreaker.
   Something that names the mood without requiring
   anyone to perform positivity.

2. A structured agenda for the remaining time, with
   specific prompts for each section and what to do if
   the conversation stalls or circles back.

3. A prioritization framework for action items — the
   retrospective should end with no more than 2 action
   items. Show me how to get from a long list to 2
   items that will actually get done.

4. An action item format that creates real
   accountability: owner, definition of done, and a
   check-in date — not a vague improvement.

5. Two specific facilitation moves: one for when the
   conversation is dominated by one or two voices, and
   one for when the team is conflict-avoidant and
   everything stays surface-level.
```

---

## Variables

`{{TEAM_DESCRIPTION}}` — Brief description of who the team is and what they work on.
Example: `Platform engineering team responsible for internal developer tooling`
Required.

`{{TEAM_SIZE}}` — Number of people in the retrospective.
Example: `8`
Required. Format and timing shift significantly above 12 people — the model will adjust.

`{{WORK_RHYTHM}}` — Sprint length or delivery cadence.
Example: `Two-week sprints`
Required.

`{{TIME_AVAILABLE}}` — How much time you have, and where (remote or in-person).
Example: `60 minutes, remote via Zoom`
Required. Include remote vs. in-person — the facilitation moves differ.

`{{RETROSPECTIVE_CONTEXT}}` — What actually happened in the period being reflected on. Be specific.
Example: `We launched the new CI pipeline after two months of work. The launch went smoothly technically but rollout communication to other teams was late and caused friction. Two engineers were also out sick in the final week.`
Required. Vague context ("normal sprint") produces generic prompts with no situational relevance.

`{{FOCUS_THEME}}` — A specific issue or question to center on, if any.
Example: `We want to understand why sprint commitments have been slipping for three sprints in a row.`
Optional. Can be left blank for a general retrospective.

---

## What good output looks like

> **Opening activity (5 min):** Temperature check — each person drops one word in chat (or says one word aloud) that describes how they're arriving to this meeting. No explanation required. Read the words back as a group: "I'm hearing: focused, tired, relieved, still-in-it. That's honest — let's use that." This normalizes mixed states without requiring anyone to perform a mood they don't have.
>
> **Agenda (55 min):**
> - *What worked well* (10 min): "Name one thing from this cycle you'd want to protect or repeat. Be specific — not 'communication' but what specifically about how we communicated worked."
> - *What slowed us down* (15 min): "Name one thing that added friction. Not blame — friction. What made your work harder than it needed to be?"
> - *Prioritization gate* (10 min): Dot vote — each person gets 3 votes for items from "what slowed us down." Top 2 vote-getters become action item candidates.
> - *Action item drafting* (10 min): For each top item: Owner: [name]. Action: [specific thing they will do]. Done looks like: [observable outcome]. Check-in: [date — next standup or 1:1].
> - *Close* (10 min): "What's one thing you're taking away from today?" One round, 10 seconds each, no cross-talk.
>
> **Facilitation move — one voice dominating:** "I want to make sure we hear from people who haven't spoken yet. [Name], what's your read on this?" Then hold silence for 5 seconds. Don't fill it.
>
> **Facilitation move — surface-level/conflict-avoidant:** "Different question: if a new engineer joined the team tomorrow and hit this problem, what would you tell them about why it happens?" Indirect framing reduces defensiveness and usually surfaces the real issue.

---

## What poor output looks like — and why

If `{{RETROSPECTIVE_CONTEXT}}` is vague — "just a normal sprint, nothing major happened" — the output collapses:

> **Opening activity:** Ask everyone: "What went well this sprint? What didn't?"

This is useless. It's just the retrospective itself, re-labeled as an opening. The model had nothing situational to work with so it produced a generic prompt. Fill in what actually happened — even uneventful cycles have specifics: what shipped, what slipped, what felt off.

---

## Failure modes

**The list problem**
The retrospective generates 8–10 action items, all assigned to "the team," and no one owns any of them. Caused by skipping the prioritization gate. Use the dot-voting step to force a choice of 2 before the meeting ends.

**Relitigating the sprint**
The retrospective becomes a replay of what happened rather than reflection on how to improve. Usually starts in the first 10 minutes if the opening doesn't create psychological separation. The temperature check is specifically designed to interrupt this pattern — it signals that the retrospective is a different mode than the sprint itself.

**Dominant voice problem**
One engineer — often the most senior or most vocal — shapes the entire retrospective, and quieter members disengage. The model will produce specific turn-taking moves when `{{TEAM_SIZE}}` is filled in accurately. For teams above 8, structured turn-taking (everyone speaks before anyone speaks twice) is almost always necessary.

**Action items without owners**
Items like "improve documentation" or "communicate better" appear on the action list and evaporate. Every item needs a single named owner. "The team" is not an owner. If the group can't agree on an owner, that's a signal the item isn't ready to be an action item yet.

---
