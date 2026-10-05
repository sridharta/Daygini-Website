import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/ui/page-shell";
import { ButtonLink } from "@/components/ui/button";
import { features } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Daygini is a personal organizer that keeps your money, health, tasks, lists and occasions in one simple app.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <PageShell title="About Daygini" intro="Daygini is a daily life organizer built around one idea: your day should be easy to see in one place.">
      <Prose heading="Why we built it">
        <p>Most people run their day across many apps: one for spending, one for health, one for tasks, another for shopping and a calendar for birthdays. Each is fine alone, but together they are scattered.</p>
        <p>Daygini brings them together in one calm, consistent app, so you can check your day, add what is new and get on with it.</p>
      </Prose>
      <Prose heading="What is inside">
        <ul>
          {features.map((f) => (
            <li key={f.key}><strong className="text-ink">{f.name}.</strong> {f.summary}</li>
          ))}
          <li><strong className="text-ink">Insights.</strong> Summaries and trends from what you track.</li>
        </ul>
      </Prose>
      <Prose heading="How we think about it">
        <p>Todo is for things to do, with a time. Lists are for things to remember or collect, without one. We keep them separate because they are different jobs.</p>
        <p>We keep the design simple, and we add features only when they help you with your day.</p>
      </Prose>
      <div className="border-t border-line pt-8">
        <ButtonLink href="/#download">Get the App</ButtonLink>
      </div>
    </PageShell>
  );
}
