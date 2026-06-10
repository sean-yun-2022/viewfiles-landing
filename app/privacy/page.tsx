import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — View Files",
  description: "Privacy Policy for View Files",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08080f] text-[#e8eaf0]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold text-white mt-6 mb-2">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: June 7, 2026</p>
        </div>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Overview</h2>
            <p>
              View Files is built with privacy as a core principle.{" "}
              <strong className="text-white">Your files never leave your device.</strong>{" "}
              The App reads and displays local files without uploading them to any server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We collect minimal information necessary to operate the service:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-2">
              <li>
                <strong className="text-white">Account information:</strong> Email address when
                you create an account or purchase a subscription.
              </li>
              <li>
                <strong className="text-white">Device ID:</strong> An anonymous identifier to
                manage your device limit (up to 2 devices per license). This ID does not contain
                personally identifiable information.
              </li>
              <li>
                <strong className="text-white">Subscription status:</strong> Plan type and
                validity period, stored securely to verify your license.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Information We Do NOT Collect</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-2">
              <li>The contents of any files you open or view</li>
              <li>Your file names or directory structure</li>
              <li>Browsing history within the built-in browser</li>
              <li>Keystrokes or clipboard content</li>
              <li>Location data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. AI Features & Third Parties</h2>
            <p>
              When you use AI-powered features (summaries, knowledge graph, auto-tagging), the
              relevant file content is sent to <strong className="text-white">Anthropic</strong> for
              processing. This only occurs when you explicitly trigger an AI feature.
            </p>
            <p className="mt-3">
              If you use your own API key (BYOK), your key is stored locally on your device using
              your system's secure keychain. It is never transmitted to our servers.
            </p>
            <p className="mt-3">
              Please review{" "}
              <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer"
                className="text-[#5b8af0] hover:underline">Anthropic's Privacy Policy</a>{" "}
              for details on how they handle data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Payment Processing</h2>
            <p>
              Payments are processed by <strong className="text-white">Lemon Squeezy</strong>.
              We do not store or have access to your payment card information. Please review{" "}
              <a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer"
                className="text-[#5b8af0] hover:underline">Lemon Squeezy's Privacy Policy</a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Storage & Security</h2>
            <p>
              Account and subscription data is stored securely using{" "}
              <strong className="text-white">Supabase</strong>, a SOC 2 compliant platform.
              All data is encrypted in transit (TLS) and at rest.
            </p>
            <p className="mt-3">
              Your API keys and session tokens are stored locally using your operating system's
              secure keychain (macOS Keychain) and never leave your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention</h2>
            <p>
              We retain your account data for as long as your account is active. If you delete
              your account, all associated data is permanently removed within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of any future communications</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@viewfiles.app" className="text-[#5b8af0] hover:underline">
                support@viewfiles.app
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes via the App or email. Continued use of the App after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>For privacy-related questions or requests:</p>
            <p className="mt-2">
              <a href="mailto:support@viewfiles.app" className="text-[#5b8af0] hover:underline">
                support@viewfiles.app
              </a>
            </p>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-white/8 flex gap-6 text-sm text-white/30">
          <Link href="/terms" className="hover:text-white/60 transition-colors">Terms & Conditions</Link>
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
        </div>
      </div>
    </div>
  );
}
