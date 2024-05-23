import Navbar from "@/components/Navbar";

const WebsiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen flex-col gap-10 bg-neutral-200 p-5 text-neutral-800 antialiased dark:bg-neutral-950 dark:text-neutral-400">
      <Navbar />
      {children}
    </div>
  );
};

export default WebsiteLayout;
