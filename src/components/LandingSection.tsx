import PopupBoxes from "./PopupBoxes";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Amaze from "./Amaze";
import ContactMeSection from "./ContactMeSection";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import { GrDocumentPdf } from "@react-icons/all-files/gr/GrDocumentPdf";

const LandingSection = () => {
  const [typeEffect] = useTypewriter({
    words: ["ReactJS❤️‍🔥", "Redux😇", "TailwindCSS🥰", "Typescript💪"],
    // @ts-expect-error
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="min-h-[100vh] grid grid-cols-1 gap-10 justify-items-center w-full bg-gradient-to-b from-gray-100 to-gray-950 ">
      <div className="relative flex justify-center items-center h-screen content-center bg-gradient-to-b from-gray-50 to-slate-200 w-full tracking-wider">
        <div className="relative text-white flex flex-col text-center items-center sm:mb-0 mb-5 lg:justify-self-end z-10">
          <img
            className="sm:h-36 sm:w-36 h-28 w-28 border-8 rounded-full"
            src="./mypic.jpg"
            alt="profileImg"
          />
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 4,
                duration: 1,
              },
            }}
            className="absolute sm:right-0 -bottom-32 sm:top-0 cursor-pointer hover:scale-105"
          >
            <div
              onClick={() => {
                saveAs("/STEdirisingheCV.pdf", "ST Edirisinghe CV.pdf");
              }}
            >
              <h1 className="bg-white py-3 rounded-full text-3xl flex justify-center">
                <GrDocumentPdf />
              </h1>
              <h1 className="text-sm font-bold text-white font font-mono">
                Download CV
              </h1>
            </div>
          </motion.span>

          <h3 className="sm:text-xl text-sm font-mono font-bold pt-5">
            Hello! I am Sanduranga
          </h3>

          <Amaze>
            <h1 className="sm:text-4xl text-xl font-mono font-bold">
              Frontend developer
            </h1>
          </Amaze>
          <div className="sm:text-3xl self-start text-lg font-mono font-bold pt-5">
            <Amaze>
              <span className="text-start">
                <span className="bg-gradient-red">{typeEffect}</span>
                <Cursor />
              </span>
            </Amaze>
          </div>
        </div>
        <img
          src="typing.gif"
          // className=" sm:w-96 sm:h-72 w-80 h-60 lg:justify-self-start"
          className="absolute sm:w-full h-screen z-0 top-0 blur-sm"
        />
        <div className="bg-gray-950/90 absolute h-screen w-full"></div>
      </div>
      <Amaze>
        <img
          src="darklight.gif"
          alt="gif"
          className="mx-auto rounded-3xl drop-shadow-2xl sm:px-0 px-3 "
        />
      </Amaze>
      <div className="sm:block hidden">
        <PopupBoxes />
      </div>

      <Amaze>
        <h1
          id="projects"
          className="font-mono text-center font-bold text-4xl px-4 py-3 w-fit"
        >
          Projects ....
        </h1>
      </Amaze>
      <ProjectSection />
      <ContactMeSection />
      <Footer />
    </div>
  );
};

export default LandingSection;
