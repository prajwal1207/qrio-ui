import React from "react";
import logo from "../../assets/images/8793760.png";

const AboutSection: React.FC = () => {
  return (
    <section
      id="section2"
      className="min-h-screen h-auto container mx-auto flex flex-col lg:flex-row justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row justify-center w-full">
        <div
          id="sec1"
          className="flex text-center flex-col w-full lg:w-1/2 text-white p-8 md:p-28 lg:text-left tracking-wider"
        >
          <h1 className="text-4xl md:text-5xl p-2 font-bold glow-text">
            About us
          </h1>
          <span className="text-2xl md:text-3xl font-bold text-gray-100 flex text-center align-middle">
            CURATING YOUR BRAND !
          </span>
          <p className="tracking-wider leading-6 font-bold py-3 text-xl md:text-xl text-gray-400">
            In a world full of 'meh,' Qrio stands out by not just thinking
            outside the box but throwing the box out entirely. Founded on a
            bright sunny day when we decided the world had enough of boring
            marketing, we bring you bespoke strategies crafted with a dash of
            whimsy and a lot of caffeine.
          </p>
        </div>
        <div
          id="sec2"
          className="flex justify-center items-center w-full lg:w-1/2 p-8 md:p-0"
        >
          <img src={logo} className="h-64 md:h-[600px]" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
