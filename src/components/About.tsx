import { useEffect, useState } from "react";

const About = () => {
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
      <section className="mx-auto px-4 py-10 ">
        <strong>
          <em className="text-xl font-medium block mb-2">Open to Work!</em>
        </strong>
        <h1 className="text-5xl sm:text-3xl font-bold mb-6 max-sm:text-3xl ultra-sm:text-3xl ultra-xl:text-7xl">
          Hey there! I'm Venu Beenaveni &amp;
          <p className="text-[#bdc8e7] leading-relaxed">
            I am a <span className="text-white"> {displayedText} </span>
          </p>
        </h1>
        <h4 className="mb-4 text-3xl max-sm:text-2xl ultra-sm:text-2xl ultra-xl:text-5xl">
          I'm passionate about building responsive and modern web experiences.
          With over 8 years of hands-on experience, I specialize in crafting
          elegant UI/UX designs using modern frameworks like{" "}
          <span className="font-medium text-white">Angular</span>,{" "}
          <span className="font-medium text-white">React</span> and developing
          robust back-end services with{" "}
          <span className="font-medium text-white">Node js</span>. My full-stack
          expertise enables me to build seamless, scalable applications,
          ensuring both aesthetic appeal and high performance.
        </h4>
        <p className="mb-4 text-2xl ultra-sm:text-xl ultra-xl:text-4xl">
          My journey began with a fascination for how technology can transform
          everyday interactions, driving me to master the art of merging clean,
          efficient code with visually stunning designs. I thrive on tackling
          challenging problems—whether it's optimizing performance or designing
          intuitive interfaces that truly connect with users.
        </p>
        <p className="mb-4 text-2xl ultra-xl:text-3xl">
          Currently, I'm channeling my energy into personal projects that push
          the boundaries of front-end development, while also mentoring emerging
          talent in the field. I'm all about sharing best practices,
          continuously learning, and keeping up with the latest trends in UI/UX.
        </p>
        <p className="text-xl ultra-xl:text-2xl">
          Let's team up and create digital experiences that not only look
          amazing but also work seamlessly—one line of code at a time! 🚀
        </p>
      </section>
    </>
  );
};

export default About;
