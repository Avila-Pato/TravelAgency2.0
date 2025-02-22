import { motion } from "framer-motion";

const HalfScreen = () => {
  return (
    <>
      {/* mano derecha */}
      <main className=" items-center sm:items-start sm:flex-row sm:justify-center">
      <motion.div className="absolute transform pt-32 sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="absolute pb-64 z-[-1]">
            <img
              src="/svg/halfWorld.svg "
              alt=""
              className="w-[600px] h-auto scale-200 "
            />
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 md:grid-cols-1  gap-y-3 lg:gap-y-8 ">
            {/* first image */}
            {/* sixe img */}
            <div className="h-64 w-56 relative  sm:opacity-0 lg:opacity-100  object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out">
              <motion.img
                src="/img/tourism1.jpg"
                className="h-[255px] w-full object-cover object-center rounded-2xl"
                loading="lazy" 
                style={{ backgroundColor: "#eee", minHeight: 200 }} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <img
                src="/svg/user.svg"
                alt=""
                className="absolute top-52 right-42  w-22 h-22 "
              />
            </div>

            {/* Second image */}
            {/* size img */}
            <div className="h-64 w-56 relative object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out">
              <motion.img
                src="/img/tourism2.jpg"
                alt=""
                className="h-full w-full object-cover object-center rounded-2xl  "
                loading="lazy" 
                style={{ backgroundColor: "#eee", minHeight: 200 }} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              <img
                src="/svg/place.svg"
                alt=""
                className="absolute top-52 right-42  w-22 h-22"
              />
            </div>
          </div>

          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            {/* size img  but this is a hidden img */}
            <div className="h-64 w-44 ">
              {/* Hidden img to give a separate */}
            </div>

            {/* third image */}
            <div className="h-72 w-48 relative object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out">
              <motion.img
                src="/img/tourism3.jpg"
                alt=""
                className="h-full w-full object-cover object-center  rounded-2xl"
                loading="lazy" 
                style={{ backgroundColor: "#eee", minHeight: 200 }} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <img
                src="/svg/top.svg"
                alt=""
                className="absolute top-56 left-28  h-9  "
              />
            </div>
            <div className="h-64 w-44"></div>
          </div>
        </div>
      </motion.div>
      </main>
    </>
  );
};

export default HalfScreen;
