import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/QRIO.png";
import { SOCIAL_LINKS } from "../../../constants/constant";
import linkdin_icon from "../../../assets/icons/linkdin.svg";
import insta_icon from "../../../assets/icons/instagram_icon.svg";
import facebook_icon from "../../../assets/icons/facebook_icon.svg";
import thread_icon from "../../../assets/icons/thred_icon.svg";
import youtube_icon from "../../../assets/icons/youtube_icon.svg";
import whatsapp_icon from "../../../assets/icons/whatsapp_icon.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <section className="container p-10">
        <div className="bg-custom-gradient w-full h-auto rounded-3xl p-6 flex justify-around flex-col lg:flex-row ">
          <span>
            <h1 className="text-3xl font-bold text-white">
              Let's connect and create something Amazing!
            </h1>
            <p className="text-white">
              Reach out to us for customized marketing plans.
            </p>
          </span>

          <button className=" h-12 rounded-full flex items-center justify-end px-5 text-lg font-bold bg-transparent bg-white text-purple-700">
            Contact Us
            <span className="mx-1">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
        <hr className="my-10" />

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="text-gray-300">
            <img src={logo} className="h-28" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, rem eius doloribus eum repellendus asperiores ipsa
              illo voluptatibus molestias error quo dolores ut sit magni
              deleniti, animi aliquam hic. Maxime.
            </p>
            <span className="flex text-md my-2">
              <CiLocationOn className="text-xl font-bold mx-2" />
              <p>207-Navneet plaza, Palasia, Indore </p>
            </span>
            <span className="flex text-md my-2">
              <MdOutlineMail className="text-xl font-bold mx-2" />
              <p>qrioexample@youpmail.com</p>
            </span>
            <span className="flex text-md my-2">
              <BsTelephone className="text-xl font-bold mx-2" />
              <p>8269024132</p>
            </span>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-lg font-bold text-fuchsia-500 cursor-pointer my-3">
              Navigation
            </h1>
            <ul className="text-gray-300">
              <li className="text-md hover:text-fuchsia-500 py-2">
                <Link to="/qrio-ui/">Home</Link>
              </li>
              <li className="text-md hover:text-fuchsia-500 py-2">
                <Link to="/qrio-ui/about">About</Link>
              </li>
              <li className="text-md hover:text-fuchsia-500 py-2">
                <Link to="/qrio-ui/services">Services</Link>
              </li>
              <li className="text-md hover:text-fuchsia-500 py-2">
                <Link to="/qrio-ui/contact">Contact</Link>
              </li>
              <li className="text-md hover:text-fuchsia-500 py-2">
                <Link to="/qrio-ui/blog">Blog</Link>
              </li>
              <li className="text-md hover:text-fuchsia-500 py-2">
                <Link to="/qrio-ui/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="relative z-0 w-full group">
              <p className="text-center lg:text-start m-3 text-lg font-bold text-fuchsia-500">
                Get the latest information
              </p>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  console.log(event);
                }}
                className="max-w-md mx-auto"
              >
                <div className="flex">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 box-border p-5 focus:ring-fuchsia-500"
                    placeholder="Email address"
                    required
                  />

                  <button
                    type="submit"
                    className="text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center"
                  >
                    <IoArrowRedo />
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center ">
              <Link target="_blank" to={SOCIAL_LINKS.LINKEDIN}>
                <img
                  src={linkdin_icon}
                  alt="linkedin"
                  className="text-white text-4xl m-3"
                />
              </Link>
              <Link target="_blank" to={SOCIAL_LINKS.INSTAGRAM}>
                <img
                  src={insta_icon}
                  alt="linkedin"
                  className="text-white text-4xl m-3"
                />
              </Link>
              <Link target="_blank" to={SOCIAL_LINKS.FACEBOOK}>
                <img
                  src={facebook_icon}
                  alt="linkedin"
                  className="text-white text-4xl m-3"
                />
              </Link>
              <Link target="_blank" to={SOCIAL_LINKS.YOUTUBE}>
                <img
                  src={youtube_icon}
                  alt="linkedin"
                  className="text-white text-4xl m-3"
                />
              </Link>
              <Link target="_blank" to={SOCIAL_LINKS.CONTACT}>
                <img
                  src={whatsapp_icon}
                  alt="linkedin"
                  className="text-white text-4xl m-3"
                />
              </Link>
              <Link target="_blank" to={SOCIAL_LINKS.CONTACT}>
                <img
                  src={thread_icon}
                  alt="linkedin"
                  className="text-white text-4xl m-3"
                />
              </Link>
            </div>
          </div>
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
