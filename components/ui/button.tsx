import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "hero";

const styles: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:opacity-90",
  outline: "border border-line text-ink hover:bg-tint",
  hero: "bg-hero-action text-on-hero-action hover:opacity-90",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-button px-5 text-base font-bold transition-colors";

export function ButtonLink({
  variant = "primary",
  className = "",
  href,
  ...props
}: { variant?: Variant; href: string } & Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const cls = `${base} ${styles[variant]} ${className}`;
  const external = /^https?:/.test(href);
  return external ? (
    <a href={href} className={cls} rel="noopener" {...props} />
  ) : (
    <Link href={href} className={cls} {...props} />
  );
}
