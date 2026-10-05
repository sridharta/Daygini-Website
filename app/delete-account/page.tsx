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

      <Prose heading="What is deleted">
        <ul>
          <li>Your Daygini account, including the email and sign-in details linked to it.</li>
          <li>Optionally, the information stored on your device. When you delete your account, you choose whether to keep this information on the device or erase it. If you erase it, your money, health, tasks, lists, occasions, reminders and settings on that device are removed and cannot be recovered.</li>
        </ul>
      </Prose>

      <Prose heading="What is not deleted">
        <ul>
          <li>Backup files you saved yourself, for example in your own Google Drive. You can delete these in Google Drive.</li>
          <li>Files you exported to your phone or elsewhere.</li>
        </ul>
      </Prose>

      <Prose heading="Using Daygini as a guest">
        <p>Guests do not have an account. To remove your information, delete it in the app or uninstall Daygini. Uninstalling removes the information stored on your device unless you backed it up.</p>
      </Prose>

      <Prose heading="Cannot use the app?">
        <p>If you cannot open the app, email {mail} from the email address on your account and ask us to delete it. We may ask you to confirm it is your account.</p>
      </Prose>

      <Prose heading="More information">
        <p>See our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms &amp; Conditions</Link>.</p>
      </Prose>
    </PageShell>
  );
}
