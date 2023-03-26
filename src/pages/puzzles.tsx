import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import ChessBoard from "~/components/Chess/chessboard";
import useBreakPoints from "~/hooks/useBreakPoints";
import { ColorRing } from  "react-loader-spinner";

const Puzzles: NextPage = () => {
  const {data: puzzle, isLoading} = api.chess.generatePuzzle.useQuery({query: "easy"});
  const {s} = useBreakPoints();

  return (
    <>
      <Head>
        <title>Daily Puzzles</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex min-h-[90vh] flex-col items-center sm:mt-40 md:mt-32 lg:mt-20 xl:mt-12 2xl:mt-10"}>
        {
          isLoading? <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
          /> : <div className="container flex flex-col items-center justify-center px-4">
            <ChessBoard width={s([300, 400, 500, 500, 450])} fen={puzzle?.data?.fen} />
          </div>
        }
      </main>
    </>
  );
};

export default Puzzles;

