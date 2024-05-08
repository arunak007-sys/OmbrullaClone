import React, { useRef, useEffect } from "react";
import { files } from '../home/SlideFiles.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function ImageSlider() {
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
        slidesToShow: 2,
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
        <div className="bg-blue-950 min-h-screen flex justify-center items-center flex-col">
            <div className="text-white font-bold text-left mt-10 ml-10 sm:text-center">
                <p className="text-lg sm:text-3xl md:text-xl">OUR TESTIMONIALS</p>
            </div>
            <div className="text-white text-left mt-5 ml-10 sm:text-center">
                <p className="text-2xl sm:text-4xl md:text-5xl">What Customers Say About Us</p>
            </div>
            <div className="w-3/4 mt-20">
                <Slider ref={sliderRef} {...settings}>
                    {files.map((d, index) => (
                        <div key={index} className="bg-white text-black rounded-xl pt-5">
                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <div className="w-full"><RiDoubleQuotesL className="text-blue-700 text-4xl" /></div>
                                <p className="text-gray-500 text-center">{d.description}</p>
                            </div>
                            <div className="h-56 bg-gray-200 flex justify-center items-center ">
                                <img src={d.image} alt="" className="h-32 w-32 rounded-full" />
                                <div className="ml-3">
                                    <p className="text-lg font-semibold">{d.name}</p>
                                    <p className="text-blue-300 text-lg">{d.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
