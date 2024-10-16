'use client';
import { Container } from "@/components/Container";
import { HeaderParagraph } from "@/components/HeaderParagraph";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      {/* fade gradient that follows the scroll */}
      <div 
        className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent dark:from-zinc-900 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <Heading className="font-black dark:text-white text-2xl">Howdy! I&apos;m Matt</Heading>
      <HeaderParagraph className="max-w-xl mt-4 dark:text-zinc-400">
        I&apos;m a developer that loves{" "}
        <Highlight className="dark:text-black dark:rounded-sm">building products and random things</Highlight> with the hope that some people find them useful.
      </HeaderParagraph>
      {/* <Paragraph className="max-w-xl mt-4">
        I have about{" "}
        <Highlight>3 years of professional experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph> */}
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
