"use client";

import { motion } from "framer-motion";
import type { SVGProps } from "react";

// Replace these placeholder URLs with Nathan's real social profiles.
const socialLinks = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com",
    icon: TikTokIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: LinkedInIcon,
  },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-transparent bg-background/90 backdrop-blur"
    >
      <div className="section-shell flex items-center justify-between py-5">
        <a
          href="#home"
          className="font-serif text-xl tracking-tight text-foreground hover:text-accent"
        >
          Nathan Fang
        </a>

        <nav aria-label="Social links" className="flex items-center gap-2">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} profile`}
              className="rounded-full border border-border bg-surface p-2.5 text-muted hover:-translate-y-0.5 hover:border-accent hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 4c.35 2.08 1.82 4.05 4 4.5" />
      <path d="M10 11.25a3.75 3.75 0 1 0 2.95 3.66V4h2.55" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 9v8" />
      <path d="M11 12.5V17" />
      <path d="M11 12.5c0-1.93 1.57-3.5 3.5-3.5S18 10.57 18 12.5V17" />
      <circle cx="7" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
    </svg>
  );
}
