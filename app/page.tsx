import Image from "next/image";
import Link from "next/link";
import { SiBehance, SiInstagram, SiPinterest } from "react-icons/si";
import { BuildSomething } from "./BuildSomething";
import { CopyEmailLink } from "./CopyEmailLink";
import { SoonCursorCard } from "./SoonCursorCard";

const LINKEDIN_URL = "https://www.linkedin.com/in/mkarkach/";
const TELEGRAM_URL = "http://t.me/maksay17";
const BEHANCE_URL = "https://www.behance.net/maksay56";
const INSTAGRAM_URL = "https://www.instagram.com/m_karkach/";
const PINTEREST_URL = "https://pinterest.com/maksay56/";

const NAV_LINKS = [
  { label: "Linkedin", href: LINKEDIN_URL },
  { label: "Telegram", href: TELEGRAM_URL },
  { label: "Resume", href: "/Maksim-Karkach-CV.pdf" },
];

const PROJECTS = [
  {
    title: "KYC Verification for a Trading Platform",
    description:
      "Raising the step that unlocks trading by 80% - inside regulation that could not be changed.",
    image: "/images/case-kyc-cover-v2.jpg",
    href: "/cases/kyc-verification",
    internal: true,
  },
  {
    title: "3D Illustrations for a Fintech Trading Product",
    description:
      "Art direction and 3D design for product and marketing visuals - from concept to final render.",
    image: "/images/project1.png",
    href: "https://www.behance.net/gallery/233444249/3D-illustrations-for-Fintech-company",
  },
  {
    title: "Promo Campaign for an Investing App",
    description: "Creative concept, key visual, and campaign assets across formats.",
    image: "/images/project2.png",
    href: "https://www.behance.net/gallery/205404503/Promo-campaign-for-investing-app",
  },
  {
    title: "AI-First Trading Assistant",
    description:
      "Rethinking the trading product around an AI-first interaction model.",
    comingSoon: true,
  },
];

const CAREER = [
  {
    company: "Garage Eight",
    logo: "/images/logo-garage.svg",
    roles: [
      {
        title: "product designer",
        period: "2023 - now",
        description:
          "Optimized B2C trader funnels (KYC & activation) and designed B2B platforms: an IB partner portal and an internal admin dashboard",
      },
      {
        title: "communication designer",
        period: "2019-2023",
        description:
          "Brand campaign design, driving metrics through design testing and systematizing best practices into guidelines",
      },
    ],
  },
  {
    company: "Blockchain center technology",
    logo: "/images/logo-blockchain.svg",
    roles: [
      {
        title: "graphic designer",
        period: "2017-2019",
        description:
          "Designed and coded landing pages, banners, and brand/social content. Handled print materials and on-page SEO.",
      },
    ],
  },
];

const POSTS = [
  {
    title: "Design Trends 2026: Stateless Interfaces, Zero-Input, and the Return of Human Error",
    views: "14к",
    href: "https://habr.com/ru/companies/garage8/articles/978626/",
  },
  {
    title: "7 Design Trends of 2025: Imperfection and Retro Aesthetics vs. Flawless AI",
    views: "35к",
    href: "https://habr.com/ru/companies/garage8/articles/874326/",
  },
];

const FOOTER_LINKS = [
  { label: "behance", href: BEHANCE_URL, Icon: SiBehance },
  { label: "pinterest", href: PINTEREST_URL, Icon: SiPinterest },
  { label: "instagram", href: INSTAGRAM_URL, Icon: SiInstagram },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[1280px] px-[15px] md:px-[30px]">
      <header className="flex flex-row items-start justify-between gap-[15px] pt-[20px] pb-0 md:items-center">
        <p className="text-[20px] font-semibold tracking-[-1px]">maksim karkach</p>
        <nav className="flex flex-col items-end gap-[10px] text-[15px] tracking-[-0.75px] font-medium md:flex-row md:items-center md:gap-[25px] md:text-[20px] md:tracking-[-1px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("#") ? undefined : "_blank"}
              rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
              className="link-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="flex flex-col gap-[10px] pb-[50px] md:pb-[150px] md:pt-[75px]">
        <div className="flex flex-col-reverse items-start gap-[15px] md:flex-row md:justify-between md:gap-[24px]">
          <h1 className="max-w-[880px] text-[25px] font-semibold leading-[normal] tracking-[-1.25px] md:text-[42px] md:tracking-[-2.1px]">
            Product designer with 7 years in FinTech,{" "}
            <span className="font-medium text-[#383838]">
              designing trading platforms, partner systems, and internal tools.
            </span>
          </h1>
          <Image
            src="/images/hero-photo.png"
            alt="Maksim Karkach"
            width={160}
            height={160}
            quality={95}
            className="size-[142px] shrink-0 self-start rounded-[8px] object-cover md:size-[160px]"
          />
        </div>
        <div className="flex flex-wrap items-center gap-[15px] text-[15px] font-medium tracking-[-0.75px] text-[#383838] md:gap-[25px] md:text-[20px] md:tracking-[-1px]">
          <p>Saint Petersburg</p>
          <div className="flex items-center gap-[8px]">
            <span className="status-dot size-[8px] rounded-full bg-[#3ddc84]" />
            <p>Open to collaboration</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-x-[25px] gap-y-[30px] pb-[50px] md:gap-x-[20px] md:gap-y-[30px] md:pb-[150px] md:grid-cols-2">
        {PROJECTS.map((project) => {
          const cover = project.comingSoon ? (
            <div className="relative flex size-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#12142b] via-[#1c2054] to-[#3e45ff]">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <SparkleIcon className="relative size-[40px] text-white/90 md:size-[52px]" />
            </div>
          ) : (
            <Image
              src={project.image!}
              alt={project.title}
              width={600}
              height={326}
              quality={95}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          );

          const content = (
            <>
              <div className="aspect-[600/326] overflow-hidden rounded-[8px]">
                {cover}
              </div>
              <div className="flex items-center gap-[8px]">
                <h3 className="text-[15px] font-medium leading-[20px] tracking-[-0.45px] text-[#0f0f0f] md:text-[20px] md:leading-[26px] md:tracking-[-0.6px]">
                  {project.title}
                  {!project.comingSoon && (
                    <ArrowUpRightIcon className="ml-[4px] inline-block size-[0.9em] -translate-x-[4px] align-[-0.1em] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                  )}
                </h3>
                {project.comingSoon && (
                  <span className="shrink-0 rounded-[6px] border border-[#3e45ff]/25 bg-[#3e45ff]/5 px-[8px] py-[3px] text-[12px] font-medium tracking-[-0.3px] text-[#3e45ff] md:text-[13px]">
                    Soon
                  </span>
                )}
              </div>
            </>
          );

          if (project.comingSoon) {
            return (
              <SoonCursorCard key={project.title}>{content}</SoonCursorCard>
            );
          }

          return (
            <Link
              key={project.title}
              href={project.href!}
              target={project.internal ? undefined : "_blank"}
              rel={project.internal ? undefined : "noopener noreferrer"}
              className="group flex flex-col gap-[10px]"
            >
              {content}
            </Link>
          );
        })}
      </section>

      <section className="flex flex-col gap-[20px] pb-[50px] md:pb-[75px]">
        <h2 className="text-[20px] font-semibold tracking-[-1px] md:text-[32px] md:tracking-[-1.6px]">
          Career
        </h2>
        <div className="flex flex-col gap-[40px]">
          {CAREER.map((company) => (
            <div
              key={company.company}
              className="flex flex-col gap-[20px] border-t border-[#e5e5e5] pt-[10px] md:pt-[20px]"
            >
              <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:items-start">
                <div className="flex items-center gap-[15px]">
                  <Image
                    src={company.logo}
                    alt={company.company}
                    width={32}
                    height={32}
                    className="size-[32px] shrink-0"
                  />
                  <p className="text-[20px] font-semibold leading-[100%] tracking-[-1px] md:text-[32px] md:leading-[120%] md:tracking-[-1.6px]">
                    {company.company}
                  </p>
                </div>
                <div className="flex flex-col gap-[25px]">
                  {company.roles.map((role) => (
                    <div key={role.title} className="flex flex-col gap-[10px]">
                      <div className="flex flex-row items-start justify-between gap-[10px] text-[20px] font-semibold leading-[120%] tracking-[-1px] md:text-[32px] md:tracking-[-1.6px]">
                        <p>{role.title}</p>
                        <p className="shrink-0 whitespace-nowrap">{role.period}</p>
                      </div>
                      <p className="text-[15px] font-medium leading-[20px] tracking-[-0.45px] text-[#383838] md:text-[20px] md:leading-[26px] md:tracking-[-0.6px]">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[20px]">
        <h2 className="text-[20px] font-semibold tracking-[-1px] md:text-[32px] md:tracking-[-1.6px]">
          Thinking out loud
        </h2>
        <div className="grid grid-cols-1 gap-[10px] md:gap-[20px] md:grid-cols-2">
          {POSTS.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-[10px] rounded-[8px] bg-[#f5f5f5] p-[10px] transition-colors duration-300 ease-out hover:bg-[#efefef] md:px-[20px] md:py-[15px]"
            >
              <p className="text-[15px] font-medium leading-[normal] tracking-[-0.45px] text-[#383838] md:text-[20px] md:tracking-[-0.6px]">
                {post.title}
                <ArrowUpRightIcon className="ml-[4px] inline-block size-[0.9em] -translate-x-[4px] align-[-0.1em] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
              </p>
              <div className="flex items-center gap-[10px]">
                <Image
                  src="/images/blog-icon.png"
                  alt=""
                  width={16}
                  height={16}
                  className="size-[16px] rounded-[4px]"
                />
                <div className="flex items-center gap-[5px] opacity-75">
                  <EyeIcon />
                  <p className="text-[12px] font-medium tracking-[-0.6px] text-[#303034] md:text-[15px] md:tracking-[-0.75px]">
                    {post.views}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-[20px] pt-[50px] pb-[50px] text-center md:gap-[40px] md:pt-[125px] md:pb-[125px]">
        <BuildSomething />
        <div className="inline-flex flex-col items-stretch gap-[10px]">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[10px] rounded-[8px] bg-[#161616] px-[15px] py-[10px] text-[15px] font-medium tracking-[-0.75px] text-[#fefefe] transition-colors duration-300 ease-out hover:bg-[#333333] md:text-[20px] md:tracking-[-1px]"
          >
            <Image
              src="/images/telegram-icon.svg"
              alt=""
              width={16}
              height={16}
              className="size-[16px]"
            />
            Message me on Telegram
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-[8px] bg-white px-[15px] py-[10px] text-[15px] font-medium tracking-[-0.75px] text-[#161616] transition-colors duration-300 ease-out hover:bg-[#f5f5f5] md:text-[20px] md:tracking-[-1px]"
          >
            or Linkedin
          </a>
        </div>
      </section>

      <footer className="flex flex-row items-center justify-between gap-[15px] border-t border-[#e5e5e5] pt-[20px] pb-[30px] text-[15px] font-medium tracking-[-0.75px] md:text-[20px] md:tracking-[-1px]">
        <CopyEmailLink email="maksay95@gmail.com" />
        <div className="flex items-center gap-[24px] md:gap-[25px]">
          {FOOTER_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="link-underline -m-[12px] p-[12px] md:m-0 md:p-0"
            >
              <Icon className="size-[20px] md:hidden" aria-hidden="true" />
              <span className="hidden md:inline">{label}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L13.8 9.2C14.1 10.4 15 11.3 16.2 11.6L23 13.4L16.2 15.2C15 15.5 14.1 16.4 13.8 17.6L12 24.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0 -1) scale(0.86)"
      />
      <path
        d="M5 3.5L5.7 6.1C5.9 6.8 6.4 7.3 7.1 7.5L9.5 8.2L7.1 8.9C6.4 9.1 5.9 9.6 5.7 10.3L5 12.9L4.3 10.3C4.1 9.6 3.6 9.1 2.9 8.9L0.5 8.2L2.9 7.5C3.6 7.3 4.1 6.8 4.3 6.1L5 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 11L11 5M11 5H6M11 5V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z"
        stroke="#303034"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="8" r="2.2" stroke="#303034" strokeWidth="1.2" />
    </svg>
  );
}
