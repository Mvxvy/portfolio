"use client";

import { useState } from "react";

export function SoonCursorCard({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      className="relative flex flex-col gap-[10px] [&_*]:cursor-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos(null)}
    >
      {children}
      {pos && (
        <span
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-[6px] border border-[#3e45ff]/25 bg-white px-[8px] py-[3px] text-[12px] font-medium tracking-[-0.3px] text-[#3e45ff] shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:text-[13px]"
          style={{ left: pos.x, top: pos.y }}
        >
          Soon
        </span>
      )}
    </div>
  );
}
