"use client";

import Image from "next/image";
import { Fragment, useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { RefObject } from "react";
import s from "./journey.module.css";
import { MUSIC_START_SECONDS, MUSIC_YOUTUBE_ID, mapsUrl, prettyDate, stops } from "./data";

const MESSAGE = [
  "Happy birthday to the woman who makes everything in my life better.",
  "Every idea I chase, every dream I build, you see it first and cheer it on, even when you don't fully understand it. You're sharp, ambitious and smart. You're easily one of the best decisions I ever made.",
  "When I count my blessings, I count you twice. Not because you're not troublesome 😄 but because you complement and complete me. I couldn't have asked for a better partner.",
  "You're my peace and my favorite person. And don't worry, we go still tour the world! 🌍",
  "And it's so much fun parenting with you. Eden and I are so lucky to have you.",
  "I love you more than words can hold. Here's to you today and always.",
];

const TEXT_STEPS = [
  "When I count my blessings, I count you twice. Not because you're not troublesome 😄 but because you complement and complete me. I couldn't have asked for a better partner.",
  "You're my peace and my favorite person. And don't worry, we go still tour the world! 🌍",
];

const STOPS_AT = 10; // first stop screen
const FINALE_AT = STOPS_AT + stops.length;
const TOTAL = FINALE_AT + 1;

type YTPlayer = {
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (n: number) => void;
  destroy: () => void;
};
type YTApi = {
  Player: new (
    el: string,
    opts: {
      height: string;
      width: string;
      videoId: string;
      playerVars: Record<string, number | string>;
      events: {
        onReady: (e: { target: YTPlayer }) => void;
        onStateChange: (e: { data: number }) => void;
      };
    }
  ) => YTPlayer;
};
declare global {
  interface Window {
    YT?: YTApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

// Background song through YouTube's own player, started by her first tap.
function useMusic(id: string) {
  const player = useRef<YTPlayer | null>(null);
  const playing = useRef(false);
  const [on, setOn] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!id) return;
    const make = () => {
      if (!window.YT) return;
      player.current = new window.YT.Player("seph-music", {
        height: "1",
        width: "1",
        videoId: id,
        playerVars: { controls: 0, start: MUSIC_START_SECONDS, playsinline: 1, rel: 0, modestbranding: 1 },
        events: {
          onReady: (e) => e.target.setVolume(75),
          onStateChange: (e) => {
            playing.current = e.data === 1;
            setOn(e.data === 1);
            // Ended: go back to the chosen line and keep singing.
            if (e.data === 0) {
              player.current?.seekTo(MUSIC_START_SECONDS, true);
              player.current?.playVideo();
            }
          },
        },
      });
    };
    if (window.YT?.Player) make();
    else {
      window.onYouTubeIframeAPIReady = make;
      if (!document.getElementById("yt-api")) {
        const sc = document.createElement("script");
        sc.id = "yt-api";
        sc.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(sc);
      }
    }
    return () => {
      player.current?.destroy();
      player.current = null;
    };
  }, [id]);

  const start = useCallback(() => {
    if (id && !playing.current) player.current?.playVideo();
  }, [id]);
  const toggle = useCallback(() => {
    setMuted((m) => {
      if (m) player.current?.unMute();
      else player.current?.mute();
      return !m;
    });
  }, []);
  return { start, toggle, on, muted, enabled: !!id };
}

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

const STOP_PHOTOS = ["/seph/courtyard.jpg", "/seph/sunflower.jpg", "/seph/arches.jpg", "/seph/courtyard.jpg"];
const STOP_POS = ["50% 55%", "50% 30%", "50% 40%", "50% 55%"];

function clock(time: string) {
  const [h, m] = time.split(":").map(Number);
  return { t: `${h % 12 || 12}:${String(m).padStart(2, "0")}`, ap: h >= 12 ? "pm" : "am" };
}

function StopStep({ index, apple }: { index: number; apple: boolean }) {
  const stop = stops[index];
  const start = clock(stop.start);
  const end = clock(stop.end);
  return (
    <div className={s.stopStep}>
      <div className={s.stopBg}>
        <Image
          src={STOP_PHOTOS[index]}
          alt=""
          fill
          sizes="(max-width: 520px) 100vw, 460px"
          style={{ objectFit: "cover", objectPosition: STOP_POS[index] }}
        />
        <div className={s.stopScrim} />
      </div>
      <div className={s.stopBody}>
        <p className={s.eyebrow}>
          Stop {index + 1} of {stops.length}
        </p>
        <p className={s.bigTime}>
          {start.t}
          <small>{start.ap}</small>
        </p>
        <p className={s.until}>
          until {end.t} {end.ap}
        </p>
        <h2 className={s.stopName}>{stop.title}</h2>
        <p className={s.stopPlace}>{stop.place}</p>
        {!stop.home && <p className={s.stopAddr}>{stop.address}</p>}
        <div className={s.stopActions} style={stop.home ? { marginTop: 22 } : undefined}>
          {!stop.home && (
            <a className={s.gold} href={mapsUrl(stop, apple)} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          )}
          <a className={stop.home ? s.gold : s.ghost} href={`/seph-at-34/birthday.ics?stop=${index + 1}`}>
            Add to calendar
          </a>
        </div>
      </div>
    </div>
  );
}

function Finale({ onAgain }: { onAgain: () => void }) {
  return (
    <div className={s.finale}>
      <Confetti />
      <button type="button" className={s.again} onClick={onAgain}>
        Start again
      </button>
      <p className={s.eyebrow}>{prettyDate()}</p>
      <h2 className={s.finalTitle}>Please don&apos;t be late.</h2>

      <ol className={s.rows}>
        {stops.map((stop, i) => {
          const a = clock(stop.start);
          return (
            <li key={stop.id} className={s.row} style={{ ["--d" as string]: `${0.3 + i * 0.2}s` }}>
              <span className={s.rowTime}>
                {a.t} <small>{a.ap}</small>
              </span>
              <span className={s.rowText}>
                <strong>{stop.home ? stop.title : stop.place}</strong>
                <em>{stop.home ? "At home" : stop.title}</em>
              </span>
            </li>
          );
        })}
      </ol>

      <p className={s.sign}>
        With all our love,
        <br />
        Tolu and Eden
      </p>
      <div className={s.finalSig}>
        <Signature />
      </div>
    </div>
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
  const music = useMusic(MUSIC_YOUTUBE_ID);

  useEffect(() => {
    // Warm the next photos so each slide opens without a flash.
    photoSteps.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  const { start: startMusic } = music;
  const go = useCallback(
    (delta: number) => {
      if (delta > 0) startMusic();
      setStep((cur) => Math.max(0, Math.min(TOTAL - 1, cur + delta)));
    },
    [startMusic]
  );

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
  const labels = [
    "Open",
    ...Array.from({ length: 8 }, () => "Continue"),
    "See your day",
    ...Array.from({ length: stops.length - 1 }, () => "Next stop"),
    "One more thing",
  ];

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
      {music.enabled && <div id="seph-music" className={s.musicHost} aria-hidden="true" />}
      <div className={s.frame}>
        {music.enabled && music.on && (
          <button
            type="button"
            className={s.sound}
            onClick={music.toggle}
            aria-label={music.muted ? "Turn the music on" : "Turn the music off"}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5L6 9H3v6h3l5 4V5z" />
              {music.muted ? <path d="M22 9l-6 6M16 9l6 6" /> : <path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" />}
            </svg>
          </button>
        )}
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

          {step === 9 && (
            <div className={s.center}>
              <Sunflower className={`${s.bloom} ${s.tiny}`} />
              <p className={s.thanks}>
                <Words text="On your special day, the only thing we will do is give thanks." />
              </p>
              <p className={s.thanks}>
                <Words text="Do not let anything weigh you down." start={13} />
              </p>
              <p className={s.thanksBig}>
                <Words text="God is in control." start={20} />
              </p>
            </div>
          )}

          {step >= STOPS_AT && step < FINALE_AT && <StopStep index={step - STOPS_AT} apple={apple} />}

          {step === FINALE_AT && <Finale onAgain={() => setStep(0)} />}
        </section>

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
          {isLast ? (
            <a className={s.next} href="/seph-at-34/birthday.ics">
              Add all to my calendar
            </a>
          ) : (
            <button type="button" className={s.next} onClick={() => go(1)}>
              {labels[step]}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
