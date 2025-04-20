import React from "react";
import "../modal/modal.css";
interface formProps {
  onClose: () => void;
}
const FormModal: React.FC<formProps> = ({ onClose }) => {
  const onDownLoad = () => {};
  return (
    <>
      <div className="modal-backdrop">
        <div className="modal-content">
          <form>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="">Who you are</label>
              <select name="" id="">
                <option value="">Select</option>
                <option value="">Recruiter</option>
                <option value="">Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="">Name</label>
              <input
                name="name"
                required
                className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="">Name</label>
              <input
                name="name"
                required
                className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                type="text"
              />
            </div>
            <div>
              <button onClick={onClose}>close</button>
              <button onClick={onDownLoad}>Download</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormModal;
