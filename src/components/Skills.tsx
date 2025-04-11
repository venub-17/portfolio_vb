import { useEffect } from "react";
import "../App.css";
import { useData } from "../shared/dataprovider/DataContext";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { isLoading, skills, fetchSkills } = useData();
  useEffect(() => {
    fetchSkills();
  }, [isLoading, fetchSkills]);
  return (
    <>
      <div className="overflow-hidden p-4">
        {!isLoading && (
          <h1 className="text-3xl mb-4 pb-10">Tech That Powers My Work</h1>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading && <p>Loading the skills</p>}
          {!isLoading &&
            skills.map((item, i) => {
              return (
                <SkillCard
                  key={i}
                  link={item.skill_link}
                  name={item.skill_name}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Skills;

// skills.map((item, idx) => (
//   <div
//     key={idx}
//     className="leading-snug rounded-lg text-center text-white w-full shadow-lg bg-[#434d5c] p-4 max-sm:px-8"
//   >
//     <h2 className="text-2xl md:text-3xl">{item.skill_title}</h2>
//     <ul className="text-lg md:text-xl text-white">
//       {item.newSkill.map((skill, idx) => (
//         <li
//           className="inline after:content-[',_'] last:after:content-['']"
//           key={idx}
//         >
//           {skill}
//         </li>
// ))
//       }
//     </ul>
//   </div>
// ))
