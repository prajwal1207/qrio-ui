// src/components/TestimonialCarousel.js

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.module.scss";
import logo from "../../assets/images/QRIO.png";
import { GoDotFill } from "react-icons/go";
import Slider from "react-slick";

const testimonials = [
  {
    title: "Great Service",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brandPhoto: logo,
  },
  {
    title: "Highly Recommend",
    testimoanial:
      "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    brandPhoto: logo,
  },
  {
    title: "Excellent Support",
    testimonial:
      "In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.",
    brandPhoto: logo,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: () => (
      <div className="custom-dot text-white">
        <GoDotFill />
      </div>
    ),
  };

  return (
    <div className="testimonial-carousel" style={{border:'2px sold red'}} >
      <Slider  {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{ border: "2px solid white" }}
            className="testimonial-slide"
          >
            <img
              src={testimonial.brandPhoto}
              style={{ height: "300px", border: "2px solid red" }}
              alt={testimonial.title}
              className="brand-photo"
            />
            <h3 className="text-white">{testimonial.title}</h3>
            <p className="text-white">{testimonial.testimonial}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
