import { GameGrid } from "@/components/game/GameGrid";
import { GameHeader } from "@/components/game/GameHeader";
import { GameStats } from "@/components/game/GameStats";
import { ResultModal } from "@/components/game/ResultModal";
import { TTTModels } from "@/util/ttt/ttt.models";

const grid = Array.from({ length: 3 }).map(() => {
  return Array.from({ length: 3 }).map(() => {
    return TTTModels.Sign.X;
  });
});

export const Game = () => {
  return (
    <section className="flex h-full min-h-screen items-center justify-center bg-navy-dark p-6">
      <div>
        <GameHeader />
        <GameGrid state={grid} onCellClick={() => {}} />
        <GameStats stats={{ oWins: 10, ties: 20, xWins: 5 }} />
        <ResultModal
          isOpen={false}
          mySign={TTTModels.Sign.O}
          onNextRound={() => {}}
          onQuit={() => {}}
          winner={null}
        />
      </div>
    </section>
  );
};
