import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GalaxyParallax } from "../../components/Gaxaxy";

const HomePage = () => {
  useGSAP(() => {
    gsap.from(`#text`, {
      y: -500,
      opacity: 0.3,
      duration: 1,
      delay: 0.5,
      scrollTrigger: "#text",
    });
  });

  return (
    <main>
      <GalaxyParallax>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-white">section</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 id="text" className="text-white">
            section
          </h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-white">section</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-white">section</h1>
        </section>
      </GalaxyParallax>
    </main>
  );
};

export default HomePage;
