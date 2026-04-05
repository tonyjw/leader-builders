---
title: Write an engineering manager job description
slug: write-an-engineering-manager-job-description
status: active

category: hiring-talent
tags: [hiring, job-description, recruiting, engineering-manager, talent]
difficulty: intermediate
works-with: [all]

when-to-use: >
  When you need to write a job description for an engineering manager role that
  will attract qualified candidates and accurately represent the job — not a
  generic posting that optimizes for volume over fit.

not-for: >
  Senior IC roles (Staff, Principal) or Director+ roles where the scope and
  expectations differ significantly. Those require different framing of
  technical vs. organizational accountabilities.

time-to-run: 15 minutes

---

## The reasoning

Most engineering manager job descriptions fail to represent the actual job: they either list generic leadership platitudes ("drives results," "fosters collaboration") or over-index on technical requirements for a role that is [primarily about people and systems](https://larahogan.me/management/). The result is a mismatch between the candidates attracted and what the role actually demands. [Larson's framework for distinguishing engineering management scope](https://lethain.com/running-an-engineering-reorg/) emphasizes that the specific shape of an EM role — team size, technical involvement, cross-functional surface area — determines what a good candidate looks like more than any generic set of qualifications. This prompt forces that specificity before the writing starts.

---

## The prompt

```
Help me write a compelling, accurate job description
for an engineering manager role.

**Company context:**
{{COMPANY_CONTEXT}}

**Team the EM will manage:**
{{TEAM_DESCRIPTION}}

**What this EM will own:**
{{ROLE_SCOPE}}

**The most important things this person needs to do
well in the first 6 months:**
{{FIRST_SIX_MONTHS}}

**Non-negotiable requirements:**
{{MUST_HAVES}}

**Preferred but not required:**
{{NICE_TO_HAVES}}

**Compensation range (if shareable):**
{{COMP_RANGE}}

Please produce:

1. A job title and one-sentence framing that is accurate
   and specific — not "Engineering Manager" with a
   generic subtitle.

2. A 3–4 sentence "about the role" paragraph that
   describes the actual opportunity — what the EM will
   build, who they'll work with, and why it matters.
   Not a mission statement.

3. A "what you'll do" section with 5–7 specific
   responsibilities. Use verb-first bullets. Avoid
   "partner with" and "drive alignment" as standalone
   entries — those are means, not responsibilities.

4. A "what we're looking for" section split into
   required and preferred. Required: 3–5 items that are
   genuinely non-negotiable. Preferred: 2–3 items that
   meaningfully differentiate candidates but aren't
   blockers.

5. One paragraph that honestly describes the challenges
   of this role — the messy parts, the gaps, the things
   a new EM will have to figure out. This signals
   respect for the candidate and filters for people who
   find the challenge interesting rather than
   threatening.
```

---

## Variables

`{{COMPANY_CONTEXT}}` — Stage, size, product area, and anything relevant about the culture.
Example: `Series B fintech, 120 employees, 40 engineers. Building a B2B payment orchestration platform. Remote-first with quarterly in-person weeks.`
Required.

`{{TEAM_DESCRIPTION}}` — Who the EM will manage: size, level mix, what the team works on.
Example: `6 engineers (2 senior, 3 mid, 1 junior) building the merchant-facing API and webhook infrastructure. The team owns a critical path for revenue — uptime and latency SLAs are hard commitments.`
Required. This is the most important variable. Generic team descriptions produce generic JDs.

`{{ROLE_SCOPE}}` — What the EM is accountable for beyond people management.
Example: `Technical direction for the API team, cross-functional coordination with product and sales engineering, representing the team in quarterly planning, and owning the incident response process for their surface.`
Required.

`{{FIRST_SIX_MONTHS}}` — The 2–3 most important outcomes for the first 6 months.
Example: `Rebuild trust with 2 engineers who are considering leaving. Establish a shipping cadence — the team has missed 4 of the last 6 sprint targets. Get up to speed enough technically to participate meaningfully in architecture discussions.`
Required. This shapes the honest-challenges section and makes the required skills more specific.

`{{MUST_HAVES}}` — Things that are genuinely non-negotiable for success.
Example: `3+ years as an engineering manager, experience managing in a high-reliability / SLA-bound environment, track record of retaining and developing engineers.`
Required. Be honest here — if you'd consider a candidate without something on this list, it's not a must-have.

`{{NICE_TO_HAVES}}` — Things that meaningfully improve a candidate's fit but won't disqualify.
Example: `Experience with payments or financial infrastructure, prior work as a software engineer (not required — we have strong ICs who can cover technical gaps), experience managing a fully remote team.`
Optional.

`{{COMP_RANGE}}` — Compensation range, if you're willing to share it.
Example: `$180,000–$220,000 base + equity + benefits`
Optional but strongly recommended — JDs with comp ranges attract significantly more qualified applicants and reduce wasted time in later-stage filtering.

---

## What good output looks like

> **Title:** Engineering Manager, Merchant API
>
> **About the role:**
> This role owns the team that directly enables our customers to send money. The Merchant API team builds the webhook infrastructure and REST API layer that 300+ merchants depend on daily — it's revenue-critical work with real SLA commitments. You'll manage 6 engineers across the full stack from senior to junior, partner closely with our head of product and sales engineering, and help shape how a growing fintech org thinks about reliability and API design. The team is technically strong and wants better leadership; this is a role where management quality will directly determine what the team is capable of.
>
> **What you'll do:**
> - Run sprint planning, retrospectives, and 1:1s that make the team faster and more consistent
> - Own technical direction for the API layer — not writing the code, but being in the room for architecture decisions and holding the quality bar
> - Build a shipping cadence: the team has missed recent targets; your first 90 days are about diagnosing why and fixing it
> - Represent the team in quarterly planning and flag scope and dependency risks early
> - Develop your engineers — two are on a trajectory to senior if given the right investment
>
> **The honest challenge:**
> The team has had two managers in 18 months. There is trust to rebuild, and some engineers are skeptical of management as a function. The technical debt in the webhook infrastructure is real and the team knows it. You'll need to earn credibility quickly, manage with limited context in the first few months, and make good judgment calls before you have complete information.

---

## What poor output looks like — and why

When `{{TEAM_DESCRIPTION}}` and `{{FIRST_SIX_MONTHS}}` are vague, the output defaults to a generic EM JD template:

> **What you'll do:**
> - Lead and mentor a team of talented engineers
> - Partner with product and design to deliver high-quality software
> - Drive technical excellence and engineering best practices
> - Foster a culture of collaboration and continuous improvement

These bullets describe every engineering manager job ever written. They contain no information about what this specific person will actually spend their time on. Candidates who are evaluating multiple offers will skip this posting entirely.

---

## Failure modes

**Over-indexing on technical requirements**
Listing 5+ years of specific technology experience for a people management role filters out effective managers who happen not to have used your exact stack. For most EM roles, management track record matters more than technical specificity — the team's ICs handle technical depth.

**"Drives results" and "fosters collaboration" as responsibilities**
These are outcomes and norms, not responsibilities. They signal that the job description was written by someone who hasn't thought carefully about what the job actually involves. Every specific responsibility should answer: "What will this person actually do on a Tuesday?"

**Hiding the challenges**
JDs that present only the opportunity and not the difficulty attract candidates who are surprised when the job is hard. The honest-challenges paragraph filters for candidates who find the specific challenges interesting — those are the candidates you want.

**Generic must-haves**
"Strong communication skills" and "passion for engineering" as requirements filter nothing. Must-haves should be things you would actually reject a candidate over in screening.

---
