import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { StoreButtons } from "@/components/ui/store-buttons";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-8 pt-6 sm:pt-8">
      <Container>
        <div className="on-hero grid overflow-hidden rounded-panel bg-gradient-to-br from-hero-from to-hero-to text-on-hero lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center px-6 pb-4 pt-12 sm:px-12 sm:pt-16 lg:py-20 lg:pl-16">
            <h1 id="hero-title" className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              <span className="sr-only">Daygini: </span>
              Your day, all in one place.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-on-hero-muted">
              Manage your money, track your health, organize tasks, keep useful lists and remember important occasions from one simple app.
            </p>
            <div className="mt-8">
              <StoreButtons variant="hero" />
            </div>
          </div>
          <div className="relative h-[430px] sm:h-[540px] lg:h-auto lg:min-h-[600px]">
            <PhoneFrame
              screen="money"
              alt="Daygini Money screen showing a balance and today's transactions"
              className="settle absolute -bottom-[16%] left-[2%] w-[44%] -rotate-6 [animation-delay:120ms]"
            />
            <PhoneFrame
              screen="health"
              alt="Daygini Health screen showing today's health goals"
              className="settle absolute -bottom-[20%] right-[2%] w-[44%] rotate-6 [animation-delay:240ms]"
            />
            <PhoneFrame
              screen="home"
              alt="Daygini Home screen summarising money, health, tasks, lists and occasions"
              priority
              className="settle absolute -bottom-[6%] left-1/2 z-10 w-[50%] -translate-x-1/2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
