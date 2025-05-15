import { Link, Outlet } from "react-router-dom";
import "../../shared/responsive_style.css";
const AdminRoot = () => {
  return (
    <>
      <div className=" bg-gray-800 flex_admin">
        {/* Sidebar - On top in mobile, on side in large screens */}
        <aside className="bg-gray-800 mbl_sidebar  h-screen border-r text-white p-4  ">
          <ul className="felx_admin_aside gap-10">
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
            <li>
              <Link to={"upload-resume"}>Upload Resume</Link>
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
