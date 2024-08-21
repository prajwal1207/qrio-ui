import commaLogo from "../../assets/images/comma.svg";

interface TestimonialCardProps {
  description: string;
  name: string;
  position: string;
  logo?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  description,
  name,
  position,
  logo = "https://via.placeholder.com/150",
}) => {
  return (
    <div className="max-w-4xl  mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <img src={commaLogo} alt="icon" className="w-20 h-20 opacity-50" />
      <div className="flex justify-center">
        <img
          className="w-44 rounded-full border-2 border-red object-cover"
          src={logo}
          alt="Person"
        />
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-lg italic">
          &ldquo;{description}!&rdquo;
        </p>
        <hr className="my-3" />
        <p className="mt-4 text-gray-800 font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
