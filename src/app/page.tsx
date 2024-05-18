"use client";

import Image from "next/image";

import HeroSVG from "@/assets/undraw_building_websites_i78t.svg";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="">
      <nav className="fixed top-0 flex w-full items-center justify-between  bg-neutral-200 p-5 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
        <p className="text-sm">ryelbanfield.me</p>

        <ThemeSwitcher />
      </nav>

      <main className="mt-20">
        <div className="flex flex-col gap-5 p-5">
          <h1 className="text-2xl font-bold uppercase">
            Building <br /> high-performance <br /> web applications
          </h1>

          <p className="text-pretty text-sm">
            Hi, I&apos;m Ryel - I build innovative digital solutions on the web.
          </p>

          <Button className="rounded-none">
            <p className="text-xs uppercase">Let&apos;s start building yours</p>
          </Button>

          <Image src={HeroSVG} alt="" className="py-10" />
        </div>
      </main>
    </div>
  );
};

export default Home;
