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
    <>
      <div className="relative flex h-[420px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background py-12 min-[500px]:hidden">
        <span className="pointer-events-none z-50 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-xs font-semibold leading-none text-transparent">
          As a developer,
          <br /> I focus on a few tools.
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="h-[24px] w-[24px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={85}
        >
          {icons[0]}
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[24px] w-[24px] border-none bg-transparent"
          duration={20}
          delay={18}
          radius={85}
        >
          {icons[1]}
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[24px] w-[24px] border-none bg-transparent"
          duration={20}
          delay={24}
          radius={85}
        >
          {icons[2]}
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[24px] w-[24px] border-none bg-transparent"
          reverse
          radius={124}
          duration={20}
        >
          {icons[3]}
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[24px] w-[24px] border-none bg-transparent"
          reverse
          radius={124}
          duration={20}
          delay={20}
        >
          {icons[4]}
        </OrbitingCircles>
      </div>

      <div className="relative hidden h-[600px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background py-12 min-[500px]:flex">
        <span className="pointer-events-none z-50 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-lg font-semibold leading-none text-transparent">
          As a developer,
          <br /> I focus on a few tools.
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="h-[36px] w-[36px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={130}
        >
          {icons[0]}
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[36px] w-[36px] border-none bg-transparent"
          duration={20}
          delay={18}
          radius={130}
        >
          {icons[1]}
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[36px] w-[36px] border-none bg-transparent"
          duration={20}
          delay={24}
          radius={130}
        >
          {icons[2]}
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[36px] w-[36px] border-none bg-transparent"
          reverse
          radius={190}
          duration={20}
        >
          {icons[3]}
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[36px] w-[36px] border-none bg-transparent"
          reverse
          radius={190}
          duration={20}
          delay={20}
        >
          {icons[4]}
        </OrbitingCircles>
      </div>
    </>
  );
};

export default OrbitingLogos;
