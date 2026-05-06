import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-8 text-slate-100">
      <h1 className="text-3xl font-semibold text-amber-300">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-300">
        SportBanter collects limited technical and interaction data required to operate this service, improve
        performance, and prevent abuse. This may include IP address, device type, browser metadata, timestamps,
        referral information, and basic event telemetry related to consent and outbound navigation.
      </p>
      <p className="mt-3 text-sm text-slate-300">
        We may use cookies or similar storage for frequency controls, session continuity, and diagnostic purposes.
        Third-party advertising or partner services may set their own identifiers according to their respective
        policies. You should review third-party provider policies before interacting with partner destinations.
      </p>
      <p className="mt-3 text-sm text-slate-300">
        We do not sell personal identity data. We may share limited technical data with service providers strictly for
        hosting, analytics, security, and lawful compliance. Users may request data-related inquiries through the
        contact page.
      </p>
      <p className="mt-6 text-xs text-slate-400">Last updated: May 6, 2026</p>
      <Link href="/" className="mt-6 inline-block text-sm text-amber-300 hover:text-amber-200">
        Back to Home
      </Link>
    </main>
  );
}
