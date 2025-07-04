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
    <main className="h-auto w-full overflow-x-hidden">
      <GalaxyParallax>
        {/* OUR STORY Section */}
        <section className="h-[40vh] relative flex justify-center items-center px-4">
          <RightGradiantEffect />
          <LeftGradiantEffect />
          <div className="relative flex justify-center items-center">
            <span className="absolute top-10 -left-10 text-white text-3xl sm:text-5xl lg:text-7xl">
              ✦
            </span>
            <h1 className="text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[10rem] font-bold uppercase text-transparent stroke-1 stroke-white text-center">
              OUR STORY
            </h1>
            <span className="absolute bottom-0 -right-2 text-white text-2xl sm:text-4xl">
              ✦
            </span>
            <span className="absolute bottom-8 -right-10 text-white text-3xl sm:text-6xl">
              ✦✦
            </span>
          </div>
        </section>

        <section className="relative h-[250vh] w-full overflow-hidden px-4">
          <Img
            src={bg}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="absolute top-10 w-full flex flex-col items-center text-center z-10 p-4">
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
              The Path We Carved
            </h1>

            <p className="text-white text-sm sm:text-base md:text-3xl font-medium mb-2">
              A Journey of Creativity & Passion
            </p>

            <p className="max-w-[90%] sm:max-w-3xl md:max-w-4xl leading-relaxed text-white text-sm sm:text-base md:text-2xl">
              Ever wondered what happens when three college buddies with a knack
              for breaking the mold decide to create something together? Enter
              <strong> Qrio</strong>, born in the heart of Indore, the cleanest
              city in India, where we decided to clean up the marketing mess with our fresh,
              innovative approaches. Here's a sneak peek at the dream team that makes the magic happen.
            </p>
          </div>
        </section>

        {/* SQUAD BOSSES Section */}
        <section className="min-h-[100vh] flex flex-col items-center justify-center bg-black px-4">
          <div className="text-white flex flex-col justify-center items-center p-5">
            <Paragraph size="text2xl" className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Meet The
            </Paragraph>
            <Heading
              size="heading5xl"
              className="text-transparent bg-clip-text bg-custom-gradient font-bold text-4xl sm:text-5xl md:text-6xl"
            >
              CO-FOUNDERS
            </Heading>
          </div>
          <div className="flex p-4 sm:p-10 justify-center items-center flex-wrap gap-10 sm:gap-16 w-full">
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
