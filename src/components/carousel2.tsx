
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/carousel2.module.css";

export default function Carousel2() {

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 12,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings:  {
                    slidesToShow: 7,
    
                }
    
               
            },
    
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                },
            },
          ]
    };
    return (
        <div className={`${styles.carousel} mt-[15%] w-[100vw] text-beige`}>
            <Slider {...settings}>
                <div>
                <h1>Let&apos;s Talk</h1>
                </div>
                <div>
                <h1> + + +</h1>
                </div>
                <div>
                <h1>Let&apos;s Talk</h1>
                </div>
                <div>
                <h1> + + +</h1>
                </div>
                <div>
                <h1>Let&apos;s Talk</h1>
                </div>
                <div>
                <h1> + + +</h1>
                </div>
                <div>
                <h1>Let&apos;s Talk</h1>
                </div>
                <div>
                <h1> + + +</h1>
                </div>
                <div>
                <h1>Let&apos;s Talk</h1>
                </div>
                <div>
                <h1> + + +</h1>
                </div>
                <div>
                <h1>Let&apos;s Talk</h1>
                </div>
                <div>
                <h1> + + +</h1>
                </div>
                <div>
                <h1>Let&apos;s Talk</h1>
                </div>
                <div>
                <h1> + + +</h1>
                </div>
                
            </Slider>
        </div>
    );
}
