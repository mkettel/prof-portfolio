'use client';
import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Font files can be colocated inside of `app`
const CalSans = localFont({
  src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={twMerge(
        CalSans.className,
        "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
