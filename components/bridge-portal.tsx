"use client";

import { useEffect, useMemo, useState } from "react";

type RuntimeConfig = {
  monetizationUrl: string;
  interstitialId: string;
  defaultDestination: string;
  allowlist: string[];
};

const TESTIMONIALS = [
  { user: "@nova_stream", text: "Preview loaded quickly and the unlock worked." },
  { user: "@cleo84", text: "Age check was clear. Access link opened right after." },
  { user: "@rixzone", text: "Clean flow on mobile, no weird popups." }
];

function formatViewers(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function BridgePortal({ initialDest }: { initialDest: string }) {
  const [consented, setConsented] = useState(false);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [liveViewers, setLiveViewers] = useState(10240);
  const [runtime, setRuntime] = useState<RuntimeConfig | null>(null);

  useEffect(() => {
    fetch("/api/v1/config")
      .then((res) => res.json())
      .then((json: RuntimeConfig) => setRuntime(json))
      .catch(() => setRuntime(null));
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLiveViewers((current) => {
        const next = current + Math.floor(Math.random() * 450 - 220);
        return Math.min(12000, Math.max(8000, next));
      });
    }, 1800);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (progress >= 100) return;

    const id = window.setInterval(() => {
      setProgress((current) => {
        const next = current + 1;
        if (next >= 100) {
          window.clearInterval(id);
          setShowInterstitial(true);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => window.clearInterval(id);
  }, [started, progress]);

  const finalHref = useMemo(() => {
    const encoded = encodeURIComponent(initialDest);
    return `/go/unlock?dest=${encoded}`;
  }, [initialDest]);

  const handleUnlock = () => {
    if (!consented || started) return;
    setStarted(true);
  };

  const handleContinue = () => {
    if (runtime?.monetizationUrl) {
      window.open(runtime.monetizationUrl, "_blank", "noopener,noreferrer");
    }
    window.location.href = finalHref;
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6 text-slate-100">
      <section className="gold-glow rounded-2xl border border-amber-400/40 bg-slate-900/70 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Secure Preview Portal</p>
        <h1 className="mt-2 text-2xl font-semibold">Featured Media Access</h1>

        <div className="relative mt-4 aspect-video overflow-hidden rounded-xl bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#334155_0,#020617_60%)] blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-black text-amber-300/35">18+</span>
          </div>
          <button
            onClick={handleUnlock}
            className="pulse-soft absolute inset-x-8 bottom-6 rounded-lg bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={!consented || started}
          >
            {started ? "Processing..." : "Unlock Content"}
          </button>
        </div>

        <label className="mt-4 flex items-start gap-2 text-sm text-slate-200">
          <input
            type="checkbox"
            checked={consented}
            onChange={(e) => setConsented(e.target.checked)}
            className="mt-1"
          />
          I confirm I am 18+ and consent to proceed to external content.
        </label>
      </section>

      <section className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <p className="text-sm font-medium text-amber-200">Verification</p>
        <p className="mt-1 text-xs text-slate-400">Analyzing link and preparing secure handoff.</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full bg-amber-400 transition-all" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-xs text-slate-400">{progress}% complete</p>
      </section>

      <section className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <p className="text-sm text-slate-300">Live activity</p>
        <p className="mt-1 text-xl font-semibold text-amber-300">{formatViewers(liveViewers)} active users</p>
      </section>

      <section className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <p className="text-sm font-medium text-slate-200">Community feedback</p>
        <ul className="mt-2 space-y-3 text-sm">
          {TESTIMONIALS.map((item) => (
            <li key={item.user}>
              <p className="font-medium text-amber-200">{item.user}</p>
              <p className="text-slate-300">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {showInterstitial ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-6">
          <div className="gold-glow w-full max-w-sm rounded-2xl border border-amber-400/40 bg-slate-900 p-5 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Step Complete</p>
            <h2 className="mt-2 text-xl font-semibold">Ready to continue</h2>
            <p className="mt-2 text-sm text-slate-300">
              Continue to open partner content in a new tab, then move to your selected destination.
            </p>
            <button
              onClick={handleContinue}
              className="mt-5 w-full rounded-lg bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Continue
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
