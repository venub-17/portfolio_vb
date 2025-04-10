import React from "react";

interface Skill {
  link: string;
  name: string;
}

const SkillCard: React.FC<Skill> = ({ link, name }) => {
  return (
    <>
      <div className="flex items-center gap-4 border px-3 py-3 border-gray-600 rounded-md">
        <div className="bg-[#495057] p-2 rounded-md">
          <img src={link} width={30} height={30} alt={name} />
        </div>
        <p className="text-2xl">{name}</p>
      </div>
    </>
  );
};

export default SkillCard;
