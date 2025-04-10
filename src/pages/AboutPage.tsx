import About from "../components/About";
import Skills from "../components/Skills";

const AboutPage = () => {
  return (
    <>
      <section className="skills_container sm-425:px-24 xs:px-10 px-32 py-20 xs:py-12">
        <About />
      </section>
      <section className="skills_container sm-425:px-24 xs:px-16 px-32 pb-20 pt-5">
        <Skills />
      </section>
    </>
  );
};
export default AboutPage;
