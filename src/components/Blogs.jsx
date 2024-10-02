import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importujemy useNavigate
import useContentful from "./contentful";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"; // importujemy funkcję

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs } = useContentful();
  const navigate = useNavigate(); // Deklarujemy nawigację

  useEffect(() => {
    getBlogs().then((response) => {
      console.log(response); // Zobacz dokładną strukturę danych z Contentful
      const sanitizedBlogs = response.items.map((item) => ({
        id: item.sys.id, // Dodajemy ID wpisu z Contentful
        title: item.fields.title,
        // Konwersja Rich Text na zwykły tekst
        content: documentToPlainTextString(item.fields.content),
        media: item.fields.media ? item.fields.media.map((m) => m.fields) : [],
      }));
      setBlogs(sanitizedBlogs);
    });
  }, []);

  // Funkcja przycinająca tekst
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  // Funkcja nawigująca do konkretnej strony wpisu
  const handleNavigate = (id) => {
    navigate(`/blog/${id}`); // Nawigacja do odpowiedniej strony wpisu
  };

  return (
    <div id="blogs" className="pt-20 pb-4 lg:mb-35">
      <div className=" mx-auto bg-white text-neutral-900">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 pt-10 text-center font-thin tracking-tight lg:mt-16 lg:text-8xl text-4xl"
        >
          BLOG
          <p className=" pt-4 text-2xl lg:text-4xl tracking-wide">
            Paryż słowami przewodnika
          </p>
        </motion.h1>

        <div className="flex flex-col px-8 max-w-[1400px] mx-auto lg:justify-center w-full">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div
                key={index}
                className="mb-10 flex flex-col md:flex-row items-start w-full lg:space-x-8 cursor-pointer" // Dodajemy cursor-pointer
                onClick={() => handleNavigate(blog.id)} // Obsługa kliknięcia - przenoszenie do strony szczegółowej wpisu
              >
                {/* Sprawdzenie, czy media i plik istnieją */}
                {blog.media.length > 0 && blog.media[0].file && (
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/3 mb-6 flex justify-center drop-shadow-xl"
                  >
                    <img
                      src={`https:${blog.media[0].file.url}`}
                      alt={blog.media[0].title}
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </motion.div>
                )}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full md:w-2/3 p-4 flex flex-col justify-start rounded-lg shadow-xl"
                >
                  <h2 className="text-4xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-neutral-950 font-light tracking-tight text-justify">
                    {truncateText(blog.content, 400)}
                  </p>
                  <p className="pt-4 font-light text-neutral-400 ">
                    (Czytaj dalej...)
                  </p>
                </motion.div>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
