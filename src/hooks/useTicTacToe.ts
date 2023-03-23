import { useStateAndRef } from "@/hooks/useStateAndRef";
import { TTTModels } from "@/util/ttt/ttt.models";
import { useCallback, useEffect, useRef, useState } from "react";

export const useTicTacToe = (): TTTModels.Game => {
  const [gameMode, gameModeRef, setGameMode] =
    useStateAndRef<TTTModels.GameMode | null>(null);
  const [player1Sign, player1SignRef, setPlayer1Sign] =
    useStateAndRef<TTTModels.Sign>(TTTModels.Sign.X);

  const [playersTurn, playersTurnRef, setPlayersTurn] =
    useStateAndRef<TTTModels.Sign>(TTTModels.Sign.X);

  const [state, setState] = useState<TTTModels.Grid>(TTTModels.getEmptyGrid());
  const [stats, setStats] = useState<TTTModels.Stats>(
    TTTModels.getInitialStats()
  );

  const [result, setResult] = useState<TTTModels.Sign | null | undefined>(
    undefined
  );

  const roundStartedBy = useRef<TTTModels.Sign>(TTTModels.Sign.X);

  const onSelect = (p1Sign: TTTModels.Sign, mode: TTTModels.GameMode) => {
    setGameMode(mode);
    setPlayer1Sign(p1Sign);
    setPlayersTurn(TTTModels.Sign.X);
    setState(TTTModels.getEmptyGrid());
    assignNextPlayerForMove(TTTModels.Sign.X);

    roundStartedBy.current = TTTModels.Sign.X;
  };

  const handleGameEnded = useCallback(
    (winner: TTTModels.Sign | TTTModels.Tie) => {
      if (winner === TTTModels.Sign.O) {
        stats.oWins++;
      } else if (winner === TTTModels.Sign.X) {
        stats.xWins++;
      } else {
        stats.ties++;
      }

      setStats(stats);
      setResult(winner);
    },
    [stats]
  );

  const assignNextPlayerForMove = useCallback(
    (nextPlayerOverride?: TTTModels.Sign) => {
      let nextPlayer = nextPlayerOverride;
      if (nextPlayer == null) {
        nextPlayer = TTTModels.getOppositeSign(playersTurnRef.current);
      }

      setPlayersTurn(nextPlayer);

      const isNextTurnComputers =
        gameModeRef.current === TTTModels.GameMode.VS_CPU &&
        nextPlayer !== player1SignRef.current;

      if (isNextTurnComputers) {
        setComputerMove(true);
      }
    },
    [gameModeRef, player1SignRef, playersTurnRef, setPlayersTurn]
  );

  const onMove = useCallback(
    (row: number, col: number) => {
      if (row < 0 || row > 3 || col < 0 || col > 3) {
        return;
      }

      if (state[row][col] != null) {
        return;
      }

      state[row][col] = playersTurn;
      setState([...state]);

      const gameResult = TTTModels.getResult(state);
      if (gameResult !== undefined) {
        handleGameEnded(gameResult);
        return;
      }

      assignNextPlayerForMove();
    },
    [assignNextPlayerForMove, handleGameEnded, playersTurn, state]
  );

  const [computerMove, setComputerMove] = useState<boolean>(false);

  useEffect(() => {
    if (!computerMove) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      const move = TTTModels.getNextComputerMove(state);
      if (move) {
        onMove(move.row, move.col);
      }

      setComputerMove(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [computerMove, onMove, state]);

  const onRestart = () => {
    if (result == null) {
      const nextPlayer = TTTModels.getOppositeSign(roundStartedBy.current);
      assignNextPlayerForMove(nextPlayer);
      roundStartedBy.current = nextPlayer;
    } else {
      const nextPlayer = TTTModels.getOppositeSign(result);
      assignNextPlayerForMove(nextPlayer);
      roundStartedBy.current = nextPlayer;
    }

    setState(TTTModels.getEmptyGrid());
    setResult(undefined);
  };

  const quit = () => {
    onRestart();
    setGameMode(null);
    setStats(TTTModels.getInitialStats());
  };

  return {
    gameMode,
    state,
    onSelect,
    onMove,
    playersTurn,
    player1Sign,
    onRestart,
    stats,
    result,
    quit,
  };
};
