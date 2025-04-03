import { useEffect } from "react";
import "../App.css";
import { useData } from "../shared/dataprovider/DataContext";

const Skills = () => {
  const { isLoading, skills, fetchSkills } = useData();
  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);
  return (
    <>
      <div className="overflow-hidden p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading && <p>Loading the skills</p>}
          {!isLoading &&
            skills.map((item, idx) => (
              <div
                key={idx}
                className="leading-snug rounded-lg text-center text-white w-full shadow-lg bg-[#626c7a] p-4"
              >
                <h2 className="text-2xl md:text-3xl">{item.skill_title}</h2>
                <ul className="text-lg md:text-xl text-white">
                  {item.newSkill.map((skill, idx) => (
                    <li
                      className="inline after:content-[',_'] last:after:content-['']"
                      key={idx}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
