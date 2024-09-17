import { RiGuideLine } from "react-icons/ri";
import { BiHotel } from "react-icons/bi";
import { MdDinnerDining } from "react-icons/md";
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";
import { FaRegSmileWink } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { motion } from "framer-motion";

const inconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Offer = () => {
  return (
    <div id="offer" className="pt-8 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Organizuje
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={inconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiInformation2Line className="text-7xl text-white" />
          </motion.div>
          <p className="text-center font-light tracking-tighter">Informacje</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={inconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiHotel className="text-7xl text-green-700" />
          </motion.div>
          <p className="text-center font-light tracking-tighter">Noclegi</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={inconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <MdDinnerDining className="text-7xl text-orange-500" />
          </motion.div>
          <p className="text-center font-light tracking-tighter">Obiady</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={inconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <MdOutlineDirectionsBoatFilled className="text-7xl text-blue-500" />
          </motion.div>
          <p className="text-center font-light tracking-tighter">
            Rejsy sekwaną
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={inconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <AiOutlineWechat className="text-7xl text-violet-700" />
          </motion.div>
          <p className="text-center font-light tracking-tighter">Dyskusje</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={inconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiGuideLine className="text-7xl text-red-800" />
          </motion.div>
          <p className="text-center font-light tracking-tighter">Wycieczki</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={inconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaRegSmileWink className="text-7xl text-yellow-500" />
          </motion.div>
          <p className="text-center font-light tracking-tighter">Bez stresu</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={inconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaWalking className="text-7xl text-amber-900" />
          </motion.div>
          <p className="text-center font-light tracking-tighter">Spacery</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Offer;
