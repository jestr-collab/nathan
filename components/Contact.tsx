"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nathan_fang",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nathan_fang_/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nathan-j-fang/",
  },
];

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="section-shell section-spacing scroll-mt-24"
    >
      <div className="rounded-[2.5rem] border border-border bg-foreground px-6 py-10 text-background sm:px-8 md:px-10 md:py-14">
        <p className="eyebrow !text-background/60">Contact</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <div>
            <h2 className="font-serif text-4xl tracking-tighterest sm:text-6xl">
              Let&apos;s work together.
            </h2>
            <a
              href="mailto:nathanjfang3@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-lg text-background/90 hover:text-white"
            >
              nathanjfang3@gmail.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/60">
                Location
              </p>
              <p className="mt-3 text-lg text-background/90">San Diego, CA</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/60">
                Links
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit text-lg text-background/90 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
