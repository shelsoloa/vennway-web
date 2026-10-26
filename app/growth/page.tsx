import type { Metadata } from "next";
import { Footer } from "../_components/Footer";
import { GROWTH_URL } from "../_lib/links";

export const metadata: Metadata = {
  title: "For Growth Teams | Vennway",
};

export default function Growth() {
  return (
    <>
      <main className="flex flex-1 items-center bg-stone">
        <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-warm-clay">
            Now accepting teams for Q1 2027
          </p>
          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl">
            Vennway for Growth Teams
          </h1>
          <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-charcoal/75">
            <p>Speak to us about managing your Field Marketing events.</p>
            <p>
              We construct a roundtable out of your ICP, through retargeting,
              ads, and 1:1 intakes.
            </p>
            <p>
              The same system we use to run Vennway tables, geared specifically
              for you and your ICP.
            </p>
          </div>
          <a
            href={GROWTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-sm bg-warm-clay px-8 py-3 font-heading text-base font-bold text-white transition-colors hover:bg-warm-clay/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-clay"
          >
            Book a call
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
