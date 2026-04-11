"use client";

import { motion } from "framer-motion";

const skillColumns = [
  {
    title: "Growth & Marketing",
    items: [
      {
        label: "UGC Strategy",
        href: "https://www.instagram.com/p/DR36h4YCJVN/",
      },
      {
        label: "Creator Management",
        href: "https://www.instagram.com/emmastudiesstuff",
      },
      {
        label: "Short-Form Content",
        href: "https://www.instagram.com/p/DKNYWtXS5XC/",
      },
      {
        label: "Conversion Demos",
        href: "https://www.instagram.com/reel/DW5GFpPEfJf/",
      },
      {
        label: "Brand Partnerships",
        href: "https://www.instagram.com/p/C12jgOsS1UI/",
      },
    ],
  },
  {
    title: "Outside Work",
    items: [
      {
        label: "Fingerstyle Guitar",
        href: "https://www.instagram.com/p/DP9-PySEhBk/",
      },
      {
        label: "Bodybuilding",
        href: "https://www.instagram.com/p/C8ASU3cPHwX/",
      },
      {
        label: "Content Creation",
        href: "https://www.instagram.com/p/DVT7VWOAdmi/",
      },
      {
        label: "Mountain Biking",
      },
    ],
  },
];

export function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="section-shell section-spacing scroll-mt-24"
    >
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title mt-4">
          Sharp on growth strategy, grounded by interests outside the feed.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillColumns.map((column, index) => (
          <motion.div
            key={column.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8"
          >
            <h3 className="font-serif text-3xl tracking-tight text-foreground">
              {column.title}
            </h3>
            <ul className="mt-8 space-y-4">
              {column.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-border/80 pb-4 text-sm text-muted sm:text-base"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
