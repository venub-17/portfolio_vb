import About from "../components/About";
import Skills from "../components/Skills";

const AboutPage = () => {
  return (
    <>
      <section className="skills_container  px-32 py-20 ultra-sm:px-6 ultra-sm:py-8">
        <About />
      </section>
      <section className="skills_container sm-425:px-24 xs:px-16 px-32 pb-20 pt-5">
        <Skills />
      </section>
    </>
  );
};
export default AboutPage;
