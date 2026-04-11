"use client";

import { motion } from "framer-motion";

const workItems = [
  {
    company: "Turbo AI",
    role: "Growth Engineer",
    year: "2025",
    initials: "TA",
    description:
      "196M organic views. 100+ creators managed. Focused on turning early-stage creators into consistent performers through iteration and structure.",
    href: "https://www.turbo.ai/blog/october-2025-announcement-5-million-users#:~:text=Fast%20forward%20to%20today%3A%20we%27ve%20got%20an%20incredible%20team%2C%20we%27re%20backed%20by%20amazing%20investors%2C%20and%20most%20importantly%20%E2%80%94%20we%20have%20you.%205%20million%20students%20and%20learners%20who%20trust%20us%20with%20their%20education%20every%20day.",
  },
  {
    company: "TikTok & Instagram",
    role: "Social Media Creator",
    year: "2021–Present",
    initials: "TT",
    description: "350K followers. 2M+ monthly impressions.",
    href: "https://www.instagram.com/nathan_fang_/",
  },
  {
    company: "SunRun",
    role: "Sales Consultant",
    year: "2025",
    initials: "SR",
    description: "High-volume outbound sales.",
    href: "https://youtu.be/t6ZDHU4BHUc?si=R52xm4j9E8bsO8AG",
  },
  {
    company: "ThermoFisher",
    role: "Science Co-op",
    year: "2023–2024",
    initials: "TF",
    description: "67% efficiency improvement via internal tooling.",
    href: "https://biology.ucsd.edu/education/career/co-op/co-op/alumni/thermo-fisher-scientific.html",
  },
];

export function Work() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="section-shell section-spacing scroll-mt-24"
    >
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title mt-4">A growth-first career built across content, sales, and systems.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
          A compact snapshot of the roles and platforms that shaped Nathan&apos;s
          operating style.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {workItems.map((item, index) => {
          const content = (
            <>
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  {/* Replace this placeholder square with the real company logo when available. */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-stone-900 text-sm font-medium tracking-[0.22em] text-stone-100">
                    {item.initials}
                </div>
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight text-foreground">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-muted sm:text-base">{item.role}</p>
                  </div>
                </div>
                <span className="text-sm text-muted">{item.year}</span>
              </div>

              <p className="mt-8 max-w-sm text-sm leading-7 text-muted transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {item.description}
              </p>
            </>
          );

          return (
            <motion.article
              key={`${item.company}-${item.year}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group rounded-[2rem] border border-border bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-soft"
            >
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="block">
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
