import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Placeholder, Prose } from "@/components/ui/page-shell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms for using the Daygini app.",
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>;

export default function Terms() {
  return (
    <PageShell title="Terms & Conditions" intro={`Last updated ${site.legalUpdated}. These Terms explain the rules for using Daygini in plain language.`}>
      <Prose heading="1. About Daygini">
        <p>Daygini is a personal organizer app. It helps you track money, track health, manage tasks and lists, and remember important occasions, with reminders and insights.</p>
        <p>Daygini is for personal, non-commercial use.</p>
      </Prose>

      <Prose heading="2. Acceptance of these Terms">
        <p>By downloading, installing or using Daygini, you agree to these Terms and to our <Link href="/privacy">Privacy Policy</Link>. If you do not agree, please do not use the app.</p>
      </Prose>

      <Prose heading="3. Eligibility">
        <p>You must be at least 16 years old to use Daygini, or older if the law where you live sets a higher age to agree to terms like these. If you are below that age, please do not use the app.</p>
      </Prose>

      <Prose heading="4. Accounts and security">
        <p>You can use Daygini as a guest, or create an account with your email or Google account.</p>
        <ul>
          <li>Give accurate information when you register, and keep it up to date.</li>
          <li>Keep your password and device secure.</li>
          <li>Tell us at {mail} if you think someone has used your account without permission.</li>
        </ul>
        <p>You are responsible for activity on your account, including activity by someone who gets access because you did not keep your login or device secure.</p>
      </Prose>

      <Prose heading="5. Daygini features">
        <ul>
          <li><strong className="text-ink">Money:</strong> income, expenses, subscriptions, loans and transaction history.</li>
          <li><strong className="text-ink">Health:</strong> trackers such as water, calories, steps, sleep, weight and medication.</li>
          <li><strong className="text-ink">Todo:</strong> tasks with dates, times and reminders.</li>
          <li><strong className="text-ink">Lists:</strong> checklists and grocery lists without a set time.</li>
          <li><strong className="text-ink">Occasions:</strong> birthdays, anniversaries and other dates, with reminders.</li>
          <li><strong className="text-ink">Insights:</strong> summaries and trends from what you track.</li>
        </ul>
        <p>Features may change over time, and some may not be available on every device or version.</p>
      </Prose>

      <Prose heading="6. Your content and local data">
        <p>You own the information you add to Daygini. We do not claim ownership of it.</p>
        <p>Most of your Daygini information is stored locally on your device. If you uninstall the app, clear its data, reset your phone, or lose or replace your device, you may lose that information, unless you have exported it or backed it up.</p>
        <p>Backup tools, where the app offers them, are optional and are your responsibility to use. We cannot recover data that was never backed up.</p>
      </Prose>

      <Prose heading="7. Acceptable use">
        <p>Please use Daygini fairly. You agree not to:</p>
        <ul>
          <li>use the app for anything unlawful or harmful</li>
          <li>harass, abuse or deceive others, including through messages you send from Occasions</li>
          <li>interfere with, overload or attack the app, its servers or its security</li>
          <li>access accounts or data that are not yours</li>
          <li>copy, modify or reverse engineer the app, except where the law allows it</li>
        </ul>
      </Prose>

      <Prose heading="8. Health disclaimer">
        <p>Daygini is a personal tracking and wellness tool. It is not a medical device.</p>
        <p>It does not diagnose, treat, cure or prevent any medical condition. Its scores, summaries and tips are for general information only. Always talk to a qualified healthcare professional about your health, and seek urgent medical help in an emergency.</p>
      </Prose>

      <Prose heading="9. Medication reminders">
        <p>Medication reminders are a convenience. They may be late or missed, for example because of device settings, battery saving, a switched-off phone or a lack of permission.</p>
        <p>You remain responsible for following your healthcare professional&apos;s advice and your medication instructions. Do not rely on Daygini as the only way to take medication on time or to handle an emergency.</p>
      </Prose>

      <Prose heading="10. Financial disclaimer">
        <p>The Money features are personal tracking tools. Daygini is not a bank, lender, accountant, financial institution, investment adviser or financial planning service.</p>
        <p>The information and insights you see come from what you enter. They are not professional financial advice, so check important figures and decisions yourself or with a qualified professional.</p>
      </Prose>

      <Prose heading="11. Notifications and permissions">
        <p>Some features need permission on your device, such as notifications for reminders, or contacts if you choose to pick a contact for an occasion.</p>
        <p>You control these permissions in your device settings. If you turn a permission off, the related features may not work.</p>
      </Prose>

      <Prose heading="12. Third-party services">
        <p>Daygini uses services from other companies to work, including Firebase (sign-in and crash reporting), Google Sign-In, Google Drive (for optional backup), Google AdMob (for ads) and Google Play (to download and update the app).</p>
        <p>These services have their own terms and privacy policies, and we are not responsible for them. Our <Link href="/privacy">Privacy Policy</Link> explains more.</p>
      </Prose>

      <Prose heading="13. Ads and paid features">
        <p>Daygini may show ads. If paid features are offered, they are handled through Google Play and are subject to its terms.</p>
      </Prose>

      <Prose heading="14. Intellectual property">
        <p>Daygini owns the app&apos;s software, name, logo, design and other materials. You get a personal, limited, non-transferable right to use the app under these Terms. You keep ownership of your own content.</p>
      </Prose>

      <Prose heading="15. Account and data deletion">
        <p>You can delete your Daygini account in the app, under Settings, then Account, then Delete account. You can also read how it works, and how to ask us for help, on our <Link href="/delete-account">account deletion page</Link>.</p>
        <p>When you delete your account you can choose whether to keep or erase the information stored on your device. Backup files that you saved yourself, such as in your own Google Drive, are not removed by deleting your account, and you can delete them yourself.</p>
      </Prose>

      <Prose heading="16. Service availability and changes">
        <p>We may improve, change, suspend or stop any part of Daygini. We do not promise that the app will always be available, error-free or uninterrupted.</p>
      </Prose>

      <Prose heading="17. Termination">
        <p>You can stop using Daygini at any time. We may limit or end your access if you seriously or repeatedly break these Terms, misuse the app, or put the app, other people or our services at risk. Where reasonable, we will tell you why.</p>
      </Prose>

      <Prose heading="18. Disclaimers">
        <p>Daygini is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We work to keep it useful and reliable, but we cannot promise that it will be accurate, always work on every device, or meet every need. This does not limit rights you have under the law that cannot be waived.</p>
      </Prose>

      <Prose heading="19. Limitation of liability">
        <p>To the extent the law allows, Daygini is not responsible for indirect or consequential losses, or for losses caused by things outside our reasonable control. This includes lost or deleted local data, missed or late reminders, device problems, and decisions you make using information in the app.</p>
        <p>Nothing in these Terms excludes or limits liability that cannot be excluded or limited by law, such as liability for fraud, or for death or personal injury caused by negligence.</p>
      </Prose>

      <Prose heading="20. Changes to these Terms">
        <p>We may update these Terms. The date at the top shows when they were last changed.</p>
        <p>For material changes, we will give notice in a suitable way, such as in the app, on this website or by email, and where the law requires it we will ask for your agreement. If you do not agree to a change, you can stop using Daygini and delete your account.</p>
      </Prose>

      <Prose heading="21. Governing law">
        <Placeholder>[To be confirmed before release: the legal entity that provides Daygini, and the country or state whose law governs these Terms and where disputes are handled.]</Placeholder>
      </Prose>

      <Prose heading="22. Contact">
        <p>Questions about these Terms? Email {mail}.</p>
      </Prose>
    </PageShell>
  );
}
