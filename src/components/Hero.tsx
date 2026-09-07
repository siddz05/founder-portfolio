"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { missionStats, site } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

function Words({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="inline-block">
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: reduce ? 0 : "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: delay + i * 0.08, ease }}
          >
            {w}
            {i < text.split(" ").length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-x-0 top-0 h-[34rem] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute -top-24 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-ember/15 blur-[110px]" />
        <div className="absolute top-48 -left-24 h-64 w-64 animate-float rounded-full bg-sun/25 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-card py-1.5 pr-4 pl-1.5 text-sm shadow-sm"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-ember px-2.5 py-1 text-xs font-semibold text-white">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-white" />
            Stealth mode
          </span>
          <span className="text-faded">{site.availability}</span>
        </motion.div>

        <h1 className="font-display text-5xl leading-[1.02] font-bold tracking-tight sm:text-7xl lg:text-8xl">
          <Words text="Struggling today," delay={0.1} />
          <br />
          <span className="text-faded">
            <Words text="building for" delay={0.35} />
          </span>{" "}
          <span className="text-ember">
            <Words text="millions tomorrow." delay={0.55} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, rotate: -3 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
          className="mt-5 font-hand text-2xl text-ember-deep sm:text-3xl"
        >
          ↑ yes, really struggling — no filter here. I&apos;m {site.name.split(" ")[0]}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          className="mt-4 max-w-xl text-lg leading-relaxed text-faded"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-paper shadow-lg shadow-ink/20"
          >
            Join the waitlist <ArrowDown size={18} />
          </motion.a>
          <motion.a
            href="#story"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-ink/5"
          >
            Read my story <ArrowUpRight size={18} />
          </motion.a>
          <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-faded">
            <MapPin size={15} /> {site.location}
          </span>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-7"
        >
          {missionStats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold">{s.value}</dd>
              <dd className="mt-1 text-sm text-faded">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
