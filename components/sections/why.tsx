import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { whyReasons } from "@/content/site";

export function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="border-t border-line py-24 sm:py-36">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <h2 id="why-title" className="text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-5xl">
          Why Daygini.
        </h2>
        <ul className="border-t border-line">
          {whyReasons.map((r) => (
            <li key={r.title} className="flex gap-5 border-b border-line py-6">
              <span className="mt-0.5 text-primary"><Icon name={r.icon} /></span>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight">{r.title}</h3>
                <p className="mt-1 text-muted">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
