import { GameCell } from "@/components/game/GameCell";
import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  state: TTTModels.Grid;
  onCellClick(row: number, col: number): void;
}

export const GameGrid = ({ state, onCellClick }: IProps) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {state.map((_, row) => {
        return state[row].map((__, col) => {
          return (
            <GameCell
              // eslint-disable-next-line react/no-array-index-key
              key={`${row}_${col}`}
              state={state}
              row={row}
              col={col}
              onClick={onCellClick}
            />
          );
        });
      })}
    </div>
  );
};
