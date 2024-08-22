import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination CSS
import TestimonialCard from "./TestimonialCard";
import { testimonial, TestimonyType } from "../../constants/constant";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialCarousel = () => {
  return (
    <Swiper
      effect="coverflow"
      slidesPerView={1}
      autoplay={{delay:1000}}
      coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
      className="swiper_container"
      grabCursor
      centeredSlides
      loop
      pagination={{ clickable: true }}
      modules={[Pagination,Autoplay]}
    >
      {testimonial.map((testimony: TestimonyType, index: number) => (
        <SwiperSlide className="flex justify-center p-20"  key={index} >
          <TestimonialCard
            description={testimony.description}
            name={testimony.name}
            position={testimony.postion}
            logo={testimony.logo} // Corrected the typo from "postion"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;



