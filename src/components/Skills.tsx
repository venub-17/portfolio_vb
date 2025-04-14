import "../App.css";
import { useData } from "../shared/dataprovider/DataContext";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { isLoading, skills } = useData();

  return (
    <>
      <div className="overflow-hidden p-4">
        {!isLoading && (
          <h1 className="text-3xl mb-4 pb-10">Tech That Powers My Work</h1>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading && <p>Loading the skills</p>}
          {!isLoading &&
            skills.map((item, i) => {
              return (
                <SkillCard
                  key={i}
                  link={item.skill_link}
                  name={item.skill_name}
                />
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

/* Carousal */
// import { useData } from "../shared/dataprovider/DataContext";
// import SkillCard from "./SkillCard";
// import { useState } from "react";

// const ITEMS_PER_PAGE = 12;

// const Skills = () => {
//   const { isLoading, skills } = useData();
//   const [currentPage, setCurrentPage] = useState(0);

//   const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);

//   const startIndex = currentPage * ITEMS_PER_PAGE;
//   const currentItems = skills.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const nextPage = () => {
//     if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 0) setCurrentPage((prev) => prev - 1);
//   };

//   return (
//     <div className="p-4">
//       {!isLoading && (
//         <h1 className="text-3xl mb-6">Tech That Powers My Work</h1>
//       )}

//       {isLoading ? (
//         <p>Loading skills...</p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
//             {currentItems.map((item, i) => (
//               <SkillCard
//                 key={i}
//                 link={item.skill_link}
//                 name={item.skill_name}
//               />
//             ))}
//           </div>

//           {/* Pagination Controls */}
//           <div className="flex justify-center gap-4 items-center">
//             <button
//               onClick={prevPage}
//               disabled={currentPage === 0}
//               className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-40"
//             >
//               ◀ Prev
//             </button>
//             <p className="text-lg">
//               Page {currentPage + 1} of {totalPages}
//             </p>
//             <button
//               onClick={nextPage}
//               disabled={currentPage === totalPages - 1}
//               className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-40"
//             >
//               Next ▶
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Skills;
