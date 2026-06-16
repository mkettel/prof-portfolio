import { IconCheck } from "@tabler/icons-react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

type Package = {
  name: string;
  forWho: string;
  price: string;
  timeline: string;
  features: string[];
  featured?: boolean;
};

const buildPackages: Package[] = [
  {
    name: "Launch",
    forWho: "Validate one core workflow",
    price: "$6k–10k",
    timeline: "2–3 weeks",
    features: [
      "Auth + basic admin",
      "~3–5 screens",
      "One main workflow",
    ],
  },
  {
    name: "Custom",
    forWho: "A real business tool",
    price: "$15k–28k",
    timeline: "4–8 weeks",
    featured: true,
    features: [
      "Multiple roles & dashboards",
      "Real data model, exports / PDF",
      "~10–20 screens",
    ],
  },
  {
    name: "Scale",
    forWho: "Multi-role, integrations, mobile + web",
    price: "$30k–60k+",
    timeline: "8–16 weeks",
    features: [
      "Payments & 3rd-party APIs",
      "Mobile + web",
      "Complex business logic",
    ],
  },
];

const subscriptions: Package[] = [
  {
    name: "Active Development",
    forWho: "Heavy build & iteration mode",
    price: "$2,500–6,000",
    timeline: "Turnaround in days, prioritized",
    features: [
      "Unlimited requests, one at a time",
      "Infra, security, fixes & features",
      "Your app, always improving",
    ],
  },
  {
    name: "Maintenance",
    forWho: "A stabilized app in long-term upkeep",
    price: "$200–800",
    timeline: "Best-effort turnaround",
    features: [
      "Infra & uptime",
      "Security & dependency updates",
      "Occasional tweaks",
    ],
  },
];

const Feature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm text-secondary dark:text-zinc-400">
    <IconCheck className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-500" />
    <span>{children}</span>
  </li>
);

const Card = ({ pkg, suffix }: { pkg: Package; suffix?: string }) => (
  <div
    className={
      "relative flex flex-col rounded-2xl border p-6 transition " +
      (pkg.featured
        ? "border-sky-500/60 bg-sky-50/40 dark:bg-sky-500/5 shadow-lg shadow-sky-500/10"
        : "border-neutral-200 dark:border-neutral-800 bg-gray-50 dark:bg-zinc-800/40")
    }
  >
    {pkg.featured && (
      <span className="absolute -top-3 left-6 rounded-full bg-sky-500 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1">
        Most common
      </span>
    )}
    <h4 className="font-bold text-base text-primary dark:text-white">{pkg.name}</h4>
    <p className="text-xs text-secondary dark:text-zinc-500 mt-1">{pkg.forWho}</p>
    <div className="mt-4">
      <span className="text-2xl font-black text-primary dark:text-white">{pkg.price}</span>
      {suffix && <span className="text-sm text-secondary dark:text-zinc-500">{suffix}</span>}
    </div>
    <p className="text-xs text-secondary dark:text-zinc-500 mt-1">{pkg.timeline}</p>
    <ul className="flex flex-col gap-2 mt-5">
      {pkg.features.map((f) => (
        <Feature key={f}>{f}</Feature>
      ))}
    </ul>
  </div>
);

export const Pricing = () => {
  return (
    <div>
      {/* Build packages */}
      <Heading as="h3" className="text-lg md:text-lg lg:text-lg font-black dark:text-white">
        Build packages
      </Heading>
      <Paragraph className="text-sm mt-2 max-w-xl dark:text-zinc-400">
        A one-time build to get your tool live. Most clients land on{" "}
        <span className="font-semibold text-primary dark:text-zinc-200">Custom</span>,
        a real, multi-role business app.
      </Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {buildPackages.map((pkg) => (
          <Card key={pkg.name} pkg={pkg} />
        ))}
      </div>

      {/* Subscription */}
      <div className="mt-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gray-50/50 dark:bg-zinc-800/30 p-6 md:p-8">
        <Heading as="h3" className="text-lg md:text-lg lg:text-lg font-black dark:text-white">
          Then: keep it alive &amp; improving
        </Heading>
        <Paragraph className="text-sm mt-2 max-w-2xl dark:text-zinc-400 font-medium">
          Flat monthly. Unlimited requests, one at a time. Pause or cancel anytime.
          All async. Your app stays live, secure, and always improving.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {subscriptions.map((pkg) => (
            <Card key={pkg.name} pkg={pkg} suffix="/mo" />
          ))}
        </div>
      </div>

      <p className="text-xs text-secondary dark:text-zinc-500 mt-6">
        Every project starts with a free consult. Pricing is confirmed once we&apos;ve
        scoped the work together.
      </p>
    </div>
  );
};
