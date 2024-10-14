import React from "react";
import styles from "./styles.module.scss";

interface MarqueeProps {
  key: number;
  logo: string;
  name: string;
  gradient?: 2 | 3;
}

const MarqueCard: React.FC<MarqueeProps> = ({
  key,
  name,
  logo,
  gradient = 2,
}) => {
  console.log(name, gradient);
  return (
    <div className={styles.card}>
      <img
        src={logo}
        alt={`brand-logo-${key}`}
        style={{
          height: "70%",
          width: "70%",
          objectFit: "contain",
          aspectRatio: "auto",
          //  mixBlendMode: "color-burn",
        }}
      />
    </div>
  );
};

export default MarqueCard;
