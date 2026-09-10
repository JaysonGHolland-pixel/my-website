# Business case — Northstar AI Lead Operations

## Problem

A home renovation business gets enquiries through several channels
(website form, email, social DMs, manually-logged phone calls). Every
enquiry needs the same basic handling: read it, decide how urgent/
valuable it is, reply, log it somewhere, and remember to follow up. None
of that is hard individually — it's just constant and easy to fall behind
on, especially outside business hours or during a busy week.

## Current manual process (typical, not Northstar-specific)

1. Someone checks the inbox/form submissions/DMs periodically.
2. They read the enquiry and judge — informally, inconsistently — how
   serious it is.
3. They write a reply, often generic if they're busy.
4. They (sometimes) enter it into a spreadsheet or CRM.
5. They (sometimes) remember to follow up.

The failure points are obvious: step 1 has a delay built in, step 2 has
no consistency between different staff or different days, and steps 4-5
are the first things skipped when things get busy — which is exactly
when they matter most.

## Automated process (what this demo shows)

1. The enquiry is read and structured the moment it lands — no delay
   waiting for someone to check.
2. It's scored the same way every time, with the reasoning shown, not
   just a gut call.
3. A reply is drafted immediately for a human to approve or edit.
4. It's logged automatically — nothing depends on someone remembering.
5. Follow-ups are created automatically where appropriate, and anything
   urgent or ambiguous is flagged for a human instead of silently
   auto-handled.

## Estimated areas of time savings (qualitative — not measured)

- **Triage time**: deciding which of several enquiries to answer first
  currently requires reading all of them; a pre-computed score removes
  that judgment call.
- **First-draft writing time**: staff edit/approve instead of writing
  from scratch for every enquiry.
- **Data entry**: the "log it in the CRM" step happens automatically
  instead of being a separate manual task.
- **Follow-up tracking**: moves from "someone has to remember" to "the
  system created a task."

These are directional, not measured — this is a demo built to
illustrate the pattern, not a report from a live deployment. Nothing
here should be read as "X% faster" without a real client's before/after
data to back it up.

## Potential business value (hypothetical example, clearly labeled)

*Hypothetical, for illustration only:* if a renovation business currently
loses even one $20,000+ job a year to a slow reply, catching that one
job through faster, more consistent response handling would likely be
worth more than the cost of the system that catches it. This is an
illustrative example of the kind of value case that matters to this ICP,
not a claim about any specific business's numbers.
