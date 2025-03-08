import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination CSS
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TESTIMONIAL, TestimonyType } from "../../constants/constant";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  return (
    <Swiper
      // effect="coverflow"
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 0, // No rotation for a clean effect
        stretch: 0,
        depth: 150, // Increase depth for better 3D effect
        modifier: 2.5, // Stronger scale effect
        slideShadows: false,
        scale: 0.8, // Default scale
      }}
      grabCursor
      loop
      centeredSlides
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay, EffectCoverflow]}
      className="swiper_container"
      breakpoints={{
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      }}
    >
      {TESTIMONIAL.map((testimony: TestimonyType, index: number) => (
        <SwiperSlide
          key={index}
          className="swiper-slide-custom flex justify-center items-center p-10"
        >
          <TestimonialCard
            companyName={testimony.name}
            testimonialText={testimony.description}
            rating={testimony.rating}
            imageUrl={testimony.logo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
