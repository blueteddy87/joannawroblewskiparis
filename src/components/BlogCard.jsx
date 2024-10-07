import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useContentful from "./contentful";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuLayoutList } from "react-icons/lu";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // Import Rich Text renderer

const BlogCard = () => {
  const { id } = useParams(); // Pobieramy ID wpisu z URL
  const [blog, setBlog] = useState(null); // Stan na pojedynczy wpis
  const [allBlogs, setAllBlogs] = useState([]); // Stan na wszystkie wpisy do nawigacji
  const { getBlogs } = useContentful();
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs().then((response) => {
      setAllBlogs(response.items);
      const blogItem = response.items.find((item) => item.sys.id === id); // Znajdujemy odpowiedni wpis na podstawie ID
      if (blogItem) {
        setBlog({
          id: blogItem.sys.id,
          title: blogItem.fields.title,
          content: blogItem.fields.content, // Rich Text content
          media: blogItem.fields.media
            ? blogItem.fields.media.map((m) => m.fields)
            : [],
        });
      }
    });
  }, [id, getBlogs]);

  // Funkcja obsługująca nawigację do poprzedniego i następnego bloga
  const navigateToBlog = (direction) => {
    const currentIndex = allBlogs.findIndex((item) => item.sys.id === id);

    if (direction === "prev" && currentIndex > 0) {
      const prevBlog = allBlogs[currentIndex - 1];
      navigate(`/blog/${prevBlog.sys.id}`);
    } else if (direction === "next" && currentIndex < allBlogs.length - 1) {
      const nextBlog = allBlogs[currentIndex + 1];
      navigate(`/blog/${nextBlog.sys.id}`);
    }
  };

  // Funkcja do nawigacji powrotnej na stronę bloga
  const handleGoBack = () => {
    navigate("/blog");
  };

  if (!blog) {
    return <p>Loading...</p>; // Wyświetlamy, dopóki wpis się nie załaduje
  }

  return (
    <div id="blog-post" className="pt-40 pb-4 lg:mb-35">
      <div className="mx-auto min-h-screen bg-white text-neutral-900">
        {/* Sekcja przycisków nawigacyjnych */}
        <div className="flex justify-center space-x-4 pt-8 mb-8">
          <button
            onClick={handleGoBack}
            className="flex items-center mr-9 px-6 py-6 lg:px-4 lg:py-4 text-xl lg:text-4xl bg-gray-100 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
          >
            <LuLayoutList />
          </button>

          <button
            onClick={() => navigateToBlog("prev")}
            className="flex items-center px-6 py-6 lg:px-4 lg:py-4 text-xl lg:text-4xl bg-gray-100 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
            disabled={allBlogs.findIndex((item) => item.sys.id === id) === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => navigateToBlog("next")}
            className="flex items-center px-6 py-6 lg:px-4 lg:py-4 text-xl lg:text-4xl bg-gray-100 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
            disabled={
              allBlogs.findIndex((item) => item.sys.id === id) ===
              allBlogs.length - 1
            }
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="my-20 pt-2 text-center font-thin tracking-tight lg:mt-16 lg:text-6xl text-4xl">
          <h1>{blog.title}</h1>
        </div>
        <div className="lg:flex lg:space-x-6 max-w-[1400px] mx-auto px-8">
          <div className="lg:w-2/3">
            {/* Tekst będzie zajmował 2/3 szerokości */}
            <div className="prose lg:prose-xl text-lg font-light tracking-tight text-justify">
              {/* Renderowanie Rich Text */}
              {documentToReactComponents(blog.content)}
            </div>
          </div>

          <div className="lg:w-1/3 mb-8 lg:mb-0">
            {/* Obrazki będą zajmować 1/3 szerokości */}
            {blog.media.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 grid-flow-row-dense">
                {blog.media.map((mediaItem, index) => (
                  <img
                    key={index}
                    src={`https:${mediaItem.file.url}`}
                    alt={mediaItem.title}
                    className={`rounded-lg object-cover w-full h-auto ${
                      index % 2 === 0 ? "col-span-2 row-span-2" : ""
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
