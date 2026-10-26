import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-deep-green px-6 py-24 text-center text-black">
      <p className="font-heading text-2xl font-bold sm:text-3xl">
        We couldn&apos;t find that page.
      </p>
      <Link
        href="/"
        className="rounded-sm bg-warm-clay px-6 py-2.5 font-heading text-base font-bold text-black transition-colors hover:bg-warm-clay/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-golden-light"
      >
        Return Home
      </Link>
    </main>
  );
}
