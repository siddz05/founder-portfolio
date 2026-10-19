import { principles } from "@/data/portfolio";

export default function Marquee() {
  const row = [...principles, ...principles];
  return (
    <section aria-label="Principles" className="relative bg-ink py-5 text-paper">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4 pr-4">
          {row.map((s, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="rounded-full border border-paper/15 bg-paper/5 px-5 py-2 font-display text-sm font-medium tracking-wide whitespace-nowrap">
                {s}
              </span>
              <span className="text-sun">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
