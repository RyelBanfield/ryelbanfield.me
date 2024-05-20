"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import HeroSVG from "@/assets/undraw_building_websites_i78t.svg";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        <div className="flex flex-col gap-5 p-4">
          <h1 className="text-2xl font-bold uppercase">
            Building <br /> high-performance <br /> web applications
          </h1>

          <p className="text-pretty text-sm">
            Hi, I&apos;m Ryel - I build innovative digital solutions on the web.
          </p>

          <Button className="rounded-none">
            <p className="text-xs uppercase">Let&apos;s start building yours</p>
          </Button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.5, delay: 1.25 }}
          >
            <Image src={HeroSVG} alt="" className="py-5" />
          </motion.div>
        </div>
      </motion.main>
    </>
  );
};

export default Home;
