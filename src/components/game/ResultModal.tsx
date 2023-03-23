import { AppButton } from "@/components/shared/AppButton";
import { AppModal } from "@/components/shared/AppModal";
import { Sign } from "@/components/shared/Sign";
import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  game: TTTModels.Game;
}

export const ResultModal = ({ game }: IProps) => {
  const ResultHeadingClasses =
    "mb-6 flex items-center gap-2 md:gap-6 text-m md:text-l uppercase";

  const isOpen = game.result !== undefined;
  let text = "";
  if (game.result === null) {
    text = "Round tied";
  } else if (game.gameMode === TTTModels.GameMode.PVP) {
    let playerNoWinner = 2;
    if (game.result === game.player1Sign) {
      playerNoWinner = 1;
    }

    text = `Player ${playerNoWinner} wins!`;
  } else if (game.gameMode === TTTModels.GameMode.VS_CPU) {
    if (game.result === game.player1Sign) {
      text = "You won!";
    } else {
      text = "Oh no, you lost...";
    }
  }

  return (
    <AppModal isOpen={isOpen} contentLabel={text}>
      <div className="flex flex-col items-center justify-center py-11 px-6">
        {game.result != null ? (
          <>
            <h2 className="mb-4 text-body uppercase text-silver md:text-xs">
              {text}
            </h2>
            <h3
              className={`${ResultHeadingClasses} ${TTTModels.getSignColor(
                game.result
              )}`}
            >
              <Sign className="h-7 w-7 md:h-16 md:w-16" sign={game.result} />
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
            onClick={() => {
              game.quit();
            }}
            type="button"
            color="silver"
            size="secondary"
            className="!w-[unset]"
          >
            Quit
          </AppButton>
          <AppButton
            onClick={() => {
              game.onRestart();
            }}
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
