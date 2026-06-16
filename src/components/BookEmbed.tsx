"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

// The placeholder shipped in .env until a real Cal account exists.
const PLACEHOLDER = "matt/consult";

export const BookEmbed = () => {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;
  const { resolvedTheme } = useTheme();
  const isPlaceholder = !calLink || calLink === PLACEHOLDER;

  useEffect(() => {
    if (isPlaceholder) return;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: resolvedTheme === "dark" ? "dark" : "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [isPlaceholder, resolvedTheme]);

  // Until a real Cal link is wired up, show a clean fallback instead of a
  // broken Cal "not found" screen. Swaps to the live embed automatically once
  // NEXT_PUBLIC_CAL_LINK is set to a real username/event-type.
  if (isPlaceholder) {
    return (
      <div className="mt-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gray-50 dark:bg-zinc-800/50 p-8 text-center">
        <p className="text-secondary dark:text-zinc-400">
          Online booking is being set up. In the meantime, email me and we&apos;ll
          find a time.
        </p>
        <a
          href="mailto:mattkettelkamp@gmail.com?subject=Free%20consult"
          className="inline-flex items-center gap-2 mt-5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold px-5 py-2.5 hover:opacity-90 transition"
        >
          Email me to book
        </a>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
};
