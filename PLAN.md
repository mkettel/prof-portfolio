# Portfolio → Custom Software Front Door — Build Plan

**Purpose of this doc:** turn this portfolio (currently a work *showcase*) into a
*front door* that pitches a custom-software service, books free consultations,
and (later) starts subscriptions. This plan is self-contained — a fresh session
can act on it without prior context.

---

## Business context (the "why")

The site supports a custom software solutions business: building and maintaining
custom web/mobile apps for a **small number of clients**, premium pricing, deep
long-term relationships (an embedded technical partner, not a churn agency).

**Positioning / niche (on the problem, not the industry):**
> Custom software for **owner-operators who've outgrown spreadsheets,
> Squarespace, and manual/duct-taped systems** and need a real tool built around
> how they actually work.

**The funnel the site must serve:** Free consultation → fixed build → recurring
subscription.

**The offer (in buyer language):**

- **Build packages (one-time):**
  - *Launch* — one core workflow, ~3–5 screens — **$6k–10k**
  - *Custom* ⭐ (the anchor) — multi-role business tool, dashboards, ~10–20
    screens — **$15k–28k**
  - *Scale* — integrations, mobile + web, complex logic — **$30k–60k+**
- **Subscription (recurring, Designjoy-style):** *"Flat monthly. Unlimited
  requests, one at a time. Pause or cancel anytime. All async."*
  - *Active Development* — heavy iteration mode — **$2,500–6,000/mo**
  - *Maintenance* — stabilized app upkeep — **$200–800/mo**

(Full business plan lives at `~/Desktop/custom-solutions-business-plan.md`.)

---

## Locked decisions

- **Booking:** Cal.com embed (free). Needs a Cal account + event link, exposed as
  `NEXT_PUBLIC_CAL_LINK`.
- **Subscription:** consult-first — show plans + "Book a consult" CTA; Stripe
  payment link sent manually after scoping. Self-serve Stripe Customer Portal for
  pause/cancel comes in Phase 2.
- **Sequencing:** Phase 1 (reposition + booking) ships first; payments in Phase 2.

---

## Existing stack (don't fight it)

- Next.js **13.4** App Router, Tailwind 3.3, Framer Motion, MDX blog.
- **Resend already wired** for the contact form (`src/app/api/contact/route.ts`).
- Aceternity "sidefolio" template: sidebar nav, constants-driven sections.
- Reusable components: `Container`, `Heading`, `Paragraph`, `Badge`,
  `ButtonCTA`, `Sidebar`, `Contact`.
- Key files: `src/constants/navlinks.tsx`, `src/constants/products.tsx`,
  `src/app/page.tsx`, `src/components/About.tsx`, `src/app/projects/[slug]/page.tsx`.

Match existing patterns and component usage. No framework upgrade needed.

---

## Phase 1 — Reposition + Booking (build this first)

1. **`src/app/services/page.tsx` — the service ("money") page.**
   Sections: the problem → how it works (consult → build → subscription) → the
   offer + pricing anchors → case studies teaser → "Book a free consult" CTA.
   Reuse `Container`/`Heading`/`Paragraph`/`Badge`.

2. **`src/app/book/page.tsx` — consultation booking.**
   Cal.com embed via `@calcom/embed-react`, reading `NEXT_PUBLIC_CAL_LINK`. This
   is the destination of every primary CTA.

3. **Case studies — reframe `src/constants/products.tsx` + the
   `projects/[slug]` template.**
   Restructure each entry to lead with **problem → what I built → outcome**.
   Southern Smiles is the hero ("replaced a fragile 22-spreadsheet system that
   runs the whole dental practice").

4. **Home reposition — `src/app/page.tsx` + `src/components/About.tsx`.**
   Hero leads with the offer + a "Book a free consult" button (not just "I'm a
   developer"). Add a short "what I do" band linking to `/services`.

5. **Nav + CTA — `src/constants/navlinks.tsx`, `ButtonCTA.tsx`, `Sidebar.tsx`.**
   Add "Services" to nav; persistent CTA becomes "Book a free consult" → `/book`.

6. **Pricing as content** — a component on the services page showing build
   packages + the subscription in plain buyer language. Display only, no payment
   wiring yet.

**Verify:** run the dev server, check the new pages render, CTAs route to
`/book`, the Cal embed loads (with a placeholder link if no account yet), and the
site still builds (`npm run build`).

---

## Phase 2 — Payments (after Phase 1 is live)

- **Stripe Checkout link** for the subscription, sent manually post-consult
  (use the Stripe best-practices skill).
- **Stripe Customer Portal** for self-serve pause/cancel — makes the "pause
  anytime" promise real.
- Lightweight `/account` (or portal link) so subscribers manage their plan.

---

## Open items to provide before/while building

- Cal.com account + event link → `NEXT_PUBLIC_CAL_LINK`.
- Final case-study content/outcomes (Southern Smiles, doula products, ski
  lessons) — can start with drafts.
- Stripe account + product/price IDs (Phase 2 only).
