import ServiceCard from "../../components/Cards/ServiceCard";
import { LeftGradiantEffect, RightGradiantEffect } from "../home";
import img from "../../assets/images/bg.jpeg";

const ServicesPage = () => {
  return (
    <main>
      <section className="h-[50vh]  relative flex justify-center items-center">
        <RightGradiantEffect />
        <LeftGradiantEffect />
        <div className="relative flex justify-center items-center  ">
          <span className="absolute top-10 -left-10 text-white text-7xl">
            ✦
          </span>
          <h1 className="text-[15rem] font-bold uppercase text-transparent stroke-1 stroke-white">
            Services
          </h1>
          <span className="absolute bottom-0 -right-2 text-white text-4xl">
            ✦
          </span>
          <span className="absolute bottom-8 -right-10 text-white text-6xl">
            ✦✦
          </span>
        </div>
      </section>
      <section className="relative h-auto flex items-center justify-center">
        <RightGradiantEffect />
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 18 }).map((_, index) => (
            <ServiceCard
              key={index}
              title="Graphic Designing"
              description="Create stunning visuals with creative designs."
              image={img}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
