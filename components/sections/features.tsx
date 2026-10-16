import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { Icon } from "@/components/ui/icons";
import { features, type FeatureKey } from "@/content/site";

const tone: Record<FeatureKey, { panel: string; dot: string; ink: string }> = {
  money: { panel: "bg-money-bg", dot: "bg-money", ink: "text-money-ink" },
  todo: { panel: "bg-todo-bg", dot: "bg-todo", ink: "text-todo-ink" },
  lists: { panel: "bg-lists-bg", dot: "bg-lists", ink: "text-lists-ink" },
  occasions: { panel: "bg-occasions-bg", dot: "bg-occasions", ink: "text-occasions-ink" },
};

const byKey = Object.fromEntries(features.map((f) => [f.key, f])) as Record<FeatureKey, (typeof features)[number]>;

function Showcase({ k, reverse = false, note }: { k: "money" | "todo"; reverse?: boolean; note?: string }) {
  const f = byKey[k];
  const t = tone[k];
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
      <div className={reverse ? "lg:order-2" : ""}>
        <p className={`flex items-center gap-2.5 text-base font-bold ${t.ink}`}>
          <span className={`size-2.5 rounded-full ${t.dot}`} aria-hidden="true" />
          {f.name}
        </p>
        <h3 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-5xl">{f.headline}</h3>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{f.summary}</p>
        {note && <p className="mt-6 max-w-md border-l-2 border-todo pl-4 font-semibold">{note}</p>}
      </div>
      <div className={`flex h-[400px] justify-center overflow-hidden rounded-card pt-12 sm:h-[540px] ${t.panel} ${reverse ? "lg:order-1" : ""}`}>
        <PhoneFrame screen={k} alt={`Daygini ${f.name} screen`} className="relative w-[230px] shrink-0 self-start sm:w-[280px]" />
      </div>
    </article>
  );
}

function Light({ k, icon, note }: { k: "lists" | "occasions"; icon: "list" | "cake"; note?: string }) {
  const f = byKey[k];
  const t = tone[k];
  return (
    <article className={`flex flex-col overflow-hidden rounded-card px-8 pt-8 sm:px-10 sm:pt-10 ${t.panel}`}>
      <span className={`flex size-12 items-center justify-center rounded-tile bg-card ${t.ink}`}>
        <Icon name={icon} />
      </span>
      <p className={`mt-6 text-base font-bold ${t.ink}`}>{f.name}</p>
      <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl">{f.headline}</h3>
      <p className="mt-3 max-w-sm leading-relaxed text-muted">{f.summary}</p>
      {note && <p className="mt-4 font-semibold text-ink">{note}</p>}
      <div className="mt-auto flex h-[300px] justify-center overflow-hidden pt-10 sm:h-[360px]">
        <PhoneFrame screen={k} alt={`Daygini ${f.name} screen`} className="w-[220px] shrink-0 self-start sm:w-[250px]" />
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section id="features" aria-label="Features" className="border-t border-line py-24 sm:py-36">
      <Container className="space-y-28 sm:space-y-40">
        <Showcase k="money" />
        <Showcase k="todo" reverse note="Todo = things I need to do." />

        <div className="grid gap-6 lg:grid-cols-2">
          <Light k="lists" icon="list" note="Lists = things I need to remember or collect." />
          <Light k="occasions" icon="cake" />
        </div>
      </Container>
    </section>
  );
}
