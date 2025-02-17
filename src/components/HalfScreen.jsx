import { motion } from "framer-motion";

const floatAnimation = {
  animate: {
    x: [0, 2, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const HalfScreen = () => {
  return (
    <div className="">
      {/* mano derecha */}

      <motion.div
        className="absolute transform pt-32 sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
        {...floatAnimation}
      >
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="absolute pb-64 z-[-1]">
            <img
              src="/svg/halfWorld.svg "
              alt=""
              className="w-[600px] h-auto scale-200 "
            />
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-3 lg:gap-y-8 ">
            {/* sixe img */}

            <div className="h-64 w-56 overflow-hidden rounded-2xl sm:opacity-0 lg:opacity-100  object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out">
              <motion.img
                src="/img/tourism1.jpg"
                className="h-[300px] w-full object-cover object-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Second image */}
            {/* size img */}
            <div className="h-64 w-56 overflow-hidden rounded-2xl  object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out">
              <motion.img
                src="/img/tourism2.jpg"
                alt=""
                className="h-full w-full object-cover object-center "
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            {/* size img  but this is a hidden img */}
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              {/* Hidden img to give a separate */}
            </div>

            {/* correct oone */}
            <div className="h-72 w-48  overflow-hidden rounded-2xl  object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out">
              <motion.img
                src="/img/tourism3.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HalfScreen;
