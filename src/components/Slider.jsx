import Slider from "react-slick";
import pic1 from "../assets/carousel/1.png";
import pic2 from "../assets/carousel/2.png";
import pic3 from "../assets/carousel/3.png";
import pic4 from "../assets/carousel/4.png";
import pic5 from "../assets/carousel/5.png";
import pic6 from "../assets/carousel/6.png";
import pic7 from "../assets/carousel/7.png";
import pic8 from "../assets/carousel/8.png";
import pic9 from "../assets/carousel/9.png";
import pic10 from "../assets/carousel/10.png";
import pic11 from "../assets/carousel/11.png";
import pic12 from "../assets/carousel/12.png";
import pic13 from "../assets/carousel/13.png";
import pic14 from "../assets/carousel/14.png";
import pic15 from "../assets/carousel/15.png";
import pic16 from "../assets/carousel/16.png";
import pic17 from "../assets/carousel/17.png";
import pic18 from "../assets/carousel/18.png";
import pic19 from "../assets/carousel/19.png";
import pic20 from "../assets/carousel/20.png";
import pic21 from "../assets/carousel/21.png";
import pic22 from "../assets/carousel/22.png";

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

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="overflow-hidden select-none -mx-4">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="h-full select-none">
            {" "}
            {/* Dodano select-none */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover select-none" // Dodano select-none
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
