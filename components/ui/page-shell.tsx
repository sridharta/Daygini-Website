import { Container } from "./container";

export function PageShell({ title, intro, children }: { title: string; intro?: string; children: React.ReactNode }) {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </Container>
  );
}

export function Prose({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="text-xl font-extrabold tracking-tight">{heading}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc">{children}</div>
    </section>
  );
}

/** Visible marker for legal details that still need to be confirmed. */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return <p className="rounded-tile border border-dashed border-primary bg-primary-container p-4 font-semibold text-on-primary-container">{children}</p>;
}
