import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const images = [
  "/svg/men1.svg",
  "/svg/men2.svg",
  "/svg/users.svg",
  "/svg/Ellipse9.svg",
];

const names = [
  "Marco smith /  Blog travel",
  "Ricardo smith /  Blog travel",
  "Antonio smith /  Blog travel",
  "Julieta smith /  Blog travel",
];

const descriptions = [
  "Explorando el mundo y compartiendo experiencias únicas. Explorando el mundo y compartiendo experiencias únicas.",
  "Analizando lo último en tecnología y gadgets. Analizando lo último en tecnología y gadgets.Analizando lo último en tecnología y gadgets.",
  "Reseñando los mejores platillos de diferentes países. Reseñando los mejores platillos de diferentes países.Reseñando los mejores platillos de diferentes países.",
  "Capturando momentos inolvidables a través de la fotografía. Capturando momentos inolvidables a través de la fotografía.Capturando momentos inolvidables a través de la fotografía.",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full  max-w-2xl mx-auto">
      <div className="overflow-hidden flex  justify-center py-16 ">
        <AnimatePresence mode="wait">
          <div className="flex flex-col items-center">
            <motion.img
              key={`image-${index}`}
              src={images[index]}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="object-cover w-[100px] sm:w-[200px] lg:w-[300px]  "
            />
            <motion.p
              key={`name-${index}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className=" text-xl font-bold tracking-wide "
            >
              <span className="font-bold text-red-600">
                {names[index].split(" / ")[0]}
              </span>{" "}
              /
              <span className="text-gray-800">
                {names[index].split(" / ")[1]}
              </span>
            </motion.p>

            <motion.p
              key={`desc-${index}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="  text-lg text-center text-gray-500  pt-4 "
            >
              {descriptions[index]}
            </motion.p>
          </div>
        </AnimatePresence>
      </div>
      <motion.div className="flex  justify-center space-x-2 mt-4">
        {images.map((_, i) => (
          <motion.span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-purple-500" : "bg-pink-300"
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: i === index ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <BiLeftArrow />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <BiRightArrow />
      </button>
    </div>
  );
}
