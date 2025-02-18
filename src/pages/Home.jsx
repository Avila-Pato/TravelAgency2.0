import { FaPlay } from "react-icons/fa";
import HalfScreen from "../components/HalfScreen";
import ScrollCarousel from "../components/InfinityScrool";
import OpenCards from "../components/OpenCards";
import ServicesPage from "../components/Services";

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
        <div className=" w-full md:w-1/2 mt-5 md:mt-0  ">
          <HalfScreen />
        </div>
      </main>

      {/* Carousel */}
      <div className="  py-20  h-40 md:h-52 lg:h-60 mt-10 md:mt-20">
        <ScrollCarousel />
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Services */}
        <div className="w-full flex flex-col mt-10">
          <ServicesPage />
        </div>

        <div className="grid grid-cols-1     ">
          <div className=" py-10 -my-10">
            <h1 className="text-2xl font-extrabold text-pink-600">Services</h1>
            <h2 className="text-6xl font-medium">
              We helping you to find your dream location
            </h2>
            <p className="text-sm pt-5 font-normal text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates molestiae amet fugit ratione, provident veritatis
              soluta optio libero consectetur, aut minus sint culpa eveniet eum
              accusantium eaque atque officia numquam tempora. Provident vel
              fuga eaque magni ipsa, ducimus recusandae.
            </p>
          </div>
          <div className="grid grid-cols-2 pt-10 gap-8  ">
            <div
              className="rounded-2xl  border-b-2
              border-b-amber-950  shadow-2xl object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <img
                src="/img/tourism1.jpg"
                alt=""
                width={100}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <p className="text-3xl font-bold">Punta Cana</p>
                <p className="text-lg text-gray-600">Paquete 6 noches</p>
                <p className="text-lg font-semibold text-green-700">
                  Todo incluido
                </p>
                <p className="mt-2">
                  Desde <br />
                  <strong className="text-2xl text-red-600">$5.000</strong>
                  <br />
                  <small className="text-gray-500">Precio por persona</small>
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl  border-b-2
              border-b-amber-950  shadow-2xl object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <img
                src="/img/tourism1.jpg"
                alt=""
                width={100}
                className="w-full  h-60 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <p className="text-3xl font-bold">Cancún</p>
                <p className="text-lg text-gray-600">Paquete 6 noches</p>
                <p className="text-lg font-semibold text-green-700">
                  Todo incluido
                </p>
                <p className="mt-2">
                  Desde <br />
                  <strong className="text-2xl text-red-600">$5.000</strong>
                  <br />
                  <small className="text-gray-500">Precio por persona</small>
                </p>
              </div>
            </div>

            {/* <div className="bg-orange-500">
                Playa del carmen
                <p>Paquete 6 noches</p>
                <strong>Todo incluido</strong>
                <p>
                  Desde <br />
                  $5.000 <br />
                  <small>Precio por persona</small>
                </p>
              </div>
              <div className="bg-purple-700">
                Bayahibe
                <p>Paquete 6 noches</p>
                <strong>Todo incluido</strong>
                <p>
                  Desde <br />
                  $5.000 <br />
                  <small>Precio por persona</small>
                </p>
              </div> */}
          </div>
          {/* <div className="bg-yellow-500 w-full  ">Footer</div> */}
        </div>
      </div>

      {/* CardsOptions */}
      <div className="flex flex-col md:flex-row  ">
        {/* Solo la sección de OpenCards ocupando todo el espacio */}
        <div className="w-full  md:mt-0 ">
          <OpenCards />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
