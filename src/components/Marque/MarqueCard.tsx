import React from "react";

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
  return (
    <div
      className={`h-36 w-96 rounded-xl bg-custom-gradient-${gradient} p-5 mr-9 flex items-center `}
    >
      <div className="bg-white rounded-full mr-5">
        <img
          src={logo}
          alt={`brand-logo-${key}`}
          className="w-28 h-28 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        />
      </div>
      <div className="p-2  text-wrap" >
        <p className="text-white text-xl font-bold">{name}</p>
      </div>
    </div>
  );
};

export default MarqueCard;
