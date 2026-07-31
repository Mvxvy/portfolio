"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface StatCardItem {
  value: string;
  label: string;
  detail?: string;
}

export interface StatCardsGridProps {
  items: StatCardItem[];
  size?: "lg" | "sm";
  className?: string;
  /** Number of grid columns at the base (mobile) and md breakpoints — used to work out where row/column dividers belong. */
  cols: { base: number; md: number };
}

export function StatCardsGrid({
  items,
  size = "lg",
  className,
  cols,
}: StatCardsGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-0 overflow-hidden rounded-[8px]",
        className
      )}
    >
      {items.map((item, index) => {
        const firstColBase = index % cols.base === 0;
        const firstColMd = index % cols.md === 0;
        const firstRowBase = index < cols.base;

        const needsVDividerBase = !firstColBase;
        // index 0 always gets a desktop-only edge accent, on top of the regular column logic
        const needsVDividerMd = index === 0 || !firstColMd;
        const needsHDividerBase = !firstRowBase;

        const padBase = size === "lg" ? 20 : 15;
        const padMd = size === "lg" ? 25 : 20;

        return (
          <div
            key={item.label}
            className={cn(
              "flex bg-white",
              size === "lg"
                ? "pt-[20px] pr-[20px] pb-[20px] pl-[20px] md:p-[25px]"
                : "pt-[15px] pr-[15px] pb-[15px] pl-[15px] md:p-[20px]",
              firstColBase && "pl-0",
              needsHDividerBase && "border-t border-[#e5e5e5] md:border-t-0"
            )}
          >
            <div
              className={cn(
                "flex flex-col",
                size === "lg" ? "gap-[6px]" : "gap-[4px]",
                // divider between this card and its left neighbour, at the base breakpoint
                needsVDividerBase &&
                  (padBase === 20
                    ? "-ml-[20px] border-l border-[#e5e5e5] pl-[20px]"
                    : "-ml-[15px] border-l border-[#e5e5e5] pl-[15px]"),
                // divider between this card and its left neighbour, at the md breakpoint
                needsVDividerMd
                  ? padMd === 25
                    ? "md:-ml-[25px] md:border-l md:border-[#e5e5e5] md:pl-[25px]"
                    : "md:-ml-[20px] md:border-l md:border-[#e5e5e5] md:pl-[20px]"
                  : "md:ml-0 md:border-l-0 md:pl-0"
              )}
            >
              <p
                className={cn(
                  "font-medium text-[#0f0f0f]",
                  size === "lg" ? "text-[13px] md:text-[15px]" : "text-[13px]"
                )}
              >
                {item.label}
              </p>
              <p
                className={cn(
                  "font-medium text-[#16a34a]",
                  size === "lg"
                    ? "mt-[6px] text-[48px] tracking-[-2.4px] md:text-[72px] md:tracking-[-3.6px]"
                    : "mt-[4px] text-[22px] tracking-[-1.1px] md:text-[28px] md:tracking-[-1.4px]",
                  "leading-none"
                )}
              >
                {item.value}
              </p>
              {item.detail && (
                <p
                  className={cn(
                    "font-medium tracking-[-0.3px] text-[#8a8a8a]",
                    size === "lg" ? "text-[13px] md:text-[15px]" : "text-[13px]"
                  )}
                >
                  {item.detail}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

StatCardsGrid.displayName = "StatCardsGrid";

export default StatCardsGrid;
