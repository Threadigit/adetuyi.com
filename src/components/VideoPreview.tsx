"use client";

import { useState } from "react";

export default function VideoPreview() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src="https://www.youtube.com/embed/7JIjYZJO5jQ?autoplay=1"
        title="Lagos Tech Fest 2023"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play Lagos Tech Fest 2023 video"
      className="group relative block w-full h-full overflow-hidden bg-foreground text-left"
    >
      <img
        src="/lagos-tech-fest-preview.jpg"
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <span className="absolute inset-0 bg-foreground/15" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition-transform duration-300 group-hover:scale-105">
          <span aria-hidden="true" className="ml-1 text-[20px]">▶</span>
        </span>
      </span>
      <span className="absolute bottom-4 left-4 right-4 text-[12px] font-medium text-white">
        Lagos Tech Fest 2023 · Play video
      </span>
    </button>
  );
}
