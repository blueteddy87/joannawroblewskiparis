import { TOURS } from "../constants";
import { motion } from "framer-motion";

const Tours = () => {
  return (
    <>
      <div id="tours" className="pt-8 pb-4 max-w-[1800px] mx-auto">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Propozycje zwiedzania
        </motion.h1>
        <div>
          {TOURS.map((tours, index) => (
            <div
              key={index}
              className="mb-8 flex flex-wrap px-6 mx-auto lg:justify-center w-full"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full flex justify-center lg:w-1/4 mb-6" // Flexbox i centrowanie obrazu na mniejszych ekranach
              >
                <img
                  src={tours.image}
                  width={300}
                  height={300}
                  alt={tours.title}
                  className="rounded md:mr-6"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full  lg:w-3/4" // Na mniejszych ekranach zajmie 50%, a na dużych 75%
              >
                <h2 className="mb-2 font-semibold">{tours.title}</h2>
                <p className="mb-4 text-neutral-300 font-light tracking-tight text-justify">
                  {tours.description}
                </p>
                {tours.atrakcje.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div id="review"></div>
    </>
  );
};

export default Tours;
