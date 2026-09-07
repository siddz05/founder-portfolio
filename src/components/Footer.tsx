import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
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
                I&apos;m building for millions, starting with ten. Join the
                waitlist and help shape what gets built.
              </p>
              <div className="mx-auto mt-8 max-w-md">
                <WaitlistForm dark />
              </div>
              <p className="mt-5 font-hand text-2xl text-sun">
                or just say hi, I reply fast ↓
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-flex items-center gap-2 font-semibold text-paper underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-sun"
              >
                <Mail size={18} /> {site.email}
              </a>
              <div className="mt-7 flex items-center justify-center gap-2">
                {[
                  { icon: GithubIcon, href: site.socials.github, label: "GitHub" },
                  { icon: LinkedinIcon, href: site.socials.linkedin, label: "LinkedIn" },
                  { icon: XIcon, href: site.socials.twitter, label: "X" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="rounded-full border border-paper/15 bg-paper/5 p-3 text-paper/70 transition-colors hover:border-ember hover:text-paper"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 text-sm text-faded sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · built with chai, no
            funding, zero hype
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
