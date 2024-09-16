import { review } from "../constants"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { BsChatRightQuoteFill } from "react-icons/bs";
import { MdFormatQuote } from "react-icons/md";


const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,           // Zwiększ speed, aby przewijanie było płynniejsze
        slidesToShow: 3,
        slidesToScroll: 3,
        //autoplay: true,        // Dodaj autoplay
        //autoplaySpeed: 5000,   // Czas w milisekundach (3 sekundy na slajd)
        pauseOnHover: true,    // Zatrzymaj przewijanie na hover (opcjonalne)
    };
    const renderIcon = (source) => {
        switch(source) {
            case 'facebook':
                return <FaFacebook className="text-blue-600 text-4xl" />;
            case 'instagram':
                return <FaInstagram className="text-pink-600 text-4xl" />;
            case 'youtube':
                return <FaYoutube className="text-red-600 text-4xl" />;
            default:
                return null;
        }
    }
  return (
<div className="w-3/4 m-auto">
    <div className="mt-20">
        <Slider {...settings}>
            {review.map((r, index) => (
                <div className="bg-white h-[450px] text-black rounded-xl" key={index}>
                    <div className="rounded-t-xl h-20 bg-gradient-to-r from-pink-700 via-purple-600 to-blue-500 flex justify-center items-center">
                        <BsChatRightQuoteFill className="text-white size-14"/>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <p className="text-xl font-semibold">{r.name}</p>
                        {renderIcon(r.source)}

                        {/* Cytat */}
                        <div className="relative flex flex-col justify-center items-center text-center p-4">
                            {/* Ikona cytatu na początku */}
                            <MdFormatQuote size={30} className="absolute -top-1 -left-2 text-gray-600" />
                            
                            {/* Treść recenzji */}
                            <p className="text-lg italic">
                                {r.review}
                            </p>
                            
                            {/* Ikona cytatu na końcu */}
                            <MdFormatQuote size={30} className="absolute -bottom-1 -right-2 text-gray-600" />
                        </div>

                        <a 
                          href={r.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-indigo-800 hover:bg-fuchsia-800 transition-colors duration-300 text-white font-bold py-2 px-6 rounded-full mx-auto flex absolute bottom-4 h-12 items-center justify-center "
                        >
                            Przeczytaj
                        </a>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
</div>

        
  )
}

export default Review