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
        rotateY: 180,
        duration: 1,
        ease: "linear",
        transformOrigin: "center",
      });
    };

    const handleMouseLeave = () => {
      gsap.killTweensOf(iconRef.current); // Stop the animation on mouse leave
      gsap.set(iconRef.current, { rotateY: 0 }); // Reset the rotation
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
          className={`h-20 ${styles.icons}`}
          alt="icon"
          ref={iconRef}
        />
      </span>
      <h2 className="m-2 text-lg font-bold text-white">{props.title}</h2>
      <p className="text-white">{props.desc}</p>
    </div>
  );
};

export default ServiceCard;
