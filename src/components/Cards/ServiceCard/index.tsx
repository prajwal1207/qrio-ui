import gsap from "gsap";
import { useRef } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";

const ServiceCard = (props: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!cardRef.current || !iconRef.current) return;
    const handleMouseEnter = () => {
      gsap.to(iconRef.current, {
        // rotateY: 180,
        scale:'1.3',
        duration: 1,
        ease: "linear",
        transformOrigin: "center",
      });
    };

    const handleMouseLeave = () => {
      gsap.killTweensOf(iconRef.current); // Stop the animation on mouse leave
      gsap.set(iconRef.current, { scale: 1 }); // Reset the rotation
    };

    const cardElement = cardRef.current;
    cardElement.addEventListener("mouseenter", handleMouseEnter);
    cardElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardElement.removeEventListener("mouseenter", handleMouseEnter);
      cardElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.card} ref={cardRef}>
      <span className="flex justify-center p-5">
        <img
          src={props.icon}
          className={`h-24 ${styles.icons}`}
          alt="icon"
          ref={iconRef}
        />
      </span>
      <h2 className="m-2 text-lg font-bold text-fuchsia-500">{props.title}</h2>
      <p className="text-gray-200">{props.desc}</p>
    </div>
  );
};

export default ServiceCard;
