import { Hero } from "@/components/sections/hero";
import { Value } from "@/components/sections/value";
import { Features } from "@/components/sections/features";
import { Why } from "@/components/sections/why";
import { Insights } from "@/components/sections/insights";
import { Download } from "@/components/sections/download";

export default function Home() {
  return (
    <>
      <Hero />
      <Value />
      <Features />
      <Why />
      <Insights />
      <Download />
    </>
  );
}
