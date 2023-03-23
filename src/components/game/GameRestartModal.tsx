import { AppButton } from "@/components/shared/AppButton";
import { AppModal } from "@/components/shared/AppModal";

interface IProps {
  isOpen: boolean;
  onConfirm(): void;
  onCancel(): void;
}

export const GameRestartModal = ({ isOpen, onCancel, onConfirm }: IProps) => {
  return (
    <AppModal isOpen={isOpen} contentLabel="Confirm restarting the game">
      <div className="px-4 py-16">
        <h2 className="mb-6 text-center text-m uppercase text-silver md:mb-8 md:text-l">
          Restart game?
        </h2>
        <div className="flex items-center justify-center gap-4">
          <AppButton
            color="silver"
            size="secondary"
            onClick={onCancel}
            type="button"
            className="!w-[unset]"
          >
            No, cancel
          </AppButton>
          <AppButton
            color="yellow"
            size="secondary"
            onClick={onConfirm}
            type="button"
            className="!w-[unset]"
          >
            Yes, restart
          </AppButton>
        </div>
      </div>
    </AppModal>
  );
};
