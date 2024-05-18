"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="px-5">
      <nav className="flex items-center justify-between py-5">
        <p className="text-sm">ryelbanfield.me</p>

        <ThemeSwitcher />
      </nav>

      <main>
        <div className="flex flex-col gap-5 py-5">
          <h1 className="text-2xl font-bold uppercase">
            Building <br /> high-performance <br /> web applications
          </h1>

          <p className="text-pretty text-sm">
            Hi, I&apos;m Ryel - I build innovative digital solutions on the web.
          </p>

          <Button className="rounded-none">
            <p className="text-xs uppercase">Let&apos;s start building yours</p>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
