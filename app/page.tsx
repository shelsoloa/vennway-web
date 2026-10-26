import Image from "next/image";

const JOIN_URL = "https://cal.com/shelsoloa";
const EVENTS_URL = "https://luma.com/vennway";
const LINKEDIN_URL = "https://www.linkedin.com/company/vennway";

const secondaryButton =
  "flex items-center gap-2 rounded-sm border border-zinc-500 px-5 py-2.5 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <div className="grid grid-cols-[auto_auto] items-center gap-x-3 sm:gap-x-6">
        <Image
          src="/vennway-icon.png"
          alt=""
          width={160}
          height={160}
          priority
          className="h-16 w-16 sm:h-[104px] sm:w-[104px]"
        />
        <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl">
          Vennway
        </h1>
        <p className="col-start-2 -mt-1 text-left font-heading text-[10px] font-extralight uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]">
          Better connections,
          <br />
          by design.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={JOIN_URL}
          className="rounded-sm border-2 border-golden-light bg-golden-light px-12 py-4 font-heading text-lg font-bold text-charcoal transition-colors hover:bg-golden-light/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-golden-light"
        >
          Schedule Intake Call
        </a>

        <div className="flex flex-col items-center gap-3 text-sm sm:flex-row">
          <a
            href={EVENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButton}
          >
            View our public events
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 1C12.6 7.5 16.5 11.4 23 12 16.5 12.6 12.6 16.5 12 23 11.4 16.5 7.5 12.6 1 12 7.5 11.4 11.4 7.5 12 1Z" />
            </svg>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButton}
          >
            Follow us on LinkedIn
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
