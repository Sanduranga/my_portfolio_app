import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center gap-3 items-center text-white text-lg font-mono w-full h-[30vh] bg-gradient-to-b from-gray-950/80 to-amber-200/40">
      <div className="flex w-20 justify-between gap-5">
        <a
          href="https://www.linkedin.com/in/sanduranaga-edirisinghe/"
          target="blank"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a href="https://github.com/Sanduranga" target="blank">
          <AiOutlineGithub size={30} />
        </a>
        <a
          target="blank"
          href="https://wa.me/+94702330959?text=I'm%20interested%20in%20your%20developments"
        >
          <AiOutlineWhatsApp size={30} />
        </a>
      </div>
      <div>@SRanga Technologies 2024</div>
    </div>
  );
};
export default Footer;
