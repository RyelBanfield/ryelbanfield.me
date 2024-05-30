import Link from "next/link";

import Main from "@/components/Main";
import OrbitingLogos from "@/components/OrbitingLogos";
import PhotoGrid from "@/components/PhotoGrid";

const Home = () => {
  return (
    <Main>
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold leading-none tracking-tighter">
          Ryel Banfield. <br /> Web Developer.
        </h1>

        <p className="text-pretty leading-snug">
          I&apos;m Ryel - fullstack developer, chess player and amateur
          photographer, currently focused on frontend development, growing my
          design skills, and learning a couple new languages.
        </p>

        <PhotoGrid />
      </section>

      <OrbitingLogos />

      <section>
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
      </section>
    </Main>
  );
};

export default Home;
