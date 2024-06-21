"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

const Work = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const enterAnimation = async () => {
      await animate(
        "article > * > *",
        { opacity: [0, 1] },
        { delay: stagger(0.1) },
      );
    };

    enterAnimation();
  }, [animate]);

  const exitAnimation = async () => {
    await animate("article > *", { opacity: 0 }, { delay: stagger(0.1) });
  };

  return (
    <>
      <Navbar exitAnimation={exitAnimation} />

      <motion.main ref={scope} className="p-5">
        <article className="prose prose-invert max-w-none md:grid md:grid-cols-2 md:gap-5">
          <section className="pb-5 md:col-span-2">
            <h2 className="md:col-span-2">My Work</h2>
            <p className="md:col-span-2">
              On a mission to build and enhance digital experiences, I
              specialize in creating modern, innovative websites and web
              applications. Here&apos;s a summary of my work so far.
            </p>

            <Separator className="mt-10" />
          </section>

          <section className="pb-5 md:col-span-1 md:pr-5">
            <h3 className="md:col-span-1">RCB Software</h3>
            <p className="md:col-span-1">
              Freelance Web Developer (2023 — Present)
            </p>
            <p className="md:col-span-1">
              At RCB Software, I collaborate with clients to elevate their
              digital presence. I ensure solutions tailored to each
              client&apos;s needs. Here are some of my key contributions:
            </p>
            <ul className="md:col-span-1">
              <li>
                Implemented responsive design techniques to ensure compatibility
                across devices.
              </li>
              <li>
                Integrated third-party APIs into web applications to build
                functionality.
              </li>
              <li>
                Provided technical support and troubleshooting services when
                needed.
              </li>
              <li>
                Maintained version control systems, such as Git, to manage
                changes to the source code.
              </li>
              <li>
                Designed websites, portals, and large-scale web applications for
                multiple clients.
              </li>
            </ul>
          </section>

          <section className="pb-5 md:col-span-1 md:px-5">
            <h3>Contract Work</h3>
            <p>Full Stack Developer (2021 — 2023)</p>
            <p>
              In my previous role as a contracted Full Stack Developer, I
              focused on creating robust, scalable web applications. Here are
              some of my key contributions:
            </p>
            <ul>
              <li>
                Created unit tests for full stack web application components.
              </li>
              <li>
                Collaborated with other developers on code reviews, bug fixes,
                and feature development.
              </li>
              <li>
                Optimized the existing code base for better performance and
                scalability.
              </li>
              <li>
                Led a technical team to meet project deadlines and achieve
                project objectives.
              </li>
              <li>
                Redesigned sites to enhance navigation and improve visual
                appeal.
              </li>
            </ul>
          </section>

          <section className="pb-5 md:col-span-2">
            <Separator className="mb-20" />
            <h3>Mentorship and Community Contributions</h3>
            <p>
              Beyond my professional work, I am dedicated to giving back to the
              developer community. I have served as a Developer Mentor, sharing
              my knowledge and experience to guide the next generation of
              developers. Notably, I contributed to the Republic of Trinidad and
              Tobago&apos;s Inaugural Developer Challenge, helping to foster
              innovation and growth in the local tech community.
            </p>
            <Separator className="mt-10" />
          </section>

          <section className="pb-5 md:col-span-2">
            <h3>Personal Projects</h3>
            <p>
              Currently, I maintain an application I developed as the sole
              developer. This application, which serves 50+ monthly users,
              showcases my ability to build and manage software solutions
              independently.
            </p>
          </section>
        </article>
      </motion.main>
    </>
  );
};

export default Work;
