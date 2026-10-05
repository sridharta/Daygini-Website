import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { insightPoints } from "@/content/site";

export function Insights() {
  return (
    <section aria-labelledby="insights-title" className="pb-24 sm:pb-36">
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-panel bg-primary-container text-on-primary-container lg:grid-cols-2">
          <div className="px-6 pt-14 sm:px-14 lg:py-24 lg:pl-20">
            <p className="text-base font-bold">Insights</p>
            <h2 id="insights-title" className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              Your everyday activity, made easier to understand.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed opacity-90">
              Daygini turns what you track into useful summaries and trends.
            </p>
            <ul className="mt-8 space-y-2.5 font-semibold">
              {insightPoints.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2.5 h-0.5 w-4 shrink-0 bg-current" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-[380px] justify-center overflow-hidden pt-4 sm:h-[560px] lg:h-[640px] lg:pt-16">
            <PhoneFrame screen="insights" alt="Daygini Insights screen with a spending summary and category breakdown" className="relative w-[230px] shrink-0 self-start sm:w-[290px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
