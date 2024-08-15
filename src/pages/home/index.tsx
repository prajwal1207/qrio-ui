import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/images/8793760.png";
import ServiceCard from "../../components/Cards/ServiceCard";
import { GalaxyParallax } from "../../components/Gaxaxy";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useGSAP(() => {
    gsap.from("#sec1", {
      x: -1000,
      duration: 1,
    });

    gsap.from("#sec2", {
      x: 500,
      duration: 1,
    });
  });

  return (
    <main>
      <GalaxyParallax>
        <section className="h-screen container mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col lg:flex-col p-16  justify-center w-full text-white">
            <h1 className="text-5xl md:text-8xl p-2 font-bold text-fuchsia-600">
              Welcome to Qrio
            </h1>
            <span className="text-2xl md:text-5xl text-gray-500">
              - Curating Your Brand!
            </span>
            <p className="text-xl md:text-4xl">
              Discover Qrio, where creativity meets quirky, and marketing
              strategies come with a side of pizzazz. Dive into a world where
              your brand doesn’t just grow, it thrives with flair!
            </p>
          </div>
        </section>
        <section
          id="section2"
          className="h-screen container mx-auto flex flex-col lg:flex-row justify-center items-center"
        >
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div
              id="sec1"
              className="flex text-center flex-col w-full lg:w-1/2  text-white p-8 md:p-28 lg:text-left  tracking-wider"
            >
              <h1 className="text-5xl md:text-6xl p-2 font-bold ">
                Welcome to Qrio
              </h1>
              <span className="text-2xl md:text-4xl">Curating Your Brand!</span>
              <p className="text-xl md:text-2xl py-5">
                Experience the creative pulse of Qrio Marketing Agency. Dive
                into our diverse range of services from digital marketing to
                photography and see how we can elevate your brand's presence.
                Explore our site to discover our innovative approach!
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

        <section className="h-screen container mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex justify-center items-center w-full lg:w-1/2 p-8 md:p-0">
              <img src={logo} className="h-64 md:h-[600px]" alt="logo" />
            </div>
            <div className="flex text-center flex-col w-full lg:w-1/2  text-white p-8 md:p-28 lg:text-left  tracking-wider">
              <h1 className="text-5xl md:text-6xl p-2 font-bold ">
                Vision and Mission
              </h1>
              <span className="text-2xl md:text-4xl">Curating Your Brand!</span>
              <p className="text-xl md:text-2xl py-5">
                Our vision? To paint the digital world purple (and maybe a few
                other colors). Our mission? To catapult your brand into the
                spotlight with strategies so fresh, your competitors will want
                to steal them (but they can’t, because we’re that good).
              </p>
            </div>
          </div>
        </section>

        <section className="h-screen container mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex text-center flex-col w-full lg:w-1/2  text-white p-8 md:p-28 lg:text-left  tracking-wider">
              <h1 className="text-5xl md:text-6xl p-2 font-bold ">Why Qrio?</h1>
              <span className="text-2xl md:text-4xl">Curating Your Brand!</span>
              <p className="text-xl md:text-2xl py-5">
                Here’s the deal: We're not just marketers; we're the Gandalfs of
                the marketing world. We guide you through the perilous paths of
                digital realms and traditional mazes, making sure you come out
                as the hero. Why us? Because 'average' is not in our vocabulary
                (we checked, it’s really not there).
              </p>
            </div>
            <div className="flex justify-center items-center w-full lg:w-1/2 p-8 md:p-0">
              <img src={logo} className="h-64 md:h-[600px]" alt="logo" />
            </div>
          </div>
        </section>

        <section className="h-screen mx-auto flex flex-wrap justify-center items-center">
          <h1 className="text-white   text-5xl md:text-6xl p-2 font-bold">
            Quick snapshots of services offered
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </section>
      </GalaxyParallax>
    </main>
  );
};

export default HomePage;
