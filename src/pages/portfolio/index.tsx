import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LeftGradiantEffect, RightGradiantEffect } from "../home";
import Img from "../../components/Img";
import { PITCHDECK } from "../../constants/constant";

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  useGSAP(() => {
    gsap.to("#page2", {
      x: "-91%", // Smooth horizontal animation
      scrollTrigger: {
        trigger: "#page2",
        // markers: true,
        start: "top 0%", // Start when #page2 hits the top of the viewport
        end: "top -50%", // End after the viewport height worth of scrolling
        scrub: 2, // Smooth scrubbing
        pin: "#content", // Pin the element in place
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <main className="h-[300vh]">
      <section className="h-[60vh] relative flex justify-center items-center">
        <RightGradiantEffect />
        <LeftGradiantEffect />
        <div className="relative flex justify-center items-center  ">
          <span className="absolute top-10 -left-10 text-white text-7xl">
            ✦
          </span>
          <h1 className="text-[15rem] font-bold uppercase text-transparent stroke-1 stroke-white">
            Our Work.
          </h1>
          <span className="absolute bottom-0 -right-2 text-white text-4xl">
            ✦
          </span>
          <span className="absolute bottom-8 -right-10 text-white text-6xl">
            ✦✦
          </span>
        </div>
      </section>
      <section
        id="page2"
        className="flex h-[100vh] w-[1100vw]"
      >
        {PITCHDECK.map((url,index) => {
          return (
            <div  key={index} className="h-[100vh] w-[100vw] flex justify-center items-center">
              <Img src={url} alt="" className="h-[80vh] w-[80vw] rounded-lg " />
            </div>
          );
        })}
      </section>
      <section className="h-[100vh] relative flex items-center justify-center">
      <RightGradiantEffect />
      <LeftGradiantEffect />
      <div className="relative flex justify-center items-center  ">
          <span className="absolute top-10 -left-10 text-white text-7xl">
            ✦
          </span>
          <h1 className="text-[15rem] font-bold uppercase text-transparent stroke-1 stroke-white">
            Thankyou.
          </h1>
          <span className="absolute bottom-0 -right-2 text-white text-4xl">
            ✦
          </span>
          <span className="absolute bottom-8 -right-10 text-white text-6xl">
            ✦✦
          </span>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
