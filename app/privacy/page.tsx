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
        <p>Daygini is a personal organizer that works on your device. Daygini is <strong className="text-ink">local-first</strong>: the money, health, task, list, occasion and profile information you add is stored only on your device and is not sent to us or to any server. The limited information that does leave your device is described below. By using Daygini you agree to this policy and to our <Link href="/terms">Terms &amp; Conditions</Link>.</p>
      </Prose>

      <Prose heading="Who can use Daygini">
        <p>Daygini is for people aged 16 and over. We do not knowingly collect information from younger users.</p>
      </Prose>

      <Prose heading="Data we collect and process">
        <p><strong className="text-ink">Stored only on your device.</strong> The following is saved on your device and is never transmitted to us or any server:</p>
        <ul>
          <li><strong className="text-ink">Money</strong> — income, expenses, subscriptions, loans and transaction history.</li>
          <li><strong className="text-ink">Health</strong> — water, calories, steps, sleep, weight, breathing and medication (see the Health data section below).</li>
          <li><strong className="text-ink">Todo</strong> — tasks, due dates, times, repeats, reminders and categories.</li>
          <li><strong className="text-ink">Lists</strong> — checklists, grocery lists and reusable lists.</li>
          <li><strong className="text-ink">Occasions</strong> — birthdays, anniversaries and other dates you add, and their reminders.</li>
          <li><strong className="text-ink">Profile and settings</strong> — the preferences and profile details you set inside the app.</li>
        </ul>
        <p><strong className="text-ink">Transmitted off your device.</strong> If you create an account, we receive your <strong className="text-ink">account information</strong> — your email address, your name and a user ID — through Firebase Authentication. We also receive <strong className="text-ink">crash and diagnostic data</strong> and process <strong className="text-ink">advertising data</strong> as described under Third-party services and Advertising. We do not receive your Money, Health, Todo, Lists, Occasions or Profile entries.</p>
      </Prose>

      <Prose heading="Health data">
        <p>Daygini lets you record Water, Calories, Steps, Sleep, Weight, Breathing and Medication. You enter this information yourself.</p>
        <ul>
          <li><strong className="text-ink">Storage.</strong> Health data is stored only on your device.</li>
          <li><strong className="text-ink">Access and sharing.</strong> It is not sent to us, is not shared with any third party, and is never used for advertising.</li>
          <li><strong className="text-ink">Deletion.</strong> You can delete any health entry in the app at any time. It is also removed if you choose to erase your on-device data when you delete your account, or if you clear the app&apos;s data or uninstall the app.</li>
        </ul>
      </Prose>

      <Prose heading="Account information">
        <p>You can use Daygini as a guest, or sign in with email or Google. If you sign in, we receive your email address and basic profile details such as your name, through Firebase Authentication. Google Sign-In is an optional way to sign in. Guests do not have an account, and none of their information leaves the device.</p>
      </Prose>

      <Prose heading="No backup or sync">
        <p>Daygini does not back up, sync or export your entries. There is no cloud copy of your data. Because your information lives only on your device, it will be permanently lost if you uninstall the app, clear its data, reset your phone, or lose or replace your device.</p>
      </Prose>

      <Prose heading="Permissions">
        <p>Daygini requests one sensitive permission:</p>
        <ul>
          <li><strong className="text-ink">Notifications and alarms</strong>, to deliver reminders for tasks, medication and occasions. Reminders are scheduled on your device.</li>
        </ul>
        <p>You can change this permission at any time in your device settings.</p>
      </Prose>

      <Prose heading="Third-party services">
        <p>Daygini uses the following services. Each has its own privacy policy that governs how it handles data.</p>
        <ul>
          <li><strong className="text-ink">Firebase Authentication</strong> (Google) — signs you in and stores your account identity (email, name and user ID).</li>
          <li><strong className="text-ink">Google Sign-In</strong> (Google) — an optional sign-in method; Google shares your email and basic profile with Daygini when you use it.</li>
          <li><strong className="text-ink">Firebase Crashlytics</strong> (Google) — receives crash reports and technical details such as device model, app version and diagnostic logs, so we can fix problems.</li>
          <li><strong className="text-ink">Google AdMob</strong> (Google) — shows ads in the app and may use device and advertising identifiers (see Advertising below).</li>
        </ul>
      </Prose>

      <Prose heading="Advertising">
        <p>Daygini shows ads through Google AdMob. To serve ads, AdMob may use your device&apos;s advertising identifier and similar device information. Ads are never based on your health or money entries, which stay on your device. You can reset or limit your advertising identifier, and opt out of personalized ads, in your device&apos;s Google settings.</p>
      </Prose>

      <Prose heading="How we use information">
        <p>We use information to run the app, sign you in, send the reminders you set, show ads, and fix crashes and improve Daygini. We do not sell your personal information, and we do not use your health or money entries for advertising.</p>
      </Prose>

      <Prose heading="Data security">
        <p>Information stored on your device is kept within the app&apos;s private storage area, protected by the Android app sandbox and by your device&apos;s own security. We recommend you set a screen lock on your device. Information that is sent to Firebase and Google — your sign-in details, crash reports and ad requests — is transmitted over encrypted connections (HTTPS/TLS). No method of storage or transmission is completely secure, and we cannot guarantee absolute security.</p>
      </Prose>

      <Prose heading="Data retention">
        <p>Your on-device entries are kept until you delete them, erase your data, or uninstall the app. Your account information is kept until you delete your account, after which it is removed from Firebase Authentication. Crash, diagnostic and advertising data are held by Google under Firebase Crashlytics&apos; and Google AdMob&apos;s own retention policies.</p>
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
