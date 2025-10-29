"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/me-ski-comp.webp",
    "/images/ski-slash-comp.webp",
    "/images/bali-dino-comp.webp",
    "/images/backie-comp.webp",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4 dark:text-zinc-400">
          Hey there, I&apos;m Matt - a passionate developer, avid skier,
          and a connoisseur of awesome design. Welcome!
        </Paragraph>
        <Paragraph className=" mt-4 dark:text-zinc-400">
          I sort of stumbled into this world of web development after working in the hospital for awhile. I have always had ideas I have wanted to build but just was not sure 
          of the medium I wanted to build them in. I began by building simple websites to help me at my job, which then turned into a deep interest and desire to keep learning
          and building more interesting and complex projects. I plan to continue to grow my skills as a developer in this never ending world of tech and try to bring a little 
          touch of the human element to the projects I build. 
        </Paragraph>
        <Paragraph className=" mt-4 dark:text-zinc-400">
          As I grow as a developer, I find that I am most interested in unique experiences driven by the desire to try something new. I love working with passionate designers and 
          creatives that have a vision and want to see it come to fruition. I hope that you enjoy some of my projects I have shared here, and don&apos;t hesitate to reach out and say
          hello!
        </Paragraph>
        <Paragraph className=" mt-4 dark:text-zinc-400">
          Thank you for stopping by. I hope you enjoy your stay!
        </Paragraph>
      </div>
      {/* <a className="custom-butt" href="https://www.google.com">
        <svg
          width="193"
          height="78"
          viewBox="0 0 193 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.5 1L1 28.5L12.5 62L54.5 76.5L121 68.5L169 76.5L191.5 44.5L182.5 7.5H127L72.5 1Z"
            fill="#D9D9D9"
            stroke="black"
          />
        </svg>
      </a> */}
    </div>
  );
}
