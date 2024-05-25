import Image from "next/image";

import SVG from "@/assets/undraw_add_information_j2wg.svg";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={SVG} alt="" className="mb-5 min-h-40 w-48" />

      <h1 className="text-center text-2xl font-semibold leading-none tracking-tighter">
        Contact Me
      </h1>

      <p className="max-w-64 text-center leading-snug">
        I&apos;m working on this.
      </p>
    </div>
  );
};

export default Contact;
