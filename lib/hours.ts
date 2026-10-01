import { business, formatTime, hours, type DayKey } from "@/data/business";

const DAY_ORDER: DayKey[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export interface OpenStatus {
  isOpen: boolean;
  /** Human-readable detail, e.g. "until 3pm" or "opens Thu 8am". */
  detail: string;
}

function toMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

/** Day-of-week and minutes-since-midnight for `date` in the cafe's time zone. */
function zonedNow(date: Date): { dayIndex: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: business.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const dayIndex = DAY_ORDER.indexOf(get("weekday") as DayKey);
  return { dayIndex, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

function hoursFor(dayIndex: number) {
  return hours.find((h) => h.day === DAY_ORDER[dayIndex])!;
}

export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const { dayIndex, minutes } = zonedNow(date);
  const today = hoursFor(dayIndex);

  if (today.open && today.close) {
    const open = toMinutes(today.open);
    const close = toMinutes(today.close);
    if (minutes >= open && minutes < close) {
      return { isOpen: true, detail: `until ${formatTime(today.close)}` };
    }
    if (minutes < open) {
      return { isOpen: false, detail: `opens today at ${formatTime(today.open)}` };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const idx = (dayIndex + offset) % 7;
    const next = hoursFor(idx);
    if (next.open) {
      const when = offset === 1 ? "tomorrow" : next.label;
      return { isOpen: false, detail: `opens ${when} at ${formatTime(next.open)}` };
    }
  }
  return { isOpen: false, detail: "" };
}

/** Index into `hours` for today in the cafe's time zone (for highlighting). */
export function todayKey(date: Date = new Date()): DayKey {
  return DAY_ORDER[zonedNow(date).dayIndex];
}
