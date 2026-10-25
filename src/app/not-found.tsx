import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const links = [
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Advisory" },
  { href: "/thesis", label: "Thesis" },
];

export default function NotFound() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-8 bg-accent" />
        <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
          404
        </span>
      </div>
      <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-4 text-foreground">
        This page could not be found
      </h1>
      <p className="text-[15px] leading-relaxed text-muted max-w-[520px] mb-10">
        The link may be old or mistyped. These are good places to continue.
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-foreground link-hover font-medium">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/" className="text-foreground link-hover font-medium">
            Home
          </Link>
        </li>
      </ul>
    </main>
  );
}
