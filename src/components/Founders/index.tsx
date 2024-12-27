import React from "react";

interface FounderCardProps {
  name: string;
  title: string;
  desc: string;
  image: string;
}

const FoundersCard: React.FC<FounderCardProps> = (props) => {
  return (
    <div className="border-2 flex ">
      <div className="w-1/2">
        <img
          src={props.image}
          alt={`${props.name.toLowerCase()}-cover-image`}
          className="h-full w-full "
        />
      </div>
      <div className="w-1/2 text-white">
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default FoundersCard;
