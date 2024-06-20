import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ryel Banfield",
  description: "Independent Web Developer",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} mx-auto flex min-h-screen max-w-screen-2xl flex-col antialiased`}
      >
        <nav className="flex justify-between p-5">
          <h1 className="text-xs uppercase md:text-sm">
            <Link href="/">Ryel Banfield</Link>
          </h1>

          <div className="flex gap-5">
            <Link href={"/work"} className="text-xs uppercase md:text-sm">
              Work
            </Link>

            <Link
              href={"mailto:wile.airline-0q@icloud.com"}
              className="text-xs uppercase md:text-sm"
            >
              Contact
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
