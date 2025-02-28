import React from "react";
import Img from "../Img";
import Paragraph from "../Paragraph";
import Heading from "../Heading";

interface ProfileCardProps {
  name: string;
  imageUrl: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  imageUrl,
  description,
}) => {
  return (
    <div className="bg-card-gradient text-white rounded-2xl p-8 w-1/4 shadow-xl">
      <div className="relative w-full">
        <Img
          src={imageUrl}
          alt={name}
          className="w-full h-96 object-fill rounded-2xl"
        />
      </div>
      <div className="mt-6">
        <Heading size="heading3xl" className="text-2xl font-bold">
          {name}
        </Heading>
        <div className="w-16 h-1 bg-purple-700 mt-2"></div>
        <Paragraph
          size="textlg"
          className="text-gray-300 text-base mt-4 leading-relaxed opacity-60"
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default ProfileCard;
