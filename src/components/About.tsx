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
        }, 1000); // Wait 1 second before switching to the next word
      }
    }, 300); // Adjust speed for each letter

    return () => clearInterval(interval);
  }, [letterIndex, wordIndex]);
  return (
    <>
      <small className="mb-4 inline-block">Want to know more about me?</small>
      <h1 className="text-4xl transition-opacity duration-500 ease-in-out opacity-100 delay-75">
        I'm a{" "}
        <strong className=" px-2 py-1 rounded text-[#fff]">
          {displayedText}
        </strong>
      </h1>
    </>
  );
};

export default About;
