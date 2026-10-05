const paths = {
  stack: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17.5l9 5 9-5",
  sun: "M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  split: "M5 4v6a4 4 0 0 0 4 4h6M19 20v-6a4 4 0 0 0-4-4H9M5 4h.01M19 20h.01",
  minimal: "M5 8h14M5 12h10M5 16h6",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  list: "M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2",
  cake: "M4 20h16M5 20v-7h14v7M12 13V9M12 9a1.5 1.5 0 0 0 1.5-1.5C13.5 6 12 5 12 5s-1.5 1-1.5 2.5A1.5 1.5 0 0 0 12 9ZM5 15c2 1.5 3 1.5 5 0s3-1.5 5 0 3 1.5 4 0",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
