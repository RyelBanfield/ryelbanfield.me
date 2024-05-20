"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

import ThemeSwitcher from "@/components/ThemeSwitcher";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex w-full flex-col p-4">
      <div className="flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!menuOpen ? (
            <motion.div
              key={"title&darkMode"}
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <p className="text-sm">ryelbanfield.me</p>
              <ThemeSwitcher />
            </motion.div>
          ) : (
            <motion.ul
              key={"links"}
              className="flex gap-3 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li>Home</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </motion.ul>
          )}
        </AnimatePresence>

        <motion.div
          className="-mr-4"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={16}
            duration={0.5}
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
