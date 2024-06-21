import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryel Banfield",
  description: "Independent Web Developer",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.className} mx-auto flex min-h-screen max-w-screen-2xl flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
