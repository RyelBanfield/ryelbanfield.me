"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeSwitcher from "@/components/ThemeSwitcher";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center gap-5">
      <ThemeSwitcher />

      <p className="-mt-2 tracking-tight">ryelbanfield.me</p>

      <div className="flex w-full justify-evenly">
        {links.map((link) => {
          return (
            <motion.div
              key={link.href}
              animate={{
                opacity: pathname === link.href ? 1 : 0.7,
                scale: pathname === link.href ? 1 : 0.9,
              }}
              transition={{ duration: 0.25 }}
            >
              <Link href={link.href} className="tracking-tighter">
                {link.name}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
