import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoginStatus, setIsLoginStatus] = useState(false);
  const [isAdminStatus, setIsAdminStatus] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin1 = sessionStorage.getItem("isLogin");
    const isAdmin = sessionStorage.getItem("isAdmin");
    setIsLoginStatus(isLogin1 === "true");
    setIsAdminStatus(isAdmin === "true");
  }, [location]);

  const onLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("isAdmin");
    sessionStorage.removeItem("isLogin");
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
