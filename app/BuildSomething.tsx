"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  "/images/cta-slide-1.png",
  "/images/cta-slide-2.png",
  "/images/cta-slide-3.png",
  "/images/cta-slide-4.png",
];

export function BuildSomething() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-[10px] md:flex-row md:gap-[25px]"
    >
      <motion.p
        animate={{ x: isInView ? 0 : 80, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[25px] font-semibold tracking-[-1.25px] md:text-[48px] md:tracking-[-2.4px]"
      >
        Let&apos;s build
      </motion.p>
      <motion.div
        animate={{
          clipPath: isInView
            ? "inset(0% 0% 0% 0% round 8px)"
            : "inset(0% 50% 0% 50% round 8px)",
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative size-[160px] overflow-hidden rounded-[8px]"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={SLIDES[slideIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[slideIndex]}
              alt=""
              width={160}
              height={160}
              quality={95}
              className="size-full rounded-[8px] object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.p
        animate={{ x: isInView ? 0 : -80, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[25px] font-semibold tracking-[-1.25px] md:text-[48px] md:tracking-[-2.4px]"
      >
        something
      </motion.p>
    </div>
  );
}
