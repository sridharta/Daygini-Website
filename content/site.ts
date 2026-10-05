export const site = {
  name: "Daygini",
  url: "https://daygini.com",
  title: "Daygini | Your day, all in one place",
  description:
    "Daygini helps you manage money, track health, organize tasks and lists, and remember important occasions in one simple app.",
  supportEmail: "support@daygini.com",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.daygini.app",
  legalUpdated: "6 October 2026",
} as const;

export const nav = [
  { label: "Features", href: "/#features" },
  { label: "Why Daygini", href: "/#why" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
] as const;

export type FeatureKey = "money" | "health" | "todo" | "lists" | "occasions";
export type AccentKey = FeatureKey | "primary";

export const features: {
  key: FeatureKey;
  headline: string;
  name: string;
  summary: string;
  points: string[];
}[] = [
  {
    key: "money",
    headline: "Know where your money goes.",
    name: "Money",
    summary:
      "Income, expenses, subscriptions, loans, transaction history and insights.",
    points: [
      "Log an expense or income in a few taps",
      "See every subscription and loan in one place",
      "Browse your transaction history by day, month or type",
    ],
  },
  {
    key: "health",
    headline: "Build better daily habits.",
    name: "Health",
    summary: "Water, calories, steps, sleep, weight, medication and breathing.",
    points: [
      "Daily goals for water, calories and steps",
      "Medication reminders and a record of what you took",
      "Guided breathing when you need a pause",
    ],
  },
  {
    key: "todo",
    headline: "Know what needs to get done.",
    name: "Todo",
    summary:
      "Time-based tasks organized into Today, Upcoming, Unscheduled and Completed.",
    points: [
      "Due dates, times, repeats and reminders",
      "Categories like Work, Personal and Wishlist",
      "A clear view of what is due today",
    ],
  },
  {
    key: "lists",
    headline: "Keep the things you need organized.",
    name: "Lists",
    summary:
      "Non-time-based checklists, grocery lists and reusable personal lists.",
    points: [
      "Grocery lists with quantities and prices",
      "Start from a template, reuse a list every week",
      "Check things off as you go",
    ],
  },
  {
    key: "occasions",
    headline: "Remember the people and moments that matter.",
    name: "Occasions",
    summary:
      "Birthdays, anniversaries, weddings and other important occasions, with reminders.",
    points: [
      "Repeat yearly so you never lose a date",
      "Choose how early you get reminded",
      "Write and send a greeting when the day arrives",
    ],
  },
];

export const whyReasons = [
  { icon: "stack", title: "One app instead of many", body: "Money, health, tasks, lists and occasions in one place, not five disconnected apps." },
  { icon: "sun", title: "Built around everyday life", body: "Made for the things you actually manage day to day." },
  { icon: "split", title: "Todo and Lists are separate on purpose", body: "Things to do have a time. Things to remember or collect don't." },
  { icon: "minimal", title: "Simple by design", body: "A calm, consistent app that is quick to add to and easy to read." },
  { icon: "chart", title: "Useful insights", body: "Summaries and trends from what you already track." },
] as const;

export const insightPoints = [
  "Where your money goes, by category",
  "How your health habits are trending",
  "How many tasks you complete",
] as const;

export const faqs = [
  {
    q: "What is Daygini?",
    a: "Daygini is an app that brings money, health, tasks, lists and important occasions together in one place.",
  },
  {
    q: "What is the difference between Todo and Lists?",
    a: "Todo is for things to do, with dates, times and reminders. Lists are for things to remember or collect, such as groceries, packing or a reusable checklist, and they don't have a time.",
  },
  {
    q: "Is Daygini available on iPhone?",
    a: "Not yet. Daygini is available on Android through Google Play, and the App Store version is coming soon.",
  },
  {
    q: "I am not getting reminders. What should I check?",
    a: "Make sure notifications are allowed for Daygini in your phone settings, and that battery optimization is not stopping the app from running in the background.",
  },
  {
    q: "How do I delete my account?",
    a: "Open Daygini, go to Settings, then Account, then Delete account. You can read the full steps, and what happens to your information, on the account deletion page.",
  },
  {
    q: "How do I report a problem or suggest a feature?",
    a: "Email us at support@daygini.com with what happened and your phone model, and we will get back to you.",
  },
] as const;
