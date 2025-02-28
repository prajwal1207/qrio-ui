import {  useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef1 = useRef(null);

  useGSAP(() => {
    const marquee1 = marqueeRef1.current;
    gsap.to(marquee1, {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
      scrollTrigger: {
        trigger: marquee1,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="py-8 overflow-hidden relative w-full">
      <div className="absolute inset-0 z-10">
        <div className="overflow-hidden whitespace-nowrap bg-purple-700 p-4">
          <div ref={marqueeRef1} className="flex space-x-8">
            {[...Array(200)].map((_, i) => (
              <span key={i} className="text-3xl font-bold text-white">
                TESTIMONIALS*
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
