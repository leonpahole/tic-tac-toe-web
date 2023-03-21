export namespace TTTModels {
  export enum Sign {
    X = "X",
    O = "O",
  }

  const SignFillMap: Record<Sign, string> = {
    O: "fill-yellow-light",
    X: "fill-blue-light",
  };

  export const getSignFill = (sign: Sign) => SignFillMap[sign];

  const SignColorMap: Record<Sign, string> = {
    O: "text-yellow-light",
    X: "text-blue-light",
  };

  export const getSignColor = (sign: Sign) => SignColorMap[sign];

  export type Cell = Sign | null;
  export type Grid = Cell[][];

  export interface Stats {
    xWins: number;
    oWins: number;
    ties: number;
  }
}
