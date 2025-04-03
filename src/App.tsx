import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import RootLayout from "./components/RootLayout";
import Projectsentry from "./components/admin/Projectsentry";
import User from "./components/admin/User";
import PrivateRoute from "./components/PrivateRoute";
import Skillsentry from "./components/admin/Skillsentry";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { useState } from "react";
import UploadResume from "./components/admin/UploadResume";

function App() {
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
          path: "/home",
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "experience",
          element: <Experience />,
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
              element: <User />,
            },
            {
              path: "project-data",
              element: <Projectsentry />,
            },
            {
              path: "user",
              element: <User />,
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
}

export default App;
