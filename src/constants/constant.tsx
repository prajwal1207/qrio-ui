import React from "react";
import sheratonlogo from "../assets/images/clients/Sheraton Tungsten Logo.png";
import weatherwise from "../assets/images/clients/Weather.png";
import mpilogo from "../assets/images/clients/MPI.png";
import watergram from "../assets/images/clients/Watergram.png";
import nineAngels from "../assets/images/clients/Nine_angels.jpg";
import hublika from "../assets/images/clients/Untitled design.png";
import { BiAlarm } from "react-icons/bi";

export interface TestimonyType {
  id: number;
  bgColor: string;
  icon?: React.ReactNode;
  name: string;
  description: string;
  postion: string;
  logo: string;
  rating: number;
}

export const TESTIMONIAL: TestimonyType[] = [
  {
    id: 1,
    bgColor: "#F54748",
    icon: <BiAlarm />,
    name: "Sheraton Grand Palace",
    description:
      "qrio enhanced our marketing with stunning graphics, videos, and reels, capturing our brand's essence. Their innovative ideas and smooth collaboration exceeded our expectations.",
    postion: "Hotel by Marriott",
    logo: sheratonlogo,
    rating: 4,
  },
  {
    id: 2,
    bgColor: "#7952B3",
    icon: <BiAlarm />,
    name: "Watergram",
    description:
      "qrio designed labels perfectly aligning with our brand. Their creativity and attention to detail were outstanding. The collaboration was smooth, and the feedback was great.",
    postion: "",
    logo: watergram,
    rating: 4.5,
  },
  {
    id: 3,
    bgColor: "#1597BB",
    icon: <BiAlarm />,
    name: "Maheshwari Packaging Industries",
    description:
      "qrio's videography captured our yarn production process beautifully, enhancing our marketing. The team was creative, attentive, and met all deadlines.",
    postion: "",
    logo: mpilogo,
    rating: 3,
  },
  {
    id: 4,
    bgColor: "#185ADB",
    name: "WeatherWise",
    icon: <BiAlarm />,
    description:
      "qrio's videography showcased our weather strips perfectly, highlighting their durability. Their professionalism and creativity made a big impact.",
    postion: "",
    logo: weatherwise,
    rating: 4,
  },
  {
    id: 5,
    bgColor: "#FF616D",
    name: "Haublika Bhandar",
    icon: <BiAlarm />,
    description:
      "qrio designed our brand identity, captured our products' essence in photos, and executed a flawless promotional event. We're thrilled with the results.",
    postion: "",
    logo: hublika,
    rating: 3.5,
  },
  {
    id: 5,
    bgColor: "#FF616D",
    name: "Nine Angels",
    icon: <BiAlarm />,
    description:
      "qrio designed our brand identity, captured our products' essence in photos, and executed a flawless promotional event. We're thrilled with the results.",
    postion: "",
    logo: nineAngels,
    rating: 3.5,
  },
];

// services

// import img10 from '../assets/services page images 00/12085246_20944055.jpg'
import img1 from "../assets/services page images 00/3276803.jpg";
import img8 from "../assets/services page images 00/4102879_971.jpg";
import img9 from "../assets/services page images 00/5453989_2805145.jpg";
import img4 from "../assets/services page images 00/5f474595917c102fcedb0ae881ad0d85.jpg";
import img6 from "../assets/services page images 00/7f1d91eef2bac5b609ef5c9229aa4a6d.jpg";
import img5 from "../assets/services page images 00/aa1d1631e16eb699e8e7c07fd69561d6.jpg";
import img7 from "../assets/services page images 00/brand identity.png";
import img3 from "../assets/services page images 00/d52d7cdd20736a01b0978e04ac276d39.jpg";
import img2 from "../assets/services page images 00/d769e3042056ff35854840a15bc55cb3.jpg";

export const SERVICES = [
  {
    id: 1,
    title: "Package Designing",
    desc: "Crafting captivating packages that enhance brand appeal and boost sales.",
    icon: img1,
  },
  {
    id: 2,
    title: "Graphic Designing",
    desc: "Creating visuals that transform ideas into engaging and memorable designs.",
    icon: img2,
  },
  {
    id: 3,
    title: "Video Editing",
    desc: "Polishing videos to perfection, ensuring every frame tells your story.",
    icon: img3,
  },
  {
    id: 4,
    title: "Photo & Videography",
    desc: "Capturing moments with a creative lens for lasting impressions.",
    icon: img4,
  },
  {
    id: 5,
    title: "Offline Marketing",
    desc: "Delivering impactful messages through traditional yet powerful channels.",
    icon: img5,
  },
  {
    id: 6,
    title: "PR Services",
    desc: "Building strong reputations and ensuring your brand shines in the spotlight.",
    icon: img6,
  },
  {
    id: 7,
    title: "Brand Identity",
    desc: "Establishing a unique and cohesive identity that stands out in the market.",
    icon: img7,
  },
  {
    id: 8,
    title: "Website Designing",
    desc: "Designing intuitive and visually stunning websites for digital success.",
    icon: img8,
  },
  {
    id: 9,
    title: "Social Media Marketing",
    desc: "Boosting your brand's online presence with creative and strategic campaigns.",
    icon: img9,
  },
];

import slide1 from "../assets/Pitchdeck/0.jpg";
import slide2 from "../assets/Pitchdeck/1.jpg";
import slide3 from "../assets/Pitchdeck/2.jpg";
import slide4 from "../assets/Pitchdeck/3.jpg";
import slide5 from "../assets/Pitchdeck/4.jpg";
import slide6 from "../assets/Pitchdeck/5.jpg";
import slide7 from "../assets/Pitchdeck/6.jpg";
import slide8 from "../assets/Pitchdeck/7.jpg";
import slide9 from "../assets/Pitchdeck/8.jpg";
import slide10 from "../assets/Pitchdeck/9.jpg";
import slide11 from "../assets/Pitchdeck/10.jpg";

export const PITCHDECK = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
];

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/qrio.in?igsh=aHJ1enBlbHhwZTc3",
  FACEBOOK: "https://www.facebook.com/share/1DxwTAG7qQ9o2Pkc/?mibextid=LQQJ4d",
  LINKEDIN: "https://www.linkedin.com/company/qrio-in/",
  YOUTUBE: "https://www.youtube.com/@qrio.marketing",
  THREAD: "https://www.threads.net/@qrio.in",
  EMAIL: "hello.qrio@gmail.com",
  CONTACT: "+91 9131977282",
  ADDRESS: "207-Navneet plaza, Palasia, Indore (M.P)",
};

import img_neelanshi from "../assets/images/img-neelanshi.jpg";
import img_yashi from "../assets/images/img-yashi.jpg";
import img_aayush from "../assets/images/img-aayush.jpg";

export const FOUNDER_DETAILS = [
  {
    name: "Yashasvi Sharma",
    title: "The Creative Whiz",
    desc: `If creativity had a duel, Yashasvi would be the reigning champion. Armed with her arsenal of
design tools and an eye for the sublime, she transforms bland into brand. Her projects don’t just
meet expectations; they dance on them and then do a backflip. Yashasvi is the heart and soul of
Qrio’s creative pulse, ensuring everything we produce is both eye-candy and brain food.`,
    image: img_yashi,
  },
  {
    name: "Neelanshi Khare",
    title: "The Marketing Maestro",
    desc: `When she's not busy breaking the internet with viral campaigns, Neelanshi can be found
sipping chai and plotting world domination—one brand at a time. Her marketing strategies aren’t
just effective; they’re revolutionary. With a blend of intuition and analytics, Neelanshi ensures
Qrio’s campaigns aren't just seen; they're remembered.`,
    image: img_neelanshi,
  },

  {
    name: "Ayush Maheshwari",
    title: "The Business Brain",
    desc: `Ayush doesn’t just think outside the box; he redesigns it for better efficiency. With a mind
sharp enough to slice through the toughest business challenges, he’s the go-to guy for growth
hacks and power moves. Ayush's strategies are the secret sauce behind Qrio’s success,
blending innovation with actionable insights that propel our clients to new heights`,
    image: img_aayush,
  },
];

import sharaton_logo from "../assets/images/clients/Sheraton Tungsten Logo.png";
import mpi_logo from "../assets/images/clients/MPI.png";
import weatherwise_logo from "../assets/images/clients/Weather.png";
import water_logo from "../assets/images/clients/Watergram.png";
import hub_logo from "../assets/images/clients/Untitled design.png";
import nine_angles from "../assets/images/clients/Nine_angels.jpg";

export const CLIENTS_LOGO = [
  { name: "MPI", logo: mpi_logo },
  { name: "Sheraton grand palace", logo: sharaton_logo },
  { name: "Weatherwise", logo: weatherwise_logo },
  { name: "Watergram", logo: water_logo },
  { name: "Hublika", logo: hub_logo },
  { name: "Nine Angels", logo: nine_angles },
];
