import React from "react";
import planet from "../../assets/images/elements/planet.svg";

const WhyUsSection: React.FC = () => {
  return (
    <section
      id="section4"
      className="min-h-screen h-auto container mx-auto flex flex-col lg:flex-row justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row justify-center w-full">
        <div
          id="sec5"
          className="py-6 flex text-center flex-col w-full lg:w-1/2 text-white p-8 md:p-28 lg:text-left tracking-wider"
        >
          <h1 className="py-6 text-5xl md:text-5xl p-2 font-bold glow-text">
            Why qrio?
          </h1>
          <span className="text-2xl md:text-4xl font-bold text-gray-100 flex text-center align-middle">
            CURATING YOUR BRAND !
          </span>
          <p className="py-3 tracking-wider leading-6 font-bold py-3 text-xl md:text-xl text-gray-400">
            We guide you through a crazy digital galaxy, not as passengers but
            as pilots. Our secret sauce? Quirky strategies, genius creatives,
            and a little bit of magic (okay, a lot).
          </p>
        </div>
        <div
          id="sec6"
          className="flex justify-center items-center w-full lg:w-1/2 p-8 md:p-0"
        >
          <img src={planet} className="h-64 md:h-[600px]" alt="planet" />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
