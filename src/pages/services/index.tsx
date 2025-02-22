import ServiceCard from "../../components/Cards/ServiceCard";
import { LeftGradiantEffect, RightGradiantEffect } from "../home";
import { SERVICES } from "../../constants/constant";

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
          {SERVICES.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.desc}
              image={item.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
