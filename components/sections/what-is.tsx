import { Container } from "@/components/ui/container";

const areas = [
  ["Money", "Income, expenses, subscriptions and loans", "bg-money"],
  ["Health", "Water, calories, steps, sleep, weight and medication", "bg-health"],
  ["Todo", "Tasks with a date, a time and a reminder", "bg-todo"],
  ["Lists", "Groceries and checklists you reuse", "bg-lists"],
  ["Occasions", "Birthdays, anniversaries and weddings", "bg-occasions"],
  ["Insights", "Summaries and trends from all of the above", "bg-primary"],
] as const;

export function WhatIs() {
  return (
    <section aria-labelledby="what-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="what-title" className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            One personal organizer for the small things that run your day.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
            Daygini brings your money, health, tasks, lists and important dates into a single app, so you stop switching between an expense tracker, a health tracker, a todo app and a calendar.
          </p>
        </div>
        <dl className="border-t border-line">
          {areas.map(([name, text, dot]) => (
            <div key={name} className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[9rem_1fr]">
              <dt className="flex items-center gap-3 font-bold">
                <span className={`size-2.5 rounded-full ${dot}`} aria-hidden="true" />
                {name}
              </dt>
              <dd className="text-muted">{text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
