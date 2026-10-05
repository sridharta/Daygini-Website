import Image from "next/image";
import { Container } from "@/components/ui/container";
import { StoreButtons } from "@/components/ui/store-buttons";

export function Download() {
  return (
    <section id="download" aria-labelledby="download-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="on-hero flex flex-col items-center rounded-panel bg-gradient-to-br from-hero-from to-hero-to px-6 py-20 text-center text-on-hero sm:px-14 sm:py-28">
          <Image src="/daygini-mark-128.png" alt="" width={64} height={64} className="size-16 rounded-2xl" />
          <h2 id="download-title" className="mt-8 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            Make everyday life easier to manage.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-balance text-on-hero-muted sm:text-xl">Money. Health. Tasks. Lists. Occasions. One simple app.</p>
          <div className="mt-10 w-full sm:w-auto">
            <StoreButtons variant="hero" size="lg" center />
          </div>
        </div>
      </Container>
    </section>
  );
}
