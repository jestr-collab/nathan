"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-transparent bg-background/90 backdrop-blur"
    >
      <div className="section-shell flex items-center py-5">
        <a
          href="#home"
          className="font-serif text-xl tracking-tight text-foreground hover:text-accent"
        >
          Nathan Fang
        </a>
      </div>
    </motion.header>
  );
}
