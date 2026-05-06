import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-8 text-slate-100">
      <h1 className="text-3xl font-semibold text-amber-300">Contact</h1>
      <p className="mt-4 text-sm text-slate-300">
        For support, policy questions, takedown requests, or business inquiries, contact the SportBanter admin team
        using the channels below.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        <li>Email: support@sportbanter.online</li>
        <li>Business: partnerships@sportbanter.online</li>
        <li>Response target: within 48 hours</li>
      </ul>
      <p className="mt-4 text-sm text-slate-300">
        Please include your full request details, the relevant URL, and any screenshots needed to help us investigate
        quickly.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm text-amber-300 hover:text-amber-200">
        Back to Home
      </Link>
    </main>
  );
}
