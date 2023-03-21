import Modal from "react-modal";

interface IProps {
  isOpen: boolean;
  contentLabel: string;
  children: React.ReactNode;
}

export const AppModal = ({ isOpen, contentLabel, children }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      className="absolute w-full bg-navy-dark"
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
};
