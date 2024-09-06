import FoundersCard from "../../components/Founders";
import { GalaxyParallax } from "../../components/Gaxaxy";
import { FOUNDER_DETAILS } from "../../constants/constant";

const AboutPage = () => {
  return (
    <main>
      <GalaxyParallax>
        <section className="h-screen flex flex-col items-center justify-center"></section>
        <section className="h-screen flex-col flex items-center justify-center">
          <h1 className="text-white">Founder</h1>
          {/* <div className="border-2 p-10 flex space-x-4">
            {FOUNDER_DETAILS.map((item, index) => (
              <FoundersCard key={index} {...item} />
            ))}
          </div> */}
        </section>
      </GalaxyParallax>
    </main>
  );
};

export default AboutPage;
