import { Container } from "@/components/ui/container";
import { whyReasons } from "@/content/site";

export function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="border-t border-line py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <h2 id="why-title" className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:sticky lg:top-8 lg:self-start">
          Why people keep their day in Daygini.
        </h2>
        <div className="border-t border-line">
          {whyReasons.map((r) => (
            <div key={r.title} className="border-b border-line py-7">
              <h3 className="text-xl font-extrabold tracking-tight">{r.title}</h3>
              <p className="mt-2 max-w-prose leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
