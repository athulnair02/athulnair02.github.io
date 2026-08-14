import { fadeUp, motion } from "./Section";
import { experience } from "../data/experience";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseMonthYear(value: string): Date {
  if (value === "Present") return new Date();
  const [mon, year] = value.split(" ");
  return new Date(Number(year), MONTHS.indexOf(mon), 1);
}

function monthsBetween(a: Date, b: Date) {
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
}

// Same org gets the same color, so the two Kirchhausen Lab stints — with the
// Human-AI Interaction Lab role in between — visually read as one story.
const ORG_COLORS: Record<string, string> = {
  "LeoVegas Sportsbook": "#5eead4",
  "Kirchhausen Lab — Harvard Medical School": "#fb923c",
  "Human-AI Interaction Lab — UT Austin": "#a78bfa",
  Osmo: "#60a5fa",
};

const rows = [...experience]
  .map((entry) => ({
    ...entry,
    startDate: parseMonthYear(entry.start),
    endDate: parseMonthYear(entry.end),
  }))
  .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

const rangeStart = rows[0].startDate;
const rangeEnd = rows.reduce(
  (latest, r) => (r.endDate > latest ? r.endDate : latest),
  rows[0].endDate
);
const totalMonths = Math.max(monthsBetween(rangeStart, rangeEnd), 1);

const yearTicks = (() => {
  const ticks: { year: number; pct: number }[] = [];
  const firstTickYear = rangeStart.getMonth() === 0 ? rangeStart.getFullYear() : rangeStart.getFullYear() + 1;
  for (let year = firstTickYear; year <= rangeEnd.getFullYear(); year++) {
    const d = new Date(year, 0, 1);
    ticks.push({ year, pct: (monthsBetween(rangeStart, d) / totalMonths) * 100 });
  }
  return ticks;
})();

const legend = Array.from(new Set(rows.map((r) => r.org))).map((org) => ({
  org,
  color: ORG_COLORS[org] ?? "var(--color-accent)",
}));

export function ExperienceGantt() {
  return (
    <div className="mb-16">
      <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2">
        {legend.map((l) => (
          <div key={l.org} className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: l.color }} />
            <span className="font-mono text-xs text-[var(--color-text-faint)]">{l.org}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {rows.map((entry) => {
          const leftPct = (monthsBetween(rangeStart, entry.startDate) / totalMonths) * 100;
          const rawWidthPct = (monthsBetween(entry.startDate, entry.endDate) / totalMonths) * 100;
          const widthPct = Math.max(rawWidthPct, 2.5);
          const color = ORG_COLORS[entry.org] ?? "var(--color-accent)";

          return (
            <motion.a
              key={entry.slug}
              href={`#${entry.slug}`}
              variants={fadeUp}
              className="group grid grid-cols-1 items-center gap-1 sm:grid-cols-[210px_1fr] sm:gap-4"
            >
              <p className="text-sm leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                {entry.role}
              </p>
              <div className="relative h-5 rounded-md bg-[var(--color-bg-raised)]">
                <div
                  className="absolute top-0 h-full rounded-md opacity-90 transition-opacity group-hover:opacity-100"
                  style={{ left: `${leftPct}%`, width: `${widthPct}%`, backgroundColor: color }}
                  title={`${entry.org} · ${entry.start} – ${entry.end}`}
                />
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className="relative mt-3 h-4 sm:ml-[226px]">
        {yearTicks.map((t) => (
          <span
            key={t.year}
            className="absolute -translate-x-1/2 font-mono text-xs text-[var(--color-text-faint)]"
            style={{ left: `${t.pct}%` }}
          >
            {t.year}
          </span>
        ))}
      </div>
    </div>
  );
}
