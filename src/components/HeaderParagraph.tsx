'use client';
import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const HeaderParagraph = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}  
      className={twMerge(
        "text-sm lg:text-base font-normal text-secondary",
        className
      )}
    >
      {children}
    </motion.p>
  );
};
