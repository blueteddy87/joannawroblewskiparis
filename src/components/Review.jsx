import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { MdFormatQuote } from "react-icons/md";
import { motion } from "framer-motion";

const Review = () => {
  const review = [
    {
      name: "Beata Czerwińska",
      source: "facebook",
      review:
        "Polecam serdecznie panią Joannę Wróblewską, dwukrotnie zwiedzałam z tą przewodnik Louvre, pasjonatka z ogromną wiedzą, niezwykle taktowna, ciepła i serdeczna osoba😊😊",
      link: "https://www.facebook.com/search/top/?q=zapraszam%20na%20spacery%20do%20Wersalu",
    },
    {
      name: "jadwigasienkiewicz3643",
      source: "youtube",
      review:
        "Przepiękny głos. Opowieść snuje się jak tajemnicza baśń. Tempo pozwala na zadumę, refleksję i przemyślenie tego, co słyszę. Ciepło robi się na duszy. Dawno nie słyszałam aby ktoś tak pięknie opowiadał o zwiedzanych miejscach. Gratuluję, to dar!",
      link: "https://www.youtube.com/watch?v=Kuhw78J-Au0",
    },
    {
      name: "Beata Wierus",
      source: "facebook",
      review:
        "Serdecznie pozdrawiam mam nadzieję że jeszcze się spotkamy ?..Paryż magiczny jeśli tylko jeszcze wrócę to chciałabym zobaczyć Pani śladami ❤️dziękujemy",
      link: "https://www.facebook.com/reel/1049436806528357",
    },
    {
      name: "Irena Molenda",
      source: "facebook",
      review:
        "Przemiła i bardzo kompetentna osoba. Polecam każdemu, kto chce poznać miasto.❤️",
      link: "https://www.facebook.com/reel/1049436806528357",
    },
    {
      name: "romanmadue1",
      source: "youtube",
      review:
        "Świetne! Joanno - gratulacje! Z przyjemnością wysłuchałem. A jak wiesz kolegów przewodników (także nielicencjonowanych nie łatwo uwieść! Raz jeszcze z całego serca gratuluję! Jerzy R. Kaczyński",
      link: "https://www.youtube.com/watch?v=Kuhw78J-Au0",
    },
    {
      name: "Anna Habiera Licencjonowany przewodnik po Francji AkwitAnia",
      source: "facebook",
      review: "Luwr tylko z Asią 💖",
      link: "https://www.facebook.com/joannawroblewskiparyz/posts/pfbid0P8Y4N1MbuyzTFjVQFeXhfmKyPFFRxgHxCezyXrWDtXvdM3p4K1vhDcKvsi1fA27tl?rdid=O0guVVUpB9DqLsI2",
    },
    {
      name: "Olga Moździerz",
      source: "facebook",
      review:
        "Serdecznie pozdrawiamy i jeszcze raz dziękujemy za wspólnie spędzony czas !!!",
      link: "https://www.facebook.com/joannawroblewskiparyz/posts/pfbid05gVBM7sEZBFxmoVA5ARqxSGGCo3GB6o3HoxHU998qtqnE6fWaNWaBkxB3dWD9Bbkl?rdid=LKbZ9TYQkdhVolup",
    },
    {
      name: "Bogusław Rzeźnicki",
      source: "facebook",
      review:
        "Pani Joanno, z Panią każda ulica i zakątek Paryża jest dziełem sztuki! Dziękujemy za wszystko!!!",
      link: "https://www.facebook.com/joannawroblewskiparyz/posts/pfbid02FBn4qjEHh9VwDnZPWTf9L7uiCB9ceLbCLUBymeA6e52tsg1LR8XWqn1oSYBGfVwRl?rdid=xyR0W4fRgK9YPKuh",
    },
    {
      name: "barbarahoussa7216",
      source: "youtube",
      review:
        "Każda wizyta w towarzystwie Joanny wnosi nowe spojrzenie na artystow na temat ktorych , jak nam  by sie wydawalo  , juz wszystko słyszeliśmy.  Na tym polega jej talent. Malowniczy kadr i ciekawe materialy . Czekamy na nastepne wizyty",
      link: "https://www.youtube.com/watch?v=B5I7GWEutxs",
    },
    {
      name: "Anna Mrozińska",
      source: "facebook",
      review: "Było fantastycznie, dziękuję 👍☀️☀️☀️",
      link: "https://www.facebook.com/joannawroblewskiparyz/posts/pfbid0mum4y7n9AiB3HBigotRTJbup2Fqw8Q6PrhvksKshpHMNXefdeAa8cTNxmAEJEEjVl?rdid=32WAMaX7uV5GfCUI",
    },
  ];

  // Stan do przechowywania ustawień slidera
  const [sliderSettings, setSliderSettings] = useState(
    getSliderSettings(window.innerWidth)
  );

  // Funkcja do ustalania ustawień slidera w zależności od szerokości ekranu
  function getSliderSettings(width) {
    if (width < 1024) {
      return {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Dodaj autoplay
        autoplaySpeed: 4000,
        pauseOnHover: true,
      };
    } else if (width < 1540) {
      return {
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, // Dodaj autoplay
        autoplaySpeed: 4000, // Czas w milisekundach (3 sekundy na slajd)
        pauseOnHover: true,
      };
    } else {
      return {
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Dodaj autoplay
        autoplaySpeed: 5000, // Czas w milisekundach (3 sekundy na slajd)
        pauseOnHover: true,
      };
    }
  }

  // Hook do monitorowania rozmiaru okna
  useEffect(() => {
    const handleResize = () => {
      setSliderSettings(getSliderSettings(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Funkcja do renderowania ikon źródła
  const renderIcon = (source) => {
    switch (source) {
      case "facebook":
        return <FaFacebook className="text-blue-600 text-4xl" />;
      case "instagram":
        return <FaInstagram className="text-pink-600 text-4xl" />;
      case "youtube":
        return <FaYoutube className="text-red-600 text-4xl" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-3/4 mx-auto mt-100"
    >
      <div className="mt-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Co o mnie piszą?
        </motion.h1>
        <Slider {...sliderSettings}>
          {review.map((r, index) => (
            <div
              className="bg-white h-[570px] text-black rounded-xl"
              key={index}
            >
              <div className="rounded-t-xl h-20 bg-gradient-to-r from-pink-700 via-purple-600 to-blue-500 flex justify-center items-center">
                <BsChatRightQuoteFill className="text-white size-14" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold m-4 text-center">
                  {r.name}
                </p>
                {renderIcon(r.source)}

                {/* Cytat */}
                <div className="relative flex flex-col justify-center items-center text-center p-4">
                  {/* Ikona cytatu na początku */}
                  <MdFormatQuote
                    size={30}
                    className="absolute -top-1 -left-2 text-gray-600"
                  />

                  {/* Treść recenzji */}
                  <p className="text-lg italic">{r.review}</p>

                  {/* Ikona cytatu na końcu */}
                  <MdFormatQuote
                    size={30}
                    className="absolute -bottom-1 -right-2 text-gray-600"
                  />
                </div>

                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 hover:bg-fuchsia-800 transition-colors duration-300 text-white font-bold py-2 px-6 rounded-full mx-auto flex absolute bottom-4 h-12 items-center justify-center"
                >
                  Przeczytaj
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Review;
