"use client";

import { motion } from "framer-motion";
import { Check, FlaskConical } from "lucide-react";
import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";
import { experiments, flagship } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="building" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm tracking-widest text-ember uppercase">
            02 — What I&apos;m building
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              One mission, a few battle scars.
            </h2>
            <p className="max-w-sm text-faded">
              The flagship is still in stealth — the experiments below are the
              tuition I paid to find it.
            </p>
          </div>
        </Reveal>

        {/* Flagship — dark feature card */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-ink p-8 text-paper sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-ember/25 blur-[100px]"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ember px-3.5 py-1.5 text-xs font-semibold text-white">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-white" />
                  {flagship.status}
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                  {flagship.name} 🤫
                </h3>
                <p className="mt-2 font-hand text-2xl text-sun">
                  {flagship.oneliner}
                </p>
                <p className="mt-3 leading-relaxed text-paper/70">
                  {flagship.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {flagship.promises.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm">
                      <span className="grid size-6 place-items-center rounded-full bg-ember/20 text-sun">
                        <Check size={14} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-paper/15 bg-paper/5 p-6">
                <p className="font-display font-semibold">
                  Get in before the crowd
                </p>
                <p className="mt-1 mb-4 text-sm text-paper/60">
                  Waitlist members join the private beta first.
                </p>
                <WaitlistForm dark />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Experiments */}
        <Reveal delay={0.15}>
          <p className="mt-14 flex items-center gap-2 font-hand text-3xl text-ember-deep">
            <FlaskConical size={22} /> past experiments (a.k.a. tuition fees)
          </p>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {experiments.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="h-full rounded-3xl border border-ink/10 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="text-4xl">{p.emoji}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-faded">{p.desc}</p>
                <p className="mt-4 rounded-xl bg-paper px-4 py-3 font-hand text-xl leading-snug text-ember-deep">
                  {p.lesson}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
