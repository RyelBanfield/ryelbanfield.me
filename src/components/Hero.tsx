import Image from "next/image";
import Link from "next/link";

import SVG from "@/assets/undraw_building_websites_i78t.svg";

import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={SVG} alt="" className="mb-5 min-h-40 w-48" />

      <h1 className="text-center text-3xl font-semibold leading-none tracking-tighter">
        Ryel Banfield. <br /> Web Developer.
      </h1>

      <p className="max-w-64 text-center leading-snug">
        Hi, I&apos;m Ryel - I build innovative digital solutions on the web.
      </p>

      <Button size={"sm"} asChild className="w-44">
        <Link href={"/contact"}>Let&apos;s build together</Link>
      </Button>
    </div>
  );
};

export default Hero;
