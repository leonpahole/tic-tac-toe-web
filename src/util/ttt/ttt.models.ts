export namespace TTTModels {
  export enum Sign {
    X = "X",
    O = "O",
  }

  export const getOppositeSign = (sign: Sign): Sign =>
    sign === Sign.O ? Sign.X : Sign.O;

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

  export const getEmptyGrid = (): Grid => {
    return Array.from({ length: 3 }).map(() => {
      return Array.from({ length: 3 }).map(() => {
        return null;
      });
    });
  };

  export interface Stats {
    xWins: number;
    oWins: number;
    ties: number;
  }

  export const getInitialStats = (): Stats => {
    return {
      oWins: 0,
      ties: 0,
      xWins: 0,
    };
  };

  export enum GameMode {
    VS_CPU = "VS_CPU",
    PVP = "PVP",
  }

  export interface Game {
    gameMode: GameMode | null;
    state: Grid;
    onSelect: (p1Sign: TTTModels.Sign, mode: TTTModels.GameMode) => void;
    onMove: (row: number, col: number) => void;
    player1Sign: Sign;
    playersTurn: Sign;
    quit(): void;
    onRestart(): void;
    stats: Stats;
    result: Sign | Tie | undefined;
  }

  export type Tie = null;

  export const getResult = (state: Grid): Sign | Tie | undefined => {
    const isDiagonalLeft =
      state[0][0] != null &&
      state[0][0] === state[1][1] &&
      state[1][1] === state[2][2];
    if (isDiagonalLeft) {
      return state[0][0];
    }

    const isDiagonalRight =
      state[0][2] != null &&
      state[0][2] === state[1][1] &&
      state[1][1] === state[2][0];
    if (isDiagonalRight) {
      return state[0][2];
    }

    for (let i = 0; i < state.length; i++) {
      const sign = state[i][0];
      if (sign == null) {
        continue;
      }

      let isWinner = true;
      for (let j = 1; j < state.length; j++) {
        if (state[i][j] !== sign) {
          isWinner = false;
          break;
        }
      }

      if (isWinner) {
        return sign;
      }
    }

    for (let i = 0; i < state.length; i++) {
      const sign = state[0][i];
      if (sign == null) {
        continue;
      }

      let isWinner = true;
      for (let j = 1; j < state.length; j++) {
        if (state[j][i] !== sign) {
          isWinner = false;
          break;
        }
      }

      if (isWinner) {
        return sign;
      }
    }

    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[i].length; j++) {
        if (state[i][j] == null) {
          return undefined;
        }
      }
    }

    return null;
  };

  export const getNextComputerMove = (
    state: Grid
  ): { row: number; col: number } | null => {
    for (let row = 0; row < state.length; row++) {
      for (let col = 0; col < state.length; col++) {
        if (state[row][col] == null) {
          return { row, col };
        }
      }
    }

    return null;
  };
}
