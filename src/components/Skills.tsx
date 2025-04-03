import { useEffect, useState } from "react";
import "../App.css";
import api from "../shared/axiosInstance";
import { useModal } from "../shared/modal/ModalContext";
interface Skill {
  skill_title: string;
  newSkill: string[];
}
const Skills = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState<Skill[]>([]);

  const [isDataFetched, setIsDataFetched] = useState(false);
  const { openModal } = useModal();
  useEffect(() => {
    // Fetch data only if it hasn't been fetched already
    if (!isDataFetched) {
      setIsLoading(true);
      console.log("calling");
      api
        .get("/skills/get")
        .then((data) => {
          setSkills(data.data.skills);
          setIsLoading(false);
          setIsDataFetched(true); // Mark as fetched to avoid future API calls
        })
        .catch((error) => {
          setIsLoading(false);
          openModal((error as Error).message); // Show error in modal
        });
    }
  }, [isDataFetched, openModal]);
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
