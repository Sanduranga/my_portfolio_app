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
        className="h-[100vh] blur-xm"
        style={{
          backgroundImage: `url('./images/bg2.jpg')`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></motion.div>
      <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-yellow-500/30 to-gray-800/60 rounded-lg flex flex-col items-center justify-center text-center"></div>

      <div className="flex absolute text-white tracking-wider left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex-col h-[90vh] items-center text-center -mt-10 py-28">
        <img
          className="h-40 w-40 bg-green-300 border-2 rounded-full"
          src="https://i.pravatar.cc/150?img=7"
          alt="profileImg"
        />
        <h3 className="md:text-xl text-lg font-mono font-bold pt-5">
          Hello! I am Sanduranga
        </h3>
        <h1 className="md:text-4xl text-3xl font-mono font-bold">
          Frontend developer
        </h1>
        <div className="md:text-3xl text-xl font-mono font-bold pt-5">
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
                delay: 1,
              },
            }}
            className="absolute bg-opacity-50 bg-gray-900 w-[60vw] md:w-[45vw] lg:[30vw] -z-20 h-[67vh] rounded-3xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          ></motion.div>
        </div>
      </div>
      <PopupBoxes />
    </div>
  );
};

export default LandingSection;
