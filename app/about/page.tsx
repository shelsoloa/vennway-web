import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../_components/Footer";

export const metadata: Metadata = {
  title: "About | Vennway",
};

const team = [
  {
    name: "Sheldon Soloa",
    title: "Co-Founder",
    bio: "Technical builder focused on product, outreach, and infra.",
    image: "/img_sheldon-soloa.jpeg",
    email: "sheldon@soloa.tech",
    linkedin: "linkedin.com/in/shelsoloa",
  },
  {
    name: "Jordan Taylor",
    title: "Co-Founder",
    bio: "Operational leader focused on events, partnerships, and market.",
    image: "/img_jordan-taylor.jpeg",
    email: "jordan@starta.ca",
    linkedin: "linkedin.com/in/jordan-a-taylor",
  },
];

const linkClass =
  "flex items-center gap-2 rounded-sm text-sm text-charcoal/70 transition-colors hover:text-warm-clay focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-clay";

export default function About() {
  return (
    <>
      <main className="flex flex-1 items-center bg-stone">
        <h1 className="sr-only">About Vennway</h1>
        <div className="mx-auto grid w-full max-w-4xl gap-16 px-4 py-16 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-24 lg:px-8">
          {team.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={240}
                height={240}
                className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56"
              />
              <h2 className="mt-6 font-heading text-2xl font-bold tracking-tight text-charcoal">
                {person.name}
              </h2>
              <p className="mt-1 font-heading text-xs font-medium uppercase tracking-[0.2em] text-warm-clay">
                {person.title}
              </p>
              <p className="mt-4 max-w-xs text-base leading-relaxed text-charcoal/70">
                {person.bio}
              </p>
              <ul className="mt-5 flex flex-col items-center gap-2">
                <li>
                  <a href={`mailto:${person.email}`} className={linkClass}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                    {person.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.${person.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    {person.linkedin}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
