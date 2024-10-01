import React from "react";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div id="blogs">
      <div className="pt-28 mt-10 pb-4 lg:mb-35 ">
        <div className="max-w-[1800px] mx-auto bg-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            className="pb-16 px-9 md:px-0 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl "
          >
            BLOG
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
