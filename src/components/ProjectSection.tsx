import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

interface cardType {
  children: ReactNode;
}

const Card = (props: cardType) => {
  return (
    <div className="grid grid-cols-autofit px-10 mt-[10vh] bg-gray-950/10 py-10 rounded-3xl">
      {props.children}
    </div>
  );
};
interface discriptionTypes {
  children: ReactNode;
}
const Discription = (props: discriptionTypes) => {
  return (
    <div className="  max-h-[50vh] p-5 overflow-y-auto bg-violet-600 rounded-b-lg md:rounded-xl">
      {props.children}
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-6 md:px-5 px-3">
      <div className="font-mono text-center font-bold text-4xl">
        Projects ....
      </div>
      <Card>
        <img
          src="../eCommerceTS.JPG"
          alt="Featured Image 1"
          className="md:rounded-xl rounded-b-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto object-cover"
        />
        <Discription>
          <div className="text-white space-y-4 ">
            <h3 className="text-xl font-bold lead-xl bold">
              E-commerce site(ts & toolkit)
            </h3>
            <div className="md:text-lg text-md font-light">
              This is a E_Commerce site in Typescript version. And also I used
              Redux Toolkit to manage the global store and Picsum free API used
              to fetch as store items. Dark mode Light mode are also available
              in this web site.
            </div>
          </div>
          <div className="flex justify-between pt-8 items-center">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">React</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Redux toolkit</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Rest API</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Typescripts</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">React routor dom</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex gap-5 px-5 text-2xl  justify-between items-center text-primary-200 paragraph-m  rounded-full">
                <a
                  href="https://github.com/Sanduranga/e_commerce_site_ts"
                  target="blank"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://sanduranga.github.io/e_commerce_site_ts/"
                  target="blank"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        </Discription>
      </Card>
      <Card>
        <img
          src="../eCommerceJS.JPG"
          alt="Featured Image 1"
          className="md:rounded-xl rounded-b-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto object-cover"
        />
        <Discription>
          <div className="text-white space-y-4">
            <h3 className="text-xl font-bold lead-xl bold">
              E-commerce site(js)
            </h3>
            <div className="text-lg font-light">
              This is a simple e commerce web site(Javasript) using Picsum free
              API images as the items. Also I used Redux createStore to manage
              the global store.
            </div>
          </div>
          <div className="flex justify-between pt-8 items-center">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">React</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">
                  Redux(createStore)
                </span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Rest API</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex gap-5 px-5 text-2xl  justify-between items-center text-primary-200 paragraph-m  rounded-full">
                <a
                  href="https://github.com/Sanduranga/e_commerce_site_react_redux.git"
                  target="blank"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://sanduranga.github.io/e_commerce_site_react_redux/"
                  target="blank"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        </Discription>
      </Card>
      <Card>
        <img
          src="../framerMotion.JPG"
          alt="Featured Image 1"
          className="rounded-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto"
        />
        <Discription>
          <div className="text-white space-y-4">
            <h3 className="text-xl font-bold lead-xl bold">Animate webpage</h3>
            <div className="text-lg font-light">
              Here I made simple attractive animate page using Framer motion.
            </div>
          </div>
          <div className="flex justify-between pt-8 items-center">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">React</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Framer motion</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Typescript</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex gap-5 px-5 text-2xl  justify-between items-center text-primary-200 paragraph-m  rounded-full">
                <a
                  href="https://github.com/Sanduranga/p8_attractive_homepage"
                  target="blank"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://sanduranga.github.io/p8_attractive_homepage/"
                  target="blank"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        </Discription>
      </Card>
      <Card>
        <img
          src="../todoApp.JPG"
          alt="Featured Image 1"
          className="md:rounded-xl rounded-b-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto object-cover"
        />
        <Discription>
          <div className="text-white space-y-4 ">
            <h3 className="text-xl font-bold lead-xl bold">Todo app</h3>
            <div className="md:text-lg text-md font-light">
              This is a simple Todo app with redux. I used Jsonplaceholder free
              API to Get, Delete, Update and Post the data. 1st you need to
              enter your ID and then enter your Task ID. Both must be numbers.
              Once you're done, another input field will appear. Then you can
              write your work. Then finally Submit button will appear. Also can
              delete and edit the task
            </div>
          </div>
          <div className="flex justify-between pt-8 items-center">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">React</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">
                  Redux (createStore)
                </span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">CRUD operations</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Form handling</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex gap-5 px-5 text-2xl  justify-between items-center text-primary-200 paragraph-m  rounded-full">
                <a
                  href="https://github.com/Sanduranga/todo_react_redux_app"
                  target="blank"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://sanduranga.github.io/todo_react_redux_app/"
                  target="blank"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        </Discription>
      </Card>
      <Card>
        <img
          src="../ceylonGuider.JPG"
          alt="Featured Image 1"
          className="rounded-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto"
        />
        <Discription>
          <div className="text-white space-y-4">
            <h3 className="text-xl font-bold lead-xl bold">Web Page</h3>
            <div className="text-lg font-light">
              This is simple webpage and my first web page. Here I used basic
              Form handeling techniques and CSS techniques. I developed thre
              pages. My purpose of making this is to guide those who want to
              travel in Sri Lanka so that they can use this website to find
              their needs.
            </div>
          </div>
          <div className="flex justify-between pt-8 items-center">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">React</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">React routor dom</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src=".https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Form handling</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex gap-5 px-5 text-2xl  justify-between items-center text-primary-200 paragraph-m  rounded-full">
                <a
                  href="https://github.com/Sanduranga/CeylonGuiderReactJS"
                  target="blank"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://sanduranga.github.io/CeylonGuiderReactJS/"
                  target="blank"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        </Discription>
      </Card>
    </div>
  );
};

export default ProjectSection;
