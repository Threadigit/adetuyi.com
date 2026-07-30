import Link from "next/link";
import type { ProfileEntry } from "@/lib/profile-content";

export default function ProfileArchive({
  eyebrow,
  title,
  description,
  entries,
}: {
  eyebrow: string;
  title: string;
  description: string;
  entries: ProfileEntry[];
}) {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back
      </Link>

      <header className="mb-14 animate-fade-up">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
        </div>
        <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-4 text-foreground">
          {title}
        </h1>
        <p className="text-[15px] leading-relaxed text-muted max-w-[560px]">
          {description}
        </p>
      </header>

      <div>
        {entries.map((entry, index) => (
          <div key={entry.href}>
            <a
              href={entry.href}
              target={entry.external ? "_blank" : undefined}
              rel={entry.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6 py-5"
            >
              <span className="text-[15px] leading-relaxed text-foreground group-hover:text-accent transition-colors">
                {entry.title}
              </span>
              <span className="text-[13px] text-muted whitespace-nowrap">
                {entry.meta}
                {entry.external && (
                  <span className="ml-1 transition-transform duration-300 inline-block group-hover:translate-x-1">
                    ↗
                  </span>
                )}
              </span>
            </a>
            {index < entries.length - 1 && (
              <div className="border-t border-accent/20" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
