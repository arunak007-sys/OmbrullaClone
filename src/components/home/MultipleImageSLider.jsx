import React, { useRef, useEffect } from "react";
import { customers } from '../home/customers.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function MultipleImageSlider() {
    const customers = [
        "https://www.ombrulla.com/best-western.webp",
        "https://www.ombrulla.com/emirates.webp",
        "https://www.ombrulla.com/wild-leaf.webp",
        "https://www.ombrulla.com/dubai-festival-city.webp",
        "https://www.ombrulla.com/best-western.webp",
        "https://www.ombrulla.com/azelit.webp",
        "https://www.ombrulla.com/suja.webp",
        "https://www.ombrulla.com/damac.webp",
        "https://www.ombrulla.com/burger-king.webp",
        "https://www.ombrulla.com/planet-fitness.webp"
    ]
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        const interval = setInterval(() => {
            if (slider) {
                slider.slickNext(); 
            }
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false, 
        arrows: false, 
        pauseOnHover: true, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1 
                }
            }
        ]
    };

    return (
        <div className="bg-white-950 min-h-screen flex justify-center items-center flex-col">
            <div className="text-black font-bold text-left mt-10 ml-10 sm:text-center">
                <p className="text-sm sm:text-3xl md:text-xl">OUR CUSTOMERS</p>
            </div>
            <div className="text-white text-left mt-5 ml-10 sm:text-center">
                <p className="text-4xl font-bold text-black sm:text-4xl md:text-5xl">They Trust Us</p>
            </div>
            <div className="w-3/4 mt-20">
                <Slider ref={sliderRef} {...settings}>
                    {customers.map((d, index) => (
                        <div key={index} className="bg-white text-black rounded-xl">
                            <div className="h-56 flex justify-center items-center ">
                                <img src={d} alt="" className="h-32 w-32 rounded-full" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
