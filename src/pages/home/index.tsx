import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import Marquee from "../../components/Marque/Marque";
import TestimonialCarousel from "../../components/Testimonials";
import video from "../../assets/qrio intro video.mp4";
import video2 from "../../assets/QRIO INTRO.mp4";
import Img from "../../components/Img";
import img1 from "../../assets/Group 86.png";
import img2 from "../../assets/why us.png";
import { useRef } from "react";

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
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      videoRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);

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
    <main style={{ height: "auto" }}>
      <section className="relative w-full h-screen flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-12">
          <h1 className="text-transparent bg-clip-text bg-custom-gradient font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight">
            Welcome to qrio
          </h1>
          <Heading
            size="heading3xl"
            className="text-center text-white text-xl sm:text-2xl md:text-4xl mt-4"
          >
            CURATING YOUR BRAND
          </Heading>
          <Paragraph
            id="banner_desc"
            className="tracking-wider leading-6 font-bold py-3 text-base sm:text-lg md:text-xl text-white text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
          >
            Discover Qrio, where creativity meets quirkiness, and marketing
            strategies come with a side of pizzazz. Dive into a world where
            your brand not only grows but thrives with flair!
          </Paragraph>
        </div>
      </section>

      <section className="relative h-auto flex flex-col items-center justify-center px-4 py-12 md:flex-row md:py-20 container mx-auto">
        <RightGradiantEffect />
        <div className="flex flex-col md:flex-row h-full w-full  ">
          <div className="w-full md:w-1/2 flex flex-col justify-center  p-4 md:p-8 space-y-6 text-center md:text-left ">
            <h1 className="text-transparent bg-clip-text bg-custom-gradient font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl  ">
              MISSION <br /> & VISION
            </h1>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-white">
              Our mission is to transform brands into legends. <br />
              How? By crafting marketing strategies that <br />
              are not only effective but also enchanting. <br />
              Our vision is to lead the marketing revolution <br />
              from Indore to the world, one campaign at a time.
            </p>
          </div>
          <div className="w-full  md:w-1/2 flex justify-center items-center p-4 ">
            <Img
              src={img1}
              alt="Mission & Vision"
              className="w-full max-w-[80%] object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="relative h-auto flex flex-col items-center justify-center px-4 py-12 md:flex-row-reverse md:py-20 container mx-auto">
        <div className="flex flex-col-reverse md:flex-row h-full w-full items-center">
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <Img
              src={img2}
              alt="Mission & Vision"
              className="w-full max-w-[80%] object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center  text-center md:text-right p-4 md:p-8 space-y-6 ">
            <h1 className="text-transparent bg-clip-text bg-custom-gradient font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-4xl sm:text-6xl">WHY</span> <br />
              <strong> QRIO ?</strong>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-white">
              Here’s the deal: We're not just marketers—we’re the <br />
              Gandalfs of the marketing world. We guide you <br />
              through the perilous paths of digital realms and <br />
              traditional mazes, ensuring you emerge as the hero. <br />
              <br />
              Why us? Because "average" is not in our vocabulary. <br />
              (We checked—it’s really not there!)
            </p>
          </div>
        </div>
      </section>
      <section className="h-auto my-32 overflow-hidden">
        <div className="my-20 p-20">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="h-auto items-center">
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
          <h1  className="text-white glow-text font-bold  text-4xl md:text-6xl ">
            Testimonials
          </h1>
          <p >
            But don't just take our word for it. Hear from our clients who we've
            helped reach the marketing hall of fame!
          </p>
          <div className="container  py-24">
            <TestimonialCarousel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
