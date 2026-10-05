import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { ButtonLink } from "@/components/ui/button";
import { faqs, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Daygini. Read common questions or email support@daygini.com.",
  alternates: { canonical: "/support" },
};

export default function Support() {
  return (
    <PageShell title="Support" intro="Need help with Daygini? Start with the answers below, or email us.">
      <div className="rounded-card border border-line bg-card p-6 sm:p-8">
        <h2 className="text-xl font-extrabold tracking-tight">Email support</h2>
        <p className="mt-2 text-muted">Tell us what happened and which phone you use. We will reply as soon as we can.</p>
        <ButtonLink href={`mailto:${site.supportEmail}`} className="mt-5">{site.supportEmail}</ButtonLink>
      </div>
      <h2 className="mt-14 text-2xl font-extrabold tracking-tight">Common questions</h2>
      <div className="mt-4 border-t border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-line py-5">
            <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="text-xl text-muted transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-prose leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}
