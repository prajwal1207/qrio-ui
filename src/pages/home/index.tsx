import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../assets/images/web 02 1.png";
import Button from "../../components/Buttons/Button";
import Img from "../../components/Img";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import Marquee from "../../components/Marque/Marque";
import ProfileCard from "../../components/Founders";
import { FOUNDER_DETAILS } from "../../constants/constant";
import TestimonialCarousel from "../../components/Testimonials";
// import ServiceCard from "../../components/Cards/ServiceCard";
// import { GalaxyParallax } from "../../components/Gaxaxy";
// import Marquee from "../../components/Marque";
// import TestimonialCarousel from "../../components/Testimonials";
// import { CLIENTS_LOGO, SERVICES } from "../../constants/constant";
// import AboutSection from "./AboutSection";
// import BannerSection from "./BannerSection";
// import styles from "./styles.module.scss";
// import VisionSection from "./VisionSection";
// import WhyUsSection from "./WhyUsSection";

const GradiantEffect: React.FC = () => {
  return (
    <div className="absolute right-0 w-full md:w-3/4 h-full bg-gradient-to-r from-transparent via-purple-700 to-purple-500 opacity-35 blur-[100px]"></div>
  );
};

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
    <main style={{ height: "500vh" }} className="py-10">
      <section className="relative flex flex-col md:flex-row justify-center md:justify-end items-center">
        <GradiantEffect />
        <div className="w-full md:w-2/3 flex justify-center px-4 md:px-0">
          <div className="flex justify-center items-start flex-col text-center md:text-left">
            <Heading
              size="heading7xl"
              className="text-transparent bg-clip-text bg-custom-gradient font-bold text-3xl md:text-7xl"
            >
              Welcome to qrio
            </Heading>
            <Heading
              size="heading3xl"
              className="text-center md:text-left text-gray-100 text-2xl md:text-4xl"
            >
              CURATING YOUR BRAND
            </Heading>
            <Paragraph
              id="banner_desc"
              className="tracking-wider leading-6 font-bold py-3 text-xl md:text-xl text-gray-400"
            >
              Discover Qrio, where creativity meets quirkiness, <br />
              and marketing strategies come with a side of pizzazz. <br />
              Dive into a world where your brand not only grows but <br />{" "}
              thrives with flair!
            </Paragraph>
            <span id="banner_desc" className="my-3">
              <Button text="get started" />
            </span>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 flex justify-end mt-8 md:mt-0">
          <Img
            src={img}
            className="h-[400px] md:h-[800px] relative z-10"
            alt="img"
          />
        </div>
      </section>
      <section className="h-[100vh] ">
        <div className="text-white flex flex-col justify-center items-center p-5">
          <Paragraph size="text2xl">Meet The</Paragraph>
          <Heading size="heading6xl">SQUAD BOSSES</Heading>
        </div>
        <div className="flex p-10 justify-evenly items-center">
          {FOUNDER_DETAILS.map((founder) => {
            return (
              <ProfileCard
                description={founder.desc}
                imageUrl={founder.image}
                name={founder.name}
                key={founder.name}
              />
            );
          })}
        </div>
      </section>
      <section className="h-auto py-40">
        <div
          style={{
            transform: "rotate(-6deg)",
            transformOrigin: "center",
          }}
        >
          <Marquee />
        </div>
        <div
          style={{
            transform: "rotate(6deg)",
            transformOrigin: "center",
          }}
        >
          <Marquee />
        </div>
        <div className="flex justify-center items-center py-20 flex-col">
          <Heading size="heading7xl" className="text-white">
            Testimonials
          </Heading>
          <Paragraph size="text2xl">
            But don't just take our word for it. Hear from our clients who we've
            helped reach the marketing hall of fame!
          </Paragraph>
          <div className="container ">
            <TestimonialCarousel />
          </div>
        </div>
      </section>
      <section className="h-[100vh] relative">
        <GradiantEffect />
      </section>
    </main>
  );
};

export default HomePage;

{
  /* <BannerSection />
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
      </GalaxyParallax> */
}
