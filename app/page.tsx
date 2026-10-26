import Image from "next/image";

const JOIN_URL = "https://cal.com/shelsoloa";
const LINKEDIN_URL = "https://www.linkedin.com/company/vennway";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/vennway-icon.png"
          alt=""
          width={160}
          height={160}
          priority
          className="h-32 w-32 sm:h-40 sm:w-40"
        />
        <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">
          Vennway
        </h1>
        <p className="font-heading text-sm font-medium uppercase tracking-[0.3em] sm:text-base">
          Better connections,
          <br />
          by design.
        </p>
      </div>

      <a
        href={JOIN_URL}
        className="rounded-full bg-golden-light px-10 py-3 font-heading text-base font-bold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-golden-light"
      >
        Join
      </a>

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vennway on LinkedIn"
        className="opacity-80 transition-opacity hover:opacity-100"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </main>
  );
}
