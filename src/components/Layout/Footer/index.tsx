import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <section className="container p-10">
        <div className="bg-custom-gradient w-full h-auto rounded-3xl p-6 flex justify-around">
          <span>
            <h1 className="text-3xl font-bold text-white">
              Let's connect and create something Amazing!
            </h1>
            <p className="text-white">
              Reach out to us for customized marketing plans.
            </p>
          </span>

          <button className="rounded-full flex items-center justify-end px-5 text-lg font-bold bg-transparent bg-white text-purple-700">
            Contact Us
            <span className="mx-1">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
        <hr className="my-10" />
        <div className="grid grid-cols-3 gap-2">
          <div className="border-2 border-red-600 text-white">
            <span className="flex text-md"  >
              <CiLocationOn className="text-xl font-bold mx-2" />
              <p>207-Navneet plaza, Palasia , Indore </p>
            </span>
            <span>
            <MdOutlineMail className="text-xl font-bold mx-2" />
              <p>qrioexample@youpmail.com</p>
            </span>
            <span>
            <BsTelephone className="text-xl" />
              <p>8269024132</p>
            </span>
          </div>
          <div className="border-2 border-red-600">Second Column</div>
          <div className="border-2 border-red-600">Second Column</div>
        </div>
        <hr className="my-10" />
        <div className="flex items-center justify-center">
          <span className="text-white text-md font-semibold opacity-75">
            © 2024 Qrio. All rights reserved.
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
