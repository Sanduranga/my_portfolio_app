import { ReactNode } from "react";
import Footer from "./Footer";

interface cardType {
  children: ReactNode;
}

const Card = (props: cardType) => {
  return <div className="grid grid-cols-2 mt-20 px-20">{props.children}</div>;
};

const ProjectSection = () => {
  return (
    <div className="grid grid-cols-1 absolute top-[10vh] bg-gradient-to-t from-gray-400/50 to-gray-800/30 justify-center gap-6">
      <Card>
        <img
          src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg"
          alt="Featured Image 1"
          className="rounded-t-xl"
        />
        <div className="md:px-9 pt-10 pb-14 bg-yellow-500 rounded-b-lg">
          <div className="text-white space-y-4">
            <h3 className="text-xl font-bold lead-xl bold">Card Title</h3>
            <div className="text-lg font-light">
              Card subtitle with div long long long long long long text. Card
              subtitle with div long long long long long long text. Card
              subtitle with div long long long long long long text. Card
              subtitle with div long long long long long long text. Card
              subtitle with div long long long long long long text. Card
              subtitle with div long long long long long long text
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg"
          alt="Featured Image 1"
          className="rounded-t-xl"
        />
        <div className="px-9 pt-10 pb-14 bg-violet-600 rounded-b-lg">
          <div className="text-white space-y-4">
            <h3 className="text-xl font-bold lead-xl bold">Card Title</h3>
            <div className="text-lg font-light">
              Card subtitle with div long long long long long long text
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </div>
              <div className="flex space-x-3 text-white">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                  alt="checked--v1"
                  className="w-6 h-6"
                />
                <span className="paragraph-l font-bold">Item 1</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default ProjectSection;
