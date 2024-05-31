import Link from "next/link";

import NumberTicker from "@/components/magicui/number-ticker";
import Main from "@/components/Main";
import OrbitingLogos from "@/components/OrbitingLogos";
import PhotoGrid from "@/components/PhotoGrid";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { getMyData, getMyStats } from "@/lib/utils";

const Home = async () => {
  const myData = await getMyData();
  const myStats = await getMyStats();

  return (
    <Main>
      <section className="mb-12 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold leading-none tracking-tighter">
          Ryel Banfield. <br /> Web Developer.
        </h1>

        <p className="text-pretty leading-snug">
          I&apos;m Ryel - fullstack developer, chess player and amateur
          photographer, currently focused on frontend development, growing my
          design skills, and learning a couple new languages.
        </p>
      </section>

      <section className="mb-12 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold leading-none tracking-tighter">
          As a photographer
        </h2>

        <PhotoGrid />
      </section>

      <section className="mb-12 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold leading-none tracking-tighter">
          As a{" "}
          <Link
            href={myData.url}
            target="_blank"
            className="text-neutral-600 underline"
          >
            chess player
          </Link>
        </h2>

        <div>
          <div className="grid grid-cols-4 gap-3">
            <Card className="col-span-2 p-6 text-center">
              <CardTitle>Rapid Games</CardTitle>
              <CardDescription className="">
                These are 10 minute games.
              </CardDescription>
            </Card>

            <Card className="col-span-2 grid place-content-center text-center">
              <p className="text-xl font-semibold tracking-tighter">
                <NumberTicker value={myStats.chess_rapid.last.rating} />
              </p>
              <p className="leading-none tracking-tighter">Rating</p>
            </Card>

            <Card className="col-span-4 grid h-24 grid-cols-3 text-center">
              <div className="col-span-1 grid h-full place-content-center rounded-l">
                <p className="text-xl font-medium leading-none tracking-tighter">
                  <NumberTicker value={myStats.chess_rapid.record.win} />
                </p>
                <p className="leading-none tracking-tighter">Won</p>
              </div>

              <div className="col-span-1 grid h-full place-content-center">
                <p className="text-xl font-medium leading-none tracking-tighter">
                  <NumberTicker value={myStats.chess_rapid.record.draw} />
                </p>
                <p className="leading-none tracking-tighter">Drawn</p>
              </div>

              <div className="col-span-1 grid h-full place-content-center rounded-r">
                <p className="text-xl font-medium leading-none tracking-tighter">
                  <NumberTicker value={myStats.chess_rapid.record.loss} />
                </p>
                <p className="leading-none tracking-tighter">Lost</p>
              </div>
            </Card>

            <Card className="col-span-2 p-6 text-center">
              <CardTitle>Blitz Games</CardTitle>
              <CardDescription className="">
                These are 5 minute games.
              </CardDescription>
            </Card>

            <Card className="col-span-2 grid place-content-center text-center">
              <p className="text-xl font-semibold tracking-tighter">
                <NumberTicker value={myStats.chess_blitz.last.rating} />
              </p>
              <p className="leading-none tracking-tighter">Rating</p>
            </Card>

            <Card className="col-span-4 grid h-24 grid-cols-3 text-center">
              <div className="col-span-1 grid h-full place-content-center rounded-l">
                <p className="text-xl font-medium leading-none tracking-tighter">
                  <NumberTicker value={myStats.chess_blitz.record.win} />
                </p>
                <p className="leading-none tracking-tighter">Won</p>
              </div>

              <div className="col-span-1 grid h-full place-content-center">
                <p className="text-xl font-medium leading-none tracking-tighter">
                  <NumberTicker value={myStats.chess_blitz.record.draw} />
                </p>
                <p className="leading-none tracking-tighter">Drawn</p>
              </div>

              <div className="col-span-1 grid h-full place-content-center rounded-r">
                <p className="text-xl font-medium leading-none tracking-tighter">
                  <NumberTicker value={myStats.chess_blitz.record.loss} />
                </p>
                <p className="leading-none tracking-tighter">Lost</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <OrbitingLogos />
      </section>

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
