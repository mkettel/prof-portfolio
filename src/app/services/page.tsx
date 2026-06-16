import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Pricing } from "@/components/Pricing";
import { IconArrowRight } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services: Custom software for owner-operators",
  description:
    "Custom web and mobile apps for owner-operators who've outgrown spreadsheets, Squarespace, and duct-taped systems. Free consult, fixed build, ongoing care.",
};

const steps = [
  {
    n: "01",
    title: "Free consult",
    body: "We talk through the problem and how you actually work. I scope the idea and we check it's a real fit. No pressure, no obligation.",
  },
  {
    n: "02",
    title: "Fixed build",
    body: "A clear, fixed-price build of the real tool: dashboards, roles, the data model, the workflows. You see progress as it comes together.",
  },
  {
    n: "03",
    title: "Ongoing care",
    body: "A flat monthly plan keeps it live, secure, and improving. Unlimited requests, one at a time. Pause or cancel anytime.",
  },
];

const CTA = () => (
  <Link
    href="/book"
    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold px-6 py-3 hover:opacity-90 transition shadow-lg shadow-zinc-900/20"
  >
    Book a free consult
    <IconArrowRight className="h-4 w-4" />
  </Link>
);

export default function ServicesPage() {
  return (
    <Container>
      {/* The problem / positioning */}
      <Heading className="font-black dark:text-white max-w-2xl">
        Custom software for people who&apos;ve outgrown the workaround
      </Heading>
      <Paragraph className="max-w-2xl mt-4 dark:text-zinc-400">
        If you&apos;re an owner-operator running your business on{" "}
        <Highlight className="dark:text-black dark:rounded-sm">
          spreadsheets, Squarespace, and duct-taped systems
        </Highlight>
        , you don&apos;t need another off-the-shelf tool that almost fits. You need
        a real app built around how you actually work, and someone who sticks
        around to keep it running.
      </Paragraph>
      <div className="mt-8">
        <CTA />
      </div>

      {/* How it works */}
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-2 dark:text-white">
        How it works
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {steps.map((step) => (
          <div
            key={step.n}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gray-50 dark:bg-zinc-900 p-6"
          >
            {/* Flowing shader-like gradient backdrop */}
            <div
              aria-hidden
              className="animate-aurora pointer-events-none absolute inset-[-50%] opacity-60 blur-2xl dark:opacity-50"
              style={{
                background:
                  "radial-gradient(35% 35% at 25% 30%, rgba(56,189,248,0.45), transparent 70%), radial-gradient(35% 35% at 75% 25%, rgba(129,140,248,0.40), transparent 70%), radial-gradient(40% 40% at 60% 80%, rgba(167,139,250,0.40), transparent 70%)",
              }}
            />
            <div className="relative">
              <span className="text-sm font-black text-sky-500">{step.n}</span>
              <h3 className="font-bold text-base text-primary dark:text-white mt-2">
                {step.title}
              </h3>
              <p className="text-sm text-secondary dark:text-zinc-400 mt-2 leading-relaxed">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* The offer + pricing */}
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-2 dark:text-white">
        The offer
      </Heading>
      <div className="mt-6">
        <Pricing />
      </div>

      {/* Case-study teaser */}
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-2 dark:text-white">
        Proof
      </Heading>
      <Link
        href="/projects/southern-smiles-dental"
        className="group block mt-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gray-50 dark:bg-zinc-800/40 p-6 hover:border-sky-500/50 transition"
      >
        <span className="text-xs font-bold uppercase tracking-wide text-sky-500">
          Case study · Southern Smiles Dental
        </span>
        <p className="text-base md:text-lg font-semibold text-primary dark:text-white mt-2 max-w-2xl">
          Replaced a fragile, duct-taped system with a real app that runs the whole
          practice. Easy to update, built around how the team actually works.
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary dark:text-zinc-400 mt-3 group-hover:text-sky-500 transition">
          See the work
          <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>

      {/* Final CTA */}
      <div className="mt-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-800/40 dark:to-zinc-900 p-8 md:p-10 text-center">
        <Heading as="h2" className="font-black text-xl md:text-2xl lg:text-2xl dark:text-white">
          Have something that&apos;s outgrown its workaround?
        </Heading>
        <Paragraph className="max-w-xl mx-auto mt-3 dark:text-zinc-400">
          Let&apos;s scope it together. The first conversation is free.
        </Paragraph>
        <div className="mt-6 flex justify-center">
          <CTA />
        </div>
      </div>
    </Container>
  );
}
