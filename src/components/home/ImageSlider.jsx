import React from "react";
import {files} from '../home/SlideFiles.js'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return(
        <div className="w-full m-auto bg-blue-950 h-screen flex justify-center aligns-center flex-col">
            <div className="w-full text-left mt-10 ml-10"><p className="text-white font-bold">OUR TESTIMONIALS</p></div>
            <div className="w-full text-left mt-5 ml-10"><p className="text-4xl text-white">What Customers Say About Us</p></div>
            <div className="w-3/4 m-auto">
            <div className="mt-20 ">
            <Slider {...settings}>
        {
            files.map((d) => (
                <div className="bg-white h-[450px] text-black rounded-xl">
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                    
                    <p className="text-justify text-gray-500">{d.description}</p>
                    </div>
                    <div className="h-56 rounded-t-xl bg-gray-200 flex justify-center items-center">
                        <img src={d.image} alt=""  className="h-44 w-44 rounded-full"/>
                        <div className="ml-5">
                        <p className="text-xl font-semibold ">{d.name}</p>
                        <p className="text-blue-300 text-xl ">{d.location}</p>
                        </div>
                    </div>

                </div>
            ))
        }
        </Slider>
            </div>
        </div>
        </div>
    )
}