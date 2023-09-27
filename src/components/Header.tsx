import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { motion } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";
import Amaze from "./Amaze";

const Header = () => {
  return (
    <div className="flex items-center absolute text-white z-20 top-0 md:px-0 px-5 justify-between h-[10vh] w-full">
      <nav className="absolute md:left-10 left-3 flex justify-around max-w-screen-lg">
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 1,
            },
          }}
          className="md:text-3xl cursor-pointer text-2xl hover:scale-105"
        >
          <a
            href="https://www.linkedin.com/in/sanduranaga-edirisinghe/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.5,
              duration: 1,
            },
          }}
          className="md:text-3xl cursor-pointer mx-3 text-2xl hover:scale-105"
        >
          <a href="https://github.com/Sanduranga" target="blank">
            <AiOutlineGithub />
          </a>
        </motion.span>
      </nav>
      <nav className="absolute md:right-10 right-6 flex justify-evenly max-w-screen-xl md:text-xl text-sm font-mono font-bold">
        <div className=" cursor-pointer hover:underline underline-offset-8 hover:scale-105">
          <LinkScroll
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Amaze>
              <span>Projects</span>
            </Amaze>
          </LinkScroll>
        </div>
        <div className=" cursor-pointer hover:underline underline-offset-8 md:ml-5 ml-3 hover:scale-105">
          <LinkScroll
            activeClass="active"
            to={"contact_me_section"}
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <Amaze>
              <span>Contact me</span>
            </Amaze>
          </LinkScroll>
        </div>
      </nav>
    </div>
  );
};

export default Header;
