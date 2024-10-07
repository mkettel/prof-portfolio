'use client';
import { Container } from "@/components/Container";
import { HeaderParagraph } from "@/components/HeaderParagraph";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scroll position', window.scrollY)
    })
  })

  return (
    <Container>
      <Heading className="font-black">Howdy! I&apos;m Matt</Heading>
      <HeaderParagraph className="max-w-xl mt-4">
        I&apos;m a developer that loves{" "}
        <Highlight>building products to random things</Highlight> with the hope that some people find them useful.
      </HeaderParagraph>
      {/* <Paragraph className="max-w-xl mt-4">
        I have about{" "}
        <Highlight>3 years of professional experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph> */}
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
