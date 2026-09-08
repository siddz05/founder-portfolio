import Reveal from "./Reveal";
import { journey } from "@/data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-mono text-sm tracking-widest text-ember uppercase">
            03 — The journey
          </p>
          <h2 className="mt-3 text-center font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How I got here.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center font-hand text-2xl text-ember-deep">
            the honest version, not the LinkedIn version
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-ink/15 sm:left-[9px]"
          />
          <ol className="space-y-10">
            {journey.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.06}>
                <li className="relative pl-10 sm:pl-12">
                  <span
                    className={`absolute top-1.5 left-0 grid size-4 place-items-center rounded-full ring-4 ring-paper sm:size-5 ${
                      i === journey.length - 1
                        ? "bg-ember"
                        : i === journey.length - 2
                          ? "animate-pulse-dot bg-ember"
                          : "bg-ink/25"
                    }`}
                  />
                  <p className="font-hand text-2xl leading-none text-ember-deep">
                    {j.date}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold">
                    {j.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-faded">{j.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
