import { screens, type ScreenKey, type MockRow } from "@/content/screens";
import type { AccentKey } from "@/content/site";

const tone: Record<AccentKey, { bg: string; fg: string; ink: string }> = {
  primary: { bg: "bg-primary-container", fg: "bg-primary", ink: "text-on-primary-container" },
  money: { bg: "bg-money-bg", fg: "bg-money", ink: "text-money-ink" },
  health: { bg: "bg-health-bg", fg: "bg-health", ink: "text-health-ink" },
  todo: { bg: "bg-todo-bg", fg: "bg-todo", ink: "text-todo-ink" },
  lists: { bg: "bg-lists-bg", fg: "bg-lists", ink: "text-lists-ink" },
  occasions: { bg: "bg-occasions-bg", fg: "bg-occasions", ink: "text-occasions-ink" },
};

/* All sizes use container-query units so the mock scales with the phone. */
function Row({ row }: { row: MockRow }) {
  const t = tone[row.accent ?? "primary"];
  return (
    <li className="flex items-center gap-[3cqw] border-b border-line py-[2.6cqw] last:border-0">
      {row.box ? (
        <span
          className={`flex size-[5cqw] shrink-0 items-center justify-center rounded-[1.2cqw] border-[0.5cqw] ${row.done ? `${t.fg} border-transparent` : "border-muted"}`}
        >
          {row.done && <span className="block h-[2cqw] w-[1.2cqw] -translate-y-[0.2cqw] rotate-45 border-b-[0.6cqw] border-r-[0.6cqw] border-surface" />}
        </span>
      ) : (
        <span className={`size-[2.4cqw] shrink-0 rounded-full ${t.fg}`} />
      )}
      <span className="min-w-0 flex-1">
        <span className={`block truncate text-[4cqw] font-bold leading-tight ${row.done ? "text-muted line-through" : ""}`}>{row.title}</span>
        {row.meta && <span className="block truncate text-[3.2cqw] leading-tight text-muted">{row.meta}</span>}
      </span>
      {row.value && <span className={`text-[3.6cqw] font-extrabold ${t.ink}`}>{row.value}</span>}
    </li>
  );
}

export function MockScreenView({ screen }: { screen: ScreenKey }) {
  const s = screens[screen];
  const t = tone[s.accent];
  return (
    <div className="flex size-full flex-col bg-surface p-[5cqw] text-ink" aria-hidden="true">
      <div className="mt-[5cqw]">
        <p className="text-[6.4cqw] font-extrabold leading-none tracking-tight">{s.title}</p>
        <p className="mt-[1.4cqw] text-[3.4cqw] text-muted">{s.subtitle}</p>
      </div>
      <div className={`mt-[4cqw] rounded-[4.5cqw] p-[4cqw] ${t.bg}`}>
        <p className={`text-[3.2cqw] font-semibold ${t.ink}`}>{s.label}</p>
        <p className={`mt-[1cqw] text-[8cqw] font-extrabold leading-none tracking-tight ${t.ink}`}>{s.value}</p>
        {s.chart && (
          <div className="mt-[3.5cqw] flex h-[14cqw] items-end gap-[1.8cqw]">
            {s.chart.map((h, i) => (
              <span key={i} className={`flex-1 rounded-t-[1cqw] ${t.fg}`} style={{ height: `${h}%`, opacity: i === 5 ? 1 : 0.55 }} />
            ))}
          </div>
        )}
      </div>
      <p className="mt-[4.5cqw] text-[3.8cqw] font-bold">{s.rowsTitle}</p>
      <ul className="mt-[1cqw] rounded-[4cqw] border border-line bg-card px-[3.5cqw]">
        {s.rows.map((r) => (
          <Row key={r.title} row={r} />
        ))}
      </ul>
      <div className="mt-auto flex justify-around border-t border-line pt-[3cqw] text-[3cqw] font-semibold text-muted">
        <span className="font-extrabold text-primary">Home</span>
        <span>Insights</span>
        <span>Profile</span>
      </div>
    </div>
  );
}
