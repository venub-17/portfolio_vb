import { useState } from "react";
import { Link } from "react-router-dom";
import imgVenu from "../assets/3d_vb.jpg";
import "../App.css";
import api from "../shared/axiosInstance";

interface NavbarProps {
  isLoginStatus: boolean;
  isAdminStatus: boolean;
  onLogout: () => void;
}

const Navbar = ({ isLoginStatus, isAdminStatus, onLogout }: NavbarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };
  const onDownloadresume = async () => {
    console.log("download");
    try {
      const response = await api.get("/resume/download", {
        responseType: "blob", // Important for handling binary data
      });

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(response.data);

      // Create a link element and trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "VenuBeenaveni.pdf"); // Set the filename
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Failed to download file");
    }
  };

  return (
    <nav className="p-4 nav_container border-b">
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center gap-2">
          <img
            src={imgVenu}
            alt="Venu Beenaveni"
            className="border-2 rounded-full"
            height={40}
            width={40}
          />
          <h1 className=" text-2xl font-bold">Venu Beenaveni</h1>
        </div>
        <div className="md:hidden">
          <button onClick={onMenuOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden  md:flex text-2xl items-center gap-x-6">
          <ul className="flex gap-x-6 ">
            <li className="px-4 py-2 ">
              <Link to={"/"}>Home</Link>
            </li>
            {/* <li className="px-4 py-2 ">
              <Link to={"/experience"}>Experience</Link>
            </li> */}
            <li className="px-4 py-2 ">
              <Link to={"/projects"}>Projects</Link>
            </li>
            {isLoginStatus && (
              <li className="px-4 py-2 ">
                <Link to={"/contact"}>Contact</Link>
              </li>
            )}

            {isAdminStatus && (
              <li className="px-4 py-2 ">
                <Link to={"/admin"}>Admin</Link>
              </li>
            )}
            {!isLoginStatus ? (
              <li className="px-4 py-2 ">
                <Link to={"/login"}>Login</Link>
              </li>
            ) : (
              <button onClick={onLogout}>Logout</button>
            )}
          </ul>
          <button
            onClick={onDownloadresume}
            className="px-4 py-2 bg-[#FFFFFF] text-[#374253] rounded-md"
          >
            Resume
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="flex-col md:hidden gap-x-6">
          <li className="px-4 py-2 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 py-2 ">
            <Link to={"/projects"}>Projects</Link>
          </li>
          {isLoginStatus && (
            <li className="px-4 py-2 ">
              <Link to={"/contact"}>Contact</Link>
            </li>
          )}

          {isAdminStatus && (
            <li className="px-4 py-2 ">
              <Link to={"/admin"}>Admin</Link>
            </li>
          )}
          {!isLoginStatus ? (
            <li className="px-4 py-2 ">
              <Link to={"/login"}>Login</Link>
            </li>
          ) : (
            <button onClick={onLogout}>Logout</button>
          )}
          <button className="px-4 py-2 bg-[#FFFFFF] text-[#3b4759] rounded-md">
            Resume
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
