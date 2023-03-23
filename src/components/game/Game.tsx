import { GameGrid } from "@/components/game/GameGrid";
import { GameHeader } from "@/components/game/GameHeader";
import { GameStats } from "@/components/game/GameStats";
import { ResultModal } from "@/components/game/ResultModal";
import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  game: TTTModels.Game;
}

export const Game = ({ game }: IProps) => {
  return (
    <section className="flex h-full min-h-screen items-center justify-center bg-navy-dark p-6">
      <div>
        <GameHeader game={game} />
        <GameGrid game={game} />
        <GameStats game={game} />
        <ResultModal game={game} />
      </div>
    </section>
  );
};
