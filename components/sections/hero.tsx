import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { StoreButtons } from "@/components/ui/store-buttons";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-8 pt-4 sm:pt-6">
      <Container>
        <div className="on-hero grid overflow-hidden rounded-panel bg-gradient-to-br from-hero-from to-hero-to text-on-hero lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col justify-center px-6 pb-10 pt-14 sm:px-14 sm:pt-20 lg:py-28 lg:pl-16 lg:pr-4">
            <p className="text-lg font-extrabold tracking-[-0.02em] text-on-hero-muted">Daygini</p>
            <h1 id="hero-title" className="mt-5 text-[2.9rem] font-extrabold leading-[1] tracking-[-0.04em] sm:text-7xl lg:text-[5.25rem]">
              Your day, all in one place.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-on-hero-muted sm:text-xl">
              Manage your money, track your health, organize tasks and lists, and remember important moments from one simple app.
            </p>
            <div className="mt-10">
              <StoreButtons variant="hero" size="lg" />
            </div>
          </div>
          <div className="relative h-[380px] sm:h-[520px] lg:h-auto lg:min-h-[700px]">
            <PhoneFrame
              screen="home"
              alt="Daygini Home dashboard showing money, health, tasks, lists and occasions for the day"
              priority
              className="settle absolute -bottom-[9%] left-1/2 w-[58%] max-w-[330px] -translate-x-1/2 sm:w-[46%] lg:w-[78%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
