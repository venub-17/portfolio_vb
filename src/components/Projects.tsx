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
    <div className="px-32 py-32 max-sm:px-20 max-sm:py-20 sm:px-20 sm:py-20">
      {Object.keys(groupedRoles).map((company, index) => (
        <div key={index}>
          <h2 className="text-5xl">{company}</h2>
          {groupedRoles[company].map((role, roleIndex) => (
            <div key={roleIndex} className="role py-8">
              <h3 className="text-3xl">Client: {role.client}</h3>{" "}
              <div className="flex gap-10 items-center text-2xl">
                <p>
                  <strong>{role.role}</strong>
                </p>
                <p>
                  <strong> {role.duration}</strong>
                </p>
              </div>
              <p className="text-2xl">{role.description}</p>
              <ul className="list-disc px-8 ">
                {role.responsibilities.map((task, i) => (
                  <li className="p-2 text-xl" key={i}>
                    {task}
                  </li>
                ))}
              </ul>
              <p>
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
