"use client";

import { stagger, useAnimate } from "framer-motion";

import Navbar from "@/components/Navbar";

const Home = () => {
  const [scope, animate] = useAnimate();

  const exitAnimation = async () => {
    await animate("p", { opacity: 0 }, { delay: stagger(0.1) });
  };

  return (
    <>
      <Navbar exitAnimation={exitAnimation} />

      <main ref={scope} className="p-5">
        <section>
          <p className="text-center text-3xl font-medium leading-none tracking-tighter">
            Ryel Banfield
          </p>
          <p className="text-center text-3xl font-medium leading-none tracking-tighter">
            Independent Web Developer
          </p>
          <p className="text-center text-3xl font-medium leading-none tracking-tighter">
            Based in Trinidad
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
