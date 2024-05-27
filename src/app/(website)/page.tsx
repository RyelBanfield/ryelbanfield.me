import IconCloud from "@/components/magicui/icon-cloud";
import OrbitingLogos from "@/components/OrbitingLogos";
import PhotoGrid from "@/components/PhotoGrid";

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
      </div>

      <div className="flex flex-col gap-6 py-6">
        <h2 className="text-center text-2xl font-semibold tracking-tighter">
          I work with different tools...
        </h2>
        <IconCloud
          iconSlugs={[
            "typescript",
            "javascript",
            "react",
            "html5",
            "css3",
            "nodedotjs",
            "express",
            "nextdotjs",
            "prisma",
            "amazonaws",
            "postgresql",
            "firebase",
            "vercel",
            "docker",
            "git",
            "github",
            "visualstudiocode",
            "figma",
          ]}
        />
      </div>

      <OrbitingLogos />
    </main>
  );
};

export default Home;
