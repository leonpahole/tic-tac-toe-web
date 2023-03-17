export namespace TTTModels {
  export enum Sign {
    X = "X",
    O = "O",
  }

  export type Cell = Sign | null;
  export type Grid = Cell[][];

  export interface Stats {
    xWins: number;
    oWins: number;
    ties: number;
  }
}
