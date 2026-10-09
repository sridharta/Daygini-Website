import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Prose } from "@/components/ui/page-shell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "How to delete your Daygini account and what happens to your data.",
  alternates: { canonical: "/delete-account" },
};

const mail = <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>;

export default function DeleteAccount() {
  return (
    <PageShell title="Delete your Daygini account" intro={`Last updated ${site.legalUpdated}. Here is how to delete your account and what happens to your information.`}>
      <Prose heading="Delete your account in the app">
        <ol className="space-y-2 [&>li]:ml-5 [&>li]:list-decimal">
          <li>Open Daygini and go to <strong className="text-ink">Settings</strong>.</li>
          <li>Tap <strong className="text-ink">Account</strong>.</li>
          <li>Tap <strong className="text-ink">Delete account</strong> and confirm.</li>
        </ol>
        <p>If the app asks you to sign in again first, do so, then repeat the steps. This is a security check.</p>
      </Prose>

      <Prose heading="Choose what happens to your on-device data">
        <p>When you delete your account, your Daygini account is removed either way. You then choose what happens to the information stored on your device:</p>
        <ul>
          <li><strong className="text-ink">Keep my data</strong> — your money, health, tasks, lists, occasions, reminders and settings stay on this device so you can keep using Daygini as a guest.</li>
          <li><strong className="text-ink">Delete my data</strong> — that information is erased from the device and cannot be recovered.</li>
        </ul>
        <p>Choosing <strong className="text-ink">Keep my data</strong> does <strong className="text-ink">not</strong> restore or preserve your account. Your account and its sign-in are permanently deleted regardless of this choice; keeping the data only leaves a local copy on your device.</p>
      </Prose>

      <Prose heading="What is permanently deleted">
        <p>Deleting your account permanently removes your Daygini account from Firebase Authentication, including:</p>
        <ul>
          <li>The email address linked to the account.</li>
          <li>Your name and basic profile details.</li>
          <li>Your user ID and any Google Sign-In link to the account.</li>
        </ul>
      </Prose>

      <Prose heading="Account-associated data">
        <ul>
          <li><strong className="text-ink">Crash and diagnostic data.</strong> Any crash reports previously sent to Firebase Crashlytics are held by Google under its own retention policy and are not linked to your personal entries.</li>
          <li><strong className="text-ink">Advertising identifiers.</strong> Ads are served by Google AdMob using your device&apos;s advertising identifier, which is controlled through your device&apos;s Google settings, not from within your account. You can reset or limit it there.</li>
          <li><strong className="text-ink">No cloud backup.</strong> Daygini does not back up or sync your data to any server, so there is no off-device copy to delete.</li>
        </ul>
      </Prose>

      <Prose heading="If you keep your local data">
        <p>If you chose to keep your data, it remains on your device under your control. You can remove it later at any time by erasing it in the app, clearing the app&apos;s data in your device settings, or uninstalling Daygini.</p>
      </Prose>

      <Prose heading="Using Daygini as a guest">
        <p>Guests do not have an account. To remove your information, delete it in the app or uninstall Daygini. Because nothing is backed up, uninstalling permanently removes the information stored on your device.</p>
      </Prose>

      <Prose heading="Request deletion without the app">
        <p>If you cannot open the app, email {mail} from the email address on your account and ask us to delete it. We may ask you to confirm it is your account.</p>
      </Prose>

      <Prose heading="More information">
        <p>See our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms &amp; Conditions</Link>.</p>
      </Prose>
    </PageShell>
  );
}
