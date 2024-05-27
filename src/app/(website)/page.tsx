// import Image from "next/image";

// import Link from "next/link";
import PhotoGrid from "@/components/PhotoGrid";

// import { Button } from "@/components/ui/button";
// import GithubSVG from "../../../public/github.svg";
// import NextSVG from "../../../public/next.svg";
// import SanitySVG from "../../../public/sanity.svg";
// import TailwindSVG from "../../../public/tailwindcss.svg";
// import VercelSVG from "../../../public/vercel.svg";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col gap-6 py-12">
        <h1 className="text-3xl font-semibold leading-none tracking-tighter">
          Ryel Banfield. <br /> Web Developer.
        </h1>

        <p className="text-pretty leading-snug">
          I&apos;m Ryel - fullstack developer, chess player and amateur
          photographer, currently focused on frontend development, growing my
          design skills, and learning a couple new languages.
        </p>

        <PhotoGrid />

        {/* <Button size={"sm"} asChild className="w-44">
          <Link href={"/contact"}>Let&apos;s build together</Link>
        </Button> */}

        {/* <p className="leading-tight">
          Hi, I&apos;m Ryel - I&apos;m a fullstack developer, chess player and
          amateur photographer. I am currently focused on frontend development,
          growing my design skills, and networking.
        </p> */}
      </div>

      {/* <div className="py-9">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-lg font-semibold leading-8 text-gray-900">
            Proficient with the world&apos;s most modern tools
          </h2>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10">
            <Image
              className="col-span-2 max-h-9"
              src={NextSVG}
              alt="Next.js"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-9"
              src={TailwindSVG}
              alt="TailwindCSS"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-9"
              src={SanitySVG}
              alt="Sanity"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-9"
              src={GithubSVG}
              alt="Github"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-9"
              src={VercelSVG}
              alt="Vercel"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Home;
