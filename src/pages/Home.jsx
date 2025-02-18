import { FaPlay } from "react-icons/fa";
import HalfScreen from "../components/HalfScreen";
import ScrollCarousel from "../components/InfinityScrool";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col pb-28 ">
      <main className="flex flex-grow flex-col items-center md:flex-row justify-between text-center p-5">
        {/* Contenido a la izquierda */}
        <div className="flex flex-col md:items-center max-w-lg mx-auto ">
          <div className="w-full flex justify-start">
            <div
              className="h-10 flex items-center p-2 text-pink-600 font-semibold  rounded-3xl bg-amber-100 hover:bg-purple-200 
            shadow-lg"
            >
              Explore The world
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-start font-extrabold leading-tight mt-2">
            Travel{" "}
            <strong className="text-transparent bg-gradient-to-t from-purple-600 to-pink-600 bg-clip-text">
              {" "}
              Top destination
            </strong>{" "}
            of the world
          </h1>
          <p className="text-lg mt-5 px-4 md:px-0 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor
            animi quae quas nemo laborum incidunt maxime recusandae assumenda
            provident!
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-col md:flex-row md:space-x-4 justify-start w-full">
            <button className="w-[107px] h-[40px] rounded-3xl cursor-pointer text-white bg-gradient-to-t from-pink-400 to-purple-400">
              Get Started
            </button>

            <button className="w-[157px] h-[40px] rounded-3xl cursor-pointer inline-flex items-center justify-center space-x-2 bg-gray-400 text-black">
              <FaPlay />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Contenido a la derecha */}
        <div className=" w-full  md:w-1/2 mt-5 md:mt-0  ">
          <HalfScreen />
        </div>
      </main>

      {/* Carousel */}
      <div className="  py-40  h-40 md:h-52 lg:h-60 mt-10 md:mt-20">
        <ScrollCarousel />
      </div>
    </div>
  );
};

export default HomePage;
