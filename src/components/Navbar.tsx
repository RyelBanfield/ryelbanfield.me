"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      <AnimatePresence mode="wait">
        {!menuOpen ? (
          <motion.p
            key={"pageTitle"}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="leading-none tracking-tighter"
          >
            <Link href={"/"}>ryelbanfield.me</Link>
          </motion.p>
        ) : (
          <motion.div
            key={"pageNav"}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-full gap-3"
          >
            {links.map((link) => {
              return (
                <motion.div
                  key={link.href}
                  animate={{
                    opacity: pathname === link.href ? 1 : 0.6,
                    scale: pathname === link.href ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="tracking-tighter"
                    onClick={async () => {
                      setMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="-mr-3 ml-auto">
        <Hamburger
          size={20}
          toggled={menuOpen}
          onToggle={(toggled) => {
            if (toggled) {
              setMenuOpen(true);
            } else {
              setMenuOpen(false);
            }
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
