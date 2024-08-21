import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination CSS
import TestimonialCard from "./TestimonialCard";
import { testimonial, TestimonyType } from "../../constants/constant";
import { Pagination } from "swiper/modules";

const TestimonialCarousel = () => {
  return (
    <Swiper
      effect="coverflow"
      slidesPerView="auto"
      coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
      className="swiper_container"
      grabCursor
      centeredSlides
      loop
      pagination={{ clickable: true }} // Enable pagination with clickable dots
      modules={[Pagination]} // Include Pagination module
    >
      {testimonial.map((testimony: TestimonyType, index: number) => (
        <SwiperSlide key={index}>
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



// import { useState } from "react";
// import { testimonial, TestimonyType } from "../../constants/constant.tsx";
// import TestimonialCard from "./TestimonialCard";

// const TestimonialCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrevClick = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? testimonial.length - 3 : prevIndex - 1
//     );
//   };

//   const handleNextClick = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === testimonial.length - 3 ? 0 : prevIndex + 1
//     );
//   };

//   const getCardClass = (index: number, activeIndex: number) => {
//     if (index === activeIndex) return "transform scale-100 z-20"; // Middle card (focused) larger
//     if (index === (activeIndex + 1) % testimonial.length)
//       return "transform scale-80 z-10 opacity-80"; // Next card smaller
//     if (index === (activeIndex - 1 + testimonial.length) % testimonial.length)
//       return "transform scale-80 z-10 opacity-80"; // Previous card smaller
//     return "hidden";
//   };

//   return (
//     <div className="relative border border-red-300 w-full flex justify-center items-center ">
//       <div className="flex justify-center items-center space-x-4">
//         {testimonial.map((testimony: TestimonyType, index: number) => (
//           <div
//             key={index}
//             className={`transition-transform duration-500 ${getCardClass(
//               index,
//               activeIndex
//             )}`}
//           >
//             <TestimonialCard
//               description={testimony.description}
//               name={testimony.name}
//               position={testimony.postion}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="border border-red-300">vj</div>
//     </div>
//   );
// };

// export default TestimonialCarousel;
