import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination CSS
import TestimonialCard from "./TestimonialCard";
import { testimonial, TestimonyType } from "../../constants/constant";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

const TestimonialCarousel = () => {
  return (
    <Swiper
      effect="coverflow"
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Slows down the autoplay for better effect
      coverflowEffect={{
        rotate: 50, // Rotate the slides
        stretch: 0, // Stretch space between slides
        depth: 100, // Adds perspective depth
        modifier: 1, // Modifier for the effect
        slideShadows: false, // Disable shadows for cleaner look
        scale: 0.9, // Set scale of slides (default is 0.8)
      }}
      grabCursor
      loop
      centeredSlides
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay, EffectCoverflow]}
      className="swiper_container"
      breakpoints={{
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is < 768px
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {testimonial.map((testimony: TestimonyType, index: number) => (
        <SwiperSlide
          className="flex justify-center items-center p-10"
          key={index}
        >
          <TestimonialCard
            description={testimony.description}
            name={testimony.name}
            position={testimony.postion}
            logo={testimony.logo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
