import { Container } from "@/components/ui/container";
import { insightPoints } from "@/content/site";

const weeks = [
  [60, 40], [75, 55], [50, 62], [80, 48], [66, 58], [90, 52],
] as const;
const periods = ["Today", "7D", "30D", "3M"];

export function Insights() {
  return (
    <section aria-labelledby="insights-title" className="border-t border-line py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="insights-title" className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            See what your days add up to.
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            Insights turns what you track into short summaries and trends, so you can spot patterns without building a spreadsheet.
          </p>
          <ul className="mt-6 space-y-2.5">
            {insightPoints.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2.5 h-0.5 w-4 shrink-0 bg-primary" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <figure className="rounded-card border border-line bg-card p-6 sm:p-8">
          <div className="flex gap-2" aria-hidden="true">
            {periods.map((p, i) => (
              <span key={p} className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${i === 2 ? "bg-tint text-ink" : "border border-line text-muted"}`}>
                {p}
              </span>
            ))}
          </div>
          <div role="img" aria-label="Sample chart comparing weekly income and expenses over six weeks" className="mt-8 flex h-48 items-end gap-3">
            {weeks.map(([inc, exp], i) => (
              <div key={i} className="flex h-full flex-1 items-end gap-1">
                <span className="flex-1 rounded-t-md bg-money" style={{ height: `${inc}%` }} />
                <span className="flex-1 rounded-t-md bg-primary" style={{ height: `${exp}%` }} />
              </div>
            ))}
          </div>
          <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
            <span className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-money" />Income</span>
              <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-primary" />Expense</span>
            </span>
            <span>Sample data</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
