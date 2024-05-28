import SquigglyUnderlineNav from "@/components/SquigglyUnderlineNav";
import { Toaster } from "@/components/ui/toaster";

const WebsiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[500px] flex-col px-6 py-12 antialiased">
      <SquigglyUnderlineNav />

      {children}

      <footer>
        <p className="text-center text-xs">&copy; 2024 RCB Software LLC</p>
      </footer>

      <Toaster />
    </div>
  );
};

export default WebsiteLayout;
