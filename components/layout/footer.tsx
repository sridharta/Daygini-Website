import Link from "next/link";
import { Container } from "@/components/ui/container";
import { nav, site } from "@/content/site";
import { Logo } from "./logo";

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">Your day, all in one place.</p>
          <a href={`mailto:${site.supportEmail}`} className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">
            {site.supportEmail}
          </a>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-bold">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-ink">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal">
          <h2 className="text-sm font-bold">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {legal.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-ink">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="mt-10 text-sm text-muted">© {new Date().getFullYear()} Daygini. All rights reserved.</Container>
    </footer>
  );
}
