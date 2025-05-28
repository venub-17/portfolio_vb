import { roles } from "../../shared/project";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="px-32 py-32 ultra-sm:px-10 ultra-sm:py-10 max-sm:py-24 max-sm:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ultra-xl:grid-cols-6 gap-6">
        {roles.map((role, i) => {
          return <ProjectCard key={i} item={role} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
