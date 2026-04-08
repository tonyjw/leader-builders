---
title: Triage a support backlog
slug: triage-a-support-backlog
status: active

category: agile-delivery
tags: [support, triage, prioritization, backlog, incident-management]
difficulty: beginner
works-with: [all]

when-to-use: >
  When your team has accumulated a backlog of support requests, bug reports,
  or user-reported issues and needs a principled method to decide what to
  work on first — rather than defaulting to recency or whoever is asking
  loudest.

not-for: >
  Strategic roadmap prioritization or deciding what features to build next.
  This skill is for triaging already-reported issues in a support queue, not
  for evaluating new product bets.

time-to-run: 10 minutes

---

## The reasoning

Most support queues are triaged by two instincts: recency (what came in today) and volume (who is asking loudest). Both are proxies that systematically underweight high-impact issues that affect customers who don't escalate. [Research on customer effort and silent churn](https://hbr.org/2010/07/stop-trying-to-delight-your-customers) shows that customers experiencing friction often leave without filing a ticket — which means the items in the queue underrepresent actual impact.

The alternative is a scoring model that makes the prioritization criteria explicit. [ICE scoring](https://www.intercom.com/blog/ice-prioritization/) (Impact × Confidence ÷ Effort) is the most widely-used lightweight framework in support and product contexts because it forces three separate judgments rather than a single gestalt. The key insight is that **frequency and impact are different axes**: a low-impact issue affecting 1,000 customers may deserve more attention than a severe issue affecting one customer. This prompt applies both axes explicitly.

One additional factor most ICE models miss: **regulatory and SLA-mandated items must be pulled out first**, before scoring, because scoring implies optionality that compliance obligations don't have. The prompt surfaces these blockers as a separate step.

---

## The prompt

```
You are helping me triage a support backlog.

**The backlog items (paste each on its own line):**
{{BACKLOG_ITEMS}}

**Team capacity for support this sprint:**
{{TEAM_CAPACITY}}

**Product and customer context:**
{{BUSINESS_CONTEXT}}

**Hard constraints (SLAs, regulatory, customer tier commitments):**
{{HARD_CONSTRAINTS}}

Please produce:

1. A compliance and SLA check: identify any items that
   must be addressed regardless of score due to contractual
   SLAs, regulatory requirements, or explicit customer tier
   commitments. List these separately before scoring.

2. An ICE score for each remaining item using these
   definitions:
   - Impact (1–10): How significantly does this affect
     customers when it occurs? Consider severity × breadth.
   - Confidence (1–10): How certain are we of the impact
     and effort estimates? Lower if we haven't reproduced
     the issue.
   - Effort (1–10): How much engineering time does this
     require? Higher score = lower effort (inverted so
     higher total ICE = higher priority).

3. A priority-ordered list of all items with scores and
   a one-sentence rationale for each ranking decision
   that isn't obvious from the score alone.

4. A recommendation for which items to take into this
   sprint given the capacity stated, and which to defer
   with a brief note on why deferral is acceptable.
```

---

## Variables

`{{BACKLOG_ITEMS}}` — Your list of support requests, bugs, or tickets. One per line. Include any context you have (severity, customer, description).
Example:
```
- Login fails intermittently for SSO users on Chrome (3 reports this week)
- CSV export includes extra blank rows for large datasets (reported by Enterprise customer Acme Corp)
- Dashboard loads slowly when date range exceeds 90 days (general complaint, no specific customer)
- API rate limit error messages are unclear (developer forum thread, ~15 upvotes)
- Data not syncing after timezone change (1 report, unconfirmed)
```
Required. The more context you include per item, the more accurate the scoring rationale will be.

`{{TEAM_CAPACITY}}` — How many engineer-days are available for support work this sprint.
Example: `2 engineers, ~3 days each = 6 engineer-days for support`
Required. This determines how many items to recommend taking in.

`{{BUSINESS_CONTEXT}}` — Brief context on your product, customer segments, and any current business priorities that should inform scoring.
Example: `B2B SaaS, mid-market and enterprise customers. We're in a renewal cycle with three enterprise accounts this quarter. API is used by external developers who post publicly about issues.`
Required. Without this, scoring defaults to generic assumptions that may not match your customer mix.

`{{HARD_CONSTRAINTS}}` — Any items that have mandatory SLAs, compliance requirements, or explicit contractual commitments that take them out of the scoring model.
Example: `Enterprise tier SLA: P1 bugs must be resolved within 48 hours of confirmation. Acme Corp has a custom MSA requiring response within 24 hours.`
Optional. If none exist, write "None known."

---

## What good output looks like

> **SLA/Compliance check:**
> - *CSV export blank rows (Acme Corp)* — Acme has a custom MSA requiring 24-hour response. Pull out of scoring; schedule immediately.
>
> **ICE scores:**
>
> | Item | Impact | Confidence | Effort | ICE Total |
> |------|--------|------------|--------|-----------|
> | Login fails for SSO users | 8 | 7 | 6 | 336 |
> | Dashboard slow >90 days | 5 | 8 | 5 | 200 |
> | API rate limit error messages | 4 | 9 | 8 | 288 |
> | Data not syncing after timezone change | 6 | 3 | 5 | 90 |
>
> **Priority order:**
> 1. Login/SSO failures (ICE: 336) — Authentication failures are high-severity regardless of count; 3 reports likely underrepresent actual occurrence given SSO users tend not to file tickets.
> 2. API error messages (ICE: 288) — Low effort, high confidence, public visibility via developer forum means this affects perception beyond the 15 upvotes.
> 3. Dashboard performance (ICE: 200) — Widespread but lower severity; acceptable to defer to next sprint if capacity is tight.
> 4. Timezone sync (ICE: 90) — Low confidence (unconfirmed); defer until reproducible.
>
> **Sprint recommendation (6 engineer-days):**
> Take: SSO login + API error messages (estimated ~4 days combined). Pull in dashboard performance if time allows.
> Defer: Timezone sync until reproduced.

---

## What poor output looks like — and why

If `{{BUSINESS_CONTEXT}}` is omitted or generic, the scoring collapses to guesswork:

> **ICE score — API rate limit messages:** Impact: 3. Rationale: Only 15 upvotes on a forum thread.

This misses that public developer forum visibility has an outsized effect on developer-facing products — a 15-upvote thread can be seen by hundreds of prospects. Without the business context, the model has no way to weight that. Fill in your customer mix and current priorities — a sentence or two is enough to change the scoring materially.

---

## Failure modes

**Scoring without reproducing**
Items are scored on impact and effort before anyone has confirmed the issue is real or understood its scope. Assign low Confidence scores to unconfirmed issues — this naturally deprioritizes them without dropping them from the queue entirely.

**Missing the silent customers**
The backlog underrepresents impact because most affected customers don't file tickets. When scoring Impact, add a mental multiplier for issue types where affected users typically don't report — authentication failures, data correctness issues, and silent export errors are commonly underreported.

**SLA items entering the scoring model**
Contractually obligated items should be pulled before scoring, not included in it. If a 24-hour SLA item is scored against an ICE model alongside discretionary work, there's a risk it gets deprioritized — which creates a compliance exposure. The compliance check step is a gate, not a category.

**Sprint over-commitment**
The triage produces a long priority list and the team tries to take the top 6 items into a sprint with capacity for 2. Triage output is a rank order, not a sprint plan. Let capacity constrain the intake decision separately from the ranking decision.

---

## Changelog

**1.0** — Initial release.

---
