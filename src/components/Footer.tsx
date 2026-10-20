import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import Logo from "./Logo";
import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-28 overflow-hidden pt-24 pb-10">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-center text-paper sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-ember/25 blur-[110px]"
            />
            <div className="relative">
              <p className="font-mono text-sm tracking-widest text-sun uppercase">
                04 — Early access
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
                Be first in line.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-paper/70">
                We&apos;re building for millions, starting with a hundred.
                Write to us and shape what the lab ships.
              </p>
              <p className="mt-5 font-hand text-2xl text-sun">
                write to the lab, we reply fast ↓
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-flex items-center gap-2 font-semibold text-paper underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-sun"
              >
                <Mail size={18} /> {site.email}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 text-sm text-faded sm:flex-row">
          <p className="inline-flex items-center gap-2">
            <Logo size={18} className="rounded-md" />© {new Date().getFullYear()}{" "}
            {site.name} · stealth, chai, shipped
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1 transition-colors hover:text-ink"
          >
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
