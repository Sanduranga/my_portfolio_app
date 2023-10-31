import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import Amaze from "./Amaze";

interface propType {
  children: ReactNode;
}

const Card = (props: propType) => {
  return (
    <Amaze>
      <div className="grid sm:grid-cols-autofit sm:h-[65vh] h-[70vh] mt-5 text-black shadow-lg shadow-black bg-slate-400 font-sans sm:p-7 p-2 rounded-xl overflow-hidden">
        {props.children}
      </div>
    </Amaze>
  );
};

const Discription = (props: propType) => {
  return (
    <div className="text-black shadow-lg shadow-black sm:p-4 p-2 max-h-[50vh] overflow-y-scroll rounded-md md:mt-0 mt-3 md:rounded-xl">
      {props.children}
    </div>
  );
};

const Tools = (props: propType) => {
  return (
    <div className="flex space-x-3 text-black">
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
        alt="checked--v1"
        className="sm:w-5 sm:h-5 w-3 h-3 bg-black"
      />
      <h1 className="paragraph-l font-bold sm:text-md text-sm text-black">
        {props.children}
      </h1>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div className="relative grid sm:grid-cols-autofit grid-cols-1 md:grid-cols-3 gap-5 w-full sm:p-10 px-3">
      <img
        src="./metrics.gif"
        alt=""
        className="absolute w-full object-cover h-full top-0 left-0"
      />
      <div className="absolute w-full bg-gray-800/80 h-full top-0 left-0"></div>
      <Card>
        <img
          src="./ecommercets.jpg"
          alt="Featured Image 1"
          className="shadow-lg shadow-black md:rounded-t-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto object-cover"
        />
        <Discription>
          <div className="space-y-4 ">
            <h3 className="sm:text-xl text-md font-bold">
              E-commerce web app(ts & toolkit)
            </h3>
            <div className="sm:text-lg text-sm">
              This is an e_commerce site in Typescript version. And also I used
              Redux Toolkit to manage and maintain the application state. Also
              Picsum free API used to fetch images as store items. Dark mode
              Light mode are also available in this web site.
            </div>
          </div>
          <div className="sm:flex-row mt-0 flex-col-reverse flex justify-between sm:pt-8 pt-0 items-center">
            <div className="flex flex-col gap-y-1">
              <Tools>React</Tools>
              <Tools>Redux (Toolkit)</Tools>
              <Tools>Typescript</Tools>
              <Tools>Rest API</Tools>
              <Tools>TailwindCSS</Tools>
            </div>

            <div className="flex justify-end">
              <div className="flex sm:my-0 my-2 gap-2 pr-2 sm:text-2xl text-md justify-between items-center text-primary-200 paragraph-m rounded-full">
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
          src="./nativeapp.jpg"
          alt="Featured Image 1"
          className="shadow-lg shadow-black md:rounded-t-xl md:w-[40vw]  w-[90vw] max-h-[50vh] mx-auto object-cover"
        />
        <Discription>
          <div className="space-y-4">
            <h3 className="sm:text-xl text-md font-bold">Android App</h3>
            <div className="sm:text-lg text-sm">
              This is my first mobile app. And also I used Redux Toolkit to
              manage and maintain the application state. Also Picsum free API
              used to fetch images as store items. Dark mode Light mode are also
              available in this app.
            </div>
          </div>
          <div className="flex justify-between sm:pt-8 pt-0 items-center sm:flex-row flex-col-reverse">
            <div className="flex flex-col gap-y-1">
              <Tools>React Native</Tools>
              <Tools>Redux (Toolkit)</Tools>
              <Tools>Form Handeling</Tools>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex gap-2 sm:y-0 my-3 pr-2 sm:text-2xl text-md justify-between items-center text-primary-200 paragraph-m rounded-full">
                <a
                  href="https://github.com/Sanduranga/react_nativep1"
                  target="blank"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://github.com/Sanduranga/react_nativep1"
                  target="blank"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </Discription>
      </Card>
      <Card>
        <img
          src="./teachersite.jpg"
          alt="Featured Image 1"
          className="shadow-lg shadow-black md:rounded-t-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto object-cover"
        />
        <Discription>
          <div className="space-y-4 ">
            <h3 className="sm:text-xl text-md font-bold">
              Personal web app(NextJs)
            </h3>
            <div className="sm:text-lg text-sm">
              This is a personal web site that I am developing by NextJS React
              framework. In this, I used many technologies such as Redux
              toolkit, Mongoose and MongoDB. I used Redux Toolkit to manage and
              maintain the application state. Also I used to Mongoose to connect
              MongoDB and fetch data. By Mongoose I made two models so that it
              can be allow to tutor to provide their details and provide their
              students details. My goal is to develop this app to be suitable
              for a tutor.
            </div>
          </div>
          <div className="sm:flex-row mt-0 flex-col-reverse flex justify-between sm:pt-8 pt-0 items-center">
            <div className="flex flex-col gap-y-1">
              <Tools>NextJs</Tools>
              <Tools>Redux (Toolkit)</Tools>
              <Tools>Mongoose</Tools>
              <Tools>Typescript</Tools>
              <Tools>Rest API</Tools>
              <Tools>TailwindCSS</Tools>
            </div>

            <div className="flex justify-end">
              <div className="flex sm:my-0 my-2 gap-2 pr-2 sm:text-2xl text-md justify-between items-center text-primary-200 paragraph-m rounded-full">
                <a
                  href="https://github.com/Sanduranga/teacher_site_nextjs.git"
                  target="blank"
                >
                  <BsGithub />
                </a>
                <a href="##" target="blank">
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        </Discription>
      </Card>
      <Card>
        <img
          src="./ecommercejs.jpg"
          alt="Featured Image 1"
          className="shadow-lg shadow-black md:rounded-xl rounded-b-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto object-cover"
        />
        <Discription>
          <div className="space-y-4">
            <h3 className="sm:text-xl text-md font-bold">
              E-commerce web app(js)
            </h3>
            <div className="sm:text-lg  text-sm">
              This is an e commerce web site(Javasript) using Picsum free API
              images as the items. Also I used Redux createStore to manage the
              application state.
            </div>
          </div>
          <div className="sm:flex-row flex-col-reverse flex justify-between sm:pt-8 pt-0 items-center">
            <div className="flex flex-col gap-y-1">
              <Tools>React</Tools>
              <Tools>Redux</Tools>
              <Tools>Rest API</Tools>
              <Tools>TailwindCSS</Tools>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex sm:my-0 my-2 gap-2 pr-2 sm:text-2xl text-md justify-between items-center text-primary-200 paragraph-m rounded-full ">
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
          src="./framermotion.jpg"
          alt="Featured Image 1"
          className="shadow-lg shadow-black rounded-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto"
        />
        <Discription>
          <div className="space-y-4">
            <h3 className="sm:text-xl text-md font-bold ">Animate webpage</h3>
            <div className="sm:text-lg  text-sm">
              Here I made an attractive animate page using Framer motion.
            </div>
          </div>
          <div className="sm:flex-row flex-col-reverse flex justify-between sm:pt-8 pt-0 items-center ">
            <div className="flex flex-col gap-y-1">
              <Tools>React</Tools>
              <Tools>Framer</Tools>
              <Tools>Typescript</Tools>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex sm:my-0 my-2 gap-2 pr-2 sm:text-2xl text-md justify-between items-center text-primary-200 paragraph-m rounded-full">
                <a
                  sm:mb-0
                  mb-5
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
          src="./todoapp.jpg"
          alt="Featured Image 1"
          className="shadow-lg shadow-black md:rounded-xl rounded-b-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto object-cover"
        />
        <Discription>
          <div className="space-y-4">
            <h3 className="sm:text-xl text-md font-bold ">Todo app</h3>
            <div className="md:text-lg text-sm ">
              This is a Todo app with redux. I used Jsonplaceholder free API to
              Get, Delete, Update and Post the data. 1st you need to enter your
              ID and then enter your Task ID. Both must be numbers. Once you're
              done, Task input field will appear. Then you can write your work.
              Then finally Submit button will appear and can submit. Also can
              delete and edit the task
            </div>
          </div>
          <div className="sm:flex-row flex-col-reverse flex justify-between sm:pt-8 pt-0 items-center">
            <div className="flex flex-col gap-y-1">
              <Tools>React</Tools>
              <Tools>Redux</Tools>
              <Tools>CRUD Operation</Tools>
              <Tools>Form Handeling</Tools>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex sm:my-0 my-2 gap-2 pr-2 sm:text-2xl text-md  justify-between items-center text-primary-200 paragraph-m  rounded-full">
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
          src="./ceylonguider.jpg"
          alt="Featured Image 1"
          className="shadow-lg shadow-black rounded-xl md:w-[40vw] w-[90vw] max-h-[50vh] mx-auto"
        />
        <Discription>
          <div className="space-y-4">
            <h3 className="sm:text-xl text-md font-bold ">Web Page</h3>
            <div className="sm:text-lg  text-sm">
              This is simple webpage and my first web page. Here I used basic
              Form handeling techniques and CSS techniques. I developed thre
              pages. My purpose of making this was to guide those who want to
              travel in Sri Lanka so that they can use this website to find
              their needs without guiders. I have developed three pages so far.
            </div>
          </div>
          <div className="sm:flex-row flex-col-reverse flex justify-between sm:pt-8 pt-0 items-center">
            <div className="flex flex-col gap-y-1">
              <Tools>React</Tools>
              <Tools>React Router</Tools>
              <Tools>Form Handeling</Tools>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex gap-2 pr-2 sm:text-2xl sm:my-0 my-2 text-md justify-between items-center text-primary-200 paragraph-m rounded-full">
                <a
                  sm:mb-0
                  mb-5
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
