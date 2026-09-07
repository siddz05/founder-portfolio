import type { Metadata } from "next";
import { Caveat, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddharth Dwivedi — Founder building SaaS for millions",
  description:
    "Siddharth Dwivedi is a struggling founder building simple SaaS for millions. Read the story, follow the build, join the waitlist.",
  openGraph: {
    title: "Siddharth Dwivedi — Founder building SaaS for millions",
    description:
      "No funding, no filter, just shipping. Follow the journey and join the waitlist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Dwivedi — Founder building SaaS for millions",
    description:
      "No funding, no filter, just shipping. Follow the journey and join the waitlist.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-paper font-sans text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
