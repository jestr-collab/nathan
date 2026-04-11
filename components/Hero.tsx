"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImage from "../DSC_9620.jpg";

export function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="relative h-[34vh] min-h-[260px] w-full overflow-hidden sm:h-[42vh] md:h-[50vh]">
        <Image
          src={heroImage}
          alt="Nathan Fang standing by the ocean at sunset"
          priority
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/8" />
        <div className="absolute inset-x-0 bottom-0 h-[24vh] bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="section-shell section-spacing pt-8 md:pt-12">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6">Growth engineer. Creator. Operator.</p>
            <h1 className="font-serif text-5xl leading-none tracking-tighterest text-foreground sm:text-7xl md:text-8xl">
              Nathan Fang
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">
              Creator manager scaling accounts through content systems.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              I&apos;m a UCSD biology grad who stumbled into growth and never
              looked back. I&apos;ve built creator networks driving
              196M organic views, grown my own channels to 350K followers, and
              partnered with brands like Hulu, Amazon, and Maruchan. I&apos;m
              drawn to the intersection of content, distribution, and what
              actually makes people click.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://www.linkedin.com/in/nathan-j-fang/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background hover:border-accent hover:bg-accent"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
              >
                See my work <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border-l border-border pl-0 lg:pl-8">
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              <Metric label="Creator networks" value="196M" detail="organic views" />
              <Metric label="Audience" value="350K" detail="followers built" />
              <Metric
                label="Brand work"
                value="15+"
                detail="Hulu, Amazon, Maruchan and more"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Metric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="border-t border-border pt-5 lg:first:border-t">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">{label}</p>
      <p className="mt-2 font-serif text-4xl tracking-tighterest text-foreground">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted">{detail}</p>
    </div>
  );
}
