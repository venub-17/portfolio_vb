import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isLoginStatus, setIsLoginStatus] = useState(false);
  const [isAdminStatus, setIsAdminStatus] = useState(false);

  useEffect(() => {
    const isLogin1 = localStorage.getItem("isLogin");
    const isAdmin = localStorage.getItem("isAdmin");
    console.log(isAdmin, isLogin1, "logadmi");
    setIsLoginStatus(isLogin1 === "true");
    setIsAdminStatus(isAdmin === "true");
  }, []);

  const onLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLogin");
    setIsAdminStatus(false);
    setIsLoginStatus(false);
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
