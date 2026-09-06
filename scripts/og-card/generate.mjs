#!/usr/bin/env node
/**
 * Renders a social card in the house format used by the writing posts:
 * brand bar, headline with a lede beside it, three numbered columns each with
 * a figure, a short body, an accent rule and a quote box, then a footer bar.
 *
 * Usage:  node scripts/og-card/generate.mjs scripts/og-card/cards/<name>.json
 *
 * Needs playwright, which is not a project dependency because only this script
 * uses it:  npm i -D playwright
 * Chromium comes from playwright's own download, or from PLAYWRIGHT_BROWSERS_PATH
 * when the environment already provides one.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import sharp from "sharp";

const PALETTE = {
  bg: "#fbfaf6",
  ink: "#141414",
  accent: "#f04a09",
  muted: "#5b5b58",
  box: "#efeeeb",
  rule: "#dcdad4",
  panel: "#f1efe9",
  figure: "#c9c6bd",
};

// Card is drawn at 1123x938 CSS px and captured at 2x, then downsampled to
// WIDTH. That ratio matches the other cards in public/.
const CSS_WIDTH = 1123;
const CSS_HEIGHT = 938;
const WIDTH = 1500;

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Figures are drawn rather than photographed, so a card needs no image assets. */
const figures = {
  /** Bars against a target line, one of them picked out. */
  bars: `<rect width="300" height="158" fill="${PALETTE.panel}"/>
    <line x1="34" y1="112" x2="266" y2="112" stroke="#cfccc3" stroke-width="1.5"/>
    <line x1="34" y1="58" x2="266" y2="58" stroke="${PALETTE.accent}" stroke-width="1.5" stroke-dasharray="5 4"/>
    <rect x="48" y="86" width="26" height="26" fill="${PALETTE.figure}"/>
    <rect x="88" y="74" width="26" height="38" fill="${PALETTE.figure}"/>
    <rect x="128" y="94" width="26" height="18" fill="${PALETTE.figure}"/>
    <rect x="168" y="44" width="26" height="68" fill="${PALETTE.accent}"/>
    <rect x="208" y="80" width="26" height="32" fill="${PALETTE.figure}"/>
    <circle cx="181" cy="44" r="5.5" fill="${PALETTE.ink}"/>`,

  /** Two matching cycles, the second echoing the first. Takes labels. */
  cycles: (opts = {}) => `<rect width="300" height="158" fill="${PALETTE.panel}"/>
    <path d="M28 96 C 58 40, 82 40, 106 96 S 148 132, 148 96" fill="none" stroke="${PALETTE.figure}" stroke-width="3.5"/>
    <path d="M152 96 C 182 40, 206 40, 230 96 S 272 132, 272 96" fill="none" stroke="${PALETTE.accent}" stroke-width="3.5"/>
    <line x1="150" y1="26" x2="150" y2="130" stroke="#cfccc3" stroke-width="1.5" stroke-dasharray="4 4"/>
    <text x="66" y="140" font-family="Inter" font-size="12" font-weight="600" fill="#8b8880">${esc(opts.left ?? "")}</text>
    <text x="192" y="140" font-family="Inter" font-size="12" font-weight="600" fill="${PALETTE.accent}">${esc(opts.right ?? "")}</text>`,

  /** A signal falling through layers until it lands. */
  cascade: `<rect width="300" height="158" fill="${PALETTE.panel}"/>
    <rect x="52" y="26" width="196" height="19" rx="3" fill="${PALETTE.figure}"/>
    <rect x="72" y="63" width="156" height="19" rx="3" fill="#d6d3cb"/>
    <rect x="92" y="100" width="116" height="19" rx="3" fill="#e2dfd7"/>
    <path d="M150 45 L150 60 M150 82 L150 97" stroke="${PALETTE.accent}" stroke-width="2.5"/>
    <path d="M146 56 L150 62 L154 56 M146 93 L150 99 L154 93" fill="none" stroke="${PALETTE.accent}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="150" cy="136" r="8" fill="${PALETTE.accent}"/>`,
};

function renderFigure(column) {
  if (column.svg) return column.svg; // raw SVG body, drawn in a 300x158 viewBox
  const figure = figures[column.figure];
  if (!figure) return "";
  return typeof figure === "function" ? figure(column.figureOptions) : figure;
}

function buildHtml(spec) {
  const columns = spec.columns
    .map(
      (column, i) => `
    <div class="col">
      <div class="ch"><div class="num">${i + 1}</div><div class="ct">${esc(column.title)}</div></div>
      <div class="cs">${esc(column.subtitle)}</div>
      <div class="panel"><svg viewBox="0 0 300 158" width="300" height="158">${renderFigure(column)}</svg></div>
      <div class="body">${esc(column.body)}</div>
      <div class="dash"></div>
      <div class="quote">“${esc(column.quote)}”</div>
    </div>`
    )
    .join("");

  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  :root{--bg:${PALETTE.bg};--ink:${PALETTE.ink};--accent:${PALETTE.accent};--muted:${PALETTE.muted};--box:${PALETTE.box};--rule:${PALETTE.rule}}
  body{width:${CSS_WIDTH}px;height:${CSS_HEIGHT}px;background:var(--bg);font-family:Inter,sans-serif;color:var(--ink);
       padding:44px 48px 36px;display:flex;flex-direction:column}
  .top{display:flex;justify-content:space-between;align-items:baseline}
  .brand{font-size:27px;font-weight:700;letter-spacing:-.02em}
  .brand span{color:var(--accent)}
  .tag{font-size:13px;font-weight:700;letter-spacing:.11em}
  .tag span{color:var(--accent)}
  .head{display:flex;gap:40px;margin-top:52px;align-items:flex-start}
  h1{font-family:'Playfair Display',serif;font-weight:800;font-size:63px;line-height:.97;
     letter-spacing:-.015em;width:640px}
  .lede{border-left:1px solid var(--rule);padding-left:32px;font-size:15.5px;line-height:1.62;
        color:#3c3c3a;padding-top:6px}
  .cols{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:44px;flex:1}
  .col{padding:0 30px;border-left:1px solid var(--rule);display:flex;flex-direction:column}
  .col:first-child{padding-left:0;border-left:none}
  .col:last-child{padding-right:0}
  .ch{display:flex;align-items:center;gap:14px}
  .num{width:40px;height:40px;border-radius:50%;background:var(--accent);color:#fff;flex:none;
       display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:600}
  .ct{font-family:'Playfair Display',serif;font-weight:700;font-size:29px;letter-spacing:-.01em}
  .cs{font-size:11.5px;font-weight:600;letter-spacing:.13em;color:var(--muted);
      margin:7px 0 0 54px;text-transform:uppercase}
  .panel{margin-top:19px;height:158px;border-radius:9px;background:${PALETTE.panel};overflow:hidden}
  .body{font-size:14.5px;line-height:1.66;color:#3c3c3a;margin-top:19px;flex:1}
  .dash{width:46px;height:2.5px;background:var(--accent);margin:19px 0 0;flex:none}
  .quote{margin-top:17px;background:var(--box);padding:19px 21px;border-radius:3px;
         font-size:13.7px;line-height:1.6;font-style:italic;color:#33332f}
  .foot{display:flex;justify-content:space-between;align-items:center;margin-top:30px}
  .fl{display:flex;align-items:center;gap:17px;font-size:12px;font-weight:600;
      letter-spacing:.13em;color:#4a4a48}
  .fdash{width:34px;height:2.5px;background:var(--accent)}
  .sep{color:#c4c2bc}
  .fr{font-size:12px;font-weight:700;letter-spacing:.13em;color:#4a4a48}
  .fr span{color:var(--accent)}
</style></head><body>
  <div class="top">
    <div class="brand">adetuyi<span>.com</span></div>
    <div class="tag">BUILDER. <span>THINKER.</span> INVESTOR.</div>
  </div>
  <div class="head">
    <h1>${esc(spec.title)}</h1>
    <div class="lede">${esc(spec.lede)}</div>
  </div>
  <div class="cols">${columns}
  </div>
  <div class="foot">
    <div class="fl"><div class="fdash"></div>IDEAS <span class="sep">|</span> SYSTEMS
      <span class="sep">|</span> BUILDING <span class="sep">|</span> IMPACT</div>
    <div class="fr">BUILDING THE FUTURE ON <span>PURPOSE.</span></div>
  </div>
</body></html>`;
}

/** Playwright's bundled chromium, or whatever the environment already has. */
function findChromium() {
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (!root || !existsSync(root)) return undefined;
  const dir = readdirSync(root).find((name) => /^chromium-\d+$/.test(name));
  if (!dir) return undefined;
  const binary = join(root, dir, "chrome-linux", "chrome");
  return existsSync(binary) ? binary : undefined;
}

async function main() {
  const specPath = process.argv[2];
  if (!specPath) {
    console.error("usage: node scripts/og-card/generate.mjs <card.json>");
    process.exit(1);
  }

  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    console.error("playwright is not installed. Run: npm i -D playwright");
    process.exit(1);
  }

  const spec = JSON.parse(readFileSync(specPath, "utf8"));
  const out = resolve(dirname(specPath), "../../..", spec.output);

  const browser = await chromium.launch({ executablePath: findChromium() });
  const page = await browser.newPage({
    viewport: { width: CSS_WIDTH, height: CSS_HEIGHT },
    deviceScaleFactor: 2,
  });
  await page.setContent(buildHtml(spec), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const shot = await page.screenshot();
  await browser.close();

  const info = await sharp(shot)
    .resize(WIDTH)
    .png({ compressionLevel: 9, palette: true })
    .toFile(out);

  console.log(`${spec.output}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`);
}

main();
