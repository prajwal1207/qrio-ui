import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "../../components/Cards/ServiceCard";
import { GalaxyParallax } from "../../components/Gaxaxy";
import Marquee from "../../components/Marque";
import TestimonialCarousel from "../../components/Testimonials";
import { CLIENTS_LOGO, SERVICES } from "../../constants/constant";
import AboutSection from "./AboutSection";
import BannerSection from "./BannerSection";
import styles from "./styles.module.scss";
import VisionSection from "./VisionSection";
import WhyUsSection from "./WhyUsSection";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const animateSections = () => {
    const sections = [
      { id: "#sec1", x: -300, trigger: "#section2" },
      { id: "#sec2", x: 300, trigger: "#section2" },
      { id: "#sec3", x: -300, trigger: "#section3" },
      { id: "#sec4", x: 300, trigger: "#section3" },
      { id: "#sec5", x: -300, trigger: "#section4" },
      { id: "#sec6", x: 300, trigger: "#section4" },
    ];

    sections.forEach(({ id, x, trigger }) => {
      gsap.from(id, {
        x,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    const tl = gsap.timeline();
    tl.from("#banner_text", { y: 50, opacity: 0, duration: 1 }).from(
      "#banner_desc",
      { y: 50, opacity: 0, stagger: 0.3 }
    );
  };

  useGSAP(animateSections);

  return (
    <main>
      <BannerSection />
      <hr className="line_break" />
      <GalaxyParallax>
        <AboutSection />
        <hr className="line_break" />
        <VisionSection />
        <hr className="line_break" />
        <WhyUsSection />
        <hr className="line_break" />
        <section className="min-h-screen h-auto mx-auto flex flex-wrap justify-center items-center">
          <h1 className="text-white py-6 text-2xl md:text-5xl p-2 font-bold glow-text">
            Quick snapshots of services offered
          </h1>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 `}
          >
            {SERVICES.map((item, index: number) => {
              return <ServiceCard key={index} {...item} />;
            })}
          </div>
        </section>
        <hr className="line_break" />
        <section className="w-full min-h-screen h-auto mx-auto flex flex-wrap flex-col justify-center">
          <h1 className="px-80 text-white py-6 text-5xl md:text-5xl p-2 font-bold glow-text text-center">
            Testimonials
          </h1>
          <p className="px-80 mb-5 text-gray-400 text-md md:text-xl">
            But don't just take our word for it. Hear from our clients who we've
            helped reach the marketing hall of fame!
          </p>
          <div className="w-full">
            <TestimonialCarousel />
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

      <div className="h-20 bg-violet-600"></div>
    </main>
  );
};

export default HomePage;
