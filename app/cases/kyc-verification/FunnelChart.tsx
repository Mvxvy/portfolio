"use client";

import { FunnelChart as FunnelChartBase } from "@/components/ui/funnel-chart";

const DATA = [
  { label: "Registration", value: 100, displayValue: "100%", color: "#161616" },
  {
    label: "Personal info",
    value: 19.6,
    displayValue: "19.6%",
    color: "#161616",
  },
  { label: "Residence", value: 12.4, displayValue: "12.4%", color: "#161616" },
  { label: "TIN", value: 8.57, displayValue: "8.57%", color: "#161616" },
  {
    label: "Economic profile",
    value: 5.79,
    displayValue: "5.79%",
    color: "#161616",
  },
  {
    label: "Appropriateness",
    value: 5.03,
    displayValue: "5.03%",
    color: "#161616",
  },
  { label: "ID proof", value: 2.25, displayValue: "2.25%", color: "#161616" },
];

const formatPercentage = (p: number) => `${Math.round(p * 100) / 100}%`;

export function FunnelChart() {
  return (
    <div
      className="flex flex-col gap-[20px] rounded-[8px] bg-[#f5f5f5] p-[15px] md:p-[25px]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <FunnelChartBase
        data={DATA}
        orientation="horizontal"
        edges="curved"
        layers={3}
        gap={6}
        showValues={false}
        showLabels
        showPercentage
        formatPercentage={formatPercentage}
        labelLayout="spread"
        className="-ml-[15px] w-[calc(100%+15px)] md:-ml-[25px] md:w-[calc(100%+25px)]"
      />

      <p className="rounded-[8px] bg-white px-[15px] py-[12px] text-[13px] font-medium leading-[18px] tracking-[-0.3px] text-[#383838] md:text-[15px] md:leading-[22px]">
        <span className="text-[#0f0f0f]">ID Proof is the target metric.</span>{" "}
        This step unlocks trading. Further down the funnel there is Address
        proof, but that is a separate gate for withdrawals — only active traders
        reach it.
      </p>
    </div>
  );
}
