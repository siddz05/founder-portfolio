import Reveal from "./Reveal";
import { site, story } from "@/data/portfolio";

export default function About() {
  return (
    <section id="story" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm tracking-widest text-ember uppercase">
            01 — Thesis
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {story.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="grid aspect-square place-items-center overflow-hidden rounded-3xl border border-ink/10 bg-card shadow-xl shadow-ink/5">
                <div className="text-center">
                  <div className="mx-auto grid size-24 animate-wiggle place-items-center rounded-3xl bg-ink px-3 font-display text-3xl font-bold text-paper">
                    {site.mark}
                  </div>
                  <p className="mt-4 font-hand text-2xl text-ember-deep">
                    logo loading… stay stealthy
                  </p>
                  <p className="mt-1 text-sm text-faded">
                    brand kit drops at launch
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-3xl border-2 border-ember/40" />
            </div>
          </Reveal>

          <div>
            {story.bio.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-lg leading-relaxed text-faded [&:not(:first-child)]:mt-4 first:text-ink">
                  {p}
                </p>
              </Reveal>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {story.cards.map((d, i) => (
                <Reveal key={d.title} delay={0.15 + i * 0.08}>
                  <div className="group h-full rounded-2xl border border-ink/10 bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-ember/50 hover:shadow-lg hover:shadow-ember/10">
                    <span className="text-3xl">{d.emoji}</span>
                    <p className="mt-3 font-hand text-xl leading-none text-ember-deep">
                      {d.kicker}
                    </p>
                    <h3 className="mt-1 font-display font-semibold">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-faded">
                      {d.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-6 font-hand text-2xl text-ember-deep">
                inside the lab right now →
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {story.exploring.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/10 bg-card px-4 py-1.5 text-sm shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
