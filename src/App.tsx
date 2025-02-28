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

const isAuthenticated = true;
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
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
