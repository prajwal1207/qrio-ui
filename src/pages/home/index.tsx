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
          <h1 className="text-white py-6 text-5xl md:text-6xl p-2 font-bold glow-text">
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
          <h1 className="px-80 text-white py-6 text-5xl md:text-6xl p-2 font-bold glow-text">
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
        <hr className="line_break" />
        <section className="container min-h-screen h-auto mx-auto flex flex-wrap justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-6xl md:text-6xl font-bold glow-text">
              Our Clients
            </h1>
            <p className="w-2/3  tracking-wider leading-6 font-bold py-3 text-xl md:text-xl text-gray-400">
              Driven by Integrity, Powered by Creativity, and Sustained by
              Coffee – we're the team you call when you want to do more than
              just market. You want to make a scene.
            </p>
          </div>
          <div className={`w-5/6 ${styles.marqueWrapper}`}>
            <Marquee items={CLIENTS_LOGO} direction="right" gradient={3} />
            <Marquee items={CLIENTS_LOGO} gradient={2} />
            <Marquee items={CLIENTS_LOGO} direction="right" gradient={3} />
            <Marquee items={CLIENTS_LOGO} gradient={2} direction="right" />
          </div>
        </section>
        <hr className="line_break" />
      </GalaxyParallax>
    </main>
  );
};

export default HomePage;
