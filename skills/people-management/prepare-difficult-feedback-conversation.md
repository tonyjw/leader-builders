---
title: Prepare a difficult feedback conversation
slug: prepare-difficult-feedback-conversation
version: 1.1
last-updated: 2025-04-01
status: active

category: people-management
tags: [feedback, performance, difficult-conversations, coaching, psychological-safety]
difficulty: intermediate
works-with: [all]

evidence-strength: strong
evidence-types: [research, practitioner]
primary-sources:
  - "Kluger & DeNisi, Feedback Interventions, Psychological Bulletin, 1996"
  - "Stone & Heen, Thanks for the Feedback, 2014"
  - "Hogan, Resilient Management, 2019"

when-to-use: >
  Before a feedback conversation where the person is unlikely to receive the
  message well — underperformance, behavior patterns, missed expectations, or
  a repeated issue that previous conversations haven't resolved.

not-for: >
  Positive recognition conversations, routine check-ins, or situations where
  you don't yet have specific observable examples. Do not use this skill as a
  substitute for gathering the evidence — it requires specifics to work.

time-to-run: 10–15 minutes

changelog:
  - version: 1.1
    date: 2025-04-01
    changes: Added 'what I might be missing' prompt section and poor output example
    reason: >
      Early testers reported the v1.0 output was too confident in the manager's
      framing. Adding the challenge-your-assumptions section produces more
      balanced preparation and catches cases where the manager needs more
      information before having the conversation.
  - version: 1.0
    date: 2025-02-15
    changes: Initial release
---

## The reasoning

Difficult feedback conversations fail for predictable reasons — and most of them
happen before the conversation starts. Managers prepare *what* to say but not
*how to hold the space* when the other person reacts. The result is a conversation
that becomes a confrontation, or a confrontation that gets so softened it doesn't
land at all.

The foundational research here is Kluger and DeNisi's 1996 meta-analysis of 131
feedback intervention studies [Kluger & DeNisi, 1996]. Their finding, which holds
up across decades of replication: more than a third of feedback interventions
actually *decrease* performance. The primary predictor of failure was whether the
feedback directed attention to the self (identity threat) rather than to the task
or behavior. This is why the structure of the opening matters so much — the first
sentence sets whether the brain goes into defend mode or problem-solving mode.

Stone and Heen's framework [Stone & Heen, 2014] adds a second layer: people
receive feedback through three distinct triggers — truth triggers (is this
accurate?), relationship triggers (do I trust this person?), and identity triggers
(does this threaten who I am?). Effective feedback preparation anticipates all
three. The reason this prompt asks you to prepare for specific deflections isn't
pessimism — it's that the deflections are predictable, and meeting them with
curiosity rather than counter-argument is a trainable skill.

Lara Hogan's work on management [Hogan, 2019] adds a practical point that's easy
to overlook: most managers wait too long, then over-compensate with too much
accumulated evidence at once. The prompt structure here deliberately limits you to
two or three specific observations — not because more evidence isn't available,
but because flooding a feedback conversation with examples activates defensiveness
and makes the core message harder to hear.

One honest caveat: this prompt prepares you for the conversation, it doesn't
conduct it. The output gives you a structure and handles the most common responses.
What it can't account for is real-time emotional dynamics. Use it to build
readiness, not to script every word.

---

## The prompt

```
I'm a {{YOUR_ROLE}} managing {{REPORT_ROLE}}. I need to have a difficult feedback
conversation and want to prepare thoroughly before it happens.

**The situation:**
{{DESCRIBE_SITUATION}}

**What I've specifically observed (behaviors, not interpretations):**
- {{OBSERVATION_1}}
- {{OBSERVATION_2}}
- {{OBSERVATION_3_OPTIONAL}}

**The impact this is having:**
{{DESCRIBE_IMPACT}}

**What's been said or done previously:**
{{PRIOR_CONTEXT}}

**My goal for this conversation:**
{{CONVERSATION_GOAL}}

Please help me with four things:

1. Draft an opening statement (2–4 sentences) that is direct, behavior-focused,
   and doesn't trigger defensiveness before I've been heard.

2. Anticipate the 3 most likely responses or deflections from this person given
   what I've shared, and give me a specific, curious (not combative) way to
   respond to each.

3. Challenge my framing: what am I possibly getting wrong, missing, or
   over-weighting here? What would I want to know before having this conversation?

4. Draft a closing that names a specific next step and a timeline — something
   concrete enough that we both know what success looks like.
```

---

## Variables

`{{YOUR_ROLE}}` — Your level and title.
Example: `Director of Engineering`
Required.

`{{REPORT_ROLE}}` — Their level and title.
Example: `Senior Software Engineer`
Required. If you're coaching another manager to have this conversation, note that here — the output shifts significantly.

`{{DESCRIBE_SITUATION}}` — The core issue in 2–3 sentences. Be specific about the pattern, not just the incident.
Example: `Over the past two sprints, Alex committed to goals during planning and in both cases let me know two days before the sprint review that they wouldn't be delivered. Neither time was I given early warning that things were off track.`
Required. This is the most important variable. Vague situation descriptions produce generic output.

`{{OBSERVATION_1}}` through `{{OBSERVATION_3_OPTIONAL}}` — Specific, observable behaviors. Not your interpretation — what you actually saw or heard.
Example: `"In the April 14th sprint review, Alex said 'I thought I could still make it' when asked why the feature wasn't delivered."`
At least 2 required. Interpretations ("Alex seems disengaged") will produce weaker output than observations ("Alex has not contributed to three consecutive team planning sessions").

`{{DESCRIBE_IMPACT}}` — The downstream effect on the team, product, or business.
Example: `The team had to scramble to demo partial work, which affected our credibility with the product stakeholders. One teammate mentioned feeling frustrated that they weren't told earlier so they could have helped.`
Required.

`{{PRIOR_CONTEXT}}` — What has already been said or done. Can be `"This is the first direct conversation about this pattern"` or a summary of prior discussions.
Required. This affects whether the model frames this as an opening conversation or an escalation.

`{{CONVERSATION_GOAL}}` — What you actually need from this conversation. Be honest.
Example: `Shared understanding of the pattern, a specific commitment to communicate earlier when things are at risk, and a clear agreement on what will be different in the next sprint.`
Required. The goal shapes the tone of the closing — "get agreement" vs. "decide next steps" vs. "give final notice" produce very different outputs.

---

## What good output looks like

With well-specified variables, expect output close to this:

> **Opening statement:**
> "I want to talk about what happened in the last two sprints. In both cases, you committed to goals during planning, and I found out two days before the review that they weren't going to be delivered. I want to understand what was happening and figure out what needs to change so this doesn't keep occurring."
>
> **Likely deflections and how to respond:**
>
> *"The scope kept changing mid-sprint."*
> → "Tell me more about that. When did you realize the scope had shifted? And when that happened, what was your thinking about whether to surface it?" (Stays curious, gets specific, doesn't dismiss or accept.)
>
> *"I was blocked by another team and couldn't move things forward."*
> → "Walk me through what that looked like. When did you hit the blocker, and at what point did you decide not to flag it to me?" (Separates the blocker — which may be real — from the communication failure.)
>
> *"I really thought I could still make it."*
> → "What did that feel like as the sprint went on? When did your confidence start to drop?" (Gets at the judgment gap, not just the communication gap.)
>
> **Challenge to your framing:**
> Before this conversation, it's worth asking: do you know if Alex has enough context to know what "flag it early" actually means to you? Some engineers genuinely don't know when a thing is at-risk enough to raise. It's also worth checking — are there structural reasons scope changes happen without visibility? If yes, Alex may be partially right, and the conversation should acknowledge that while still addressing the communication expectation.
>
> **Closing:**
> "Here's what I need to be different: if at any point in a sprint you're tracking to not deliver something you committed to, I need to hear about it the same day you know — not two days before review. Can you commit to that? And specifically — in our next sprint, if you hit a blocker or the scope shifts, what will you do?"

---

## What poor output looks like — and why

If `{{DESCRIBE_SITUATION}}` is vague ("Alex has been underperforming"), the
opening statement becomes generic:

> "I want to talk about your recent performance. I've noticed some areas where
> things haven't been going as well as I'd hoped, and I'd like to understand
> what's happening."

This is almost useless. It's so hedged it signals nothing specific, and it puts
the entire burden of defining the issue onto the other person. The model produced
this because it had nothing concrete to work with.

The fix: always write the situation in terms of specific incidents with dates or
sprint numbers if possible. The model needs the same specificity you'd need to
have the conversation yourself.

---

## Failure modes

**Using interpretations instead of observations**
The prompt asks for behaviors ("said X," "didn't Y") but many managers default to
conclusions ("seems disengaged," "has an attitude problem"). Interpretations
produce output that sounds like a performance review bullet point rather than a
conversation opener. Always ask: did I see or hear this, or did I conclude it?

**Wrong goal, wrong output**
If your real goal is to begin a PIP process but you write "shared understanding"
as the goal, the output will be too collaborative in tone for the actual situation.
Be honest with the variable — the model doesn't judge, it calibrates.

**Skipping the 'challenge my framing' section**
This is the section that has the highest skip rate and the highest value. It's
uncomfortable to ask an AI to poke holes in your reasoning before a hard
conversation — but the output frequently catches things managers have
over-weighted or under-considered. Don't treat it as optional.

**Using the output as a script**
The opening statement is a draft, not a teleprompter. Reading it verbatim in the
meeting makes the conversation feel rehearsed and stilted. Use it to internalize
the structure; say it in your own words.

**Running this right before the meeting**
This skill requires you to actually reflect on the situation before filling in the
variables. Running it five minutes before the meeting means rushed inputs and
output you won't have time to absorb. Do it the day before.

---

## Prompt notes

**Claude** tends to produce more nuanced "challenge my framing" sections than
other models — it's more willing to surface ambiguity and suggest you might be
wrong. This is a feature, not a bug.

**ChatGPT (GPT-4o)** produces slightly more structured deflection responses but
can be more formulaic. If the output feels scripted, add: "Make the responses
sound like a real manager, not a conflict resolution training module."

**For manager-of-managers situations:** Add to the prompt — "Note: I am coaching
another manager to have this conversation, not having it directly myself. Frame
the output accordingly." The model will shift from first-person preparation to
coaching framing.

---

## Sources

[research] Kluger, A.N. & DeNisi, A., "The Effects of Feedback Interventions on
Performance: A Historical Review, a Meta-Analysis, and a Preliminary Feedback
Intervention Theory," *Psychological Bulletin*, Vol. 119, No. 2, 1996, pp. 254–284.
The foundational study on feedback effectiveness. Key finding: 38% of feedback
interventions decreased performance; self-threatening feedback was the primary
failure mode.

[practitioner] Stone, D. & Heen, S., *Thanks for the Feedback: The Science and
Art of Receiving Feedback Well*, Viking, 2014.
Introduces the three feedback triggers (truth, relationship, identity) and explains
why receivers, not givers, ultimately control whether feedback lands. Directly
informs the deflection-anticipation structure of this prompt.

[practitioner] Hogan, L., *Resilient Management*, A Book Apart, 2019.
Practical guidance on giving feedback across the manager-report relationship,
including the importance of separating feedback from performance evaluations and
keeping the message focused. Informs the observation-over-interpretation guidance.

---

## Changelog

### v1.1 — April 1, 2025
Added a dedicated "challenge my framing" section to the prompt, and added the
poor output example to the skill documentation.

Early testing showed that v1.0 output was consistently too aligned with the
manager's perspective — it took the situation at face value and prepared them
to deliver the feedback more effectively without questioning whether the
framing was right. Real difficult conversations often require the manager to
examine their own assumptions first. The new section addresses this directly.

### v1.0 — February 15, 2025
Initial release. Core prompt structure and evidence section.
