import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — View Files",
  description: "Terms and Conditions for View Files",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#08080f] text-[#e8eaf0]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold text-white mt-6 mb-2">Terms & Conditions</h1>
          <p className="text-white/40 text-sm">Last updated: June 7, 2026</p>
        </div>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By downloading, installing, or using View Files ("the App"), you agree to be bound by
              these Terms and Conditions. If you do not agree, do not use the App.
            </p>
            <p className="mt-3">
              View Files is operated by an individual developer ("we", "us", or "our"). The App is
              available at <a href="https://viewfiles.app" className="text-[#5b8af0] hover:underline">viewfiles.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to install and use
              the App on up to two (2) devices per license for your personal or professional use.
            </p>
            <p className="mt-3">You may not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Copy, modify, or distribute the App</li>
              <li>Reverse engineer or attempt to extract the source code</li>
              <li>Sell, resell, or sublicense the App</li>
              <li>Use the App for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Free Trial & Subscription</h2>
            <p>
              The App offers a 30-day free trial upon installation. No credit card is required for
              the trial period.
            </p>
            <p className="mt-3">
              After the trial period, continued use requires a paid subscription:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li><strong className="text-white">Pro Monthly:</strong> $0.99 per month</li>
              <li><strong className="text-white">Pro Annual:</strong> $9.99 per year</li>
            </ul>
            <p className="mt-3">
              Payments are processed securely through Lemon Squeezy. By subscribing, you agree to
              Lemon Squeezy's{" "}
              <a href="https://www.lemonsqueezy.com/terms" target="_blank" rel="noopener noreferrer"
                className="text-[#5b8af0] hover:underline">Terms of Service</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cancellation & Refunds</h2>
            <p>
              You may cancel your subscription at any time. Cancellation takes effect at the end
              of the current billing period. We do not offer partial refunds for unused subscription
              time.
            </p>
            <p className="mt-3">
              If you experience a technical issue that prevents you from using the App, please
              contact us at{" "}
              <a href="mailto:support@viewfiles.app" className="text-[#5b8af0] hover:underline">
                support@viewfiles.app
              </a>{" "}
              and we will review refund requests on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Your Files & Data</h2>
            <p>
              View Files operates entirely on your local device. The App reads files stored on your
              computer and displays them. <strong className="text-white">We do not upload, transmit,
              or store your files on any server.</strong>
            </p>
            <p className="mt-3">
              You retain full ownership of all files and content you access through the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. AI Features</h2>
            <p>
              The App includes optional AI-powered features (summaries, knowledge graph, tagging).
              These features may send file content to third-party AI providers (Anthropic) for
              processing.
            </p>
            <p className="mt-3">
              AI features are limited to 20 uses per month during the free trial and 30 uses per
              month on the Pro plan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Disclaimer of Warranties</h2>
            <p>
              The App is provided "as is" without warranties of any kind, express or implied.
              We do not warrant that the App will be error-free, uninterrupted, or meet your
              specific requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of the App,
              including but not limited to loss of data or business interruption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Updates & Changes</h2>
            <p>
              We may update the App and these Terms at any time. Continued use of the App after
              changes constitutes acceptance of the updated Terms. We will notify users of
              significant changes via the App or email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:support@viewfiles.app" className="text-[#5b8af0] hover:underline">
                support@viewfiles.app
              </a>
            </p>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-white/8 flex gap-6 text-sm text-white/30">
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
        </div>
      </div>
    </div>
  );
}
