import { useEffect, useState } from "react";

interface Skill {
  skill_title: string;
  newSkill: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/skills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include", // Ensure the Origin header is sent
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setSkills(data.skills);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="overflow-hidden p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((item, idx) => (
            <div
              key={idx}
              className="leading-snug rounded-lg text-center text-white w-full shadow-lg bg-[#626c7a] p-4"
            >
              <h2 className="text-2xl md:text-3xl">{item.skill_title}</h2>
              <ul className="text-lg md:text-xl text-white">
                <li className="p-2">{item.newSkill}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
