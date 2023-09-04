import { motion } from "framer-motion";
interface childrenTypes {
  children: string;
}
const childMotions = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
};
const BoxChildren = (props: childrenTypes) => {
  return (
    <motion.div
      variants={childMotions}
      className="flex justify-center items-center underline underline-offset-4 text-white tracking-wider w-[26vw] md:w-[12vw] md:text-lg text-sm font-bold rounded-md py-3 bg-gradient-to-b from-gray-950 to-gray-700/30"
    >
      {props.children}
    </motion.div>
  );
};

const boxVarients = {
  animate: {
    transition: {
      delayChildren: 3,
      staggerChildren: 0.7,
    },
  },
};

const PopupBoxes = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={boxVarients}
      className="absolute left-1/2 z-50 -translate-x-1/2 flex justify-evenly overflow-hidden bottom-20  md:bottom-8 md:w-4/5 w-full"
    >
      <BoxChildren>Typescript</BoxChildren>
      <BoxChildren>TailwindCSS</BoxChildren>
      <BoxChildren>FramerMotion</BoxChildren>
    </motion.div>
  );
};

export default PopupBoxes;
