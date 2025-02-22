import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../components/Buttons/Button";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import Marquee from "../../components/Marque/Marque";
import TestimonialCarousel from "../../components/Testimonials";
import video from "../../assets/qrio intro video.mp4";
import video2 from "../../assets/QRIO INTRO.mp4";
import Img from "../../components/Img";
import img1 from "../../assets/Group 86.png";
import img2 from "../../assets/why us.png";

export const RightGradiantEffect: React.FC = () => {
  return (
    <div className="absolute right-0 w-full md:w-3/4 h-full bg-gradient-to-r from-transparent via-purple-700 to-purple-500 opacity-35 blur-[100px]"></div>
  );
};

export const LeftGradiantEffect: React.FC = () => {
  return (
    <div className="absolute left-[-600px] w-full md:w-3/4 h-full bg-gradient-to-r from-transparent via-purple-700 to-purple-500 opacity-35 blur-[200px]"></div>
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
    <main style={{ height: "550vh" }} className="py-10">
      <section className="relative flex flex-col md:flex-row justify-center items-center">
        <div className="relative w-full md:w-4/5 h-[85vh] flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-xl"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute flex flex-col items-center text-center md:text-left w-full px-6 z-10">
            <Heading
              size="heading7xl"
              className="text-transparent bg-clip-text bg-custom-gradient font-bold text-3xl md:text-7xl"
            >
              Welcome to qrio
            </Heading>
            <Heading
              size="heading3xl"
              className="text-center md:text-left text-white text-2xl md:text-4xl"
            >
              CURATING YOUR BRAND
            </Heading>
            <Paragraph
              id="banner_desc"
              className="tracking-wider leading-6 font-bold py-3 text-xl md:text-2xl text-white text-center"
            >
              Discover Qrio, where creativity meets quirkiness, and marketing
              strategies <br /> come with a side of pizzazz. Dive into a world
              where your brand not only grows but <br />
              thrives with flair!
            </Paragraph>
            <span id="banner_desc" className="my-3">
              <Button text="get started" />
            </span>
          </div>
        </div>
      </section>
      <section className="relative h-[100vh] flex items-center justify-center">
        <RightGradiantEffect />
        <div className="flex h-full w-full">
          <div className="w-1/2 flex flex-col justify-center items-center p-8 space-y-6">
            <div>
              <Heading
                size="heading7xl"
                className="text-transparent bg-clip-text bg-custom-gradient font-bold text-3xl md:text-7xl"
              >
                MISSION <br /> & VISION
              </Heading>

              <Paragraph
                size="text2xl"
                className="text-lg md:text-2xl leading-relaxed text-left text-white"
              >
                Our mission is to transform brands into legends. <br />
                How? By crafting marketing strategies that <br />
                are not only effective but also enchanting. <br />
                Our vision is to lead the marketing revolution <br />
                from Indore to the world, one campaign at a time.
              </Paragraph>
            </div>
          </div>

          <div className="w-1/2 flex justify-center items-center">
            <Img
              src={img1}
              alt="Mission & Vision"
              className="max-w-[80%] max-h-[80%] object-contain rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="relative h-[100vh] flex items-center justify-center">
        <LeftGradiantEffect />
        <div className="flex h-full w-full">
          <div className="w-1/2 flex justify-center items-center">
            <Img
              src={img2}
              alt="Mission & Vision"
              className="max-w-[80%] max-h-[80%] object-contain rounded-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center p-8 space-y-6">
            <div>
              <Heading
                size="heading7xl"
                className="text-transparent bg-clip-text bg-custom-gradient font-bold text-3xl md:text-7xl"
              >
                WHY <br /> & QRIO ?
              </Heading>

              <Paragraph
                size="text2xl"
                className="text-lg md:text-2xl leading-relaxed text-left text-white"
              >
                Our mission is to transform brands into legends. <br />
                How? By crafting marketing strategies that <br />
                are not only effective but also enchanting. <br />
                Our vision is to lead the marketing revolution <br />
                from Indore to the world, one campaign at a time.
              </Paragraph>
            </div>
          </div>

          {/* Right Side: Centered Image */}
        </div>
      </section>
      <section className="h-[100vh] my-32 ">
        <div className="my-20">
          <video autoPlay loop muted className="w-full h-full object-cover ">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
          <Heading size="heading7xl" className="text-white glow-text">
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
      <div className="line_break" ></div>
     
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
