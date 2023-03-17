import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  stats: TTTModels.Stats;
}

export const GameStats = ({ stats }: IProps) => {
  const StatLabelsMap: Record<keyof TTTModels.Stats, string> = {
    oWins: "O",
    xWins: "X",
    ties: "Ties",
  };

  const StatBgMap: Record<keyof TTTModels.Stats, string> = {
    oWins: "bg-yellow-light",
    xWins: "bg-blue-light",
    ties: "bg-silver",
  };

  return (
    <footer className="mt-5 flex gap-5">
      {Object.entries(stats).map(([statName, statValue]: [any, any]) => (
        <div
          className={`${
            StatBgMap[statName as keyof TTTModels.Stats]
          } flex flex-1 flex-col items-center justify-center rounded-2xl p-3 text-navy-dark`}
        >
          <span className="text-body">
            {StatLabelsMap[statName as keyof TTTModels.Stats]}
          </span>
          <span className="text-m">{statValue}</span>
        </div>
      ))}
    </footer>
  );
};
