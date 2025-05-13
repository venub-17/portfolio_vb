import React from "react";
import "../App.css";
interface Skill {
  link: string;
  name: string;
}

const SkillCard: React.FC<Skill> = ({ link, name }) => {
  return (
    <>
      <div className="flex items-center tans_in gap-4 border px-3 py-3 border-zinc-600 rounded-md">
        <div className="bg-[#293343]  p-2 rounded-md">
          <img src={link} width={30} height={30} alt={name} />
        </div>
        <p className="text-2xl ultra-xl:text-4xl">{name}</p>
      </div>
    </>
  );
};

export default SkillCard;
