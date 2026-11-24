// Everything that can change about the day lives here. Edit this file and the page,
// the calendar file and the countdown all follow.

export const BIRTHDAY_DATE = "2026-11-25"; // YYYY-MM-DD, local to the timezone below
export const TIMEZONE = "America/New_York";

// YouTube video ID of the background song. Leave empty and the page stays silent.
export const MUSIC_YOUTUBE_ID = "";

export type Stop = {
  id: string;
  start: string; // 24 hour HH:MM
  end: string;
  label: string; // shown time, plain words
  title: string;
  place: string;
  address: string;
  note?: string;
};

export const stops: Stop[] = [
  {
    id: "main-event",
    start: "16:00",
    end: "18:00",
    label: "4:00 pm to 6:00 pm",
    title: "The main event",
    place: "The Mall in Columbia",
    address: "10300 Little Patuxent Parkway, Columbia, MD 21044",
  },
  {
    id: "lakefront",
    start: "18:00",
    end: "18:45",
    label: "6:00 pm to 6:45 pm",
    title: "A drink by the lake",
    place: "Columbia Lakefront",
    address: "10221 Wincopin Circle, Columbia, MD 21044",
  },
  {
    id: "dinner",
    start: "19:00",
    end: "21:00",
    label: "7:00 pm to 9:00 pm",
    title: "Dinner",
    place: "Blackwall Barn & Lodge",
    address: "6000 Merriweather Drive, Suite B140, Columbia, MD 21044",
  },
];

export function mapsUrl(stop: Stop, apple = false): string {
  const q = encodeURIComponent(`${stop.place}, ${stop.address}`);
  return apple
    ? `https://maps.apple.com/?q=${q}`
    : `https://www.google.com/maps/search/?api=1&query=${q}`;
}

const stamp = (date: string, time: string) =>
  `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;

export function googleCalendarUrl(stop: Stop): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${stop.title} at ${stop.place}`,
    dates: `${stamp(BIRTHDAY_DATE, stop.start)}/${stamp(BIRTHDAY_DATE, stop.end)}`,
    ctz: TIMEZONE,
    location: `${stop.place}, ${stop.address}`,
    details: "Seph at 34. Please don't be late.",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const esc = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

// Lines over 75 octets are folded, as the calendar format asks.
function fold(line: string): string {
  const out: string[] = [];
  let rest = line;
  while (rest.length > 74) {
    out.push(rest.slice(0, 74));
    rest = ` ${rest.slice(74)}`;
  }
  out.push(rest);
  return out.join("\r\n");
}

export function buildIcs(selected: Stop[]): string {
  const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//adetuyi.com//Seph at 34//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Seph at 34",
    // New York time rules, so the times stay right whatever the date.
    "BEGIN:VTIMEZONE",
    `TZID:${TIMEZONE}`,
    "BEGIN:STANDARD",
    "DTSTART:19701101T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
    "TZOFFSETFROM:-0400",
    "TZOFFSETTO:-0500",
    "TZNAME:EST",
    "END:STANDARD",
    "BEGIN:DAYLIGHT",
    "DTSTART:19700308T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
    "TZOFFSETFROM:-0500",
    "TZOFFSETTO:-0400",
    "TZNAME:EDT",
    "END:DAYLIGHT",
    "END:VTIMEZONE",
  ];

  for (const stop of selected) {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${stop.id}-${BIRTHDAY_DATE}@adetuyi.com`,
      `DTSTAMP:${now}`,
      `DTSTART;TZID=${TIMEZONE}:${stamp(BIRTHDAY_DATE, stop.start)}`,
      `DTEND;TZID=${TIMEZONE}:${stamp(BIRTHDAY_DATE, stop.end)}`,
      `SUMMARY:${esc(`${stop.title} at ${stop.place}`)}`,
      `LOCATION:${esc(`${stop.place}, ${stop.address}`)}`,
      `DESCRIPTION:${esc("Seph at 34. Please don't be late.")}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT1H",
      "ACTION:DISPLAY",
      `DESCRIPTION:${esc(`${stop.title} starts in one hour`)}`,
      "END:VALARM",
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");
  return `${lines.map(fold).join("\r\n")}\r\n`;
}

export function prettyDate(): string {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${BIRTHDAY_DATE}T12:00:00Z`));
}
