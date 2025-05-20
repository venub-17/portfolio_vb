import Projectsentry from "./components/admin/Projectsentry";
import PrivateRoute from "./components/PrivateRoute";
import Skillsentry from "./components/admin/Skillsentry";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { useState } from "react";
import UploadResume from "./components/admin/UploadResume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Projects from "../src/components/projects/Projects";
import Contact from "./components/Contact";
import AboutPage from "./pages/AboutPage";
import Userpage from "./components/admin/Userpage";

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
}

export default App;
