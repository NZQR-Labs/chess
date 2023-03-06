import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {useSubscription} from "~/hooks/useSubscription";

const Puzzles: NextPage = () => {
  const [test, setTest] = useState<{test: number}>({
    test: 0
  });
  useSubscription("test", "test", setTest);

  return (
    <>
      <Head>
        <title>Puzzles</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>
          {test?.test}
        </div>
      </main>
    </>
  );
};

export default Puzzles;

