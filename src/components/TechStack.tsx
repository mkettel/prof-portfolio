'use client';

import Image from "next/image";
import React, { useEffect, useState, useRef} from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";


export const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
    {
      title: "Vue.js",
      src: "/images/logos/vue-icon.png",

      className: "h-10 w-10",
    },
    {
      title: "Postgres",
      src: "/images/logos/postgres-elephant.png",

      className: "h-10 w-10",
    },
    {
      title: "Webflow",
      src: "/images/logos/webflow.png",

      className: "h-10 w-10",
    },
    {
      title: "Python",
      src: "/images/logos/python-new.png",

      className: "h-10 w-14",
    },
  ];

  useEffect(() => {
    if(scrollRef.current) {
      setWidth(scrollRef.current.scrollWidth);
    }
  }, [])  
  
  return (
    <div>
      <Heading
        as="h2"
        className="font-black relative text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>

     
      <div className="relative max-w-[90%] overflow-hidden rounded-md">

        <div className="absolute left-0 -top-0 h-full w-60 bg-gradient-to-r from-white to-transparent dark:from-zinc-900 z-20" />
        <div className="absolute right-0 -top-0 h-full w-60 bg-gradient-to-l from-white to-transparent dark:from-zinc-900 z-20" />
        <motion.div className="flex gap-4 md:gap-8 p-4 dark:items-center dark:drop-shadow-white dark:rounded-md drop-shadow-lg "
          ref={scrollRef}
          animate={{
            x: [0,-width / 2] // 0 is the initial value, 100 is the final value because the width of the div is 100vw
          }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 100, ease: "linear" }}
        >
          {stack.map((item) => (
            <Image
              src={item.src}
              key={item.src}
              width={`200`}
              height={`200`}
              alt={item.title}
              className={twMerge("object-contain drop-shadow-xl ", item.className)}
            />
          ))}

          {stack.map((item) => (
            <Image
              src={item.src}
              key={item.src}
              width={`200`}
              height={`200`}
              alt={item.title}
              className={twMerge("object-contain drop-shadow-xl ", item.className)}
            />
          ))}

        </motion.div>
      </div>
      {/* <div className="flex gap-4 md:gap-8 p-4 dark:items-center dark:drop-shadow-white dark:rounded-md drop-shadow-lg flex-wrap  ">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain drop-shadow-xl ", item.className)}
          />
        ))}
      </div> */}
    </div>
  );
};
