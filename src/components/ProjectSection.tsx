const ProjectSection = () => {
  return (
    <div className="flex flex-col absolute top-[10vh] px-20 md:px-10 md:flex-row items-center justify-center gap-6">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg"
          alt="Featured Image 1"
          className="rounded-t-xl"
        />
        <div className="px-9 pt-10 pb-14 bg-yellow-500 rounded-b-lg">
          <div className="text-white space-y-4">
            <h3 className="text-xl font-bold lead-xl bold">Card Title</h3>
            <div className="text-lg font-light">
              Card subtitle with a long long long long long long text
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <ul className="flex flex-col gap-y-2.5">
              <li className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </li>
              <li className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </li>
              <li className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </li>
            </ul>
            <div className="flex flex-col justify-end">
              <a
                href="#"
                className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg"
          alt="Featured Image 1"
          className="rounded-t-xl"
        />
        <div className="px-9 pt-10 pb-14 bg-violet-600 rounded-b-lg">
          <div className="text-white space-y-4">
            <h3 className="text-xl font-bold lead-xl bold">Card Title</h3>
            <div className="text-lg font-light">
              Card subtitle with a long long long long long long text
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <ul className="flex flex-col gap-y-2.5">
              <li className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </li>
              <li className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </li>
              <li className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </li>
            </ul>
            <div className="flex flex-col justify-end">
              <a
                href="#"
                className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
