import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../../assets/images/8793760.png";
import { GalaxyParallax } from "../../components/Gaxaxy";

const HomePage = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#hero", {
      x: -1000,
      duration: 2,
    });
    gsap.from(`#text`, {
      y: -500,
      opacity: 0.3,
      duration: 1,
      delay: 0.5,
      scrollTrigger: "#text",
    });
  });

  return (
    <main>
      <GalaxyParallax>
        <section className="h-screen container mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col lg:flex-col p-16  justify-center w-full text-white">
            <h1 className="text-4xl md:text-8xl p-2 font-bold text-fuchsia-600">
              Welcome to Qrio
            </h1>
            <span className="text-2xl md:text-5xl text-gray-500">- Curating Your Brand!</span>
            <p className="text-2xl md:text-4xl">
              Discover Qrio, where creativity meets quirky, and marketing
              strategies come with a side of pizzazz. Dive into a world where
              your brand doesn’t just grow, it thrives with flair!
            </p>
          </div>
        </section>
        <section className="h-screen container mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex text-center flex-col w-full lg:w-1/2  text-white p-8 md:p-28 lg:text-left  tracking-wider">
              <h1 className="text-4xl md:text-6xl p-2 font-bold ">
                Welcome to Qrio
              </h1>
              <span className="text-2xl md:text-4xl">Curating Your Brand!</span>
              <p className="text-lg md:text-2xl py-5">
                Experience the creative pulse of Qrio Marketing Agency. Dive
                into our diverse range of services from digital marketing to
                photography and see how we can elevate your brand's presence.
                Explore our site to discover our innovative approach!
              </p>
            </div>
            <div className="flex justify-center items-center w-full lg:w-1/2 p-8 md:p-0">
              <img src={logo} className="h-64 md:h-[600px]" alt="logo" />
            </div>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center"></section>
        <section className="h-screen flex items-center justify-center"></section>
      </GalaxyParallax>
    </main>
  );
};

export default HomePage;
