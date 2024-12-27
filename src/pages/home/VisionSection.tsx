// sections/VisionSection.tsx
import React from "react";
import robot from "../../assets/images/elements/robot.svg";

const VisionSection: React.FC = () => {
  return (
    <section
      id="section3"
      className="min-h-screen h-auto container mx-auto flex flex-col lg:flex-row justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row justify-center w-full">
        <div
          id="sec3"
          className="flex justify-center items-center w-full lg:w-1/2 p-8 md:p-0"
        >
          <img src={robot} className="h-64 md:h-[600px]" alt="robot" />
        </div>
        <div
          id="sec4"
          className="flex text-center flex-col w-full lg:w-1/2 text-white p-8 md:p-28 lg:text-left tracking-wider"
        >
          <h1 className="text-5xl md:text-5xl font-bold glow-text ">
            Vision and Mission
          </h1>
          <span className="py-2 text-2xl md:text-4xl font-bold text-gray-100 flex text-center align-middle">Curating Your Brand!</span>
          <p className="py-2 tracking-wider leading-6 font-bold py-3 text-xl md:text-xl text-gray-400">
            Our vision? To paint the digital world purple (and maybe a few other
            colors). Our mission? To catapult your brand into the spotlight with
            strategies so fresh, your competitors will want to steal them (but
            they can’t, because we’re that good).
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
