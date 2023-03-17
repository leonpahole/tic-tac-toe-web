import { Game } from "@/components/game/Game";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tic-tac-toe</title>
        <meta name="description" content="Play Tic-tac-toe online" />
      </Head>
      <main>
        <Game />
      </main>
    </>
  );
}
