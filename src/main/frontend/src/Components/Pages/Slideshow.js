import React from 'react';
import Slider from 'react-slick';
import logo from './GAMTlogo.png';
import building from './GAMTlogo.png';
import personnel from './GAMTlogo.png';
import mission from './GAMTlogo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
    const slides = [
        { title: "Our Logo", image: logo, description: "Welcome to our company" },
        { title: "Our Building", image: building, description: "Where innovation happens" },
        { title: "Our Team", image: personnel, description: "The brilliant minds behind our success" },
        { title: "Our Mission & Vision", image: mission, description: "Driven by excellence, inspired by our mission" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true
    };

    return (
        <div className="slideshow-container">
            <h2 className="text-center font-bold text-2xl mb-5 text-teal-800">Our Company</h2>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={slide.title} className="w-full h-auto" />
                        <div className="text-center mt-4">
                            <h3 className="text-xl font-bold text-teal-900">{slide.title}</h3>
                            <p className="text-gray-700">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Slideshow;
