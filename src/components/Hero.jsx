import profilePic from "../assets/JoannaPro600v2.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const HERO_CONTENT = `Jestem wykwalifikowanym, licencjonowanym przewodnikiem z ponad 30-letnim doświadczeniem, mieszkającym i pracującym w Paryżu. Oferuję szeroką gamę wycieczek po Paryżu i jego okolicach, dostosowanych do zainteresowań i potrzeb turystów.
  Dlaczego warto wybrać mnie jako przewodnika po Paryżu?
  Paryż to moje miasto, które znam jak własną kieszeń. Dzięki wieloletniemu doświadczeniu pomogę Ci odkryć zarówno popularne atrakcje turystyczne, jak i ukryte zakątki Paryża, które rzadko są odwiedzane przez turystów. Organizuję wycieczki, które dostosowuję indywidualnie do Twoich oczekiwań – od klasycznych tras po tematyczne zwiedzanie Paryża.
  Wycieczki tematyczne po Paryżu
  `;
  return (
    <div className="pt-28 mt-10 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap max-w-[1800px] mx-auto">
        <div className="w-full lg:w-1/2 xl:w-2/3">
          <div id="hero" className="flex flex-col">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 px-9 md:px-0 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl "
            >
              Joanna Wróblewski
            </motion.h1>

            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text px-9 md:px-0 text-4xl tracking-tighter text-transparent "
            >
              Paryż to więcej niż miasto – to opowieść. Poznaj ją ze mną
              {/**Licencjonowany Przewodnik po Paryżu */}
            </motion.h2>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="px-9 md:px-0 my-2 text-justify py-6 font-light tracking-wide"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              animate={{
                delay: 1,
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
              }}
              transition={{
                duration: 3,
              }}
              src={profilePic}
              alt="Joanna Wróblewska"
            />
            {/**  <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Joanna Wróblewska"
            />**/}
          </div>
        </div>
      </div>
      {/* <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">
        test
      </div> */}
    </div>
  );
};

export default Hero;
