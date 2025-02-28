import { Link, Outlet } from "react-router-dom";
const AdminRoot = () => {
  return (
    <>
      <div className="grid bg-gray-800  grid-rows-[auto_1fr] sm:grid-rows-1 sm:grid-cols-[1fr_4fr]">
        {/* Sidebar - On top in mobile, on side in large screens */}
        <aside className="bg-gray-800 mbl_sidebar  h-screen border-r text-white p-4  ">
          <ul className="flex max-sm:flex-row sm:flex-col gap-10">
            <li>
              <span className="text-red"></span>
              <Link to={"user"}>Recruiter Details</Link>
            </li>
            <li>
              <Link to={"project-data"}>New Project</Link>
            </li>
            <li>
              <Link to={"skills"}>New Skill</Link>
            </li>
          </ul>
        </aside>

        <main className="p-4 text-black overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default AdminRoot;
