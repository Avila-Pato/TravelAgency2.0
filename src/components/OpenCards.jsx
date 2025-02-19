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
    expanded: {
      width: "400%", // CORREGIDO
    },
    collapsed: {
      width: "200%",
    },
  };

  const cardImages = [city1, city2, city3, city4];

  const cardTitles = [
    "Paradise Beach, Bantayan Island",
    "White Beach, Boracay",
    "El Nido, Palawan",
    "Chocolate Hills, Bohol",
  ];

  const cardDescriptions = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sint a beatae illo sequi dolore adipisci error fuga facilis corrupti quasi, similique quod sapiente? Natus dolorum assumenda perferendis odio. Architecto.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sint a beatae illo sequi dolore adipisci error fuga facilis corrupti quasi, similique quod sapiente? Natus dolorum assumenda perferendis odio. Architecto.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sint a beatae illo sequi dolore adipisci error fuga facilis corrupti quasi, similique quod sapiente? Natus dolorum assumenda perferendis odio. Architecto.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sint a beatae illo sequi dolore adipisci error fuga facilis corrupti quasi, similique quod sapiente? Natus dolorum assumenda perferendis odio. Architecto.",
  ];

  return (
    <section className=" pb-[80px] pt-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold leading-tight mt-2 text-pink-600">
          Top Destinations
        </h1>
        <p className="text-lg mt-5 px-4 md:px-0 text-start text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          sint a beatae illo sequi dolore adipisci error fuga facilis corrupti
          quasi, similique quod sapiente? Natus dolorum assumenda perferendis
          odio. Architecto.
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {cardImages.map((image, index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-hover rounded-[20px] group ${
              index === expandedIndex ? "expanded" : ""
            }`}
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
            <div className="card-content h-full flex flex-col justify-end  bg-opacity-50">
              <div className="card-footer  rounded-b-[20px]  bg-opacity-75 min-h-[130px] flex flex-col items-center justify-center bg-transparent">
                <h2 className="text-xl font-semibold text-white text-center ">
                  {cardTitles[index]}
                </h2>
                {expandedIndex === index && (
                  <motion.p
                    className="mt-2 text-gray-200 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {cardDescriptions[index]}
                  </motion.p>
                )}
                <a
                  href="#"
                  className="group-hover:visible invisible cursor-text "
                >
                  <img
                    src="/public/click.webp"
                    alt="Click aquí"
                    className="w-8 h-8"
                  />
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
