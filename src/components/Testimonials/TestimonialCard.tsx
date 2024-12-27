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
      <p className="mt-12 px-4 text-xl sm:text-2xl md:text-xl font-bold italic text-center text-white">
        &ldquo;{description}&rdquo;
      </p>

      {/* Bottom Icon */}
      <span className="absolute -bottom-12 right-0 transform translate-x-1/2 bg-black rounded-full p-5 ">
        <img src={commaLogo} alt="icon" className="w-16 h-16 transform rotate-180" />
      </span>

      {/* Logo and Details */}
      <div className="flex flex-col justify-center items-center mt-8 ">
        <img
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 rounded-full object-cover shadow-lg transition-transform duration-500 hover:rotate-6 hover:scale-110"
          src={logo}
          alt="Logo"
        />
          <span className="flex pt-2 p-2 ">
        <svg
          className="w-4 h-4 ms-1 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 ms-1 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 ms-1 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 ms-1 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 ms-1 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </span>
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
