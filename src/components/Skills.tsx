import { useEffect } from "react";
import "../App.css";
import { useData } from "../shared/dataprovider/DataContext";

const Skills = () => {
  const { isLoading, skills, fetchSkills } = useData();
  useEffect(() => {
    fetchSkills();
  }, [isLoading, fetchSkills]);
  return (
    <>
      <div className="overflow-hidden p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading && <p>Loading the skills</p>}
          {!isLoading &&
            skills.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 border px-3 py-3 border-gray-600 rounded-md"
                >
                  <img
                    src={item.skill_link}
                    width={30}
                    height={30}
                    alt={item.skill_name}
                  />
                  <p className="text-2xl">{item.skill_name}</p>
                </div>
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
