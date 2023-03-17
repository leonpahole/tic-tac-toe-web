import { IconO } from "@/components/icons/iconO";
import { IconX } from "@/components/icons/IconX";
import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  state: TTTModels.Grid;
  row: number;
  col: number;
  onClick(row: number, col: number): void;
}

export const GameCell = ({ state, row, col, onClick }: IProps) => {
  const cell = state[row][col];

  let content;
  if (cell === TTTModels.Sign.O) {
    content = <IconO className="h-16 w-16 fill-yellow-light" />;
  } else if (cell === TTTModels.Sign.X) {
    content = <IconX className="h-16 w-16 fill-blue-light" />;
  }

  return (
    <button
      className="flex h-36 w-36 items-center justify-center rounded-2xl bg-navy-semi-dark shadow-big shadow-navy-shadow"
      type="button"
      onClick={() => onClick(row, col)}
    >
      {content}
    </button>
  );
};
