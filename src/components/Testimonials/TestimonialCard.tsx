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
    <div className="h-96 relative flex justify-center items-center text-white border-4 rounded-tr-[50px] rounded-bl-[50px] border-fuchsia-500 w-full">
      <span className="absolute -top-16 -left-8 bg-navy rounded-full p-10 bg-customBlue" >
        <img src={commaLogo} alt="icon" className="w-20 h-20 " />
      </span>
      <div className="flex">
        <img
          className="w-48 h-48 rounded-full object-contain"
          src={logo}
          alt="Person"
        />
        <div>
          <p className="text-lg italic px-10">&ldquo;{description}&rdquo;</p>
          <div className="text-purple-400  text-end px-10">
            <p className=" font-semibold">{name}</p>
            <p className=" text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

// <div className="max-w-lg h-[620px]  mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col p-6">
// <div className="flex justify-center mt-4 mb-6 ">
//   <img
//     className="w-36 h-36 rounded-full object-contain"
//     src={logo}
//     alt="Person"
//   />
// </div>
// <div className="my-4 text-center">
//   <p className="text-gray-800 font-semibold">{name}</p>
//   <p className="text-gray-500 text-sm">{position}</p>
// </div>
// <div className="relative z-0" >
//   <img src={commaLogo} alt="icon" className="w-14 h-14 absolute top-[-20px] -z-10 opacity-20" />
//   <p className="mx-3 text-gray-600 text-center text-md italic">
//     &ldquo;{description}&rdquo;
//   </p>

// </div>
// </div>
