import Image from "next/image";

import HeroSVG from "@/assets/undraw_building_websites_i78t.svg";

import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center gap-5">
      <Image src={HeroSVG} alt="" className="mb-5" />

      <h1 className="text-center text-3xl font-semibold tracking-tighter">
        Full Stack Developer
      </h1>

      <p className="max-w-64 text-center">
        Hi, I&apos;m Ryel - I build innovative digital solutions on the web.
      </p>

      <Button size={"sm"} className="w-44">
        Learn more
      </Button>
    </div>
  );
};

export default Hero;
