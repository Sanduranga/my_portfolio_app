import PopupBoxes from "./PopupBoxes";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Amaze from "./Amaze";
import ContactMeSection from "./ContactMeSection";

const LandingSection = () => {
  const [typeEffect] = useTypewriter({
    words: ["ReactJS❤️‍🔥", "Redux😇", "TailwindCSS🥰", "Typescript💪"],
    // @ts-expect-error
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="min-h-[100vh] grid grid-cols-1 gap-7 justify-items-center w-full bg-gradient-to-b from-gray-100 to-gray-950 ">
      <div className="relative flex justify-center items-center h-screen content-center bg-gradient-to-b from-gray-50 to-slate-200 w-full tracking-wider">
        <div className=" text-white flex flex-col text-center items-center sm:mb-0 mb-5 lg:justify-self-end z-10">
          <img
            className="sm:h-36 sm:w-36 h-20 w-20 border-8 rounded-full"
            src="./mypic.jpg"
            alt="profileImg"
          />

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
        <img
          src="darklight.gif"
          alt="gif"
          className="mx-auto sm:mt-32 mt-3 mb-20 rounded-3xl drop-shadow-2xl sm:px-0 px-3 "
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
