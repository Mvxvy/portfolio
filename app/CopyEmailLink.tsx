"use client";

import { useState } from "react";
import { FiCopy } from "react-icons/fi";

export function CopyEmailLink({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className="link-underline group relative"
    >
      <span className="inline-flex items-center gap-[6px]">
        {email}
        <FiCopy
          className="size-[14px] shrink-0 opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
          aria-hidden="true"
        />
      </span>
      <span
        className={`pointer-events-none absolute -top-[34px] left-1/2 -translate-x-1/2 rounded-[6px] bg-[#161616] px-[10px] py-[6px] text-[13px] font-medium text-[#fefefe] transition-all duration-200 ${
          copied ? "translate-y-0 opacity-100" : "translate-y-[4px] opacity-0"
        }`}
      >
        copied
      </span>
    </a>
  );
}
