import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 nav_container">
      <div className="flex items-center justify-between">
        <h1 className=" text-2xl font-bold">Header</h1>
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
        <div className="hidden md:flex text-2xl items-center gap-x-6">
          <ul className="flex gap-x-6 ">
            <li className="px-4 py-2 ">
              <Link to={"/home"}>Home</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to={"/experience"}>Experience</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <button className="px-4 py-2 bg-white text-blue-500 rounded-md">
            Resume
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="flex-col md:hidden gap-x-6">
          <li className="px-4 py-2 ">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="px-4 py-2 ">
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li className="px-4 py-2 ">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <button className="px-4 py-2 bg-white text-blue-500 rounded-md">
            Resume
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
