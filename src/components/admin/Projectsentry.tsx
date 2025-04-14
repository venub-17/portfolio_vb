import { useState } from "react";

const Projectsentry = () => {
  const [inputs, setInputs] = useState<string[]>([""]);

  // Function to add a new empty input
  const onAddRes = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputs((prevInputs) => [...prevInputs, ""]);
  };

  // Function to remove an input at a given index
  const onRemoveRes = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index));
  };

  // Handle change for specific input at index
  const handleReshChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = e.target.value; // Update the specific input value
    setInputs(updatedInputs); // Update the state with the new values
  };

  return (
    <>
      <div className="bg-[#293343] rounded text-black px-20 py-10">
        <form>
          <h1 className="text-2xl mb-4">Please add Project here...</h1>

          <div className="flex justify-end">
            <button className="rounded px-8 py-4 text-[#000000] bg-[#75BBF5]">
              Add Project
            </button>
          </div>

          <div className="flex flex-row flwr gap-10 justify-evenly">
            <div className="flex w-full flex-col gap-2 mb-4">
              <label htmlFor="">Company Name</label>
              <input
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                type="text"
              />
            </div>
            <div className="flex w-full flex-col gap-2 mb-4">
              <label htmlFor="">Client Name</label>
              <input
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                type="text"
              />
            </div>
            <div className="flex w-full flex-col gap-2 mb-4">
              <label htmlFor="">Role</label>
              <input
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-row gap-10 justify-around">
            <div className="flex flex-col gap-2 mb-4 w-full">
              <label htmlFor="">From</label>
              <input
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4 w-full">
              <label htmlFor="">To</label>
              <input
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                type="date"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="">Description</label>
            <textarea
              rows={12}
              className="border-2 border-gray-400 outline-none rounded py-4 px-4"
            ></textarea>
          </div>

          {/* Render dynamic inputs */}
          {inputs.map((itm, idx) => (
            <div key={idx} className="flex py-2 gap-8 items-center">
              <input
                key={idx} // Key for each dynamic input to make sure React identifies them uniquely
                className="border-2 w-11/12 border-gray-400 outline-none rounded py-4 px-4"
                type="text"
                value={itm}
                onChange={(e) => handleReshChange(e, idx)} // Update specific input field
              />
              <button
                onClick={(e) => onRemoveRes(e, idx)}
                className="py-1 w-16 bg-white text-[#000] text-3xl float-left px-2 rounded"
              >
                -
              </button>
            </div>
          ))}

          <button
            onClick={(e) => onAddRes(e)}
            className="rounded px-8 py-4 text-[#000000] bg-[#75BBF5]"
          >
            +
          </button>
        </form>
      </div>
    </>
  );
};

export default Projectsentry;
