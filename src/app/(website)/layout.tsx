import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const WebsiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col gap-10 p-5 antialiased">
      <Navbar />
      {children}
      <Toaster />
    </div>
  );
};

export default WebsiteLayout;
