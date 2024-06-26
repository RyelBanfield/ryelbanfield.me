import Image from "next/image";

import SVG from "@/assets/illustrations/undraw_typewriter_re_u9i2.svg";
import Main from "@/components/Main";

const Blog = () => {
  return (
    <Main>
      <div className="flex grow flex-col items-center gap-5">
        <Image src={SVG} alt="" className="mb-5 min-h-40 w-48" />

        <h1 className="text-center text-2xl font-semibold leading-none tracking-tighter">
          Ryel&apos;s Blog
        </h1>

        <p className="max-w-64 text-center leading-snug">
          I&apos;m working on this.
        </p>
      </div>
    </Main>
  );
};

export default Blog;
