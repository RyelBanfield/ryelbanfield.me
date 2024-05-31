"use client";

import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { Button } from "./ui/button";

const ContactButton = () => {
  const [isBottom, setIsBottom] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isBottom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-9 right-9"
          >
            <Button asChild variant={"outline"} size={"icon"}>
              <Link href="/contact" passHref>
                <ChatBubbleIcon />
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => {
          setIsBottom(true);
        }}
        onViewportLeave={() => {
          setIsBottom(false);
        }}
      >
        <Button asChild>
          <Link href="/contact" passHref>
            Contact Me
          </Link>
        </Button>
      </motion.div>
    </>
  );
};

export default ContactButton;
