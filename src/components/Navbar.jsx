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

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Strona Główna", to: "app" },
    { name: "O mnie", to: "about" },
    { name: "Moja Oferta", to: "offer" },
    { name: "Wycieczki", to: "tours" },
    { name: "Opinie", to: "review" },
    { name: "Kontakt", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full h-[120px] transition-all duration-300 ease-in-out ${
        scrolling
          ? "bg-custom-gradient-fade h-[50px] py-10 z-20"
          : "bg-transparent py-6"
      } flex items-center px-4`}
    >
      <div className="flex items-center justify-center w-full max-w-[1400px] mx-auto">
        <div className="flex flex-grow items-center">
          <img
            className={`mx-2 transition-all duration-300 ${
              scrolling ? "w-14" : "w-40"
            }`}
            src={logo}
            alt="Logo Joanny Wróblewskiej - przewodnika po Paryżu"
          />
          <ul
            className={`hidden lg:flex items-center justify-center mx-auto space-x-6 ${
              scrolling ? "text-sm font-semibold" : "text-base"
            }`}
          >
            {menuItems.map(({ name, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
                  aria-label={`Przejdź do sekcji ${name}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social Links */}
        <div
          className={`flex items-center justify-center mx-2 gap-6 text-3xl ${
            scrolling ? "text-xl" : "text-3xl"
          }`}
        >
          <a
            href="https://www.facebook.com/joannawroblewskiparyz/?fref=ts"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil Joanny Wróblewskiej na Facebooku"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/przewodnikpoparyzu?igsh=bjRtYmh0NXRiejVr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil Joanny Wróblewskiej na Instagramie"
          >
            <FaInstagram />
          </a>
          <a
            href="https://przewodnikparyzjoanna.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog Joanny Wróblewskiej"
          >
            <FaBlogger />
          </a>
          <a
            href="https://www.youtube.com/@przewodnikpoparyzujoannawr9021"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kanał YouTube Joanny Wróblewskiej"
          >
            <FaYoutube />
          </a>
        </div>
        {/* Mobile Menu */}
        <motion.div
          id="burger"
          onClick={handleClick}
          animate={{
            rotate: nav ? [0, 15, -15, 0] : [0],
            scale: nav ? [1, 1.1, 1] : [1],
          }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-center mx-6 z-10 lg:hidden ${
            scrolling ? "text-2xl" : "text-5xl"
          }`}
        >
          {!nav ? <FaBars className="text-white" /> : <FaTimes />}
        </motion.div>
        <ul
          className={`absolute top-0 right-0 text-3xl w-full h-screen bg-custom-gradient flex flex-col justify-center items-center ${
            !nav ? "hidden" : ""
          }`}
        >
          {menuItems.map(({ name, to }) => (
            <li className="mb-6" key={to}>
              <Link
                onClick={handleClick}
                to={to}
                smooth={true}
                duration={500}
                className="font-extrabold text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition duration-500"
                aria-label={`Przejdź do sekcji ${name}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
