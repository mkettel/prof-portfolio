"use client";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react"
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Metadata } from 'next'

const metadata: Metadata = {
  title: {
    default: 'Matt Kettelkamp | Developer, Skier, and Person',
    template: '%s | Matt Kettelkamp Portfolio Website'
  },
  description: 'Matt Kettelkamp is a developer, skier, and a passionate person who likes making digital experiences. ',
  keywords: ['Nextjs', 'Javascript', 'React', 'TailwindCSS', 'Vercel', 'Developer', 'Portfolio', 'web developer', 'web development', 'software engineer', 'software development', 'software developer', 'skier', 'skiing', 'outdoors', 'adventure', 'adventurer', 'adventurous', 'adventure seeker', 'adventure enthusiast'],
  metadataBase: new URL('https://mattkettelkamp.com'),
  openGraph: {
    title: 'Matt Kettelkamp | Developer, Skier, and Person',
    description: 'Matt Kettelkamp is a developer, skier, and a passionate person who likes making digital experiences. ',
    url: 'https://mattkettelkamp.com',
    siteName: 'Matt Kettelkamp',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Kettelkamp | Developer, Skier, and Person',
    description: 'Matt Kettelkamp is a developer, skier, and a passionate person who likes making digital experiences. ',
  }
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100 dark:bg-zinc-900 duration-300 transition-colors"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-white dark:bg-zinc-900 duration-300 transition-colors flex-1 overflow-y-auto">
            <div className="flex-1 bg-white dark:bg-zinc-900 duration-300 transition-colors min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 dark:lg:border-neutral-800 overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
          <Analytics />
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}