import { BookEmbed } from "@/components/BookEmbed";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a free consult",
  description:
    "Book a free, no-pressure consultation to scope your custom software project. We'll talk through the problem, what to build, and how to start.",
};

const points = [
  "Completely free, with no obligation",
  "About 30 minutes, over a video call",
  "We talk through the problem and how you actually work",
  "I scope the idea and we check it's a real fit",
  "You leave with a clear next step",
];

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    className="h-5 w-5 mt-0.5 flex-shrink-0 text-sky-500"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.25}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4.5 10.5l3.5 3.5L15.5 6" />
  </svg>
);

export default function BookPage() {
  return (
    <Container>
      <Heading className="font-black mb-2 dark:text-white">
        Book a free consult
      </Heading>
      <Paragraph className="max-w-xl mb-2 dark:text-zinc-400">
        A quick, no-pressure call to scope your idea. We cover what the{" "}
        <Highlight className="dark:text-black dark:rounded-sm">
          problem is, what to build, and how to start
        </Highlight>
        . If it&apos;s a fit, you&apos;ll leave with a clear next step.
      </Paragraph>

      {/* What to expect */}
      <ul className="mt-8 flex flex-col gap-3 max-w-xl">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-sm md:text-base text-secondary dark:text-zinc-300"
          >
            <Check />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <BookEmbed />
    </Container>
  );
}
