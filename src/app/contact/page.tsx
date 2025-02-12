import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import CubeTest from "@/components/three/CubeTest";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Matt Kettelkamp",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <div className="relative min-h-[90vh]">
      <Container >
        <Heading className="font-black mb-2 dark:text-white">Contact Me</Heading>
        <Paragraph className="mb-10 max-w-xl dark:text-zinc-400">
          Reach out to me over email or fill up this contact form. I will get back
          to you ASAP - I promise.{" "}
        </Paragraph>
        <Contact />
        <div className="">
          {/* <CubeTest /> */}
        </div>
      </Container>
    </div>
  );
}
