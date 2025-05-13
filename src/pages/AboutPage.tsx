import About from "../components/About";
import Skills from "../components/Skills";

const AboutPage = () => {
  return (
    <>
      <section className="skills_container  px-32 py-20 ultra-sm:px-6 ultra-sm:py-8 max-sm:px-16 max-sm:py-8">
        <About />
      </section>
      <section className="skills_container ultra-sm:px-20 px-32 pb-20 pt-5">
        <Skills />
      </section>
    </>
  );
};
export default AboutPage;
