import { site } from "@/content/site";
import { ButtonLink } from "./button";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
      <path d="M4.5 2.6c-.3.2-.5.6-.5 1.1v16.6c0 .5.2.9.5 1.1l9.4-9.4L4.5 2.6Zm10.8 8.1 2.7-2.7L6.6 1.7l8.7 9Zm0 2.6-8.7 9 11.4-6.3-2.7-2.7Zm3.7-1.3-2.4-1.3-3 3 3 3 2.4-1.4c.8-.5.8-1.5 0-2l0-1.3Z" />
    </svg>
  );
}

/** Android is live; iOS is deliberately a non-interactive element, never a link. */
export function StoreButtons({ variant, size = "md", center = false }: { variant: "hero" | "primary"; size?: "md" | "lg"; center?: boolean }) {
  const big = size === "lg" ? "min-h-14 text-lg" : "min-h-12 text-base";
  const soon =
    variant === "hero"
      ? "border-on-hero/40 text-on-hero-muted"
      : "border-line text-muted";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${center ? "items-stretch sm:justify-center" : "items-stretch sm:items-center"}`}>
      <ButtonLink variant={variant} href={site.playStoreUrl} className={`${big} ${size === "lg" ? "px-7" : ""}`}>
        <PlayIcon />
        Get it on Google Play
      </ButtonLink>
      <span
        className={`inline-flex ${big} cursor-not-allowed whitespace-nowrap items-center justify-center rounded-button border border-dashed px-5 font-semibold ${soon}`}
      >
        App Store · Coming Soon
      </span>
    </div>
  );
}
