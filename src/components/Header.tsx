import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoginStatus, setIsLoginStatus] = useState(false);
  const [isAdminStatus, setIsAdminStatus] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin1 = localStorage.getItem("isLogin");
    const isAdmin = localStorage.getItem("isAdmin");
    setIsLoginStatus(isLogin1 === "true");
    setIsAdminStatus(isAdmin === "true");
  }, [location]);

  const onLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLogin");
    setIsAdminStatus(false);
    setIsLoginStatus(false);
    navigate("/home");
  };
  return (
    <>
      <Navbar
        onLogout={onLogout}
        isLoginStatus={isLoginStatus}
        isAdminStatus={isAdminStatus}
      />
    </>
  );
};

export default Header;
