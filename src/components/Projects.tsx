import { roles } from "../shared/project";

interface Project {
  client: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  tools: string[];
  company: string;
}
interface GroupedRoles {
  [company: string]: Project[];
}

const Projects = () => {
  const groupedRoles: GroupedRoles = roles.reduce((acc, role) => {
    if (!acc[role.company]) {
      acc[role.company] = [];
    }
    acc[role.company].push(role);
    return acc;
  }, {} as GroupedRoles);

  return (
    <div className="px-32 py-32 max-sm:px-1 max-sm:py-20 sm:px-20 sm:py-20">
      {Object.keys(groupedRoles).map((company, index) => (
        <div key={index} className="w-3/4 my-0 mx-auto">
          <h2 className="text-5xl max-sm:text-4xl mb-4">{company}</h2>
          {groupedRoles[company].map((role, roleIndex) => (
            <div
              key={roleIndex}
              className="role py-8 rounded-lg mb-8 text-white w-full shadow-lg bg-[#434d5c] p-4"
            >
              <h3 className="text-3xl leading-normal">{role.client}</h3>{" "}
              <div className="flex max-sm:flex-col max-sm:gap-3 gap-10  text-2xl py-4">
                <p className="text-[#e6e6e6]">
                  <strong>{role.role}</strong>
                </p>
                <p className="text-[#e6e6e6]">
                  <strong> ({role.duration})</strong>
                </p>
              </div>
              <p className="text-2xl text-[#e6e6e6] py-4">{role.description}</p>
              <ul className="list-disc px-8 ">
                {role.responsibilities.map((task, i) => (
                  <li className="p-2 text-xl" key={i}>
                    {task}
                  </li>
                ))}
              </ul>
              <p className="py-6">
                <strong>Tools:</strong> {role.tools.join(", ")}
              </p>{" "}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
