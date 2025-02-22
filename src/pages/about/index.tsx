import ProfileCard from "../../components/Founders";
import { GalaxyParallax } from "../../components/Gaxaxy";
import Heading from "../../components/Heading";
import Img from "../../components/Img";
import Paragraph from "../../components/Paragraph";
import { FOUNDER_DETAILS } from "../../constants/constant";
import { LeftGradiantEffect, RightGradiantEffect } from "../home";
import bg from "../../assets/stairs@10x.png";

const AboutPage = () => {
  return (
    <main className="h-auto">
      <GalaxyParallax>
        {/* OUR STORY Section */}
        <section className="h-[40vh] relative flex justify-center items-center">
          <RightGradiantEffect />
          <LeftGradiantEffect />
          <div className="relative flex justify-center items-center">
            <span className="absolute top-10 -left-10 text-white text-7xl">
              ✦
            </span>
            <h1 className="text-[15rem] font-bold uppercase text-transparent stroke-1 stroke-white">
              OUR STORY
            </h1>
            <span className="absolute bottom-0 -right-2 text-white text-4xl">
              ✦
            </span>
            <span className="absolute bottom-8 -right-10 text-white text-6xl">
              ✦✦
            </span>
          </div>
        </section>

        {/* Fullscreen Image Section with Centered Text */}
        <section className="relative h-[250vh] w-full overflow-hidden">
          {/* Fullscreen Background Image */}
          <Img
            src={bg}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Top Centered Text */}
          <div className="absolute top-10 w-full flex flex-col items-center text-center z-10 p-4">
            <Heading size="heading6xl" className="text-white mb-4">
              The Path We Carved
            </Heading>

            <Paragraph size="text2xl" className="text-white mb-2">
              A Journey of Creativity & Passion
            </Paragraph>

            <Paragraph
              size="text2xl"
              className="text-white max-w-4xl leading-relaxed text-[#31004A]"
            >
              Ever wondered what happens when three college buddies with a knack{" "}
              <br />
              for breaking the mold decide to create something together? Enter{" "}
              <br />
              <strong>Qrio</strong>, born in the heart of Indore, the cleanest
              city in India, <br />
              where we decided to clean up the marketing mess with our fresh,{" "}
              <br />
              innovative approaches. Here's a sneak peek at the dream team{" "}
              <br />
              that makes the magic happen.
            </Paragraph>
          </div>
        </section>

        {/* SQUAD BOSSES Section */}
        <section className="min-h-[100vh] flex flex-col items-center justify-center bg-black">
          <div className="text-white flex flex-col justify-center items-center p-5">
            <Paragraph size="text2xl">Meet The</Paragraph>
            <Heading
              size="heading6xl"
              className="text-transparent bg-clip-text bg-custom-gradient font-bold text-3xl md:text-7xl"
            >
              SQUAD BOSSES
            </Heading>
          </div>
          <div className="flex p-10 justify-evenly items-center flex-wrap">
            {FOUNDER_DETAILS.map((founder) => (
              <ProfileCard
                description={founder.desc}
                imageUrl={founder.image}
                name={founder.name}
                key={founder.name}
              />
            ))}
          </div>
        </section>
      </GalaxyParallax>
    </main>
  );
};

export default AboutPage;
