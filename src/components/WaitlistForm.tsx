"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { site } from "@/data/portfolio";

// TODO: wire this to a real provider (Formspree / Buttondown / Resend)
// when the waitlist goes live. For now it confirms locally + offers email.
export default function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div
        className={`flex items-center gap-2.5 rounded-2xl px-5 py-4 text-sm font-medium ${
          dark ? "bg-paper/10 text-paper" : "bg-ink/5 text-ink"
        }`}
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ember text-white">
          <Check size={16} />
        </span>
        <span>
          You&apos;re on the list! I&apos;ll write to you from{" "}
          <span className="font-semibold">{site.email}</span> — or skip the line
          and say hi there now.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className={`flex flex-col gap-2.5 sm:flex-row ${
        dark ? "" : ""
      }`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className={`w-full flex-1 rounded-full px-5 py-3.5 text-sm outline-none transition-shadow placeholder:text-faded/70 focus:ring-2 focus:ring-ember ${
          dark
            ? "border border-paper/20 bg-paper/10 text-paper"
            : "border border-ink/15 bg-card text-ink shadow-sm"
        }`}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold whitespace-nowrap text-white shadow-lg shadow-ember/30 transition-transform hover:scale-105 active:scale-95"
      >
        <Send size={16} /> Notify me
      </button>
    </form>
  );
}
