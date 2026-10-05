import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/phone/phone-frame";
import type { ScreenKey } from "@/content/screens";

const shots: { screen: ScreenKey; alt: string; caption: string }[] = [
  { screen: "money", alt: "Money screen with balance and transactions", caption: "Money" },
  { screen: "health", alt: "Health screen with daily goals", caption: "Health" },
  { screen: "todo", alt: "Todo screen with tasks due today", caption: "Todo" },
  { screen: "lists", alt: "Lists screen with a grocery list", caption: "Lists" },
  { screen: "insights", alt: "Insights screen with spending summary", caption: "Insights" },
];

export function Screenshots() {
  return (
    <section aria-labelledby="screens-title" className="border-t border-line py-20 sm:py-28">
      <Container>
        <h2 id="screens-title" className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          A closer look at the app.
        </h2>
      </Container>
      <Container>
        <div
          role="region"
          aria-label="Daygini screens"
          tabIndex={0}
          className="mt-12 flex snap-x gap-6 overflow-x-auto pb-6"
        >
          {shots.map((s, i) => (
            <figure key={s.screen} className={`w-[200px] shrink-0 snap-start lg:flex-1 ${i % 2 ? "lg:mt-12" : ""}`}>
              <PhoneFrame screen={s.screen} alt={s.alt} className="relative w-full" />
              <figcaption className="mt-3 text-center text-sm font-semibold text-muted">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
