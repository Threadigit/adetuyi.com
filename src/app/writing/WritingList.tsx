"use client";

import { useState } from "react";
import Link from "next/link";
import { Post } from "@/lib/writing";

export default function WritingList({ posts, startHere }: { posts: Post[]; startHere: Post[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const needle = query.trim().toLowerCase();
  const filtered = posts.filter(
    (p) =>
      (active === "All" || p.category === active) &&
      (!needle ||
        `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(needle))
  );
  const showStartHere = active === "All" && !needle && startHere.length > 0;

  return (
    <>
      <div className="animate-fade-up delay-150" role="search" aria-label="Filter essays">
      <div className="mb-4">
        <label htmlFor="essay-search" className="sr-only">
          Search essays
        </label>
        <input
          id="essay-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search essays"
          className="w-full rounded-full border border-accent/20 bg-transparent px-5 py-2.5 text-[14px] text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-[12px] uppercase tracking-widest font-medium transition-colors duration-200 border ${
              active === cat
                ? "bg-accent text-background border-accent"
                : "bg-transparent text-muted border-accent/20 hover:border-accent/50 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      </div>

      {showStartHere && (
        <section className="mb-12 animate-fade-up delay-150" aria-label="Start here">
          <h2 className="text-[13px] font-medium uppercase tracking-widest text-foreground border-l-[3px] border-accent pl-3 mb-3">
            Start here
          </h2>
          <div>
            {startHere.map((post, index) => (
              <div key={post.slug}>
                <Link href={`/writing/${post.slug}`} className="group flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6 py-3.5">
                  <span className="text-[16px] text-foreground group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-accent font-medium whitespace-nowrap">
                    {post.category}
                  </span>
                </Link>
                {index < startHere.length - 1 && <div className="border-t border-accent/15" />}
              </div>
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <p className="text-[15px] text-muted">No essays match that search.</p>
      )}

      <div className="space-y-0 animate-fade-up delay-200">
        {filtered.map((post, index) => (
          <article key={post.slug}>
            <Link href={`/writing/${post.slug}`} className="group block py-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[12px] uppercase tracking-widest text-accent font-medium">
                  {post.category}
                </span>
                <span className="text-muted/40 text-[10px]">·</span>
                <time
                  dateTime={post.date}
                  className="text-[12px] uppercase tracking-widest text-muted/60"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              </div>
              <h2 className="text-[20px] md:text-[22px] font-medium text-foreground tracking-tight leading-snug mb-2.5 group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-[14px] leading-relaxed text-muted line-clamp-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-muted/60 mt-3 group-hover:text-accent transition-colors duration-300">
                {post.readingTime}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
            {index < filtered.length - 1 && (
              <div className="border-t border-accent/15" />
            )}
          </article>
        ))}
      </div>
    </>
  );
}
