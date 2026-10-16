import type { AccentKey } from "./site";

export type ScreenKey = "home" | "money" | "todo" | "lists" | "occasions" | "insights";

export type MockRow = {
  title: string;
  meta?: string;
  value?: string;
  accent?: AccentKey;
  /** "box" renders a checkbox; `done` fills it. */
  box?: boolean;
  done?: boolean;
};

export type MockScreen = {
  title: string;
  subtitle: string;
  accent: AccentKey;
  label: string;
  value: string;
  chart?: number[];
  rowsTitle: string;
  rows: MockRow[];
  pills?: string[];
  more?: { title: string; rows: MockRow[] };
};

/**
 * Real screenshots: drop PNGs into /public/screenshots and map them here
 * (e.g. money: "/screenshots/money.png"). Mapped screens replace the built-in
 * mock automatically; nothing else needs to change.
 *
 * These are the app screens cropped from the Play Store listing images
 * (daygini app repo: assets/store_listing/android), 744×1366 each. Home is
 * stitched from the two Home listing images (same screen, scrolled). Insights
 * has no listing image, so it is cropped from the dev build to the same size.
 */
export const screenshotSize = { width: 744, height: 1366 };

export const screenshotFiles: Partial<Record<ScreenKey, string>> = {
  home: "/screenshots/home-v2.png",
  money: "/screenshots/money.png",
  todo: "/screenshots/todo.png",
  lists: "/screenshots/lists.png",
  occasions: "/screenshots/occasions.png",
  insights: "/screenshots/insights.png",
};

export const screens: Record<ScreenKey, MockScreen> = {
  home: {
    title: "Good morning!",
    subtitle: "Here is your day",
    accent: "primary",
    label: "Today",
    value: "3 tasks · 1 occasion",
    rowsTitle: "Your day",
    rows: [
      { title: "Money", meta: "Spent today", value: "₹640", accent: "money" },
      { title: "Todo", meta: "3 due today", accent: "todo" },
      { title: "Lists", meta: "Weekly groceries", value: "4 left", accent: "lists" },
      { title: "Occasions", meta: "Asha's birthday", value: "Today", accent: "occasions" },
    ],
    more: { title: "Up next", rows: [
      { title: "Send invoice", meta: "10:00 AM · Todo", accent: "todo" },
      { title: "Electricity bill", meta: "Tomorrow · Money", value: "₹1,480", accent: "money" },
    ] },
  },
  money: {
    title: "Money",
    subtitle: "This month",
    accent: "money",
    label: "Balance",
    value: "₹24,380",
    chart: [40, 65, 30, 80, 55, 45, 70],
    rowsTitle: "Today's transactions",
    rows: [
      { title: "Groceries", meta: "Food", value: "−₹420", accent: "money" },
      { title: "Metro card", meta: "Transport", value: "−₹200", accent: "money" },
      { title: "Freelance", meta: "Income", value: "+₹6,500", accent: "money" },
      { title: "Music plan", meta: "Subscription", value: "−₹119", accent: "money" },
    ],
    more: { title: "Coming up", rows: [
      { title: "Rent", meta: "Due Friday", value: "₹12,000", accent: "money" },
      { title: "Electricity", meta: "Due Sunday", value: "₹1,480", accent: "money" },
    ] },
  },
  todo: {
    title: "Todo",
    subtitle: "Today",
    accent: "todo",
    label: "Due today",
    value: "3 tasks",
    rowsTitle: "Today",
    rows: [
      { title: "Send invoice", meta: "10:00 AM · Work", box: true, accent: "todo" },
      { title: "Call the dentist", meta: "1:30 PM · Personal", box: true, accent: "todo" },
      { title: "Renew insurance", meta: "6:00 PM · Personal", box: true, accent: "todo" },
      { title: "Pay rent", meta: "Completed", box: true, done: true, accent: "todo" },
    ],
    more: { title: "Upcoming", rows: [
      { title: "Team review", meta: "Tomorrow · Work", box: true, accent: "todo" },
      { title: "Book flights", meta: "Friday · Personal", box: true, accent: "todo" },
    ] },
  },
  lists: {
    title: "Lists",
    subtitle: "Weekly groceries",
    accent: "lists",
    label: "Still to buy",
    value: "4 items",
    rowsTitle: "To buy",
    rows: [
      { title: "Milk", meta: "2 packs", box: true, accent: "lists" },
      { title: "Tomatoes", meta: "1 kg", box: true, accent: "lists" },
      { title: "Bread", meta: "1 loaf", box: true, accent: "lists" },
      { title: "Rice", meta: "Purchased", box: true, done: true, accent: "lists" },
    ],
  },
  occasions: {
    title: "Occasions",
    subtitle: "Coming up",
    accent: "occasions",
    label: "Next occasion",
    value: "Today",
    rowsTitle: "Upcoming",
    rows: [
      { title: "Asha's birthday", meta: "Today · Remind 1 day before", accent: "occasions" },
      { title: "Anniversary", meta: "12 Nov · Every year", accent: "occasions" },
      { title: "Ravi's wedding", meta: "2 Dec", accent: "occasions" },
    ],
  },
  insights: {
    title: "Insights",
    subtitle: "Last 30 days",
    accent: "primary",
    label: "Top spending category",
    value: "Food",
    chart: [30, 55, 45, 70, 50, 85, 60],
    pills: ["Today", "7D", "30D", "3M"],
    rowsTitle: "By category",
    rows: [
      { title: "Food", value: "38%", accent: "money" },
      { title: "Transport", value: "21%", accent: "money" },
      { title: "Bills", value: "17%", accent: "money" },
    ],
    more: { title: "Tasks and lists", rows: [
      { title: "Tasks completed", meta: "Last 30 days", value: "42", accent: "todo" },
      { title: "Items picked up", meta: "Weekly groceries", value: "18 of 24", accent: "lists" },
    ] },
  },
};
