"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center rounded-full border border-accent/30 px-3.5 py-1 text-[11px] font-medium uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-white"
      aria-live="polite"
    >
      {copied ? "Copied" : label}
    </button>
  );
}
