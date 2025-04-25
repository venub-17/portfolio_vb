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
        <div className="modal-content text-black">
          <form>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-3xl pb-4" htmlFor="">
                Let’s Get to Know You!
              </label>
              <select
                name=""
                id=""
                className="border bg-[#E1E4EA] border-gray-800  text-xl  focus:ring-0 focus:outline-none  hover:bg-[#ccc] outline-none rounded-lg py-4 px-4"
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="recruiter">Recruiter</option>
                <option value="select">User</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-xl" htmlFor="">
                Name
              </label>
              <input
                name="name"
                required
                className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-xl" htmlFor="">
                Email
              </label>
              <input
                name="name"
                required
                className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                type="text"
              />
            </div>
            <div className="modal_footers">
              <button
                className="rounded text-xl  px-6 py-3 tracking-wider bg-slate-400 hover:bg-slate-500 text-gray-900"
                onClick={onClose}
                type="button"
              >
                close
              </button>
              <button
                type="submit"
                className="px-6 text-xl py-3 bg-[#3a5a83] text-[#ffffff] hover:bg-[#345176]  tracking-wider rounded-md"
                onClick={onDownLoad}
              >
                Download
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormModal;
