import { useNavigate } from "react-router-dom";
import "../App.css";

// import { useEffect, useState } from "react";
import img_vb from "../assets/3d_vb.jpg";

// import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const [wordIndex, setWordIndex] = useState(0);
  // const [letterIndex, setLetterIndex] = useState(0);
  // const [displayedText, setDisplayedText] = useState("");

  // const positions = [
  //   "Angular Developer",
  //   "React Developer",
  //   "NodeJs Developer",
  //   "Full-Stack Developer",
  //   "Front-End Developer",
  //   "UI Developer",
  //   "Web Developer",
  // ];

  // useEffect(() => {
  //   const currentWord = positions[wordIndex];

  //   const interval = setInterval(() => {
  //     if (letterIndex < currentWord.length) {
  //       setDisplayedText((prev) => prev + currentWord[letterIndex]);
  //       setLetterIndex((prev) => prev + 1);
  //     } else {
  //       clearInterval(interval);
  //       setTimeout(() => {
  //         setDisplayedText("");
  //         setLetterIndex(0);
  //         setWordIndex((prev) => (prev + 1) % positions.length);
  //       }, 500);
  //     }
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, [letterIndex, wordIndex]);

  const onProject = () => {
    navigate("/projects");
  };
  const onContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="hero_sect">
        <section className="hero-section pb-0 my-4 px-32 py-50 ultra-sm:px-2 sm:mt-0 ultra-sm:py-12 max-sm:px-10 max-sm:py-14 sm:px-8 sm:py-20 md:mt-28 md:px-16 lg:mt-32 ultra-xl:mt-80 xl:mt-48">
          <div className="hero_container mx-8 my-0 items-center hero_res">
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
              <div className="flex gap-4 my-4">
                <button
                  className="px-5 text-xl py-2.5 bg-[#3a5a83] text-[#ffffff] hover:bg-[#345176]  tracking-wider rounded-md"
                  onClick={onProject}
                >
                  Projects
                </button>
                <button
                  className="px-5 text-xl py-2.5 bg-white text-black secondarybtn  rounded-md"
                  onClick={onContact}
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="w-fit flex justify-center ultra-sm:mt-36 max-sm:mt-44 sm:mt-28">
              <img src={img_vb} className="step-img ultra-sm:w-4/5" />
            </div>
          </div>
        </section>
        <section className="skills_container px-20 py-20 ultra-sm:mt-14"></section>
        {/* 
        <section className="skills_container px-20 py-20 ultra-sm:mt-14">
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
        </section> */}
      </div>
    </>
  );
};

export default Home;
