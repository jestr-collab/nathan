import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nathan Fang | Growth Engineer",
  description:
    "Nathan Fang is a growth engineer and content creator focused on distribution, creator strategy, and performance-driven storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  );
}
