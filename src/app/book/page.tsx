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

export default function BookPage() {
  return (
    <Container>
      <Heading className="font-black mb-2 dark:text-white">
        Book a free consult
      </Heading>
      <Paragraph className="max-w-xl mb-2 dark:text-zinc-400">
        A quick, no-pressure call to scope your idea — what the{" "}
        <Highlight className="dark:text-black dark:rounded-sm">
          problem is, what to build, and how to start
        </Highlight>
        . If it&apos;s a fit, you&apos;ll leave with a clear next step.
      </Paragraph>
      <BookEmbed />
    </Container>
  );
}
