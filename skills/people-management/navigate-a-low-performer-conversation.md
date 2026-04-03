---
title: Navigate a low-performer conversation
slug: navigate-a-low-performer-conversation
version: 1.0
last-updated: 2026-04-03
status: active

category: people-management
tags: [performance, difficult-conversations, coaching, pip, feedback]
difficulty: advanced
works-with: [all]

when-to-use: >
  When you need to have a direct conversation with someone about sustained
  underperformance — after earlier feedback hasn't produced change, or when
  you're entering a formal performance process and need the conversation to
  be precise about expectations, consequences, and timelines.

not-for: >
  First-time feedback conversations where the pattern isn't yet established.
  Use the "Prepare a difficult feedback conversation" skill for those. This
  skill assumes prior feedback has been given and not acted on, or that the
  performance gap is severe enough to warrant immediate formality.

time-to-run: 15–20 minutes

changelog:
  - version: 1.0
    date: 2026-04-03
    changes: Initial release
---

## The reasoning

Managers typically arrive at low-performer conversations having waited too long, with too much accumulated evidence, and without a clear picture of what "meeting expectations" actually means [Scott, 2017]. The conversation then fails not because of poor delivery, but because the standard was never made explicit — the person genuinely didn't know where the bar was. Grote's framework for formal performance management emphasizes that clarity about the performance standard is more predictive of outcome than the tone or structure of the conversation itself [Grote, 2006]. This prompt forces that clarity before the meeting: what does success look like, what is the gap, and what happens next if nothing changes.

---

## The prompt

```
I'm a {{YOUR_ROLE}} and I need to have a direct performance conversation with
{{REPORT_ROLE}} about sustained underperformance. Help me prepare.

**The performance gap:**
{{PERFORMANCE_GAP}}

**Specific examples (behaviors or measurable outcomes, not interpretations):**
- {{EXAMPLE_1}}
- {{EXAMPLE_2}}
- {{EXAMPLE_3_OPTIONAL}}

**Prior feedback given:**
{{PRIOR_FEEDBACK}}

**Where this sits in the formal process:**
{{FORMAL_STAGE}}

**What I need from this conversation:**
{{CONVERSATION_GOAL}}

Please help me with:

1. An opening statement (3–5 sentences) that names the performance gap directly
   and references the prior feedback — no softening, no sandwiching, but also
   no accusatory framing.

2. A clear statement of the standard: what does meeting expectations actually
   look like for this role, and what is the specific gap between that and what
   I've observed?

3. The 2 most likely responses from this person (denial, deflection, minimizing,
   or genuine surprise) and how to handle each one while keeping the conversation
   on track.

4. A closing that names next steps, timeline, and consequence — specific enough
   that both of us know what success looks like and what happens if it doesn't.

5. If this is a formal stage (PIP or warning): what I should document after this
   conversation and what should have been documented before it.
```

---

## Variables

`{{YOUR_ROLE}}` — Your title.
Example: `Senior Engineering Manager`
Required.

`{{REPORT_ROLE}}` — Their title and level.
Example: `Mid-level Software Engineer`
Required.

`{{PERFORMANCE_GAP}}` — The core issue in 2–3 sentences. Be specific about what isn't meeting bar.
Example: `Over the past quarter, deliverables have consistently missed committed timelines without early warning, code review participation has dropped to near zero, and two projects requiring cross-team collaboration stalled because of dropped handoffs.`
Required. This is the most important variable. Vague descriptions ("not meeting expectations") produce generic output.

`{{EXAMPLE_1}}` / `{{EXAMPLE_2}}` — Specific, observable examples with dates or sprint references if possible.
Example: `In Q1 sprint 3, committed to delivering the auth migration by March 14. Delivered March 28 with no prior flag that it was at risk.`
At least 2 required.

`{{PRIOR_FEEDBACK}}` — What feedback has already been given and when.
Example: `Discussed timeline communication in 1:1s on Feb 5 and Feb 19. Agreed on a "flag issues same-day" norm. Pattern continued.`
Required. "None given" and "multiple conversations with no change" produce very different outputs.

`{{FORMAL_STAGE}}` — Where this conversation sits in your process.
Example: `Verbal warning — first formal step. Not yet a written PIP.`
Required. This shapes the language and the documentation guidance significantly.

`{{CONVERSATION_GOAL}}` — What you need this conversation to achieve.
Example: `Shared understanding that this is now a formal performance concern, a 30-day improvement window with specific metrics, and a clear understanding of consequences if the pattern continues.`
Required. "Fix the problem" is not a goal. Be specific about what changes and by when.

---

## What good output looks like

> **Opening statement:**
> "I want to talk about your performance over the past quarter. We've had two conversations — on February 5th and February 19th — about communicating timeline risk earlier. Since then, three more deliverables have been late with no advance warning, and two cross-team handoffs stalled. I've reached the point where I need to be direct: this is now a formal performance concern, and I want to make sure you understand what that means."
>
> **The standard and the gap:**
> "For your role, delivering on sprint commitments means flagging risk as soon as you see it — same day, not two days before the review. It also means completing code review requests within 48 hours as a baseline team norm. The gap: in the last 6 weeks, you've flagged zero in-flight risks and completed 2 of 11 code review requests."
>
> **Likely response 1 — "The scope was always changing":**
> "I hear that. Scope changes do happen. Help me understand: when scope shifted on the auth migration, when did you know, and what was your thinking about whether to flag it?" (Separates the external factor — which may be real — from the communication expectation, which doesn't change based on scope.)
>
> **Likely response 2 — Genuine surprise ("I didn't know it was this serious"):**
> "I understand this feels sudden. I want to be honest: it shouldn't — we talked about this in February. But regardless of how we got here, what matters now is that you understand the current situation clearly. This is formal. Here's what that means..."
>
> **Closing:**
> "Here's what I need to see in the next 30 days: zero late deliverables without a same-day flag, and code review participation at the team baseline. I'll check in every Friday. If we're in a different place at the end of 30 days, we move to a written improvement plan. I want this to go the other way — but I need to be honest about where we are."
>
> **Documentation (verbal warning stage):**
> Document: date of conversation, specific examples referenced, standard stated, timeline and metrics given, consequence named. Keep in your own records. HR may ask for this if the situation escalates.

---

## What poor output looks like — and why

If `{{PERFORMANCE_GAP}}` is vague — "not performing at the expected level" — the opening becomes unusable:

> "I want to talk about some concerns I've been having about your performance recently. I've noticed some areas where things haven't been meeting my expectations, and I'd like to share some thoughts."

This is the opposite of what a formal performance conversation requires. It's so hedged that it signals nothing, and it will be interpreted by the recipient as informal feedback rather than a formal step. Vague input produces output that the manager can't actually use — and in a formal process, language that vague can cause problems if the situation escalates.

---

## Failure modes

**Naming the pattern without naming the standard**
The conversation covers what happened but never states what "good" looks like. The person leaves unclear about whether they can recover and what recovery looks like. Every performance conversation at this stage requires a stated standard, not just documented failures.

**Treating "I didn't know it was this serious" as a blocker**
Genuine surprise from the report is common and can derail the conversation if the manager treats it as evidence they were wrong to escalate. It is not. Acknowledge it, but hold the ground: the prior feedback exists, the pattern exists, and the conversation is still necessary.

**Conflating coaching with formal process**
Mixing coaching language ("let's work on this together") with formal process language ("this is a performance warning") sends a mixed signal. Both can be true, but the formal framing must be stated clearly first. The model will separate them if `{{FORMAL_STAGE}}` is specified accurately.

**Skipping documentation**
In a formal process, undocumented conversations effectively didn't happen. The model will produce documentation guidance if you specify the formal stage. Do not skip this step — it protects both the manager and the report.

---

## Sources

[practitioner] Scott, K., *Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity*, St. Martin's Press, 2017.
The framework for distinguishing ruinous empathy (not being direct enough) from obnoxious aggression. Directly informs the opening statement structure — direct, not punishing.

[practitioner] Grote, R.C., *Discipline Without Punishment: The Proven Strategy That Turns Problem Employees into Superior Performers*, AMACOM, 2006.
The most practical framework for formal performance management processes. Key insight: clarity about the standard matters more than delivery mechanics. The documentation guidance in this skill draws directly from Grote's process structure.

[field] Anonymous, Director of Engineering, enterprise software company, 2023. Ran 4 formal performance conversations in one year. In two cases where the standard had been explicitly stated and documented before the formal conversation, both resolved (one improvement, one mutual exit with clarity). In two cases where the standard was implied rather than stated, both resulted in extended ambiguity and eventual legal review. Primary insight: the conversation is not the hard part — the preparation before it is.

---

## Changelog

### v1.0 — April 3, 2026
Initial release.
