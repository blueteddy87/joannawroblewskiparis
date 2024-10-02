import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useContentful from "./contentful";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuLayoutList } from "react-icons/lu";

const BlogCard = () => {
  const { id } = useParams(); // Pobieramy ID wpisu z URL
  const [blog, setBlog] = useState(null); // Stan na pojedynczy wpis
  const [allBlogs, setAllBlogs] = useState([]); // Stan na wszystkie wpisy do nawigacji
  const { getBlogs } = useContentful();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getBlogs().then((response) => {
      setAllBlogs(response.items);
      const blogItem = response.items.find((item) => item.sys.id === id); // Znajdujemy odpowiedni wpis na podstawie ID
      if (blogItem) {
        setBlog({
          id: blogItem.sys.id,
          title: blogItem.fields.title,
          content: documentToPlainTextString(blogItem.fields.content),
          media: blogItem.fields.media
            ? blogItem.fields.media.map((m) => m.fields)
            : [],
        });
      }
    });
  }, [id]);

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
            className="flex items-center mr-9 px-6 py-6 lg:px-4 lg:py-4  text-xl lg:text-4xl bg-gray-100 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
          >
            <LuLayoutList className="" />
          </button>

          <button
            onClick={() => navigateToBlog("prev")}
            className="flex items-center px-6 py-6 lg:px-4 lg:py-4  text-xl lg:text-4xl bg-gray-100 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
            disabled={allBlogs.findIndex((item) => item.sys.id === id) === 0}
          >
            <FaArrowLeft className="rounded-full" />
          </button>
          <button
            onClick={() => navigateToBlog("next")}
            className="flex items-center px-6 py-6 lg:px-4 lg:py-4  text-xl lg:text-4xl bg-gray-100 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
            disabled={
              allBlogs.findIndex((item) => item.sys.id === id) ===
              allBlogs.length - 1
            }
          >
            <FaArrowRight className="" />
          </button>
        </div>

        <div className="my-20 pt-2 text-center font-thin tracking-tight lg:mt-16 lg:text-8xl text-4xl">
          <h1>{blog.title}</h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6 max-w-[1400px] mx-auto px-8">
          <div className="lg:w-2/3">
            {/* Tekst będzie zajmował 2/3 szerokości */}
            <div className="text-lg font-light tracking-tight text-justify">
              <p>{blog.content}</p>
            </div>
          </div>

          {blog.media.length > 0 && blog.media[0].file && (
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              {/* Obrazek będzie zajmował 1/3 szerokości */}
              <img
                src={`https:${blog.media[0].file.url}`}
                alt={blog.media[0].title}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
