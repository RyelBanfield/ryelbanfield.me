import Link from "next/link";

import { Toaster } from "@/components/ui/toaster";

const WebsiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[500px] flex-col px-6 py-12 antialiased">
      <nav className="space-x-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/work"}>Work</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>

      {children}

      <footer>
        <p className="text-center text-xs">&copy; 2024 RCB Software LLC</p>
      </footer>

      <Toaster />
    </div>
  );
};

export default WebsiteLayout;
