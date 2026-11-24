import { buildIcs, stops } from "../data";

export function GET(request: Request) {
  const which = new URL(request.url).searchParams.get("stop");
  const index = which ? Number(which) - 1 : -1;
  const selected = stops[index] ? [stops[index]] : stops;
  const name = stops[index] ? `seph-at-34-${stops[index].id}` : "seph-at-34";

  return new Response(buildIcs(selected), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="${name}.ics"`,
      "Cache-Control": "public, max-age=300",
      "X-Robots-Tag": "noindex",
    },
  });
}
