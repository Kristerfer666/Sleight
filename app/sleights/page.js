"use client";

import { useState } from "react";

export default function Sleights() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <main className="relative flex p-4 h-[calc(100dvh-49px)] overflow-hidden bg-background text-foreground">
      <aside
        inert={!sidebarOpen}
        className={`absolute top-4 bottom-4 left-4 w-[calc((100%-48px)/5)] rounded-2xl bg-linear-to-br from-[#ddd0b0] to-[#ebe1c7] shadow-[inset_4px_6px_14px_rgba(58,42,28,0.2),inset_0_4px_8px_rgba(58,42,28,0.07),inset_4px_0_8px_rgba(58,42,28,0.07),1px_1px_0_rgba(255,255,255,0.7)] transition-transform duration-500 ease-in-out motion-reduce:transition-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-[calc(100%+16px)]"
        }`}
      ></aside>
      <section
        className={`flex-1 min-w-0 transition-[margin-left] duration-500 ease-in-out motion-reduce:transition-none ${
          sidebarOpen ? "ml-[calc((100%-16px)/5+16px)]" : "ml-0"
        }`}
      >
        <div className="grid h-full grid-cols-3 auto-rows-[calc((100%-40px)/3.5)] content-start gap-4 overflow-y-auto p-2 [scrollbar-width:thin] [scrollbar-color:#b9a982_transparent]">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`Sleight ${n}`}
              className="rounded-2xl border border-line bg-white/60 shadow-[2px_3px_6px_rgba(58,42,28,0.15)] transition-[background-color] hover:bg-white/40"
            />
          ))}
        </div>
      </section>
      <button
        type="button"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={sidebarOpen}
        className="absolute top-6 left-6 z-10 flex h-8 w-8 items-center justify-center rounded-xl border border-line bg-white/40 text-muted transition-colors hover:bg-white/70 hover:text-foreground"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="9" y1="4" x2="9" y2="20" />
        </svg>
      </button>
    </main>
  );
}
