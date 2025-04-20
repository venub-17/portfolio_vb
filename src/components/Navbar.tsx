import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgVenu from "../assets/3d_vb.jpg";
import "../App.css";
import api from "../shared/axiosInstance";
import { useModal } from "../shared/modal/ModalContext";
import FormModal from "../shared/formModal/FormModal";

interface NavbarProps {
  isLoginStatus: boolean;
  isAdminStatus: boolean;
  onLogout: () => void;
}

const Navbar = ({ isLoginStatus, isAdminStatus, onLogout }: NavbarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };
  const onDownloadresume = async () => {
    if (isLoginStatus) {
      try {
        openModal("Hey bear with me yaar! m doing for you 😜", "loading");
        const response = await api.get("/resume/download", {
          responseType: "blob",
        });
        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "VenuBeenaveni.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        closeModal();
      } catch (error) {
        console.error("Error downloading file:", error);
        openModal("Failed to download file");
      }
    } else {
      setShowModal(true);
    }
  };
  const onNavHome = () => {
    navigate("/home");
  };

  return (
    <>
      <nav className="p-4 nav_container bg-[#1c2330] border-b border-gray-500">
        <div className="flex items-center justify-between">
          <div
            className="flex justify-center items-center gap-2"
            onClick={onNavHome}
          >
            <img
              src={imgVenu}
              alt="Venu Beenaveni"
              className="border-2 rounded-full"
              height={40}
              width={40}
            />
            <h1 className="text-2xl font-bold">Venu Beenaveni</h1>
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
              <li className="px-4 py-2 ">
                <Link to={"/about"}>About</Link>
              </li>
              {/* <li className="px-4 py-2 ">
              <Link to={"/experience"}>Experience</Link>
            </li> */}
              <li className="px-4 py-2 ">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="px-4 py-2 ">
                <Link to={"/contact"}>Contact</Link>
              </li>

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
              className="px-8 text-xl py-4 bg-[#3a5a83] text-[#ffffff] hover:bg-[#345176]  tracking-wider rounded-md"
            >
              Resume
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <ul className="flex-col md:hidden mt-4 gap-x-6">
            <li className="px-4 py-2 ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to={"/contact"}>Contact</Link>
            </li>

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
              <li className="px-4 py-2 ">
                <button onClick={onLogout}>Logout</button>
              </li>
            )}
            <li className="px-4 py-2">
              <button
                className="px-4 py-2  bg-[#3a5a83] hover:bg-[#345176] text-[#ffffff] rounded-md"
                onClick={onDownloadresume}
              >
                Resume
              </button>
            </li>
          </ul>
        )}
      </nav>
      {showModal && <FormModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
