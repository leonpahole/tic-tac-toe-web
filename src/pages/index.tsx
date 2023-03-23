import { FirstPage } from "@/components/firstPage/FirstPage";
import { Game } from "@/components/game/Game";
import { useTicTacToe } from "@/hooks/useTicTacToe";
import Head from "next/head";

export default function Home() {
  const game = useTicTacToe();

  return (
    <>
      <Head>
        <title>Tic-tac-toe</title>
        <meta name="description" content="Play Tic-tac-toe online" />
      </Head>
      <main>
        {game.gameMode == null && (
          <FirstPage onSelect={(...args) => game.onSelect(...args)} />
        )}
        {game.gameMode != null && <Game game={game} />}
      </main>
    </>
  );
}
