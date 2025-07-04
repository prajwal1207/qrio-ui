import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LeftGradiantEffect, RightGradiantEffect } from "../home";
import Img from "../../components/Img";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { PITCHDECK } from "../../constants/constant";

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  useGSAP(() => {
    gsap.to("#page2", {
      x: "-91%",
      scrollTrigger: {
        trigger: "#page2",
         start: "top top",
      end: "+=4000",
        scrub: 2,
        markers:true,
        pin: "#content",
        pinSpacing: true,
      },
    });
  }, []);

  return (
    <main className="min-h-[600vh]">
      <section className="h-[80vh] relative flex justify-center items-center">
        <RightGradiantEffect />
        <LeftGradiantEffect />
        <div className="relative flex justify-center items-center">
          <span className="absolute top-10 -left-10 text-white text-7xl">✦</span>
          <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[11rem] font-bold uppercase text-transparent stroke-1 stroke-white">
            Our Work.
          </h1>
          <span className="absolute bottom-0 -right-2 text-white text-4xl">✦</span>
          <span className="absolute bottom-8 -right-10 text-white text-6xl">✦✦</span>
        </div>
      </section>

      <section id="page2" className="flex h-[100vh] w-[1100vw]">
        {PITCHDECK.map((url, index) => {
          return (
            <div key={index} className="h-[100vh] w-[100vw] flex justify-center items-center">
              <Img src={url} alt="" className="h-[80vh] w-[80vw] rounded-lg" />
            </div>
          );
        })}
      </section>

      {/* NEW SECTION: Highlighted Case Study */}
      <section className="h-[120vh] bg-black text-white flex flex-col justify-center items-center px-4">
        <Paragraph size="textxl" className="text-center text-2xl sm:text-3xl mb-4">
          Our Favorite Campaign
        </Paragraph>
        <Heading size="heading4xl" className="text-transparent bg-clip-text bg-custom-gradient text-center text-4xl sm:text-6xl font-bold">
          From Zero to Viral
        </Heading>
        <p className="mt-8 text-center max-w-4xl text-base sm:text-lg">
          Remember that quirky café that no one visited? Neither do we—because now, it's a local legend.
          With our strategy, they went from background noise to the talk of the town. Billboards, reels,
          collabs—you name it, we brought it. Qrio turned their story into a movement.
        </p>
      </section>

      {/* NEW SECTION: Impact Statement */}
      <section className="h-[100vh] bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 text-white flex flex-col justify-center items-center px-4 text-center">
        <Heading size="heading3xl" className="text-white text-4xl sm:text-6xl mb-6">
          We Create Brands That Speak
        </Heading>
        <Paragraph className="max-w-3xl text-lg sm:text-xl">
          Your brand isn't just a name—it's a vibe, a voice, a vision. At Qrio, we don’t just design; we narrate.
          From visuals that stun to words that stick, every element we create is meant to resonate.
        </Paragraph>
      </section>

      <section className="h-[70vh] relative flex items-center justify-center">
        <RightGradiantEffect />
        <LeftGradiantEffect />
        <div className="relative flex justify-center items-center">
          <span className="absolute top-10 -left-10 text-white text-7xl">✦</span>
          <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[11rem] font-bold uppercase text-transparent stroke-1 stroke-white">
            Thankyou.
          </h1>
          <span className="absolute bottom-0 -right-2 text-white text-4xl">✦</span>
          <span className="absolute bottom-8 -right-10 text-white text-6xl">✦✦</span>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
