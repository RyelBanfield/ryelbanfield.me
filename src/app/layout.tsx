import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

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
      <body className={`${GeistSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
