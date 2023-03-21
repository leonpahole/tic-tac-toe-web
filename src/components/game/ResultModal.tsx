import { AppButton } from "@/components/shared/AppButton";
import { AppModal } from "@/components/shared/AppModal";
import { Sign } from "@/components/shared/Sign";
import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  isOpen: boolean;
  opponentSign?: TTTModels.Sign;
  winner: TTTModels.Sign | null;
  onQuit(): void;
  onNextRound(): void;
}

export const ResultModal = ({
  isOpen,
  opponentSign,
  winner,
  onQuit,
  onNextRound,
}: IProps) => {
  const ResultHeadingClasses =
    "mb-6 flex items-center gap-2 md:gap-6 text-m md:text-l uppercase";

  return (
    <AppModal isOpen={isOpen} contentLabel="">
      <div className="flex flex-col items-center justify-center py-11 px-6">
        {winner ? (
          <>
            <h2 className="mb-4 text-body uppercase text-silver md:text-xs">
              Player 1 wins
            </h2>
            <h3
              className={`${ResultHeadingClasses} ${TTTModels.getSignColor(
                winner
              )}`}
            >
              <Sign className="h-7 w-7 md:h-16 md:w-16" sign={winner} />
              <span>Takes the round</span>
            </h3>
          </>
        ) : (
          <h3 className={`${ResultHeadingClasses} mt-5 text-silver`}>
            Round tied
          </h3>
        )}
        <div className="flex items-center gap-4">
          <AppButton
            onClick={onQuit}
            type="button"
            color="silver"
            size="secondary"
            className="!w-[unset]"
          >
            Quit
          </AppButton>
          <AppButton
            onClick={onNextRound}
            type="button"
            className="!w-[unset]"
            size="secondary"
          >
            Next round
          </AppButton>
        </div>
      </div>
    </AppModal>
  );
};
