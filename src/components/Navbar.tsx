"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { navLinks, site } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: progress }}
        className="h-[3px] origin-left bg-ember"
      />
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <nav className="flex items-center justify-between rounded-2xl border border-ink/10 bg-paper/80 px-4 py-3 shadow-xl shadow-ink/5 backdrop-blur-xl">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-ember font-display text-lg font-bold text-white transition-transform group-hover:-rotate-6">
              S
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
              {site.name}
              <span className="block text-xs font-normal text-faded">
                {site.role}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-faded transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="ml-1 rounded-full p-2 text-faded transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-faded transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="#contact"
              className="ml-2 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-transform hover:scale-105 active:scale-95"
            >
              Get early access
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-full p-2 text-ink md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-2xl border border-ink/10 bg-card p-3 shadow-xl shadow-ink/5 md:hidden"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-ink hover:bg-ink/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}
