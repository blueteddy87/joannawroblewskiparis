import { useState, useEffect } from "react";
import logo from "../assets/logo_p.png";
import {
  FaFacebook,
  FaBlogger,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";

import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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
      <div className="flex items-center justify-center w-full max-w-[1400px] mx-auto">
        <div className="flex flex- items-center flex-grow">
          <img
            className={`mx-2 transition-all duration-300 ${
              scrolling ? "w-14" : "w-40"
            }`}
            src={logo}
            alt="logo"
          />
          {/* Menu */}
          <ul
            className={`hidden lg:flex items-center justify-center mx-auto space-x-6 lg:space-x-4  ${
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
                className=" font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500 whitespace-nowrap"
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
          className={`flex items-center justify-center mx-2 gap-6 text-3xl ${
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
        <motion.div
          id="burger"
          onClick={handleClick}
          animate={{
            rotate: nav ? [0, 15, -15, 0] : [0],
            scale: nav ? [1, 1.1, 1] : [1],
          }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-center mx-6 z-10  lg:hidden ${
            scrolling ? "text-2xl" : "text-5xl"
          }`}
        >
          {!nav ? <FaBars className="text-white" /> : <FaTimes />}
        </motion.div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 right-0 text-3xl w-full h-screen bg-custom-gradient flex flex-col justify-center items-center"
          }
        >
          <li className="mb-6">
            <Link
              onClick={handleClick}
              to="app"
              smooth={true}
              duration={500}
              className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
            >
              Home
            </Link>
          </li>
          <li className="mb-6">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={500}
              className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500 whitespace-nowrap"
            >
              O mnie
            </Link>
          </li>
          <li className="mb-6">
            <Link
              onClick={handleClick}
              to="offer"
              smooth={true}
              duration={500}
              className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
            >
              Oferta
            </Link>
          </li>
          <li className="mb-6">
            <Link
              onClick={handleClick}
              to="tours"
              smooth={true}
              duration={500}
              className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
            >
              Wycieczki
            </Link>
          </li>
          <li className="mb-6">
            <Link
              onClick={handleClick}
              to="review"
              smooth={true}
              duration={500}
              className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
            >
              Opinie
            </Link>
          </li>
          <li className="mb-6">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
              className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
