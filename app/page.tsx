import { Hero } from "@/components/sections/hero";
import { WhatIs } from "@/components/sections/what-is";
import { Features } from "@/components/sections/features";
import { Why } from "@/components/sections/why";
import { Insights } from "@/components/sections/insights";
import { Screenshots } from "@/components/sections/screenshots";
import { Download } from "@/components/sections/download";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIs />
      <Features />
      <Why />
      <Insights />
      <Screenshots />
      <Download />
    </>
  );
}
