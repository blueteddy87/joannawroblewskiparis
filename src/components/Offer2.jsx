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

// import React, { useEffect, useState } from "react";
// import { motion, px } from "framer-motion";
// import useContentful from "./contentful";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const { getBlogs } = useContentful();

//   useEffect(() => {
//     // Pobranie danych tylko raz po zamontowaniu komponentu
//     getBlogs().then((response) => {
//       console.log(response); // Logowanie odpowiedzi tylko raz
//       const sanitizedBlogs = response.items.map((item) => ({
//         title: item.fields.title,
//         content: item.fields.content,
//         media: item.fields.media ? item.fields.media.map((m) => m.fields) : [], // Obsługa wielu obrazów
//       }));
//       setBlogs(sanitizedBlogs);
//     });
//   }, []); // Pusta tablica oznacza, że efekt zostanie wywołany tylko raz, po pierwszym renderze

//   return (
//     <div id="blogs">
//       <div className="pt-28 mt-10 pb-4 lg:mb-35">
//         <div className="max-w-[1800px] mx-auto">
//           <motion.h1
//             initial="hidden"
//             animate="visible"
//             className="pb-16 px-9 md:px-0 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
//           >
//             BLOG
//           </motion.h1>

//           <div className="px-9 md:px-0">
//             {blogs.length > 0 ? (
//               blogs.map((blog, index) => (
//                 <div key={index} className="mb-10">
//                   <h2 className="text-4xl font-semibold">{blog.title}</h2>

//                   <div>
//                     {/* Sprawdzenie, czy media istnieje oraz czy zawiera co najmniej jeden element */}
//                     {blog.media && blog.media.length > 0 ? (
//                       blog.media.map((mediaItem, mediaIndex) => (
//                         <img
//                           width={300}
//                           height={300}
//                           key={mediaIndex}
//                           src={`https:${mediaItem.file.url}`} // Prefiks 'https:' może być potrzebny w przypadku Contentful
//                           alt={mediaItem.title}
//                           className="my-4"
//                         />
//                       ))
//                     ) : (
//                       <p>No media available</p>
//                     )}
//                   </div>

//                   {/* Obsługa Rich Text */}
//                   <p>{/* Tutaj obsłuż Rich Text z blog.content */}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No blogs available</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;
