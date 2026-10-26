import Image from "next/image";
import { Topbar } from "./_components/Topbar";

const INTAKE_URL = "https://cal.com/shelsoloa";

const steps = [
  {
    title: "Intake",
    body: "Tell us what you're building, your current challenges, and the people you want to meet.",
  },
  {
    title: "Curate",
    body: "We match you with a small high-signal group of vetted founders, operators, and experts.",
  },
  {
    title: "Execute",
    body: "We handle the logistics and facilitation, you focus on the conversation and outcomes.",
  },
];

const stats = [
  { value: "10–15", label: "People per round table" },
  { value: "3+", label: "Curated cohorts monthly" },
  { value: "Toronto", label: "Our home base" },
];

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="flex flex-1 flex-col">
        <section className="relative isolate overflow-hidden bg-[linear-gradient(100deg,#020506_0%,#04100f_35%,#0e3d32_100%)] text-stone">
          <div
            className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[65%]"
            aria-hidden="true"
          >
            <Image
              src="/vennway_banner.png"
              alt=""
              fill
              preload
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#04100f_0%,#04100f_15%,rgba(4,16,15,0.6)_55%,transparent_100%)] lg:bg-[linear-gradient(to_right,#04100f_0%,#04100f_30%,rgba(4,16,15,0.55)_65%,transparent_100%)]" />
          </div>

          <div className="mx-auto flex min-h-[28rem] max-w-7xl flex-col justify-center gap-8 px-4 py-20 sm:px-6 sm:py-24 lg:min-h-[34rem] lg:px-8">
            <h1 className="max-w-xl font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              High-intent roundtables for{" "}
              <span className="text-golden-light">founders and operators</span>
            </h1>
            <div>
              <a
                href={INTAKE_URL}
                className="inline-block rounded-sm bg-warm-clay px-8 py-3 font-heading text-base font-bold text-white transition-colors hover:bg-warm-clay/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-golden-light"
              >
                Join
              </a>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-stone">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-10 lg:px-8 lg:py-20">
            <div>
              <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-warm-clay">
                How it works
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
                We do the sourcing, matching, and invites.
                <br />
                You get the right room
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70">
                Tell us what you&apos;re building and who you need to meet. We
                find your matching attendees, manage the event, and structure
                the conversation around your goals.
              </p>
            </div>

            <ol className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-charcoal/15">
              {steps.map((step, i) => (
                <li key={step.title} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-golden-light font-heading text-base font-bold text-warm-clay">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[linear-gradient(100deg,#04100f_0%,#0a2a23_50%,#0e3d32_100%)] text-stone">
          <dl className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-stone/15 sm:px-6 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <dd className="font-heading text-3xl font-bold tracking-tight text-golden-light sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 font-heading text-xs font-medium uppercase tracking-[0.18em] text-stone/70">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </>
  );
}
