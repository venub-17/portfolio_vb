import { useEffect, useState } from "react";
import "../App.css";
import Skills from "./Skills";
const Home = () => {
  const [role, setRole] = useState("Angular");

  useEffect(() => {
    const positon = [
      "Angular",
      "NodeJs",
      "React",
      "Full-Stack",
      "Fron-End",
      "UI",
      "Web",
    ];
    const intervalId = setInterval(() => {
      const pstnIndx = Math.floor(Math.random() * positon.length);
      setRole(positon[pstnIndx]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="hero-section bg-gray-600 px-32 py-32 max-sm:px-20 max-sm:py-20 sm:px-20 sm:py-20">
        <div className="hero_container  max-w-7xl  m-auto my-0 items-center">
          <div className="hero_text_container">
            <strong>
              <em className="text-xl font-medium">Welcome!</em>
            </strong>
            <h1 className="text-5xl font-bold max-sm:text-3xl">
              I'm Venu Beenaveni
            </h1>
            <h4 className="text-3xl font-medium max-sm:text-2xl mb-6">
              I build things for the web.
            </h4>
            <p className="text-lg mb-1">
              A frontend-focused web developer crafting sleek, high-performance
              websites and applications. I turn ideas into interactive,
              scalable, and future-ready digital experiences.
            </p>
            <small className="text-sm">
              Let's build the future of the web, one pixel at a time. 🚀
            </small>
          </div>
        </div>
      </section>
      <section className="skills_container px-32 py-20">
        <section>
          <h1 className="text-2xl transition-all delay-75">
            I'm{" "}
            <strong className="bg-white px-2 py-1 rounded text-black">
              {" "}
              {role}
            </strong>{" "}
            Developer
          </h1>
        </section>
        <Skills />
      </section>
    </>
  );
};

export default Home;
