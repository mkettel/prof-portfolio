"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "lucide-react";
import { IconSunLow } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    console.log("Current theme:", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 mt-2 flex hover:bg-gray-50 dark:hover:bg-white/[0.1] rounded-lg items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none overflow-hidden"
    >
      <motion.div
        key={theme}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "dark" ? (
          <MoonIcon className="h-4 w-4 flex-shrink-0 text-neutral-700 dark:text-neutral-300" />
        ) : (
          <IconSunLow className="h-4 w-4 flex-shrink-0 text-neutral-700" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}