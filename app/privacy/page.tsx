import type { Metadata } from "next";
import Link from "next/link";
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
    <PageShell title="Privacy Policy" intro={`Last updated ${site.legalUpdated}. This policy explains what the Daygini app collects, how it is used and the choices you have.`}>
      <Prose heading="Overview">
        <p>Daygini is a personal organizer. We keep this policy short and aim to collect only what the app needs. By using Daygini you agree to this policy and to our <Link href="/terms">Terms &amp; Conditions</Link>.</p>
      </Prose>
      <Prose heading="Who can use Daygini">
        <p>Daygini is for people aged 16 and over. We do not knowingly collect information from younger users.</p>
      </Prose>
      <Prose heading="Information you add">
        <p>This is the information you enter into Daygini, such as transactions, health entries, medication, tasks, lists, occasions and your profile. It is stored locally on your device.</p>
        <p>If you uninstall the app, clear its data, reset your phone, or lose or replace your device, this information may be lost unless you have exported or backed it up.</p>
      </Prose>
      <Prose heading="Account information">
        <p>You can use Daygini as a guest, or sign in with email or Google. If you sign in, we receive your email address and basic profile details such as your name, through Firebase Authentication. Guests do not have an account.</p>
      </Prose>
      <Prose heading="Backup">
        <p>Where backup is available, you can export your data to a file, or back it up to your own Google Drive. Drive backups are stored in a private app folder in your Google account and are managed by you through Google.</p>
      </Prose>
      <Prose heading="Permissions">
        <ul>
          <li>Notifications and alarms, to deliver reminders for tasks, medication and occasions. Reminders are scheduled on your device.</li>
          <li>Contacts, only if you choose to pick a contact for an occasion. Contacts are read on your device and are not uploaded.</li>
          <li>Biometrics, only if you turn on unlock with fingerprint or face. Your biometric data stays on your device.</li>
        </ul>
        <p>You can change these permissions at any time in your device settings.</p>
      </Prose>
      <Prose heading="Third-party services">
        <ul>
          <li>Firebase Authentication, for sign-in.</li>
          <li>Firebase Crashlytics, to receive crash reports and technical details such as device model and app version, so we can fix problems.</li>
          <li>Google Sign-In and Google Drive, if you choose to use them.</li>
          <li>Google AdMob, which may show ads and may use device or advertising identifiers. You can manage ad choices in the app and in your Google settings.</li>
        </ul>
        <p>These services have their own privacy policies.</p>
      </Prose>
      <Prose heading="How we use information">
        <p>We use information to run the app, sign you in, send the reminders you set, show ads, and fix crashes and improve Daygini. We do not sell your personal information, and we do not use your health or money entries for advertising.</p>
      </Prose>
      <Prose heading="Your choices">
        <p>You can edit or delete your entries in the app and turn off notifications in your device settings. You can delete your account in the app. See <Link href="/delete-account">how to delete your account</Link>, including what happens to the information on your device.</p>
        <p>For any privacy request or question, email {mail}.</p>
      </Prose>
      <Prose heading="Changes">
        <p>We may update this policy and will change the date above when we do. For material changes we will give notice in a suitable way, such as in the app or on this website.</p>
      </Prose>
    </PageShell>
  );
}
