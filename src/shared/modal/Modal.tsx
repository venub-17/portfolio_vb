import "./modal.css";
import { useModal } from "./ModalContext";

const Modal: React.FC = () => {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal-content text-3xl">
            {content}
            <div className="cls-btn">
              <button
                onClick={closeModal}
                className="rounded px-6 py-3 bg-slate-400 hover:bg-slate-500 text-gray-900"
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
