import { useEffect } from "react";

interface Skill {
  title: string;
  exp: string;
  versions: string;
}

const Skills = () => {
  const skills: Skill[] = [
    {
      title: "Angular",
      exp: "5 years",
      versions: "13,14",
    },
    {
      title: "React",
      exp: "1year",
      versions: "latest",
    },
    {
      title: "React",
      exp: "1year",
      versions: "latest",
    },
    {
      title: "React",
      exp: "1year",
      versions: "latest",
    },
    {
      title: "React",
      exp: "1year",
      versions: "latest",
    },
    {
      title: "React",
      exp: "1year",
      versions: "latest",
    },

    {
      title: "React",
      exp: "1year",
      versions: "latest",
    },
    {
      title: "JavaScript",
      exp: "5years",
      versions: "Es6 and latest",
    },
  ];
  useEffect(() => {
    fetch("https://portfolio-vb-api.onrender.com/skills")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, "data");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div className="overflow-hidden p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((item, idx) => (
            <div
              key={idx}
              className="leading-snug rounded-lg text-center text-white w-full shadow-lg bg-[#626c7a] p-4"
            >
              <h2 className="text-2xl md:text-3xl">{item.title}</h2>
              <ul className="text-lg md:text-xl text-white">
                <li>{item.exp}</li>
                <li>{item.versions}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
