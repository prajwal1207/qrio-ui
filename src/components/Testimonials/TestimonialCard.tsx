import React from "react";
import StarRating from "../RatingBar";
import Img from "../Img";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

interface TestimonialCardProps {
  companyName: string;
  testimonialText: string;
  rating: number;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyName,
  testimonialText,
  rating,
  imageUrl,
}) => {
  return (
    <div className="max-w-md w-full rounded-lg overflow-hidden shadow-xl bg-card-gradient p-8 text-white flex flex-col justify-center items-center">
      <Img
        src={imageUrl}
        alt={companyName}
        className="w-36 h-36 object-fill mb-6 rounded-full border-[1px] bg-white opacity-85"
      />
      <Heading
        size="headingxl"
        className="font-semibold text-center text-2xl mb-3 opacity-75"
      >
        {companyName}
      </Heading>
      <div>
        <StarRating rating={rating} />
      </div>
      <Paragraph
        size="textlg"
        className="text-gray-300 text-base mt-4 leading-relaxed opacity-60 text-center"
      >
        {testimonialText}
      </Paragraph>
    </div>
  );
};

export default TestimonialCard;
