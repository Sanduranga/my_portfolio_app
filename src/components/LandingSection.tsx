import { motion } from "framer-motion";
import PopupBoxes from "./PopupBoxes";

const LandingSection = () => {
  return (
    <div className="absolute left-0 top-0 h-[100vh] z-10 w-full overflow-hidden">
      <motion.div
        animate={{
          x: [-30, 0, 30, 0, -20, 0, -30, 0, 30, 0, -20, 0],
          transition: {
            duration: 30,
          },
        }}
        className="h-[100vh] blur-sm"
        style={{
          backgroundImage: `url('./images/bg2.jpg')`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></motion.div>
      <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-blue-700/30 to-orange-600/60 rounded-lg flex flex-col items-center justify-center text-center"></div>

      <div className="flex absolute text-white tracking-wider left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex-col h-[90vh] items-center text-center -mt-10 py-28">
        <img
          className="h-40 w-40 bg-green-300 border-2 rounded-full"
          src="./images/bg_image.jpg"
          alt="profileImg"
        />
        <h3 className="text-xl font-mono font-bold pt-5">
          Hello! I am Sanduranga
        </h3>
        <h1 className="text-4xl font-mono font-bold">Frontend developer</h1>
        <div className="text-3xl font-mono font-bold pt-5">
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
          <motion.h2
            initial={{
              x: 900,
            }}
            animate={{
              x: 0,
              transition: {
                delay: 1,
                duration: 1.2,
              },
            }}
          >
            Redux
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 2,
                delay: 6,
              },
            }}
            className="absolute bg-opacity-50 bg-gray-900 w-[60vw] md:w-[30vw] -z-20 h-[67vh] rounded-3xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          ></motion.div>
        </div>
      </div>
      <PopupBoxes />
    </div>
  );
};

export default LandingSection;
