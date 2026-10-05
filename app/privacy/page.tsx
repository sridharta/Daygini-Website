import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/ui/page-shell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Daygini handles your information.",
  alternates: { canonical: "/privacy" },
};

const mail = <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>;

export default function Privacy() {
  return (
    <PageShell title="Privacy Policy" intro={`Last updated ${site.legalUpdated}.`}>
      <Prose heading="Overview">
        <p>This policy explains what information the Daygini app collects, how it is used and the choices you have. By using Daygini you agree to this policy.</p>
      </Prose>
      <Prose heading="Information you enter">
        <p>Daygini stores the data you add, such as transactions, health entries, tasks, lists and occasions. This data is kept on your device. If you sign in or use backup, it can also be stored with the services described below so you can restore it.</p>
      </Prose>
      <Prose heading="Account information">
        <p>If you sign in with email or Google, we receive your email address and basic profile details. You can also continue as a guest.</p>
      </Prose>
      <Prose heading="Permissions">
        <ul>
          <li>Notifications, to send reminders for tasks, medication and occasions.</li>
          <li>Contacts, only if you choose to pick a contact for an occasion.</li>
        </ul>
      </Prose>
      <Prose heading="Third-party services">
        <p>Daygini uses services such as Firebase (authentication, data storage and crash reporting), Google Drive (optional backup) and Google AdMob (ads). These providers may process limited technical information under their own privacy policies.</p>
      </Prose>
      <Prose heading="How we use information">
        <p>We use information to run the app, sync and back up your data, send reminders you set, fix crashes and improve Daygini. We do not sell your personal data.</p>
      </Prose>
      <Prose heading="Your choices">
        <p>You can edit or delete your entries in the app, turn off notifications in your phone settings, and ask us to delete your account data by emailing {mail}.</p>
      </Prose>
      <Prose heading="Children">
        <p>Daygini is not directed at children under 13, and we do not knowingly collect their information.</p>
      </Prose>
      <Prose heading="Changes and contact">
        <p>We may update this policy and will change the date above when we do. Questions? Email {mail}.</p>
      </Prose>
    </PageShell>
  );
}
