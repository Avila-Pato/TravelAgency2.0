import { motion } from "framer-motion";
import item1 from "/svg/Booking.svg";
import item2 from "/svg/Expedia.svg";
import item3 from "/svg/Tripadvisor.svg";
import item4 from "/svg/Turistik.svg";

const images = [item1, item2, item3, item4];

const ScrollCarousel = () => {
  return (
    <div className="w-full overflow-hidden pt-0 bg-gradient-to-r from-white to-gray-500 z-10">
      <motion.div
        className="flex space-x-4 sm:space-x-8"
        animate={{ x: ["0%", "-40%"] }} 
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((item, index) => (
          <img
            key={index}
            className="w-24 sm:w-32 md:w-40 lg:w-48" // adaptando a diferentes pantallas
            src={item}
            alt={`carousel-item-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollCarousel;
