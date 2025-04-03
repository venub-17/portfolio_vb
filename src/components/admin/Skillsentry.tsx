import React, { useEffect, useState } from "react";
import { useData } from "../../shared/dataprovider/DataContext";

const Skillsentry = () => {
  const { skills } = useData();
  const [skillTitles, setSkillTitles] = useState<string[]>([]);

  const [tech, setTech] = useState<string[]>([""]);

  const onAddTech = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTech((prevTech) => [...prevTech, ""]);
  };

  const onRemoveSkill = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    setTech((prevTech) => prevTech.filter((_, i) => i !== index));
  };
  useEffect(() => {
    if (skills.length > 0) {
      const titles = skills.map((item) => item.skill_title);
      setSkillTitles(titles);
    }
  }, [skills]);

  // Function to handle changes in each skill input field
  const handleTechChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedTech = [...tech]; // Copy the tech array
    updatedTech[index] = e.target.value; // Update the specific index
    setTech(updatedTech); // Update the state
  };
  const onSkillSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData);

    const skillsArray: string[] = [];
    console.log(formValue);
    // Collect all skill inputs (they now have unique names like "skill-0", "skill-1", etc.)
    tech.forEach((_, idx) => {
      const skillValue = formData.get(`skill-${idx}`) as string;
      if (skillValue) {
        skillsArray.push(skillValue);
      }
    });
  };
  const onTitleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(skills, "skills");
  };

  return (
    <>
      <div className="bg-[#4f596a] mb-8 rounded text-black px-20 py-10">
        <form className="w-1/2" onSubmit={onTitleSubmit}>
          <h1 className="text-2xl mb-4">Please add Skill Title here...</h1>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="">Tech Title</label>
            <input
              type="text"
              className="border-2 border-gray-400 outline-none rounded py-4 px-4"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded px-8 py-4 text-[#000000] bg-[#75BBF5]"
            >
              Add Title
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#4f596a] rounded text-black px-20 py-10">
        <form onSubmit={onSkillSubmit}>
          <h1 className="text-2xl mb-4">Please add Skill here...</h1>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded px-8 py-4 text-[#000000] bg-[#75BBF5]"
            >
              Add Skill
            </button>
          </div>

          <div className="flex flex-row flwr gap-10 justify-evenly">
            <div className="flex w-full flex-col gap-2 mb-4">
              <label htmlFor="">Title</label>
              <select
                name="title"
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
              >
                <option value="dummy">Select Title</option>
                {skillTitles.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex w-full flex-col gap-2 mb-4">
              <label htmlFor="">Skill</label>

              {tech.map((itm, idx) => (
                <div key={idx} className="flex py-2 gap-8 items-center">
                  <input
                    className="border-2 w-11/12 border-gray-400 outline-none rounded py-4 px-4"
                    type="text"
                    name={`skill-${idx}`}
                    value={itm} // Ensure value is correctly bound to state
                    onChange={(e) => handleTechChange(e, idx)} // Correctly update state for the correct input
                  />
                  <button
                    onClick={(e) => onRemoveSkill(e, idx)}
                    className="py-1 w-16 bg-white text-[#000] text-3xl float-left px-2 rounded"
                  >
                    -
                  </button>
                </div>
              ))}

              <button
                className="rounded px-8 py-4 w-20 text-[#000000] bg-[#75BBF5]"
                onClick={onAddTech}
              >
                +
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Skillsentry;
