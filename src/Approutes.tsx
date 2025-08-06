import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import UploadResume from "./components/admin/UploadResume";
import Skillsentry from "./components/admin/Skillsentry";
import Projectsentry from "./components/admin/Projectsentry";
import Userpage from "./components/admin/Userpage";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./components/Contact";
import AboutPage from "./pages/AboutPage";
import Projects from "./components/projects/Projects";
import Home from "./components/Home";

const Approutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAdmin") ? true : false
  );

  const handleLogin = (isAdmin: boolean) => {
    sessionStorage.setItem("isAdmin", String(isAdmin));
    setIsAuthenticated(true);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "admin",
          element: <PrivateRoute isAuthenticated={isAuthenticated} />,
          children: [
            {
              path: "",
              element: <Userpage />,
            },
            {
              path: "user",
              element: <Navigate to=".." replace />,
            },
            {
              path: "project-data",
              element: <Projectsentry />,
            },

            {
              path: "skills",
              element: <Skillsentry />,
            },
            {
              path: "upload-resume",
              element: <UploadResume />,
            },
          ],
        },
        {
          path: "login",
          element: <Login onLoginSuccess={handleLogin} />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Approutes;
