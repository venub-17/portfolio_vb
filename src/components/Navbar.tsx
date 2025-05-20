import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import imgVenu from "../assets/3d_vb.jpg";
import "../App.css";
import FormModal from "../shared/formModal/FormModal";

interface NavbarProps {
  isLoginStatus: boolean;
  isAdminStatus: boolean;
  onLogout: () => void;
}

const Navbar = ({ isLoginStatus, isAdminStatus, onLogout }: NavbarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onDownloadresume = async () => {
    setShowModal(true);
  };
  const onNavHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="p-4 nav_container bg-[#1c2330] border-b border-gray-500">
        <div className="flex items-center justify-between ">
          <div
            className="flex tans_in justify-center items-center gap-2"
            onClick={onNavHome}
          >
            <img
              src={imgVenu}
              alt="Venu Beenaveni"
              className=" border-2 rounded-full"
              height={40}
              width={40}
            />
            <h1 className="text-2xl font-bold">Venu Beenaveni</h1>
          </div>
          <div className="sm:hidden md:hidden lg:hidden xl:hidden ultra-xl:hidden">
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
          <div className="hidden  sm:flex md:flex lg:flex xl:flex ultra-xl:flex text-2xl items-center gap-x-6">
            <ul className="flex gap-x-6 ">
              <li className="px-4 py-2 ">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `nav_item ${
                      isActive ? "nav_active" : ""
                    } hover:text-white hover:border-b`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="px-4 py-2 ">
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `nav_item ${
                      isActive ? "nav_active" : ""
                    } hover:text-white hover:border-b`
                  }
                >
                  About
                </NavLink>
              </li>
              {/* <li className="px-4 py-2 ">
              <NavLink to={"/experience"}
                className={({ isActive }) =>
                    `nav_item ${
                      isActive ? "nav_active" : ""
                    } hover:text-white hover:border-b`
                  }
              >Experience</NavLink>
            </li> */}
              <li className="px-4 py-2 ">
                <NavLink
                  to={"/projects"}
                  className={({ isActive }) =>
                    `nav_item ${
                      isActive ? "nav_active" : ""
                    } hover:text-white hover:border-b`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="px-4 py-2 ">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `nav_item ${
                      isActive ? "nav_active" : ""
                    } hover:text-white hover:border-b`
                  }
                >
                  Contact
                </NavLink>
              </li>

              {isAdminStatus && (
                <li className="px-4 py-2 ">
                  <NavLink
                    to={"/admin"}
                    className={({ isActive }) =>
                      `nav_item ${
                        isActive ? "nav_active" : ""
                      } hover:text-white hover:border-b`
                    }
                  >
                    Admin
                  </NavLink>
                </li>
              )}
              {!isLoginStatus ? (
                ""
              ) : (
                // <li className="px-4 py-2 ">
                //   <NavLink to={"/login"}
                //     className={({ isActive }) =>
                //   `nav_item ${
                //     isActive ? "nav_active" : ""
                //   } hover:text-white hover:border-b`
                // }
                //   >Login</NavLink>
                // </li>
                <li className="px-4 py-2 ">
                  <button onClick={onLogout}>Logout</button>
                </li>
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
          <ul className="flex-col sm:hidden md:hidden lg:hidden xl:hidden ultra-xl:hidden mt-4 gap-x-6">
            <li className="px-4 py-2 ">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `nav_item ${
                    isActive ? "nav_active" : ""
                  } hover:text-white hover:border-b`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="px-4 py-2 ">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `nav_item ${
                    isActive ? "nav_active" : ""
                  } hover:text-white hover:border-b`
                }
              >
                About
              </NavLink>
            </li>
            <li className="px-4 py-2 ">
              <NavLink
                to={"/projects"}
                className={({ isActive }) =>
                  `nav_item ${
                    isActive ? "nav_active" : ""
                  } hover:text-white hover:border-b`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="px-4 py-2 ">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `nav_item ${
                    isActive ? "nav_active" : ""
                  } hover:text-white hover:border-b`
                }
              >
                Contact
              </NavLink>
            </li>

            {isAdminStatus && (
              <li className="px-4 py-2 ">
                <NavLink
                  to={"/admin"}
                  className={({ isActive }) =>
                    `nav_item ${
                      isActive ? "nav_active" : ""
                    } hover:text-white hover:border-b`
                  }
                >
                  Admin
                </NavLink>
              </li>
            )}
            {!isLoginStatus ? (
              ""
            ) : (
              // <li className="px-4 py-2 ">
              //   <NavLink to={"/login"}
              //       className={({ isActive }) =>
              //   `  className={({ isActive }) =>
              //   `nav_item ${
              //     isActive ? "nav_active" : ""
              //   } hover:text-white hover:border-b`
              // }
              //   >Login</NavLink>
              // </li>
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
