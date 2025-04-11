import { roles } from "../../shared/project";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="px-32 py-32 max-sm:px-8 max-sm:py-20 sm:px-20 sm:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {roles.map((role, i) => {
          return <ProjectCard key={i} item={role} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
