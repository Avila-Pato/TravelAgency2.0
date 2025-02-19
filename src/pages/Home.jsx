import { FaPlay } from "react-icons/fa";
import HalfScreen from "../components/HalfScreen";
import ScrollCarousel from "../components/InfinityScrool";
import OpenCards from "../components/OpenCards";
import ServicesPage from "../components/Services";
import { CgCheck } from "react-icons/cg";
import { TbXboxX } from "react-icons/tb";
import Slider from "../components/SliderImage";

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
        <div className="w-full flex flex-col">
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
              border-b-amber-950  realtive shadow-2xl "
            >
              <img
                src="/img/services1.jpg"
                alt=""
                width={100}
                className="w-full h-60 object-cover rounded-t-xl transform duration-300 hover:brightness-125"
              />
              <div className="absolute ">
                <p
                  className="relative bottom-6 left-16 
                rounded-2xl p-2  "
                >
                  <small className="bg-red-700 rounded-l-sm border-2 py-1 px-1 border-red-500 text-white ">
                    29%
                  </small>
                  <small className="bg-white rounded-r-sm border-2 py-1 px-1 border-red-500 text-red-500">
                    menos de lo habitual
                  </small>
                </p>
              </div>

              <div className="p-4">
                <p className="text-3xl font-semibold truncate  ">
                  Samba Angra dos Reis
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg text-gray-600 flex-col truncate">
                    7.3 - razonable
                  </p>
                  <p className="text-lg font-semibold text-green-700 truncate">
                    Rio de janeiro, Brasil
                  </p>
                </div>
                <div className="border-1 rounded-2xl py-2 px-2  relative items-center ">
                  <div className="flex justify-between  items-center ">
                    <small className="">Incluye</small>
                    <small>
                      {" "}
                      <CgCheck className="inline-flex text-green-900" />{" "}
                      Desayuno incluido
                    </small>
                  </div>

                  <div className="justify-between items-center">
                    <small className="text-gray-500  ">Aproximadamente</small>
                    <small className="font-normal flex">$39.483</small>
                    <div className="flex justify-between items-center">
                      <small className="font-thin ">Por noche</small>
                      <small className="">27 mar - 30 mar </small>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-1  py-1">
                  <button className="bg-blue-500 rounded-2xl w-full font-bold text-white py-2 cursor-pointer object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out">
                    Consultar oferta
                  </button>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl  border-b-2
              border-b-amber-950 relative shadow-2xl "
            >
              <img
                src="/img/services.jpg"
                alt=""
                width={100}
                className="w-full  h-60 object-cover rounded-t-xl transform duration-300 hover:brightness-125"
              />

              <div className="absolute ">
                <p
                  className="relative bottom-6 left-16 
                rounded-2xl p-2  "
                >
                  <small className="bg-red-700 rounded-l-sm border-2 py-1 px-1 border-red-500 text-white ">
                    19%
                  </small>
                  <small className="bg-white rounded-r-sm border-2 py-1 px-1 border-red-500 text-red-500">
                    menos de lo habitual
                  </small>
                </p>
              </div>

              <div className="p-4">
                <p className="text-3xl font-bold">Torres del paine </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg text-gray-600  truncate">
                    {" "}
                    9.3 - Bueno{" "}
                  </p>
                  <p className="text-lg font-semibold truncate text-green-900">
                    {" "}
                    Región de Magallanes{" "}
                  </p>
                </div>
                <div className="border-1 rounded-2xl py-2 px-2  relative items-center ">
                  <div className="flex justify-between  items-center ">
                    <small className="">Incluye</small>
                    <small>
                      {" "}
                      <TbXboxX className="inline-flex text-red-900" /> Desayuno
                      incluido
                    </small>
                  </div>
                  <div className=" justify-between ">
                    <small className=" flex text-gray-600">
                      Aproximadamente
                    </small>
                    <small className="text-gray-600 flex ">$750.000</small>
                    <div className="flex justify-between items-center">
                      <small className="font-thin">Por noche</small>
                      <small>27 mar - 30 mar </small>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-1  py-1">
                  <button className="bg-blue-500 rounded-2xl w-full font-bold text-white py-2 cursor-pointer object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out">
                    Consultar oferta
                  </button>
                </div>
              </div>
            </div>
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
      <article className="flex flex-col md:flex-row justify-between pl-28 ">
        <section className="md:w-1/2">
          <h3 className="text-4xl text-start font-extrabold text-pink-600  ">
            Services
          </h3>
          <h1 className="text-4xl font-extrabold text-start ">
            We helping you to find your dream location
          </h1>
          <p className="text-sm pt-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            voluptates molestiae amet fugit ratione, provident veritatis soluta
            optio libero consectetur, aut minus sint culpa eveniet eum
            accusantium eaque atque officia numquam tempora. Provident vel fuga
            eaque magni ipsa, ducimus recusandae.
          </p>
          <div className=" pr-10 relative ">
            <div className="grid grid-cols-[150px_400px] pt-10  ">
              <div className="pt-6   ">
                <img
                  src="/svg/Frame51.svg"
                  alt=""
                  width={30}
                  className=" w-12 h-12 ml-12  "
                />
              </div>
              <span className=" text-xl font-extrabold tracking-wider">
                We Offer best services
                <p className=" text-gray-400 font-medium  tracking-normal ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, debitis enim ipsa culpa necessitatibus nisi.
                  Voluptate temporibus sapiente omnis id!
                </p>
              </span>
            </div>
            <div className="grid  grid-cols-[150px_400px] pt-10 ">
              <div className="pt-6">
                <img
                  src="/svg/Frame71.svg"
                  alt=""
                  width={30}
                  className=" w-12 h-12 ml-12 "
                />
              </div>
              <span className="  text-xl font-extrabold tracking-wider">
                We Offer best services
                <p className=" text-gray-400 font-medium   tracking-normal">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, debitis enim ipsa culpa necessitatibus nisi.
                  Voluptate temporibus sapiente omnis id!
                </p>
              </span>
            </div>
            <div className="grid  grid-cols-[150px_400px] pt-10 ">
              <div className="pt-6">
                <img
                  src="/svg/Vector.svg"
                  alt=""
                  width={30}
                  className=" w-12 h-12 ml-12 "
                />
              </div>
              <span className="  text-xl font-extrabold tracking-wider">
                We Offer best services
                <p className=" text-gray-400 font-medium tracking-normal">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, debitis enim ipsa culpa necessitatibus nisi.
                  Voluptate temporibus sapiente omnis id!
                </p>
              </span>
            </div>
          </div>
        </section>
        <section className="flex gap-1 w-full  ml-11 pt-24">
          <div className="flex flex-col justify-center items-center relative pb-56">
            <img
              src="/img/Cor1.jpg"
              alt=""
              className="rounded-full w-[315px] h-[492px] object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out hover:brightness-125 "
            />
          </div>
          <div className="flex flex-col justify-center items-center pt-56">
            <img
              src="/img/Cor2.jpg"
              alt=""
              className="rounded-full w-[315px] h-[492px]  border-amber-100 border-8 absolute right-24 object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out hover:brightness-125 "
            />
          </div>
        </section>
      </article>
      {/* subcribe section */}
      <article className="flex flex-col justify-center w-full min-h-[500px]">
        <section className="flex justify-center">
          <p className="text-4xl  font-bold text-pink-600">Testimonial</p>
        </section>
        <p className="flex justify-center tracking-widest text-5xl font-extrabold">
          Trust our Clients
        </p>
        <div className="pt-5">
          <Slider />
        </div>
      </article>
    </div>
  );
};

export default HomePage;
