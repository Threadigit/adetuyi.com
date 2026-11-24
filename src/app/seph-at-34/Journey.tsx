"use client";

import Image from "next/image";
import { Fragment, useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { RefObject } from "react";
import s from "./journey.module.css";
import { BIRTHDAY_DATE, googleCalendarUrl, mapsUrl, prettyDate, stops } from "./data";

const MESSAGE = [
  "Happy birthday to the woman who makes everything in my life better.",
  "Every idea I chase, every dream I build, you see it first and cheer it on, even when you don't fully understand it. You're sharp, ambitious and smart. You're easily one of the best decisions I ever made.",
  "When I count my blessings, I count you twice. Not because you're not troublesome 😄 but because you complement and complete me. I couldn't have asked for a better partner.",
  "You're my peace and my favorite person. And don't worry, we go still tour the country! 🌍",
  "And it's so much fun parenting with you. Eden and I are so lucky to have you.",
  "I love you more than words can hold. Here's to you today and always.",
];

const TEXT_STEPS = [
  "When I count my blessings, I count you twice. Not because you're not troublesome 😄 but because you complement and complete me. I couldn't have asked for a better partner.",
  "You're my peace and my favorite person. And don't worry, we go still tour the country! 🌍",
];

const TOTAL = 10;

const noopSubscribe = () => () => {};
// Values that only exist in the browser, read without touching state inside an effect.
const useBrowserValue = <T,>(read: () => T, server: T): T =>
  useSyncExternalStore(noopSubscribe, read, () => server);

// Shows a "scroll" cue while a step has more below the fold, and hides it once she scrolls.
function useScrollHint(ref: RefObject<HTMLDivElement | null>) {
  const [overflowing, setOverflowing] = useState(false);
  const [moved, setMoved] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollHeight - el.clientHeight > 24);
    const onScroll = () => {
      if (el.scrollTop > 24) setMoved(true);
      check();
    };
    check();
    const late = window.setTimeout(check, 1500);
    const ro = new ResizeObserver(check);
    ro.observe(el);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(late);
      ro.disconnect();
      el.removeEventListener("scroll", onScroll);
    };
  }, [ref]);
  const atEnd = () => {
    const el = ref.current;
    return !!el && el.scrollTop + el.clientHeight >= el.scrollHeight - 24;
  };
  return { show: overflowing && !moved, atEnd };
}

function Hint({ label }: { label: string }) {
  return (
    <div className={s.hint} aria-hidden="true">
      <span>{label}</span>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

function Words({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className={s.word} style={{ ["--i" as string]: i + start }}>
            {word}
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}

function Sunflower({ className }: { className?: string }) {
  const petals = Array.from({ length: 21 }, (_, i) => i);
  const seeds = Array.from({ length: 46 }, (_, i) => {
    const n = i + 1;
    const r = 4.6 * Math.sqrt(n);
    const a = (n * 137.508 * Math.PI) / 180;
    return { x: (r * Math.cos(a)).toFixed(2), y: (r * Math.sin(a)).toFixed(2) };
  });
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      {petals.map((i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-64"
          rx="13"
          ry="34"
          transform={`rotate(${((i * 360) / 21).toFixed(2)})`}
          fill={i % 2 ? "#F2B632" : "#E8A11A"}
        />
      ))}
      <circle r="36" fill="#4A2F17" />
      {seeds.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2.1" fill="#8A5E2B" />
      ))}
    </svg>
  );
}

const petalSpecs = [
  { left: 6, size: 10, delay: 0, dur: 16 },
  { left: 16, size: 14, delay: 4, dur: 20 },
  { left: 27, size: 9, delay: 9, dur: 15 },
  { left: 38, size: 12, delay: 2, dur: 19 },
  { left: 49, size: 8, delay: 11, dur: 17 },
  { left: 58, size: 13, delay: 6, dur: 21 },
  { left: 67, size: 10, delay: 13, dur: 16 },
  { left: 76, size: 15, delay: 1, dur: 22 },
  { left: 84, size: 9, delay: 8, dur: 18 },
  { left: 92, size: 12, delay: 5, dur: 20 },
  { left: 33, size: 11, delay: 15, dur: 19 },
  { left: 72, size: 8, delay: 10, dur: 15 },
];

function Petals() {
  return (
    <div className={s.petals} aria-hidden="true">
      {petalSpecs.map((p, i) => (
        <i
          key={i}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.7,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

function Counter({ to }: { to: number }) {
  const reduced = useBrowserValue(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    false
  );
  const [n, setN] = useState(0);
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - t0) / 2200, 1);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, reduced]);
  const shown = reduced ? to : n;
  return <span aria-label={String(to)}>{shown}</span>;
}

function Confetti() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = (canvas.width = canvas.offsetWidth * dpr);
    const h = (canvas.height = canvas.offsetHeight * dpr);
    const colours = ["#F2B632", "#E8A11A", "#FDFCF9", "#B94618", "#F7D77A"];
    const bits = Array.from({ length: 110 }, (_, i) => ({
      x: w / 2 + (Math.random() - 0.5) * w * 0.3,
      y: h * 0.55,
      vx: (Math.random() - 0.5) * 14 * dpr,
      vy: (-8 - Math.random() * 12) * dpr,
      r: (3 + Math.random() * 5) * dpr,
      rot: Math.random() * 6,
      vr: (Math.random() - 0.5) * 0.4,
      c: colours[i % colours.length],
    }));
    let raf = 0;
    const t0 = performance.now();
    const frame = (now: number) => {
      const age = now - t0;
      ctx.clearRect(0, 0, w, h);
      for (const b of bits) {
        b.vy += 0.34 * dpr;
        b.vx *= 0.992;
        b.x += b.vx;
        b.y += b.vy;
        b.rot += b.vr;
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - age / 4200);
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rot);
        ctx.fillStyle = b.c;
        ctx.fillRect(-b.r / 2, -b.r / 3, b.r, b.r * 0.66);
        ctx.restore();
      }
      if (age < 4200) raf = requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, w, h);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className={s.confetti} aria-hidden="true" />;
}

function Signature() {
  return (
    <span className={s.ta} aria-label="TA">
      TA<i>.</i>
    </span>
  );
}

type PhotoStep = {
  src: string;
  alt: string;
  line: string;
  pos: string;
  top?: boolean;
};

const photoSteps: PhotoStep[] = [
  {
    src: "/seph/courtyard.jpg",
    alt: "Seph in a blue striped top, smiling softly in a sunlit courtyard",
    line: "Happy birthday to the woman who makes everything in my life better.",
    pos: "50% 60%",
    top: true,
  },
  {
    src: "/seph/arches.jpg",
    alt: "Seph in a soft neutral outfit, smiling under brick arches",
    line: "Every idea I chase, every dream I build, you see it first and cheer it on, even when you don't fully understand it.",
    pos: "50% 40%",
  },
  {
    src: "/seph/sunflower.jpg",
    alt: "Seph in a golden gown with sunflowers, smiling on a forest road",
    line: "You're sharp, ambitious and smart. You're easily one of the best decisions I ever made.",
    pos: "50% 30%",
  },
];

function daysUntil(): number {
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const [y, m, d] = BIRTHDAY_DATE.split("-").map(Number);
  const diff = Math.round((Date.UTC(y, m - 1, d) - today) / 86400000);
  return diff >= 0 ? diff : -1;
}

function Day({ apple, onAgain }: { apple: boolean; onAgain: () => void }) {
  // -2 means "not known yet" (server render), -1 means the day has passed.
  const days = useBrowserValue(() => daysUntil(), -2);
  const when =
    days < 0
      ? null
      : days === 0
        ? "That is today"
        : days === 1
          ? "That is tomorrow"
          : `That is in ${days} days`;

  const ref = useRef<HTMLDivElement>(null);
  const hint = useScrollHint(ref);

  return (
    <>
    <div className={s.day} ref={ref}>
      <Confetti />
      <p className={s.eyebrow}>Your day</p>
      <h2 className={s.dayTitle}>{prettyDate()}</h2>

      <ol className={s.timeline}>
        {stops.map((stop, i) => (
          <li key={stop.id} className={s.stop} style={{ ["--d" as string]: `${0.5 + i * 0.35}s` }}>
            <span className={s.dot} aria-hidden="true" />
            <p className={s.time}>{stop.label}</p>
            <h3 className={s.stopTitle}>{stop.title}</h3>
            <p className={s.place}>{stop.place}</p>
            <p className={s.addr}>{stop.address}</p>
            <div className={s.actions}>
              <a className={s.ghost} href={mapsUrl(stop, apple)} target="_blank" rel="noopener noreferrer">
                Directions
              </a>
              <a className={s.ghost} href={`/seph-at-34/birthday.ics?stop=${i + 1}`}>
                Add to calendar
              </a>
            </div>
          </li>
        ))}
      </ol>

      <a className={s.primary} href="/seph-at-34/birthday.ics">
        Add all three to my calendar
      </a>
      <details className={s.gcal}>
        <summary>Use Google Calendar instead</summary>
        {stops.map((stop) => (
          <a key={stop.id} href={googleCalendarUrl(stop)} target="_blank" rel="noopener noreferrer">
            {stop.title}, {stop.label.split(" to ")[0]}
          </a>
        ))}
      </details>

      <div className={s.late}>
        <p className={s.lateKicker}>One more thing</p>
        <h3 className={s.lateTitle}>Please don&apos;t be late.</h3>
        <p className={s.lateText}>
          First stop is 4:00 pm sharp at The Mall in Columbia.
          {when ? ` ${when}.` : ""}
        </p>
      </div>

      <p className={s.sign}>
        With all our love,
        <br />
        Tolu and Eden
      </p>
      <button type="button" className={s.again} onClick={onAgain}>
        Start again
      </button>
    </div>
    {hint.show && <Hint label="Scroll for your day" />}
    </>
  );
}

function CardStep() {
  const ref = useRef<HTMLDivElement>(null);
  const hint = useScrollHint(ref);
  return (
    <>
      <div className={`${s.center} ${s.cardWrap}`} ref={ref}>
        <article className={s.card} aria-label="Birthday card from Tolu">
          <div className={s.cardPhoto}>
            <Image
              src="/seph/sunflower.jpg"
              alt="Seph in a golden gown with sunflowers"
              fill
              sizes="460px"
              style={{ objectFit: "cover", objectPosition: "50% 6%" }}
            />
          </div>
          <div className={s.cardBody}>
            <p className={s.cardKicker}>Happy 34th birthday, Seph</p>
            {MESSAGE.map((para) => (
              <p key={para} className={s.cardText}>
                {para}
              </p>
            ))}
            <div className={s.cardSign}>
              <Signature />
            </div>
          </div>
        </article>
        <a className={s.save} href="/seph/card.png" download="Seph-at-34-card.png">
          Save this card
        </a>
      </div>
      {hint.show && <Hint label="Scroll to read it all" />}
    </>
  );
}

export default function Journey() {
  const [step, setStep] = useState(0);
  const apple = useBrowserValue(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), false);
  const touch = useRef<number | null>(null);

  useEffect(() => {
    // Warm the next photos so each slide opens without a flash.
    photoSteps.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  const go = useCallback((delta: number) => {
    setStep((cur) => Math.max(0, Math.min(TOTAL - 1, cur + delta)));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const isLast = step === TOTAL - 1;
  const photo = step >= 2 && step <= 4 ? photoSteps[step - 2] : null;
  const labels = ["Open", "Continue", "Continue", "Continue", "Continue", "Continue", "Continue", "Continue", "See your day"];

  return (
    <main
      className={s.root}
      onTouchStart={(e) => {
        touch.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touch.current === null || isLast) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        touch.current = null;
        if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
      }}
    >
      <Petals />
      <div className={s.frame}>
        <div className={s.progress} aria-hidden="true">
          {Array.from({ length: TOTAL }, (_, i) => (
            <span key={i} className={i <= step ? s.on : undefined} />
          ))}
        </div>

        <section key={step} className={s.stage} aria-live="polite" aria-label={`Step ${step + 1} of ${TOTAL}`}>
          {step === 0 && (
            <div className={`${s.center} ${s.gate}`}>
              <Sunflower className={s.bloom} />
              <p className={s.eyebrow}>A little something for</p>
              <h1 className={s.name}>Seph</h1>
            </div>
          )}

          {step === 1 && (
            <div className={s.center}>
              <p className={s.eyebrow}>Today you turn</p>
              <p className={s.big}>
                <Counter to={34} />
              </p>
              <p className={s.hello}>
                <Words text="Happy birthday, Seph." start={8} />
              </p>
            </div>
          )}

          {photo && (
            <div className={s.photoStep}>
              <div className={s.photo}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 520px) 100vw, 460px"
                  priority
                  style={{ objectFit: "cover", objectPosition: photo.pos }}
                />
                <div className={`${s.scrim} ${photo.top ? s.scrimTop : ""}`} />
              </div>
              <p className={`${s.caption} ${photo.top ? s.captionTop : ""}`}>
                <Words text={photo.line} />
              </p>
            </div>
          )}

          {(step === 5 || step === 6) && (
            <div className={s.center}>
              <span className={s.rule} aria-hidden="true" />
              <p className={s.quote}>
                <Words text={TEXT_STEPS[step - 5]} />
              </p>
            </div>
          )}

          {step === 7 && <CardStep />}

          {step === 8 && (
            <div className={s.center}>
              <Sunflower className={`${s.bloom} ${s.small}`} />
              <h2 className={s.love}>
                <Words text="Eden and I love you." />
              </h2>
              <p className={s.hello}>
                <Words text="It is so much fun parenting with you." start={5} />
              </p>
            </div>
          )}

          {step === 9 && <Day apple={apple} onAgain={() => setStep(0)} />}
        </section>

        {!isLast && (
          <div className={s.bar}>
            <button
              type="button"
              className={s.back}
              onClick={() => go(-1)}
              disabled={step === 0}
              aria-label="Back"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button type="button" className={s.next} onClick={() => go(1)}>
              {labels[step]}
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
