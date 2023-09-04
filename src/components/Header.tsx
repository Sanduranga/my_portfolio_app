import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex items-center absolute z-20 top-0 left-50 md:px-0 px-5 justify-between h-[10vh] w-full">
      <nav className="flex md:px-[5vw] justify-around w-[25vw] md:w-[20vw]">
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 5,
              duration: 1,
            },
          }}
          className="md:text-3xl cursor-pointer text-2xl text-white hover:scale-105"
        >
          <AiOutlineLinkedin />
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 6,
              duration: 1,
            },
          }}
          className="md:text-3xl cursor-pointer md:px-3 text-2xl text-white hover:scale-105"
        >
          <AiOutlineGithub />
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 7,
              duration: 1,
            },
          }}
        >
          <Link to="/">
            <img
              className="rounded-full h-6 w-6 md:h-8 md:w-8 border-2"
              src="./images/bg_image.jpg"
              alt=""
            />
          </Link>
        </motion.span>
      </nav>
      <nav className="flex justify-evenly md:w-[25vw] w-[50vw] text-white md:text-xl text-md font-mono font-bold">
        <div className=" cursor-pointer hover:underline underline-offset-8 hover:scale-105">
          <Link to="/projects">Projects</Link>
        </div>
        <div className=" cursor-pointer hover:underline underline-offset-8 hover:scale-105">
          <Link to="/contact_me_section">Contact me</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
