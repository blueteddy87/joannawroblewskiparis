export const Offer2 = () => {
  return (
    <div>
      {/* test
      <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">
        testsss
      </div> */}
    </div>
  );
};

export default Offer2;

// import { TOURS } from "../constants";
// import { motion } from "framer-motion";

// const Tours = () => {
//   return (
//     <>
//       <div id="tours" className="pt-8 pb-4">
//         <motion.h1
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.5 }}
//           className="my-20 text-center text-4xl"
//         >
//           Propozycje zwiedzania
//         </motion.h1>
//         <div>
//           {TOURS.map((tours, index) => (
//             <div
//               key={index}
//               className="mb-8 flex flex-wrap mx-auto w-full lg:justify-center"
//             >
//               <motion.div
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 1 }}
//                 className="w-full lg:w-1/4 md:mr-8"
//               >
//                 <img
//                   src={tours.image}
//                   width={300}
//                   height={300}
//                   alt={tours.title}
//                   className="mb-6 rounded"
//                 />
//               </motion.div>
//               <motion.div
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: 100 }}
//                 transition={{ duration: 1 }}
//                 className="px-9 md:px-0 w-full max-w-xl lg:w-3/4"
//               >
//                 <h6 className="mb-2 font-semibold ">{tours.title}</h6>
//                 <p className="mb-4 text-neutral-400 font-light tracking-tight text-justify">
//                   {tours.description}
//                 </p>
//                 {tours.atrakcje.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400 "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div id="review"></div>
//     </>
//   );
// };

// export default Tours;
