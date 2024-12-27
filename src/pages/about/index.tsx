// import FoundersCard from "../../components/Founders";
import Book from "../../components/BookCard/index.tsx";
import CubeCard from "../../components/CubeCard/index.tsx";
import { GalaxyParallax } from "../../components/Gaxaxy";
import { FOUNDER_DETAILS } from "../../constants/constant.tsx";

const AboutPage = () => {
  return (
    <main>
      <GalaxyParallax>
        <section className="h-screen flex justify-center items-center px-10">
          <h1 className="text-8xl font-bold text-white">
            Meet the Wizards Behind the Curtain at qrio.
          </h1>
          <CubeCard />
        </section>
        <section className="flex-col items-center justify-center w-screen px-20 text-white">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl">
              Our Story: From College Dreams to Creative Realities
            </h1>
            <p className="text-3xl">
              Ever wondered what happens when four college buddies with a knack
              for breaking the mold decide to create something together? Enter
              Qrio, born in the heart of Indore, the cleanest city in India,
              where we decided to clean up the marketing mess with our fresh,
              innovative approaches. Here's a sneak peek at the dream team that
              makes the magic happen.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl">Meet the Co-Founders</h1>
            <p className="text-3xl">
              At Qrio, our leadership isn't just steering the ship; they're
              throwing the best party on deck. Meet the fantastic four who
              turned their college brainstorming sessions into the powerhouse
              that is Qrio today. They’re not just co-founders; they’re
              trendsetters turning the marketing world on its head.
            </p>
          </div>
        </section>

        <section className="h-screen flex-col flex items-center justify-center">
          <div>
            <p className="text-white text-4xl font-bold p-20">
              Meet the creative geniuses behind Qrio! From college buddies to
              co-founders, d iscover the dynamic team that's redefining marketing
              with a blend of expertise, creativity, and unmatched
            </p>
          </div>

          <div className="flex justify-around w-screen px-20 ">
            {FOUNDER_DETAILS.map((item, index) => (
              <Book
                key={index}
                name={item.name}
                image={item.image}
                text={item.desc}
              />
            ))}
          </div>
        </section>
      </GalaxyParallax>
    </main>
  );
};

export default AboutPage;
