import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const WebsiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col gap-10 bg-neutral-100 p-5 text-neutral-800 antialiased dark:bg-neutral-950 dark:text-neutral-400">
      <Navbar />
      {children}
      <Toaster />
    </div>
  );
};

export default WebsiteLayout;
