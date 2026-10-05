import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { features, type FeatureKey } from "@/content/site";

const tone: Record<FeatureKey, { panel: string; dot: string }> = {
  money: { panel: "bg-money-bg", dot: "bg-money" },
  health: { panel: "bg-health-bg", dot: "bg-health" },
  todo: { panel: "bg-todo-bg", dot: "bg-todo" },
  lists: { panel: "bg-lists-bg", dot: "bg-lists" },
  occasions: { panel: "bg-occasions-bg", dot: "bg-occasions" },
};

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="border-t border-line py-20 sm:py-28">
      <Container>
        <h2 id="features-title" className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Money, health, tasks, lists and occasions, each with its own space.
        </h2>

        <div className="mt-12">
          {features.map((f, i) => (
            <article key={f.key} className="grid items-center gap-8 border-t border-line py-10 lg:grid-cols-2 lg:gap-20">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <h3 className="flex items-center gap-3 text-2xl font-extrabold tracking-tight">
                  <span className={`size-3 rounded-full ${tone[f.key].dot}`} aria-hidden="true" />
                  {f.name}
                </h3>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-muted">{f.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className={`mt-2.5 h-0.5 w-4 shrink-0 ${tone[f.key].dot}`} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex h-[340px] justify-center overflow-hidden rounded-card pt-10 ${tone[f.key].panel} ${i % 2 ? "lg:order-1" : ""}`}>
                <PhoneFrame
                  screen={f.key}
                  alt={`Daygini ${f.name} screen`}
                  className="relative w-[210px] shrink-0 self-start"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid overflow-hidden rounded-card border border-line md:grid-cols-2">
          <div className="p-8">
            <p className="text-2xl font-extrabold tracking-tight text-todo-ink">Todo = things to do.</p>
            <p className="mt-3 text-muted">Tasks that happen at a time: send the invoice at 10, call the dentist at 1:30. They appear in Today, Upcoming, Unscheduled or Completed.</p>
          </div>
          <div className="border-t border-line p-8 md:border-l md:border-t-0">
            <p className="text-2xl font-extrabold tracking-tight text-lists-ink">Lists = things to remember or collect.</p>
            <p className="mt-3 text-muted">Things without a time: this week&apos;s groceries, a packing checklist, a list you reuse again and again.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
