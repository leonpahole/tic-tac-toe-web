import { GameCell } from "@/components/game/GameCell";
import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  game: TTTModels.Game;
}

export const GameGrid = ({ game }: IProps) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {game.state.map((_, row) => {
        return game.state[row].map((__, col) => {
          return (
            <GameCell
              // eslint-disable-next-line react/no-array-index-key
              key={`${row}_${col}`}
              state={game.state}
              row={row}
              col={col}
              onClick={(r, c) => {
                game.onMove(r, c);
              }}
              disabled={
                game.gameMode === TTTModels.GameMode.VS_CPU &&
                game.player1Sign !== game.playersTurn
              }
            />
          );
        });
      })}
    </div>
  );
};
