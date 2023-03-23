import { Sign } from "@/components/shared/Sign";
import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  state: TTTModels.Grid;
  row: number;
  col: number;
  onClick(row: number, col: number): void;
  disabled: boolean;
}

export const GameCell = ({ state, row, col, onClick, disabled }: IProps) => {
  const cell = state[row][col];

  return (
    <button
      className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy-semi-dark shadow-big shadow-navy-shadow md:h-36 md:w-36"
      type="button"
      onClick={() => onClick(row, col)}
      disabled={disabled}
    >
      <Sign sign={cell} className="h-10 w-10 md:h-16 md:w-16" />
    </button>
  );
};
