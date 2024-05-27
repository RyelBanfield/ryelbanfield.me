import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryel Banfield - Full Stack Developer",
  description:
    "Crafting high-performance websites for a seamless digital experience.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
