---
title: Design a take-home technical assessment
slug: design-a-take-home-technical-assessment
version: 1.0
last-updated: 2026-04-03
status: active

category: hiring-talent
tags: [hiring, assessment, technical-interview, take-home, evaluation]
difficulty: intermediate
works-with: [all]

when-to-use: >
  When designing or redesigning a take-home coding assignment for engineering
  candidates — you need something that tests the right things, respects the
  candidate's time, and produces signal that your team can actually evaluate
  consistently.

not-for: >
  Replacing the take-home with a live coding interview — that's a separate
  tradeoff decision. This skill assumes you've decided to use a take-home
  and focuses on making it good, not on whether to use one.

time-to-run: 15 minutes

changelog:
  - version: 1.0
    date: 2026-04-03
    changes: Initial release
---

## The reasoning

Work-sample tests — assessments that resemble actual job tasks — are among the highest-validity predictors of job performance in the selection research literature [Schmidt & Hunter, 1998]. The problem is that most engineering take-homes are either too narrow (algorithmic puzzles that don't resemble real work) or too broad (open-ended projects that take 10+ hours and filter for free time, not skill). The widely documented practitioner fix is to scope the problem to 2–3 hours of realistic work, provide enough context to make the problem feel real, and build an evaluation rubric before the assessment is sent — not after seeing submissions. This prompt builds all three elements.

---

## The prompt

```
Help me design a take-home technical assessment for {{ROLE_LEVEL}} candidates
applying to work on {{TEAM_CONTEXT}}.

**What this role actually does day-to-day:**
{{REAL_WORK_DESCRIPTION}}

**What I most want to assess:**
{{EVALUATION_CRITERIA}}

**Time budget for the candidate:**
{{TIME_BUDGET}}

**Known failure modes in past hires:**
{{PAST_FAILURES}}

**Constraints:**
{{CONSTRAINTS}}

Please produce:

1. A take-home problem statement written as it would appear to the candidate —
   clear setup, specific deliverable, and explicit time guidance. The problem
   should resemble real work the role involves, not a generic coding puzzle.

2. A rubric for evaluating submissions — scored dimensions, not a checklist.
   Each dimension should have a description of what strong/acceptable/weak
   looks like for that dimension specifically.

3. The 2–3 things that most commonly signal a strong hire (beyond just "code
   quality") given the specific role context I've provided.

4. Red flags: what specific patterns in submissions should trigger a "no" — and
   which patterns are noise (common mistakes that don't predict job performance)?

5. A brief candidate-facing FAQ to include with the problem: what format to
   submit in, whether to use libraries, how to handle ambiguity, what "done"
   means.
```

---

## Variables

`{{ROLE_LEVEL}}` — The level you're hiring for.
Example: `Mid-level (3–5 years experience)`
Required. A senior assessment tests different things than a mid-level one — scope, ambiguity tolerance, and system design surface area all shift.

`{{TEAM_CONTEXT}}` — What the team builds and what the engineering environment is like.
Example: `A backend platform team building data pipeline infrastructure in Python and Go, using Kafka and PostgreSQL. Code is reviewed rigorously; engineers own their services end-to-end including on-call.`
Required.

`{{REAL_WORK_DESCRIPTION}}` — What the person will actually spend their time on in this role.
Example: `Designing and implementing pipeline stages that process 50M+ events/day, debugging performance issues in distributed systems, reviewing other engineers' code, and writing runbooks for their services.`
Required. This is the key input for making the assessment feel like real work rather than a puzzle.

`{{EVALUATION_CRITERIA}}` — What you most want the assessment to surface, in priority order.
Example: `1. Ability to write clear, maintainable code in a codebase they didn't start. 2. How they handle underspecified requirements. 3. Whether they think about operability (error handling, logging, observability) or just happy-path logic.`
Required. The model will build the rubric around these priorities.

`{{TIME_BUDGET}}` — How long you expect the assessment to take.
Example: `2–3 hours`
Required. If you say 2 hours and the assessment actually takes 6, you'll get incomplete submissions and frustrated candidates. Be honest about the actual time.

`{{PAST_FAILURES}}` — Patterns you've seen in hires who didn't work out.
Example: `Two engineers who passed the assessment wrote good code in isolation but couldn't navigate an existing codebase or ask for help when stuck. One engineer's take-home was excellent but they couldn't explain their own decisions in the follow-up conversation.`
Optional but significantly improves the red flags section. Can be `None identified yet`.

`{{CONSTRAINTS}}` — Any constraints on the assessment format or tooling.
Example: `Candidates submit via GitHub PR. No proprietary data can be used. Assessment must be completable without a specific operating system.`
Optional.

---

## What good output looks like

> **Problem statement (as shown to candidate):**
>
> *Background:* You're joining a team that runs data pipelines processing event streams from customer applications. One common task is building pipeline stages that transform, filter, and route events based on rules.
>
> *Your task:* We've provided a small Python codebase with a working event pipeline. A new requirement has come in: add a filtering stage that routes events to different output queues based on configurable rules. The rules can be as simple as "events with type=payment go to queue A" or as complex as compound conditions.
>
> *What we're looking for:* Working code that handles the cases in the provided test events. Code that a teammate could understand and modify without asking you questions. Some thought about what happens when rules are misconfigured or an event doesn't match any rule.
>
> *Time guidance:* We expect this to take 2–3 hours. If you're significantly over that, stop where you are and note what you'd do next. A thoughtful partial submission is more useful to us than an exhausted one.
>
> **Rubric dimensions:**
>
> *Code clarity (weight: 30%)*
> Strong: another engineer can understand the logic without asking questions; names, structure, and comments (where used) are purposeful. Acceptable: code works and is readable with some effort. Weak: requires significant explanation to follow.
>
> *Handling ambiguity (weight: 25%)*
> Strong: candidate made reasonable assumptions explicit in a note or comment and their choices are defensible. Acceptable: assumptions are implicit but consistent. Weak: candidate blocked on ambiguity rather than making a call.
>
> *Operability thinking (weight: 25%)*
> Strong: error cases are handled, there's some logging or observability hook, failure modes are considered. Acceptable: happy path works, some error handling. Weak: happy path only, exceptions uncaught.
>
> *Fit to the problem (weight: 20%)*
> Strong: solution is appropriately scoped — not over-engineered for a 2-hour problem. Acceptable: some extra work that doesn't hurt. Weak: over-engineered to the point of obscuring the core logic.

---

## What poor output looks like — and why

When `{{REAL_WORK_DESCRIPTION}}` is vague — "building backend services" — the generated problem defaults to a generic coding exercise:

> *Your task:* Implement a REST API with the following endpoints. Include tests. Use any language.

This is a puzzle, not a work sample. It tests whether the candidate can build something from scratch in a vacuum — which may or may not reflect what they'll do in this role. The assessment gives you signal, but it's the wrong signal for most backend roles, where the actual job involves working in an existing system, making tradeoffs under constraint, and communicating decisions.

---

## Failure modes

**The 6-hour problem labeled as 2 hours**
Underestimating the time required is one of the most common assessment design failures. When the real time is 2× the stated time, candidates either submit incomplete work (and you miss their strengths) or work 6 hours (and resent the process before they join). Pilot the assessment internally before sending it.

**No rubric before submissions arrive**
Building the evaluation framework after seeing submissions produces inconsistent scoring anchored to the first few submissions received. Write the rubric before sending the assessment. If you can't articulate what "strong" looks like before seeing any submissions, the assessment isn't ready.

**Over-weighting implementation polish**
Clean code in a 2-hour time-boxed assessment often predicts that the candidate has done similar assessments before, not that they'll be more effective on the job. Weight rubric dimensions toward signal that actually predicts job performance: ambiguity handling, operability thinking, communication of tradeoffs.

**No follow-up conversation**
The take-home is the setup for a conversation, not a pass/fail gate on its own. Candidates who score well on the assessment but can't explain their own decisions in a follow-up are a warning sign. Build a structured review conversation into the process.

---

## Sources

[research] Schmidt, F.L. & Hunter, J.E., "The Validity and Utility of Selection Methods in Personnel Psychology: Practical and Theoretical Implications of 85 Years of Research Findings," *Psychological Bulletin*, Vol. 124, No. 2, 1998, pp. 262–274.
The landmark meta-analysis of selection method validity. Work-sample tests rank among the highest-validity predictors of job performance, validating the take-home format when designed to resemble real work. General cognitive ability tests (algorithmic puzzles) have high validity in isolation but lower incremental validity when combined with work samples.

[practitioner] Widely documented in engineering hiring practitioner literature, including posts from hiring managers at Stripe, GitHub, and similar engineering-led organizations. Common practitioner findings: time-boxing to 2–3 hours, piloting internally, and building rubrics pre-submission are the three practices most correlated with consistent, defensible hiring decisions.

[field] Anonymous, VP Engineering, B2B SaaS, 2024. Redesigned take-home assessment after noticing that high-scoring candidates frequently underperformed in their first 90 days. Root cause: assessment was testing greenfield implementation; role required working in an existing codebase. After switching to a "fork and extend" format (candidates work with provided starter code), pass rate at 90-day review improved from 60% to 85%.

---

## Changelog

### v1.0 — April 3, 2026
Initial release.
