import "../App.css";

import { useEffect, useState } from "react";
import img_vb from "../assets/3d_vb.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const positions = [
    "Angular Developer",
    "React Developer",
    "NodeJs Developer",
    "Full-Stack Developer",
    "Front-End Developer",
    "UI Developer",
    "Web Developer",
  ];

  useEffect(() => {
    const currentWord = positions[wordIndex];

    const interval = setInterval(() => {
      if (letterIndex < currentWord.length) {
        setDisplayedText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText("");
          setLetterIndex(0);
          setWordIndex((prev) => (prev + 1) % positions.length);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [letterIndex, wordIndex]);

  return (
    <>
      <div className="hero_sect">
        <section className="hero-section pb-0 my-4 ultra-sm:mt-16 bg-gray-600 px-32 py-50 ultra-sm:px-2 max-sm:px-20 max-sm:py-32 sm:px-20 sm:py-32">
          <div className="hero_container mx-8 my-0 items-center flex ultra-sm:flex-col lg:flex-row md:flex-row xl:mx-56 max-sm:flex-col sm:flex-col">
            <div className="hero_text_container">
              <strong>
                <em className="text-xl xl:text-2xl font-medium">Welcome!</em>
              </strong>
              <h1 className="text-5xl xl:text-6xl font-bold max-sm:text-3xl">
                I'm Venu Beenaveni
              </h1>
              <h4 className="text-3xl xl:text-4xl font-medium max-sm:text-2xl mb-6">
                I build things for the web.
              </h4>
              <p className="text-xl xl:text-2xl mb-1">
                A frontend-focused web developer crafting sleek,
                high-performance websites and applications. I turn ideas into
                interactive, scalable, and future-ready digital experiences.
              </p>
              <small className="text-lg xl:text-xl">
                Let's build the future of the web, one pixel at a time. 🚀
              </small>
            </div>
            <div className="step-img-box tans_in w-fit ultra-sm:mt-36  md:mt-32 sm:mt-48 max-sm:mt-44">
              <img src={img_vb} className="step-img ultra-sm:w-4/5" />
            </div>
          </div>
        </section>

        <section className="skills_container px-20 py-20">
          <h1 className="text-2xl xs:text-3xl sm-425:text-5xl transition-opacity duration-500 ease-in-out  opacity-100 delay-75">
            I'm a{" "}
            <strong className="px-2 py-1 rounded  text-[#fff]">
              {displayedText}
            </strong>
          </h1>
          <small className="mt-4 text-sm inline-block ">
            Want to know more about me?
            <Link
              className="text-white hover:underline  hover:text-[#a9a9a9] pl-2 hover:pb-2"
              to={"about"}
            >
              Click me
            </Link>
            😜
          </small>
        </section>
      </div>
    </>
  );
};

export default Home;
