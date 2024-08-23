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
    <div className="relative flex flex-col justify-center items-center text-white border-4 rounded-[40px] border-fuchsia-500 w-full p-6 bg-transparent shadow-lg transform transition-transform duration-500 hover:scale-105 sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      {/* Top Icon */}
      <span className="absolute -top-12 left-0 transform -translate-x-1/2 bg-black rounded-full p-5 ">
        <img src={commaLogo} alt="icon" className="w-16 h-16" />
      </span>

      {/* Description */}
      <p className="mt-16 px-4 text-xl sm:text-2xl md:text-2xl font-bold italic text-center text-white">
        &ldquo;{description}&rdquo;
      </p>

      {/* Bottom Icon */}
      <span className="absolute -bottom-12 right-0 transform translate-x-1/2 bg-black rounded-full p-5 ">
        <img src={commaLogo} alt="icon" className="w-16 h-16 transform rotate-180" />
      </span>

      {/* Logo and Details */}
      <div className="flex flex-col justify-center items-center mt-8">
        <img
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 rounded-full object-cover shadow-lg transition-transform duration-500 hover:rotate-6 hover:scale-110"
          src={logo}
          alt="Logo"
        />
        <div className="text-center mt-4">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">{name}</p>
          <p className="text-sm md:text-base lg:text-lg text-gray-400">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;


// const TestimonialCard: React.FC<TestimonialCardProps> = ({
//   description,
//   name,
//   position,
//   logo = "https://via.placeholder.com/150",
// }) => {
//   return (
//     <div className="relative flex flex-col justify-center items-center text-purple-600 border-4 rounded-[40px] border-fuchsia-500 w-full p-6 bg-gradient-to-r from-white to-gray-50 shadow-lg transform transition-transform duration-500 hover:scale-105 sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
//       {/* Top Icon */}
//       <span className="absolute -top-12 left-0 transform -translate-x-1/2 bg-white rounded-full p-5 ">
//         <img src={commaLogo} alt="icon" className="w-16 h-16" />
//       </span>

//       {/* Description */}
//       <p className="mt-16 px-4 text-xl sm:text-2xl md:text-3xl font-bold italic text-center text-gray-700">
//         &ldquo;{description}&rdquo;
//       </p>

//       {/* Bottom Icon */}
//       <span className="absolute -bottom-12 right-0 transform translate-x-1/2 bg-white rounded-full p-5 ">
//         <img src={commaLogo} alt="icon" className="w-16 h-16 transform rotate-180" />
//       </span>

//       {/* Logo and Details */}
//       <div className="flex flex-col justify-center items-center mt-8">
//         <img
//           className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 rounded-full object-cover shadow-lg transition-transform duration-500 hover:rotate-6 hover:scale-110"
//           src={logo}
//           alt="Logo"
//         />
//         <div className="text-center mt-4">
//           <p className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">{name}</p>
//           <p className="text-sm md:text-base lg:text-lg text-purple-400">{position}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;
