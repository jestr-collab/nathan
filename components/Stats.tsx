"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    value: "350K",
    label: "Combined followers",
  },
  {
    value: "196M",
    label: "Organic views driven (Jul–Dec 2024)",
  },
  {
    value: "1.58M",
    label: "Views on a single Hulu Reel",
  },
];

export function Stats() {
  return (
    <motion.section
      id="highlights"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="section-shell section-spacing scroll-mt-24"
    >
      <div className="rounded-[2.5rem] border border-border bg-[#f9f6ef] px-6 py-10 sm:px-8 md:px-10 md:py-12">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Highlights</p>
          <h2 className="section-title mt-4">The numbers behind the creative work.</h2>
        </div>

        <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-border pb-6 last:border-b-0 md:border-b-0 md:border-r md:pb-0 md:last:border-r-0 md:pr-6"
            >
              <p className="font-serif text-5xl tracking-tighterest text-foreground sm:text-6xl">
                {item.value}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-7 text-muted sm:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
