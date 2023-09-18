import { motion } from "framer-motion";
import PopupBoxes from "./PopupBoxes";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";

const LandingSection = () => {
  return (
    <div className="min-h-[100vh] w-full bg-gradient-to-b from-slate-50 to-slate-200 ">
      <div className="h-screen content-center w-full grid justify-items-center grid-cols-autofit tracking-wider">
        <div className="text-black flex flex-col items-center text-center lg:justify-self-end">
          <img
            className="md:h-40 md:w-40 h-20 w-20 bg-green-300 border-2 rounded-full"
            src="../mypic.jpg"
            alt="profileImg"
          />
          <h3 className="md:text-xl text-md font-mono font-bold pt-5">
            Hello! I am Sanduranga
          </h3>

          <h1 className="md:text-4xl text-xl font-mono font-bold">
            Frontend developer
          </h1>
          <div className="md:text-3xl text-yellow-600 text-lg font-mono font-bold pt-5">
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
              React
            </motion.h2>

            {/* <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 2,
                  delay: 1,
                },
              }}
              className="  bg-gray-900 w-[60vw] md:w-[45vw] lg:[30vw] h-[67vh] rounded-3xl"
            ></motion.div> */}
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
