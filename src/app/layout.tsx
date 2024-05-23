import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ryel Banfield - Full Stack Web Developer",
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
      <body
        className={`${GeistSans.className} flex flex-col gap-10 bg-neutral-200 p-5 text-neutral-800 antialiased dark:bg-neutral-950 dark:text-neutral-400`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
