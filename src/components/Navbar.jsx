import logo from "../assets/logo_p.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-40" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.facebook.com/joannawroblewskiparyz/?fref=ts"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a href="https://przewodnikparyzjoanna.blogspot.com/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://przewodnikparyzjoanna.blogspot.com/" target="_blank">
          <FaBlogger />
        </a>
        <a
          href="https://www.youtube.com/@przewodnikpoparyzujoannawr9021"
          target="_blank"
        >
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
