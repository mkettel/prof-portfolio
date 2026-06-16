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
- **Sequencing:** Upgrade (Phase 0) → reposition + booking (Phase 1) →
  payments (Phase 2).
- **Blend model:** *Lead with the offer, use the portfolio as proof.* Not 50/50 —
  the creative/3D work stays as the credibility engine behind the services pitch.
- **Dependency upgrade:** conservative — Next 15 + React 19, keep Tailwind 3.4
  (defer v4), tailwind-merge 2, eslint 8, TypeScript 5. **Done** (see Phase 0).

---

## Existing stack (after Phase 0 upgrade)

- Next.js **15.5** App Router, **React 19**, Tailwind **3.4**, Framer Motion 12,
  MDX 3 blog.
- **Resend already wired** for the contact form (`src/app/api/contact/route.ts`).
- Aceternity "sidefolio" template: sidebar nav, constants-driven sections.
- Reusable components: `Container`, `Heading`, `Paragraph`, `Badge`,
  `Sidebar`, `Contact`. (`ButtonCTA` is **dead code** — never rendered.)
- Key files: `src/constants/navlinks.tsx`, `src/constants/products.tsx`,
  `src/app/page.tsx`, `src/components/About.tsx`, `src/app/projects/[slug]/page.tsx`.

Match existing patterns and component usage.

### Gotchas learned during the upgrade
- Pages export a server `metadata` object; Home/About are `'use client'`.
- **Root metadata is broken:** `layout.tsx` is `'use client'` and declares
  `const metadata` (not `export`) → site-wide title/OG never apply. **Fix in
  Phase 1** (new pages need real metadata anyway, and SEO matters for the pitch).
- Blog pages are now `'use client'` (React 19 + MDX-in-RSC workaround). `mdxRs`
  is off; MDX uses the JS loader so remark/rehype plugins actually run.
- Bare `public/...` / `src/...` imports rely on tsconfig path aliases.

---

## Phase 0 — Dependency upgrade ✅ DONE

Branch `upgrade/next15-react19`, commit `34cfa22`. Next 13.4 → **15.5.19**,
React 18 → **19.2.7**; framer-motion 12, R3F 9 / drei 10, tabler-icons 3, MDX 3;
Tailwind kept at 3.4. Removed unused `@react-three/flex` + dead `ffmpeg`.
Production build green (16/16 pages); runtime-verified home, project detail,
blog post, blog index, contact with zero console errors. Full breaking-change
list is in the commit message.

Deferred (non-blocking): Tailwind 4; converting BentoGrid `<img>` → `next/image`;
Node 22 (a couple sub-deps prefer it; 20.13 works).

---

## Target information architecture (the blend)

| Route | Role | Change |
|-------|------|--------|
| `/` Home | **The pitch** — hero leads with the offer + "Book a free consult", then how-it-works band → curated "selected work" (proof) → pricing teaser → CTA | Major reposition |
| `/services` | **The money page** (most Designjoy-like): problem → consult→build→subscribe → pricing cards → FAQ → CTA | New |
| `/work` (today's `/projects`) | **The proof** — full showcase stays; top entries reframed to outcomes | Light reframe (+ optional rename) |
| `/book` | Cal.com embed | New |
| `/about` | Trust / personality — keep | Keep |
| `/contact` `/blog` `/resume` `/lounge` | Secondary | Keep |

Sidebar nav reorders to **Home · Services · Work · About** with a persistent
**"Book a free consult"** button at the bottom (replacing the dead `ButtonCTA`).

---

## Phase 1 — Reposition + Booking (build order)

Tasks 1–3 and 5–6 need **no external accounts**; the Cal embed (4) can use a
placeholder link until the Cal account exists.

1. **Nav + persistent CTA** — `navlinks.tsx` (add Services), `Sidebar.tsx`
   (add "Book a free consult" Badge → `/book`), delete/repurpose dead
   `ButtonCTA.tsx`.
2. **`src/app/services/page.tsx`** — server component **with real `metadata`**:
   problem → how it works (consult → build → subscription) → offer + pricing
   anchors → case-study teaser → "Book a free consult" CTA. Reuse
   `Container`/`Heading`/`Paragraph`/`Badge`.
3. **`src/components/Pricing.tsx`** — display-only build packages + subscription
   in plain buyer language. No payment wiring.
4. **`src/app/book/page.tsx`** — client component, Cal.com embed via
   `@calcom/embed-react` reading `NEXT_PUBLIC_CAL_LINK` (placeholder default).
   Destination of every primary CTA. Add dep + `.env` var.
5. **Home reposition** — `page.tsx` (+ maybe `About.tsx`): hero leads with the
   offer + "Book a free consult"; add a short "what I do" band linking to
   `/services`.
6. **Case-study reframe** — `products.tsx` (+ maybe `types`/`Product.tsx`):
   lead with **problem → what I built → outcome**. Southern Smiles is the hero
   ("replaced a fragile 22-spreadsheet system that runs the whole dental
   practice"). *Decision still open:* extend the data model vs. rewrite prose
   vs. hero-only.
7. **Fix root metadata/SEO** — make `layout.tsx` apply site-wide metadata
   correctly (currently dead). Cheap, high-value for the pitch.

**Verify:** dev server + `npm run build`; new pages render, CTAs route to
`/book`, Cal embed loads (placeholder ok), zero console errors.

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
