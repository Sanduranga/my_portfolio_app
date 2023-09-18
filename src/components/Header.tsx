import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { motion } from "framer-motion";
import { Link as LinkRoutor } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
const Header = () => {
  return (
    <div className="flex items-center absolute text-black z-20 top-0 md:px-0 px-5 justify-between h-[10vh] w-full">
      <nav className="absolute md:left-10 left-3 flex justify-around max-w-screen-lg">
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
              delay: 6,
              duration: 1,
            },
          }}
          className="md:text-3xl cursor-pointer mx-3 text-2xl hover:scale-105"
        >
          <a href="https://github.com/Sanduranga" target="blank">
            <AiOutlineGithub />
          </a>
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
          <LinkRoutor to={"/my_portfolio_app"}>
            <img
              className="object-cover rounded-full h-6 w-6 md:h-8 md:w-8 border-2"
              src="./mypic.jpg"
              alt="myPic"
            />
          </LinkRoutor>
        </motion.span>
      </nav>
      <nav className="absolute md:right-10 right-8 flex justify-evenly max-w-screen-xl md:text-xl text-md font-mono font-bold">
        <div className=" cursor-pointer hover:underline underline-offset-8 hover:scale-105">
          <LinkScroll
            activeClass="active"
            to="abc"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            Projects
          </LinkScroll>
        </div>
        <div className=" cursor-pointer hover:underline underline-offset-8 md:ml-5 ml-3 hover:scale-105">
          <LinkRoutor to={"/contact_me_section"}>Contact me</LinkRoutor>
        </div>
      </nav>
    </div>
  );
};

export default Header;
