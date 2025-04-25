import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section className="p-1 border-t border-gray-600 ">
        <footer className="relative bg-[#1c2330] text-[#bdc8e7]  pt-8 pb-5">
          {/* Footer Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              {/* Logo/Tagline */}
              <div>
                <h2 className="text-2xl font-bold ">Venu Beenaveni</h2>
                <p className="text-sm mt-2 ">
                  Creating clean code and beautiful UI experiences.
                </p>
              </div>

              {/* Social Icons */}
              <div className="space-y-2">
                <h3 className="font-semibold">Connect</h3>
                <div className="flex space-x-4 mt-2 text-xl">
                  <a
                    // href="https://github.com/venub-17"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/venu-beenaveni/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/venu-beenaveni/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    <FaFacebookSquare />
                  </a>
                  {/* <a
                    href="mailto:youremail@example.com"
                    className="hover:text-white"
                  >
                    <FaEnvelope />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Venu Beenaveni. All rights reserved.
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
