import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "/img/unsplash1.jpg";
import city2 from "/img/unsplash2.jpg";
import city3 from "/img/unsplash3.jpg";
import city4 from "/img/unsplash4.jpg";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: { width: "300px", flexGrow: 2 },
    collapsed: { width: "150px", flexGrow: 1 },
  };

  const cardImages = [city1, city2, city3, city4];

  const cardTitles = [
    "Paradise Beach, Bantayan Island",
    "White Beach, Boracay",
    "El Nido, Palawan",
    "Chocolate Hills, Bohol",
  ];

  const cardDescriptions = [
    "Una playa paradisíaca con aguas cristalinas y arena blanca.",
    "Uno de los destinos más visitados con fiestas y vistas increíbles.",
    "Un paraíso natural con acantilados y playas impresionantes.",
    "Colinas icónicas con una vista espectacular en Bohol.",
  ];

  return (
    <section className="pb-[80px] pt-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold leading-tight mt-2 text-pink-600">
          Top Destinations
        </h1>
        <p className="text-lg mt-5 px-4 md:px-0 text-center text-gray-500">
          Descubre los mejores destinos turísticos con paisajes espectaculares.
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-5">
        {cardImages.map((image, index) => (

          <motion.div
          key={index}
          className={`card cursor-pointer h-[300px]    bg-hover rounded-[20px] group ${
            index === expandedIndex ? "expanded" : ""
          } w-full sm:w-[600px] md:w-[400px]`}
          variants={cardVariants}
          initial="collapsed"
          animate={expandedIndex === index ? "expanded" : "collapsed"}
          transition={{ duration: 0.3 }}
          onClick={() => handleCardClick(index)}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        
            <div className="card-content h-full flex flex-col justify-end bg-opacity-50">
              <div className="card-footer rounded-b-[20px] bg-opacity-75 min-h-[130px] flex flex-col items-center justify-center bg-transparent p-4">
                <h2 className="text-lg sm:text-xl font-semibold text-white text-center">
                  {cardTitles[index]}
                </h2>
                {expandedIndex === index && (
                  <motion.p
                    className="text-sm sm:text-base text-gray-200 text-center mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {cardDescriptions[index]}
                  </motion.p>
                )}
                <a href="#" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src="/click.webp" alt="Click aquí" className="w-16 sm:w-16 md:w-24" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpenCards;
