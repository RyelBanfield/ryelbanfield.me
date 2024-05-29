import Link from "next/link";

import OrbitingLogos from "@/components/OrbitingLogos";
import PhotoGrid from "@/components/PhotoGrid";

const Home = () => {
  return (
    <main className="mb-32">
      <div className="flex flex-col gap-6 pt-12">
        <h1 className="text-3xl font-semibold leading-none tracking-tighter">
          Ryel Banfield. <br /> Web Developer.
        </h1>

        <p className="text-pretty leading-snug">
          I&apos;m Ryel - fullstack developer, chess player and amateur
          photographer, currently focused on frontend development, growing my
          design skills, and learning a couple new languages.
        </p>

        <PhotoGrid />
      </div>

      <OrbitingLogos />

      <div>
        <p className="text-center text-2xl font-semibold leading-none tracking-tighter">
          Feel free to read more <br /> about my{" "}
          <Link href="/work" className="underline">
            work
          </Link>{" "}
          or{" "}
          <Link href={"/contact"} className="underline">
            reach out
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default Home;
