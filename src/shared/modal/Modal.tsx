import "./modal.css";
import { useModal } from "./ModalContext";

const Modal: React.FC = () => {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal-content text-2xl">
            {content}
            <div className="cls-btn">
              <button
                onClick={closeModal}
                className="rounded px-6 py-3 text-[#000000] bg-[#75BBF5]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Modal;
