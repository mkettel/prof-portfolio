"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="px-4 py-10 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100 dark:border-gray-800">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &middot; Built by Matthew Kettelkamp
    </div>
  );
};
