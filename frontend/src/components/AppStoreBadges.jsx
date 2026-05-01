import React from "react";
import { Apple, Play } from "lucide-react";

export default function AppStoreBadges({ variant = "light", className = "" }) {
  const onDark = variant === "dark";
  const base = onDark
    ? "bg-sand-light text-ink hover:bg-olive hover:text-sand-light"
    : "bg-ink text-sand-light hover:bg-olive";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <button
        type="button"
        data-testid="app-store-badge"
        className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 ${base}`}
      >
        <Apple className="w-7 h-7" strokeWidth={1.5} />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">Coming soon on</span>
          <span className="text-base font-semibold">App Store</span>
        </span>
      </button>
      <button
        type="button"
        data-testid="play-store-badge"
        className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 ${base}`}
      >
        <Play className="w-7 h-7" strokeWidth={1.5} />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">Coming soon on</span>
          <span className="text-base font-semibold">Google Play</span>
        </span>
      </button>
    </div>
  );
}
