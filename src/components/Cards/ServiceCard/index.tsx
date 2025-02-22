// import gsap from "gsap";
// import { useRef } from "react";
// import styles from "./styles.module.scss";
// import { useGSAP } from "@gsap/react";

// const ServiceCard = (props: any) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const iconRef = useRef<HTMLImageElement>(null);

//   useGSAP(() => {
//     if (!cardRef.current || !iconRef.current) return;
//     const handleMouseEnter = () => {
//       gsap.to(iconRef.current, {
//         // rotateY: 180,
//         scale:'1.2',
//         duration: 1,
//         ease: "linear",
//         transformOrigin: "center",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.killTweensOf(iconRef.current); // Stop the animation on mouse leave
//       gsap.set(iconRef.current, { scale: 1 }); // Reset the rotation
//     };

//     const cardElement = cardRef.current;
//     cardElement.addEventListener("mouseenter", handleMouseEnter);
//     cardElement.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       cardElement.removeEventListener("mouseenter", handleMouseEnter);
//       cardElement.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div className={styles.card} ref={cardRef}>
//       <span className="flex justify-center p-5">
//         <img
//           src={props.icon}
//           className={`h-24 ${styles.icons}`}
//           alt="icon"
//           ref={iconRef}
//         />
//       </span>
//       <h2 className="m-2 text-xl font-bold text-fuchsia-500">{props.title}</h2>
//       <p className="text-gray-200">{props.desc}</p>
//     </div>
//   );
// };

// export default ServiceCard;


interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="border-2 border-purple-400 relative group w-[400px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-card-gradient">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition duration-500"></div>

      <div className="absolute inset-0 bg-black bg-opacity-80 p-6 flex flex-col justify-start items-center text-center transition-transform duration-500 translate-y-[83%] group-hover:translate-y-0">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-300 text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

