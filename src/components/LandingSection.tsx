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
    words: [
      "ReactJS❤️‍🔥",
      "Redux😇",
      "TailwindCSS🥰",
      "Typescript💪",
      "NextJS👌",
    ],
    // @ts-expect-error
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });
  return (
    <div className="min-h-[100vh] grid grid-cols-1 gap-10 justify-items-center w-full bg-gradient-to-b from-gray-100 to-gray-950 ">
      <div className="relative flex justify-center items-center h-screen content-center bg-gradient-to-b from-gray-50 to-slate-200 w-full tracking-wider">
        <div className="relative text-white flex flex-col text-center items-center sm:mb-0 mb-5 lg:justify-self-end z-10">
          <img
            className="sm:h-36 sm:w-36 grayscale object-cover h-28 w-28 sm:border-8 border-4 rounded-full"
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
                delay: 3,
                duration: 1,
              },
            }}
            className="absolute sm:right-0 -bottom-28 sm:top-0 h-20"
          >
            <div
              onClick={() => {
                const pdfUrl = "./STEdirisingheCV.pdf";
                saveAs(pdfUrl, "ST Edirisinghe CV.pdf");
              }}
              className="cursor-pointer hover:scale-105"
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
        <h1 className="font-mono bg-gradient-to-br from-slate-300 to-gray-500 sm:text-xl text-sm w-[80vw] text-justify sm:p-5 p-3 shadow-lg shadow-black">
          <strong className="font-bold sm:text-2xl text-lg">I am</strong> an IT
          and Tech enthusiast with an inquisitive mind, willing to learn beyond
          boundaries. Now I'm Seeking an internship opportunity to apply what I
          have learned and sharpen my skills, gain experience to start my
          journey to become a full-stack developer.
        </h1>
      </Amaze>
      <div>
        <div className="w-[70vw] sm:w-[60vw] h-[8vh] md:h-[20vh] flex mx-auto justify-between items-center">
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (1).png"
            alt="Firebase"
          />
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (2).png"
            alt="Firebase"
          />
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (3).png"
            alt="Firebase"
          />
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (4).png"
            alt="Firebase"
          />
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (5).png"
            alt="Firebase"
          />
        </div>
        <div className="w-[70vw] sm:w-[60vw] h-[8vh] md:h-[20vh] flex mx-auto justify-between items-center">
          <img
            className="w-12 h-12 md:w-28 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (6).png"
            alt="Firebase"
          />
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (7).png"
            alt="Firebase"
          />
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (8).png"
            alt="Firebase"
          />
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (9).png"
            alt="Firebase"
          />
          <img
            className="w-12 h-12 md:w-24 md:h-24 shadow-2xl rounded-xl p-2"
            src="technologies/pngwing.com (10).png"
            alt="Firebase"
          />
        </div>
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
