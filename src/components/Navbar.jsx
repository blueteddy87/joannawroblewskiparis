import React, { useState, useEffect } from "react";
import logo from "../assets/logo_p.png";
import { FaFacebook, FaBlogger, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full h-[120px] transition-all duration-300 ease-in-out ${
        scrolling
          ? "bg-custom-gradient-fade h-[50px] py-10 z-20"
          : "bg-transparent py-6"
      } flex items-center px-4`}
    >
      <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto">
        <div className="flex flex- items-center space-x-4 flex-grow">
          <img
            className={`mx-2 transition-all duration-300 ${
              scrolling ? "w-14" : "w-40"
            }`}
            src={logo}
            alt="logo"
          />
          <ul
            className={`hidden xl:flex pl-20 space-x-6  ${
              scrolling ? "text-sm font-semibold" : "text-base"
            }`}
          >
            <li>
              <Link
                to="app"
                smooth={true}
                duration={500}
                className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className=" font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
              >
                O mnie
              </Link>
            </li>
            <li>
              <Link
                to="offer"
                smooth={true}
                duration={500}
                className=" font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
              >
                Oferta
              </Link>
            </li>
            <li>
              <Link
                to="tours"
                smooth={true}
                duration={500}
                className=" font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
              >
                Wycieczki
              </Link>
            </li>
            <li>
              <Link
                to="review"
                smooth={true}
                duration={500}
                className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
              >
                Opinie
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className=" font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`flex items-center justify-center gap-6 text-3xl ${
            scrolling ? "text-xl" : "text-3xl"
          }`}
        >
          <a
            href="https://www.facebook.com/joannawroblewskiparyz/?fref=ts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://przewodnikparyzjoanna.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://przewodnikparyzjoanna.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaBlogger />
          </a>
          <a
            href="https://www.youtube.com/@przewodnikpoparyzujoannawr9021"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
