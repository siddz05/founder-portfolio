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
  title: "Signal Core Co. — stealth lab shipping autopilot software",
  description:
    "Signal Core Co. is a stealth startup lab turning everyday friction into autopilot software. Product 001 — Autopilot Ledger — is in build. Join the waitlist.",
  openGraph: {
    title: "Signal Core Co. — stealth lab shipping autopilot software",
    description:
      "We find friction. We ship autopilot. Autopilot Ledger in build, product 002 in discovery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal Core Co. — stealth lab shipping autopilot software",
    description:
      "We find friction. We ship autopilot. Autopilot Ledger in build, product 002 in discovery.",
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
