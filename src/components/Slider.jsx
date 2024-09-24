import { useState } from "react";
import Slider from "react-slick";
import pic1 from "../assets/carousel/1.avif"; // Zmiana na AVIF
import pic2 from "../assets/carousel/2.avif";
import pic3 from "../assets/carousel/3.avif";
import pic6 from "../assets/carousel/6.avif";
import pic7 from "../assets/carousel/7.avif";
import pic9 from "../assets/carousel/9.avif";
import pic10 from "../assets/carousel/10.avif";
import pic11 from "../assets/carousel/11.avif";
import pic12 from "../assets/carousel/12.avif";
import pic13 from "../assets/carousel/13.avif";
import pic14 from "../assets/carousel/14.avif";
import pic16 from "../assets/carousel/16.avif";
import pic17 from "../assets/carousel/17.avif";
import pic18 from "../assets/carousel/18.avif";
import pic19 from "../assets/carousel/19.avif";
import pic20 from "../assets/carousel/20.avif";
import pic21 from "../assets/carousel/21.avif";
import pic22 from "../assets/carousel/22.avif";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  pic1,
  pic2,
  pic3,
  pic6,
  pic7,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
  pic21,
  pic22,
];

const captions = [
  "Joanna Wróblewski – Twój przewodnik po Paryżu.",
  "Odkryj ukryte skarby stolicy Francji!",
  "Niezapomniane chwile z profesjonalnym przewodnikiem.",
  "Paryż w całej okazałości – czekam na Ciebie!",
  "Odwiedź magiczne miejsca z moją pomocą.",
  "Doświadcz Paryża jak nigdy dotąd.",
  "Jestem tu, aby spełnić Twoje marzenia podróżnicze.",
  "Niech Paryż stanie się Twoim drugim domem.",
  "Poznaj historie, które kryją się za zabytkami.",
  "Twój czas w Paryżu zasługuje na to, co najlepsze.",
  "Czekam na Ciebie w sercu Paryża!",
  "Wspólnie odkryjemy najpiękniejsze zakątki.",
  "Paryż – miasto, które nigdy nie przestaje zachwycać.",
  "Twój przewodnik po kulturze, sztuce i smakach Paryża.",
  "Przyjdź, a pokażę Ci Paryż oczami lokalnego eksperta.",
  "Zaplanuj swoją przygodę z Joanną Wróblewską!",
  "Zaufaj mi, a odkryjesz prawdziwy Paryż.",
  "Czas na niezapomnianą podróż – tylko ze mną!",
  "Zobacz Paryż w zupełnie nowym świetle.",
  "Moje doświadczenie, Twoja przygoda w Paryżu.",
];

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="overflow-hidden select-none -mx-4">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="relative select-none">
            <picture>
              <source srcSet={image} type="image/avif" />
              <img
                src={image.replace(".avif", ".jpg")} // Alternatywny format
                alt={`Slide ${index + 1}`}
                className="w-full h-[50vh] object-cover lg:h-[60vh]"
              />
            </picture>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-lg font-extralight bg-black bg-opacity-60 p-6 lg:p-14 lg:text-4xl xl:text-4xl text-center">
                {captions[currentSlide]}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
