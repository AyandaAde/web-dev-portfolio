
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
 
    const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
            breakpoint: 1024,
            settings:  {
                slidesToShow: 3,

            }

           
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        },
      ]
    };
    return (
      <div className="bg-black w-[93%]">
        <Slider {...settings}>
          <div className="w-[100px]">
          <Image src="/logo (6).svg" className="w-[75%] sm:w-[50%]" width={91.91} height={21.38} alt="client logo"/>
          </div>
          <div className="w-[100px]">
          <Image src="/logo (1).svg" className="w-[75%] sm:w-[50%]" width={140} height={30} alt="client logo"/>
          </div>
          <div className="w-[100px]">
          <Image src="/logo (2).svg" className="w-[75%] sm:w-[50%]" width={52.5} height={35} alt="client logo"/>
          </div>
          <div className="w-[100px]">
          <Image src="/logo (3).svg" className="w-[75%] sm:w-[50%]" width={78} height={30} alt="client logo"/>
          </div>
          <div className="w-[10s0px]">
            <Image src="/logo (4).svg" className="w-[75%] sm:w-[50%]" width={151} height={19} alt="client logo"/>
          </div>
          <div className="w-[100px]">
            <Image src="/logo (5).svg" className="" width={35.45} height={30} alt="client logo"/>
          </div>
        </Slider>
      </div>
    );
  }
