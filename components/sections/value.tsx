import { Container } from "@/components/ui/container";

export function Value() {
  return (
    <section aria-labelledby="value-title" className="py-28 sm:py-40">
      <Container>
        <h2 id="value-title" className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-6xl">
          Your everyday life shouldn&apos;t need five different apps.
        </h2>
        <p className="mt-10 text-2xl font-extrabold leading-snug tracking-[-0.02em] sm:text-4xl">
          <span className="text-money-ink">Money.</span>{" "}
          <span className="text-health-ink">Health.</span>{" "}
          <span className="text-todo-ink">Tasks.</span>{" "}
          <span className="text-lists-ink">Lists.</span>{" "}
          <span className="text-occasions-ink">Important moments.</span>{" "}
          <span className="whitespace-nowrap">One place.</span>
        </p>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Daygini brings the everyday things you manage into one simple personal organizer.
        </p>
      </Container>
    </section>
  );
}
