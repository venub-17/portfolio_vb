import React, { useState } from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import ProjectModal from "./ProjectModal";

export interface Project {
  client: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  tools: string[];
  company: string;
}

export interface Item {
  item: Project;
}

const ProjectCard: React.FC<Item> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openProjectModal = (
    e: React.MouseEvent<HTMLDivElement>,
    item: Item
  ) => {
    e.preventDefault();
    setIsOpen(true);
    console.log(e, "modal clicked", item);
  };
  return (
    <>
      <div className="shadow relative  bg-[#293343] min-h-[280px] p-5 rounded-lg">
        <div>
          <h1 className="text-4xl pb-4">{item.client}</h1>
          <h4 className="text-right text-xl pb-2 mb-4">{item.duration}</h4>
          <p className="text-2xl">{item.description}</p>
        </div>

        <div
          className="absolute right-4 bottom-4 my-4"
          onClick={(e) => openProjectModal(e, { item })}
        >
          <LuExternalLink
            size={20}
            className=" hover:text-[#858fad] cursor-pointer"
          />
        </div>
      </div>

      {isOpen && (
        <ProjectModal
          open={isOpen}
          content={item}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
