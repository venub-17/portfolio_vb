import React from "react";
import api from "../../shared/axiosInstance";
import { useModal } from "../../shared/modal/ModalContext";
import { useData } from "../../shared/dataprovider/DataContext";

const Skillsentry = () => {
  const { openModal } = useModal();
  const { fetchSkills } = useData();

  const onSkillSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData);

    const data = {
      skill_link: formValue.skill_link,
      skill_name: formValue.skill_name,
    };
    const response = await api.post("/skills/post", data);
    openModal(response.data.message);
    fetchSkills();
  };

  return (
    <>
      <div className="bg-[#293343] rounded text-black px-20 py-10">
        <form onSubmit={onSkillSubmit}>
          <h1 className="text-2xl mb-4">Please add New Skill here...</h1>
          <div className="flex flwr flex-col gap-10 justify-evenly">
            <div className="flex w-full flex-col gap-2 mb-4">
              <label htmlFor="">Logo</label>
              <input
                type="text"
                name="skill_link"
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
              />
            </div>

            <div className="flex w-full flex-col gap-2 mb-4">
              <label htmlFor="">Skill</label>
              <input
                type="text"
                name="skill_name"
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded px-8 py-4 text-[#000000] bg-[#75BBF5]"
              >
                Add Skill
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Skillsentry;
