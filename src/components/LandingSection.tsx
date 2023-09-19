import { motion } from "framer-motion";
import PopupBoxes from "./PopupBoxes";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LandingSection = () => {
  const [typeEffect] = useTypewriter({
    words: ["ReactJS❤️‍🔥", "Redux😇", "TailwindCSS🥰", "Typescript💪"],
    // @ts-expect-error
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="min-h-[100vh] w-full bg-gradient-to-b from-gray-100 to-gray-950 ">
      <div className="h-screen content-center bg-gradient-to-b from-gray-50 to-slate-200 w-full grid justify-items-center grid-cols-autofit tracking-wider">
        <div className="text-black flex flex-col text-center items-center lg:justify-self-end">
          <img
            className="md:h-36 md:w-36 h-20 w-20 border-8 border-yellow-600 bg-green-300 rounded-full"
            src="./mypic.jpg"
            alt="profileImg"
          />
          <h3 className="md:text-xl text-md font-mono font-bold pt-5">
            Hello! I am Sanduranga
          </h3>

          <h1 className="md:text-4xl text-xl font-mono font-bold">
            Frontend developer
          </h1>
          <div className="md:text-3xl self-start text-yellow-600 text-lg font-mono font-bold pt-5">
            <motion.h2
              initial={{
                x: -900,
              }}
              animate={{
                x: 0,
                transition: {
                  delay: 1,
                  duration: 1.2,
                },
              }}
            >
              <span className="text-start">{typeEffect}</span>

              <span>
                <Cursor />
              </span>
            </motion.h2>
          </div>
        </div>
        <img
          src="typinggirl.gif"
          className=" md:w-96 md:h-72 w-72 h-52 lg:justify-self-start"
        />
      </div>
      <img
        src="darklight.gif"
        alt="gif"
        className="mx-auto md:mt-32 mt-0 mb-20 rounded-3xl drop-shadow-2xl md:px-0 px-3 "
      />

      <PopupBoxes />
      <div id="abc" className="font-mono text-center font-bold text-4xl">
        Projects ....
      </div>
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default LandingSection;
