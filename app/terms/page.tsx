import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/ui/page-shell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms for using the Daygini app.",
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>;

export default function Terms() {
  return (
    <PageShell title="Terms & Conditions" intro={`Last updated ${site.legalUpdated}.`}>
      <Prose heading="Using Daygini">
        <p>By installing or using Daygini you agree to these terms. If you do not agree, please do not use the app. You must be old enough to enter a binding agreement where you live.</p>
      </Prose>
      <Prose heading="Your content">
        <p>You own the information you add to Daygini. You are responsible for keeping it accurate and for keeping your device and account secure.</p>
      </Prose>
      <Prose heading="Acceptable use">
        <p>Do not misuse the app, try to break or reverse engineer it, or use it for anything unlawful.</p>
      </Prose>
      <Prose heading="Not professional advice">
        <p>Daygini&apos;s money and health features and insights are for personal tracking only. They are not financial, medical or legal advice. Talk to a qualified professional about decisions that matter, and do not rely on app reminders alone for critical medication.</p>
      </Prose>
      <Prose heading="Availability and changes">
        <p>We may change, suspend or stop features, and we may update these terms. Continuing to use Daygini after a change means you accept it.</p>
      </Prose>
      <Prose heading="Liability">
        <p>Daygini is provided as is. To the extent the law allows, we are not liable for losses that result from using the app, including missed reminders or lost data.</p>
      </Prose>
      <Prose heading="Contact">
        <p>Questions about these terms? Email {mail}.</p>
      </Prose>
    </PageShell>
  );
}
