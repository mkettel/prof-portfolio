"use client";
import { Container } from "@/components/Container";
import { HeaderParagraph } from "@/components/HeaderParagraph";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      {/* fade gradient that follows the scroll */}
      <div
        className="fixed bottom-0 left-0 w-full h-36 bg-gradient-to-t from-white to-transparent dark:from-zinc-900 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      {/* Hero — lead with the offer */}
      <p className="flex items-center gap-1.5 text-sm font-medium text-secondary dark:text-zinc-400 mb-3">
        Hi, I&apos;m Matt 👋
        <IconArrowRight className="h-3.5 w-3.5" />
        developer &amp; technical partner
      </p>
      <Heading className="font-black dark:text-white max-w-2xl">
        Custom software, built around how you actually work
      </Heading>
      <HeaderParagraph className="max-w-xl mt-4 dark:text-zinc-400">
        I build real web &amp; mobile apps for{" "}
        <Highlight className="dark:text-black dark:rounded-sm">
          owner-operators who&apos;ve outgrown spreadsheets and duct-taped
          systems
        </Highlight>{" "}
        — and I stick around to keep them running.
      </HeaderParagraph>
      <div className="flex flex-wrap items-center gap-3 mt-8">
        <Link
          href="/book"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold px-5 py-2.5 hover:opacity-90 transition shadow-lg shadow-zinc-900/20"
        >
          Book a free consult
          <IconArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-primary dark:text-white text-sm font-semibold px-5 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        >
          See services
        </Link>
      </div>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4 dark:text-white"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
