import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import MarqueCard from "./MarqueCard";
import styles from "./styles.module.scss";

interface MarqueeProps {
  items: { logo: string; name: string }[];
  speed?: number;
  direction?: "left" | "right";
  gradient?: 2 | 3;
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 30,
  direction = "left",
  gradient = 2,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (marqueeRef.current) {
      const marqueeElement = marqueeRef.current;
      const clonedContent = marqueeElement.innerHTML;

      // Duplicate content
      marqueeElement.innerHTML += clonedContent;

      gsap.set(marqueeElement, {
        xPercent: direction === "right" ? -50 : 0,
      });

      gsap.to(marqueeElement, {
        xPercent: direction === "left" ? -50 : 0,
        ease: "none",
        duration: speed,
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.unitize((x) =>
            direction === "left"
              ? parseFloat(x) % 50
              : (parseFloat(x) - 50) % 50
          ),
        },
      });
    }
  }, [speed, direction]);

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee} ref={marqueeRef}>
        {items.map((item, index) => (
          <MarqueCard {...item} key={index} gradient={gradient} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
