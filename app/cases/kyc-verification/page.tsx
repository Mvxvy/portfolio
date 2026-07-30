import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FunnelChart } from "./FunnelChart";
import { CopyEmailLink } from "../../CopyEmailLink";
import { StatCardsGrid } from "@/components/ui/stat-cards";

const BEHANCE_URL = "https://www.behance.net/maksay56";
const INSTAGRAM_URL = "https://www.instagram.com/m_karkach/";
const PINTEREST_URL = "https://pinterest.com/maksay56/";

const FOOTER_LINKS = [
  { label: "behance", href: BEHANCE_URL },
  { label: "pinterest", href: PINTEREST_URL },
  { label: "instagram", href: INSTAGRAM_URL },
];

export const metadata: Metadata = {
  title: "KYC Verification — Case Study · Maksim Karkach",
  description:
    "Raising Registration → Trading unlocked conversion by 80% inside strict ESMA and CySEC constraints.",
};

const SOLUTIONS = [
  {
    insight:
      "After registration users landed in the trading terminal but could not trade — KYC was not done. They wandered across screens, opened instruments and hit blocks. The target action was unreachable and the product never explained why.",
    title: "Redirect into KYC + explaining the product flow",
    body: [
      "Removed access to what did not work anyway and made the only available path obvious. On the verification screen I added a dropdown explaining the product logic: to start trading you need to pass verification. Users understood not only what to do, but why. Validated with an A/B test.",
    ],
    badge: "A/B test",
    image: {
      src: "/images/case-kyc/flow-before-after.jpg",
      alt: "Before/after user flow: registration leading to blocked trading and stuck funds vs. registration leading through verification into deposit and trading",
    },
  },
  {
    insight:
      "The progress bar only updated after a whole question group was completed — users could not tell how much was left and felt stuck.",
    title: "Two-level progress: segments plus progress inside a group",
    body: [
      "Six segments for six KYC groups. Inside each segment progress moves as steps get filled. Users see both where they are in the overall funnel and that they are moving right now.",
    ],
    badge: "UX",
    image: {
      src: "/images/case-kyc/progress-bar.jpg",
      alt: "Before/after comparison of the Economic profile step: a single top progress bar vs. a segmented step indicator with per-step progress",
    },
  },
  {
    insight:
      "The platform competed in a crowded segment with low brand strength — users arrived without established trust, while the product requested sensitive data without explaining the value exchange.",
    title: "Bottom sheet before critical steps",
    body: [
      "The interface had to compensate for a weak brand. I tested it before three steps with the highest drop-off: why the data is needed, what unlocks afterwards, and security guarantees. The biggest effect was on Proof of Identity. On Personal data it created friction without obvious benefit — an open question for the next iteration.",
    ],
    badge: "UX",
    image: {
      src: "/images/case-kyc/bottom-sheets.jpg",
      alt: "Three bottom sheets shown before critical verification steps, explaining why data is needed, what unlocks next, and reassuring users of progress",
    },
  },
  {
    insight:
      "75% of Italian users stated they had no TIN — they did not know their tax number is called Codice Fiscale.",
    title: "TIN → Codice Fiscale: localization, validation, prefill",
    body: [
      "**Shipped:** the field was localized per geo with a hint showing the actual document. The step never blocked verification — a user could write “I don’t know” and move on. The problem surfaced later: support emailed asking for a correct document, but open rate was about 30%. Most emails went unopened and accounts got blocked. Explaining the term on the step removed the cause — users understood what to enter the first time.",
      "**Designed:** prefill — Codice Fiscale is computed by algorithm from data already entered: name, date and place of birth. *Handed off to development.*",
    ],
    badge: "Localization",
    image: {
      src: "/images/case-kyc/tax-code.jpg",
      alt: "Before/after/prefill comparison of the Tax Code step: generic TIN field vs. localized Codice Fiscale field with a document hint and an auto-prefilled suggestion",
    },
  },
  {
    insight:
      "Users did not know their postcode and left the flow to look it up — losing focus on a critical step.",
    title: "Postcode auto-detection from address",
    body: [
      "Detected automatically once the address is entered — removing the reason to leave the flow.",
    ],
    badge: "UX",
  },
  {
    insight:
      "Both document steps — Proof of Identity and Proof of Address — were reviewed manually within 4–12 hours, and not at all on weekends. An upload error was a dead end: re-uploading was impossible.",
    title: "Sumsub integration: research and flow design",
    body: [
      "I ran a competitive analysis and made the case for the integration as a replacement for manual review on both document steps. Designed the flow: embedded SDK step, re-upload on error, and real-time review status. *Handed off to development.*",
    ],
    badge: "In backlog",
    pending: true,
  },
];

const RESULTS = [
  {
    value: "+80%",
    label: "CVR Registration → Trading unlocked",
    detail: "2.25% → 4.06% · ID Proof",
  },
  {
    value: "+58%",
    label: "reach to Personal info",
    detail: "19.6% → 31% · redirect effect",
  },
];

const TIME_RESULTS = [
  { value: "−52%", label: "Residence", detail: "average time" },
  { value: "−29%", label: "ID Proof", detail: "median 48→34s" },
  { value: "−14%", label: "TIN", detail: "average time" },
  { value: "−12%", label: "Trading Knowledge", detail: "average time" },
];

export default function KycVerificationCase() {
  return (
    <div className="mx-auto max-w-[1280px] px-[15px] md:px-[30px]">
      <header className="flex flex-row items-center justify-between gap-[15px] pt-[20px] pb-0">
        <Link
          href="/"
          className="link-underline text-[20px] font-semibold tracking-[-1px]"
        >
          maksim karkach
        </Link>
      </header>

      <section className="flex flex-col gap-[20px] pt-[50px] pb-[50px] md:pt-[75px] md:pb-[75px]">
        <h1 className="text-[25px] font-semibold leading-[normal] tracking-[-1.25px] md:text-[42px] md:tracking-[-2.1px]">
          KYC Verification.{" "}
          <span className="font-medium text-[#383838]">
            Raising the step that unlocks trading, inside regulation that could
            not be changed.
          </span>
        </h1>
        <div className="flex flex-wrap items-center gap-[15px] text-[15px] font-medium tracking-[-0.75px] text-[#383838] md:text-[20px] md:tracking-[-1px]">
          <p>Fintech</p>
          <span className="size-[4px] shrink-0 rounded-full bg-[#8a8a8a]" />
          <p>2025</p>
        </div>
      </section>

      <section className="flex flex-col gap-[20px] pb-[50px] md:pb-[75px]">
        <SectionLabel>Problem</SectionLabel>
        <div className="flex flex-col gap-[20px] md:flex-row md:items-center">
          <p className="shrink-0 text-[48px] font-medium leading-[100%] tracking-[-2.4px] text-[#d64545] md:text-[72px] md:tracking-[-3.6px]">
            2.25%
          </p>
          <Paragraph>
            conversion from Registration to Proof of Identity — the step that
            unlocks trading.{" "}
            <Strong>Without it a user simply cannot start</Strong> — every
            unfinished step is a lost customer.
          </Paragraph>
        </div>
        <Paragraph>
          🇪🇺 <span className="font-semibold">European regulated market:</span>{" "}
          the number and composition of steps is set by ESMA and CySEC.{" "}
          <Strong>Removing fields or shortening the form was not an option</Strong>{" "}
          — everything had to be optimised inside hard constraints.
        </Paragraph>
        <FunnelChart />
      </section>

      <section className="flex flex-col gap-[20px] pb-[50px] md:pb-[150px]">
        <h3 className="text-[20px] font-semibold leading-[120%] tracking-[-1px] md:text-[24px] md:tracking-[-1.2px]">
          How I looked for causes
        </h3>
        <Paragraph>
          Ran discovery: funnel analysis in Amplitude and GA4, a UX audit,
          support tickets and NPS, a competitive benchmark across six brokers,
          and an analysis of in-product errors.
        </Paragraph>
      </section>

      <section className="flex flex-col gap-[40px] pb-[50px] md:pb-[150px]">
        <SectionLabel>What I found and did</SectionLabel>

        <div className="flex flex-col gap-[75px]">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="flex flex-col gap-[15px]">
              <div className="flex items-start justify-between gap-[15px] md:gap-[25px]">
                <h3 className="text-[20px] font-semibold leading-[120%] tracking-[-0.6px]">
                  {solution.title}
                </h3>
                <span
                  className={`shrink-0 self-start rounded-[6px] px-[10px] py-[5px] text-[13px] font-medium tracking-[-0.3px] md:text-[15px] ${
                    solution.pending
                      ? "border border-[#3e45ff]/25 bg-[#3e45ff]/5 text-[#3e45ff]"
                      : "bg-[#f5f5f5] text-[#383838]"
                  }`}
                >
                  {solution.badge}
                </span>
              </div>
              <p className="rounded-[8px] bg-[#f5f5f5] p-[15px] text-[15px] font-medium leading-[20px] tracking-[-0.45px] text-[#383838] md:px-[20px] md:py-[15px] md:text-[20px] md:leading-[28px] md:tracking-[-0.6px]">
                {solution.insight}
              </p>
              <div className="flex flex-col gap-[10px]">
                {solution.body.map((text, j) => (
                  <Paragraph key={j}>{renderRichText(text)}</Paragraph>
                ))}
                {solution.image && (
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-[8px] bg-[#f5f5f5]">
                    <Image
                      src={solution.image.src}
                      alt={solution.image.alt}
                      width={2880}
                      height={1620}
                      unoptimized
                      className="size-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[20px] pb-[50px] md:pb-[75px]">
        <SectionLabel>Result</SectionLabel>

        <StatCardsGrid
          items={RESULTS}
          size="lg"
          className="grid-cols-1 md:grid-cols-2"
          cols={{ base: 1, md: 2 }}
        />

        <StatCardsGrid
          items={TIME_RESULTS}
          size="sm"
          className="grid-cols-2 md:grid-cols-4"
          cols={{ base: 2, md: 4 }}
        />

        <div className="mt-[20px]">
          <Paragraph>
            The biggest gain came not from new screens, but from{" "}
            <Strong>the entry point into the flow and the terminology</Strong>{" "}
            — even though the set of steps itself could not be changed.
          </Paragraph>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-[15px] border-t border-[#e5e5e5] pt-[20px] pb-[30px] text-center text-[15px] font-medium tracking-[-0.75px] md:flex-row md:items-center md:justify-between md:text-left md:text-[20px] md:tracking-[-1px]">
        <CopyEmailLink email="maksay95@gmail.com" />
        <div className="flex w-full items-center justify-between md:w-auto md:gap-[25px]">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[20px] font-semibold leading-[120%] tracking-[-1px] md:text-[32px] md:tracking-[-1.6px]">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] font-medium leading-[20px] tracking-[-0.45px] text-[#383838] md:text-[20px] md:leading-[28px] md:tracking-[-0.6px]">
      {children}
    </p>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-[#0f0f0f]">{children}</span>;
}

function renderRichText(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <Strong key={i}>{part.slice(2, -2)}</Strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={i} className="text-[#8a8a8a]">
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
}
