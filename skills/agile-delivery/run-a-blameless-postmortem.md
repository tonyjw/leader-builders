---
title: Run a blameless postmortem
slug: run-a-blameless-postmortem
status: active

category: agile-delivery
tags: [postmortem, incident-review, blameless, reliability, sre]
difficulty: intermediate
works-with: [all]

when-to-use: >
  After a production incident, outage, or significant unexpected failure when
  you need to understand root causes and prevent recurrence — without creating
  blame or defensiveness that shuts down honest analysis.

not-for: >
  Regular sprint or project retrospectives — those use a different structure
  focused on team improvement rather than causal analysis. Use the team
  retrospective skill for those instead.

time-to-run: 20 minutes

---

## The reasoning

[Most incident reviews fail to prevent recurrence](https://www.oreilly.com/library/view/site-reliability-engineering/9781491929117/ch15.html) because they slide from causal analysis into blame. Once an individual is named as the cause, the conversation stops — no one surfaces the upstream conditions that made the mistake possible. [Sidney Dekker's research on human error](https://sidneydekker.com/books/) established that in complex systems, individual mistakes are almost always symptoms of systemic conditions: inadequate tooling, unclear on-call procedures, missing alerting, or runbook gaps. The engineer who triggered the incident is rarely the cause; they're the last line of defense in a system that had already failed.

The [Google SRE postmortem culture](https://sre.google/sre-book/postmortem-culture/) operationalized this insight with a specific structural constraint: postmortems must be blameless by policy, and blamelessness must be enforced by the facilitator, not assumed. The format matters because a Five Whys analysis run without a timeline will conflate correlation with causation — teams jump to the most memorable event rather than the earliest contributing factor. The timeline-first structure forces the group to reconstruct what was actually known at each decision point, which surfaces the information gaps that led to the sequence of events.

This prompt produces a draft postmortem document that a team can review and edit together — not a final document. The value is in the collaborative review, not the AI output itself.

---

## The prompt

```
You are helping me prepare a blameless postmortem for a production incident.

**Incident overview:**
{{INCIDENT_SUMMARY}}

**Customer and business impact:**
{{IMPACT}}

**Timeline of events:**
{{TIMELINE}}

**Team involved in the response:**
{{TEAM_INVOLVED}}

**Time available for postmortem meeting:**
{{TIME_AVAILABLE}}

Please produce:

1. A structured timeline that reconstructs the sequence
   of events, with each entry annotated as: detection,
   decision, action, or escalation. Flag any gaps in
   the timeline where information is missing.

2. A Five Whys analysis rooted in the timeline — not in
   who did what, but in what conditions made each step
   in the failure chain possible. Each "why" should name
   a systemic factor (tooling, process, knowledge gap,
   runbook, alerting) not a person.

3. A contributing factors section that distinguishes
   between proximate causes (what triggered the incident)
   and root causes (what made the system vulnerable to
   that trigger).

4. Three to five action items that address root causes,
   not proximate causes. Each item should have: a clear
   owner role (not a name), a definition of done, and a
   target date category (this sprint / this quarter /
   backlog).

5. A facilitation agenda for the postmortem meeting,
   including: how to open without assigning blame, a
   structured method for the group to challenge and
   correct the timeline, and how to close with shared
   ownership of action items.
```

---

## Variables

`{{INCIDENT_SUMMARY}}` — One paragraph describing what happened: what failed, when it was detected, and how it was resolved.
Example: `On Tuesday at 14:30 UTC, our payment processing service began returning 503 errors. On-call was paged at 14:47. Root cause was a misconfigured rate limit on a third-party API client deployed in the 14:15 release. Service was fully restored at 16:02 after a rollback.`
Required.

`{{IMPACT}}` — Who was affected and how: customer-facing symptoms, error rates, revenue impact, SLA breach if applicable.
Example: `Approximately 12% of checkout attempts failed over 92 minutes. Estimated 340 affected transactions. No SLA breach — our SLA threshold is 99.5% uptime monthly and we remain above that.`
Required. Be specific about scope — a 5-minute full outage and a 2-hour partial degradation need very different analysis.

`{{TIMELINE}}` — Rough chronological notes of what happened, from first anomaly to resolution. Bullet points or notes are fine — the prompt will structure them.
Example: `14:15 – release deployed. 14:30 – first 503s appear in logs. 14:47 – PagerDuty alert fires, on-call picks up. 15:10 – on-call identifies rate limit errors in third-party client logs. 15:45 – rollback decision made after attempted config fix failed. 16:02 – rollback complete, errors cleared.`
Required. Even incomplete timelines are useful — gaps in the timeline are themselves findings.

`{{TEAM_INVOLVED}}` — Roles or names of people in the response chain.
Example: `On-call engineer, engineering manager, platform team lead, third-party vendor support contacted at 15:20`
Required. Used to structure the facilitation agenda and to identify who should review the document before the meeting.

`{{TIME_AVAILABLE}}` — How long the postmortem meeting can run.
Example: `60 minutes, remote`
Required. Affects how much of the agenda can be covered in the meeting itself vs. asynchronously in a shared doc.

---

## What good output looks like

> **Timeline (structured):**
> - 14:15 — *Action:* Release deployed including updated API client config
> - 14:30 — *Detection:* First 503 errors visible in application logs (no alert fired)
> - 14:47 — *Detection:* PagerDuty alert fires on error rate threshold; on-call engineer paged
> - [gap] Between 14:30–14:47: 17 minutes of errors with no alert — *flag: alerting gap*
> - 15:10 — *Action:* On-call identifies rate limit errors in third-party client logs
> - 15:20 — *Escalation:* Vendor support contacted
> - 15:45 — *Decision:* Rollback chosen after config fix attempt fails
> - 16:02 — *Action:* Rollback complete; error rate returns to baseline
>
> **Five Whys:**
> 1. Why did 12% of checkout attempts fail? → Rate limit exceeded on third-party API client
> 2. Why was the rate limit exceeded? → Config change in the release set a lower limit than production traffic required
> 3. Why did the config change not catch this? → The rate limit value is not included in the release checklist; no automated validation exists
> 4. Why is there no automated validation? → The API client config has historically been low-risk; it wasn't included in the test suite
> 5. Why wasn't there an alert for 17 minutes after errors began? → Alert threshold is on aggregate error rate; the 503s were below the threshold until volume accumulated
>
> **Action items:**
> - Add API client rate limit to release checklist — *Owner: release process owner* — *Done when: checklist updated and reviewed by team* — *This sprint*
> - Add per-endpoint 503 alerting with a 5-minute window — *Owner: observability on-call rotation* — *Done when: alert firing in staging* — *This quarter*

---

## What poor output looks like — and why

If `{{TIMELINE}}` is omitted or vague ("the service went down and we fixed it"), the Five Whys analysis will skip directly to surface-level causes:

> **Root cause:** Engineer deployed an incorrect config value.

This is a blame assignment, not a root cause analysis. It names a person's action as the cause without asking what systemic conditions made that action possible and consequential. The timeline is what forces the analysis backward from the incident to the conditions — without it, the model has nothing to work with and defaults to the most visible actor.

---

## Failure modes

**The blame slip**
The analysis names a person's error as a root cause rather than a systemic condition. Usually happens when the `{{INCIDENT_SUMMARY}}` or `{{TIMELINE}}` is framed in terms of what someone did wrong. Reframe inputs around what happened in the system, not who did what.

**Action items that address symptoms**
The action items fix the proximate cause (the specific misconfiguration) without addressing the root cause (why the misconfiguration was possible and undetected). Review each action item against the Five Whys chain — if it would only have prevented this specific incident but not a similar one, it's addressing a symptom.

**The postmortem that lives in a document**
The document is completed, circulated, and never discussed. Postmortem value comes primarily from the meeting, not the document — the shared reconstruction of the timeline is what builds the systemic understanding. The document is an input to the conversation, not a substitute for it.

**Timeline reconstructed from memory**
The timeline is assembled in the meeting from memory rather than from logs, pager history, and chat threads. Memory telescopes events and is influenced by knowing the outcome. Pull the actual timestamps before the meeting — even incomplete log data is better than recollection.

**Too many action items**
The meeting generates 8–10 action items, most of them vague ("improve monitoring," "add more tests"). Postmortems with more than 5 action items rarely complete them. Prioritize ruthlessly: which items address root causes, and which address proximate causes? If forced to choose, root causes win.

---

## Changelog

**1.0** — Initial release.

---
