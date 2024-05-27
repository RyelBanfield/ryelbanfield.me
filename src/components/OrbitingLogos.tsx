"use client";

import { renderSimpleIcon } from "react-icon-cloud";
import {
  siGithub,
  siNextdotjs,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

import OrbitingCircles from "@/components/magicui/orbiting-circles";
const icons = [
  siTypescript,
  siNextdotjs,
  siTailwindcss,
  siGithub,
  siVercel,
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: (e: any) => e.preventDefault(),
    },
  });
});

const OrbitingLogos = () => {
  return (
    <div className="flex flex-col gap-6 py-6">
      <h3 className="text-center text-xl font-semibold tracking-tighter">
        But I focus on...
      </h3>

      <div className="relative flex h-[320px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          just a few..
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="h-[20px] w-[20px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          {icons[0]}
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[20px] w-[20px] border-none bg-transparent"
          duration={20}
          delay={18}
          radius={80}
        >
          {icons[1]}
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[20px] w-[20px] border-none bg-transparent"
          duration={20}
          delay={24}
          radius={80}
        >
          {icons[2]}
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[28px] w-[28px] border-none bg-transparent"
          reverse
          radius={120}
          duration={20}
        >
          {icons[3]}
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[28px] w-[28px] border-none bg-transparent"
          reverse
          radius={120}
          duration={20}
          delay={20}
        >
          {icons[4]}
        </OrbitingCircles>
      </div>
    </div>
  );
};

export default OrbitingLogos;
