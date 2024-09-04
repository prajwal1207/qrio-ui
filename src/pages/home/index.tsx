import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/images/8793760.png";
import ServiceCard from "../../components/Cards/ServiceCard";
import { GalaxyParallax } from "../../components/Gaxaxy";
import TestimonialCarousel from "../../components/Testimonials";
import styles from "./styles.module.scss";
import { CLIENTS_LOGO, services } from "../../constants/constant";
import Marquee from "../../components/Marque";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useGSAP(() => {
    gsap.from("#sec1", {
      x: -300,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#section2",
        // markers: true,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from("#sec2", {
      x: 300,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#section2",
        // markers: true,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from("#sec3", {
      x: -300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section3",
        // markers: true,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from("#sec4", {
      x: 300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section3",
        // markers: true,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from("#sec5", {
      x: -300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section4",
        // markers: true,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from("#sec6", {
      x: 300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section4",
        // markers: true,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });

    const tl = gsap.timeline();
    tl.from("#banner_text", {
      y: 50,
      opacity: 0,
      duration: 1,
    });
    tl.from("#banner_desc", {
      y: 50,
      opacity: 0,
      stagger: 0.3,
    });
  });

  return (
    <main>
      <GalaxyParallax>
        {/* <-------------------------------- banner section --------------------------------------------->  */}
        <section className="min-h-screen h-auto container mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col lg:flex-col p-16  justify-center w-full text-white">
            <h1 data-text="Welcome to qrio ..." className={styles.heading}>
              Welcome to qrio ...
            </h1>
            <span
              id="banner_text"
              className="text-2xl md:text-5xl  text-gray-100"
            >
              Curating Your Brand!
            </span>
            <p id="banner_desc" className="text-xl md:text-3xl py-2">
              Discover Qrio, where creativity meets quirky, and marketing
              strategies come with a side of pizzazz. Dive into a world where
              your brand doesn’t just grow, it thrives with flair!
            </p>
          </div>
        </section>
        <hr className="line_break" />
        {/* <--------------------------------  hero section --------------------------------------------->  */}
        <section
          id="section2"
          className="min-h-screen h-auto container mx-auto flex flex-col lg:flex-row justify-center items-center"
        >
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div
              id="sec1"
              className="flex text-center flex-col w-full lg:w-1/2  text-white p-8 md:p-28 lg:text-left  tracking-wider"
            >
              <h1 className="text-5xl md:text-6xl p-2 font-bold glow-text">
                About us
              </h1>
              <span className="text-2xl md:text-4xl">Curating Your Brand!</span>
              <p className="text-xl md:text-2xl py-5">
                In a world full of 'meh,' Qrio stands out by not just thinking
                outside the box but throwing the box out entirely. Founded on a
                bright sunny day when we decided the world had enough of boring
                marketing, we bring you bespoke strategies crafted with a dash
                of whimsy and a lot of caffeine.
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
        <hr className="line_break" />
        {/* <--------------------------------- banner section --------------------------------------------->  */}
        <section
          id="section3"
          className="min-h-screen h-auto container mx-auto flex flex-col lg:flex-row justify-center items-center"
        >
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div
              id="sec3"
              className="flex justify-center items-center w-full lg:w-1/2 p-8 md:p-0"
            >
              <img src={logo} className="h-64 md:h-[600px]" alt="logo" />
            </div>
            <div
              id="sec4"
              className="flex text-center flex-col w-full lg:w-1/2  text-white p-8 md:p-28 lg:text-left  tracking-wider"
            >
              <h1 className="text-5xl md:text-6xl p-2 font-bold glow-text ">
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
        <hr className="line_break" />
        {/* <--------------------------------- services section --------------------------------------------->  */}

        <section
          id="section4"
          className=" min-h-screen h-auto container mx-auto flex flex-col lg:flex-row justify-center items-center"
        >
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div
              id="sec5"
              className="flex text-center flex-col w-full lg:w-1/2  text-white p-8 md:p-28 lg:text-left  tracking-wider"
            >
              <h1 className="text-5xl md:text-6xl p-2 font-bold glow-text ">
                Why qrio?
              </h1>
              <span className="text-2xl md:text-4xl">Curating Your Brand!</span>
              <p className="text-xl md:text-2xl py-5">
                Here’s the deal: We're not just marketers; we're the Gandalfs of
                the marketing world. We guide you through the perilous paths of
                digital realms and traditional mazes, making sure you come out
                as the hero. Why us? Because 'average' is not in our vocabulary
                (we checked, it’s really not there).
              </p>
            </div>
            <div
              id="sec6"
              className="flex justify-center items-center w-full lg:w-1/2 p-8 md:p-0"
            >
              <img src={logo} className="h-64 md:h-[600px]" alt="logo" />
            </div>
          </div>
        </section>
        <hr className="line_break" />
        <section className="min-h-screen h-auto mx-auto flex flex-wrap justify-center items-center">
          <h1 className="text-white   text-5xl md:text-6xl p-2 font-bold">
            Quick snapshots of services offered
          </h1>
          <div
            // className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 ${styles.service_wrapper}`}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 `}
          >
            {services.map((item, index: number) => {
              return <ServiceCard key={index} {...item} />;
            })}
          </div>
        </section>
        <hr className="line_break" />
        {/* <--------------------------------- Testimonilas --------------------------------------------->  */}
        <section className="w-full min-h-screen h-auto mx-auto flex flex-wrap flex-col justify-center">
          <h1 className="px-80 my-5  text-white text-6xl md:text-6xl  font-bold">
            Testimonials
          </h1>
          <p className="px-80 mb-5 text-purple-200 text-md md:text-xl">
            But don't just take our word for it. Hear from our clients who we've
            helped reach the marketing hall of fame!
          </p>
          <div className="w-full">
            <TestimonialCarousel />
          </div>
        </section>
      </GalaxyParallax>
      <hr className="line_break" />
      <section className="min-h-screen h-auto mx-auto flex flex-wrap justify-center items-center">
        <h1 className="text-white text-6xl md:text-6xl  font-bold">
          Our Clients
        </h1>
        <Marquee items={CLIENTS_LOGO} gradient={2} />
        <Marquee items={CLIENTS_LOGO} direction="right" gradient={3} />
        <Marquee items={CLIENTS_LOGO} gradient={2} />
      </section>
      <div className="h-20 bg-violet-700"></div>
    </main>
  );
};

export default HomePage;
