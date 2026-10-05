import Image from "next/image";
import { Container } from "@/components/ui/container";
import { StoreButtons } from "@/components/ui/store-buttons";

export function Download() {
  return (
    <section id="download" aria-labelledby="download-title" className="pb-20 pt-8 sm:pb-28">
      <Container>
        <div className="on-hero grid items-center gap-10 rounded-panel bg-gradient-to-br from-hero-from to-hero-to p-8 text-on-hero sm:p-14 md:grid-cols-[1fr_auto]">
          <div>
            <h2 id="download-title" className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Start organizing your day with Daygini.
            </h2>
            <p className="mt-4 max-w-md text-lg text-on-hero-muted">Available now on Android. The iPhone version is coming soon.</p>
            <div className="mt-8">
              <StoreButtons variant="hero" />
            </div>
          </div>
          <Image src="/daygini-mark.png" alt="" width={160} height={160} className="hidden size-40 rounded-[2.2rem] md:block" />
        </div>
      </Container>
    </section>
  );
}
