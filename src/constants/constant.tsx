import React from "react";
import sheratonlogo from "../assets/images/testimonials/Sheratonlogo.png";
import weatherwise from "../assets/images/testimonials/Weatherwiselogo.png";
import mpilogo from "../assets/images/testimonials/mpilogo.png";
import { BiAlarm } from "react-icons/bi";

export interface TestimonyType {
  id: number;
  bgColor: string;
  icon?: React.ReactNode;
  name: string;
  description: string;
  postion: string;
  logo: string;
}

// export const testimonial: TestimonyType[] = [
//   {
//     id: 1,
//     bgColor: "#F54748",
//     icon: <BiAlarm />,
//     name: "Sheraton Grand Palace",
//     description:
//       "Their marketing consultancy helped us enhance both our offline and online presence, and the impact was immediate. The team not only designed stunning graphic creatives but also delivered engaging video content and Instagram reels that truly captured the essence of our brand. The collaboration was smooth, their ideas were innovative, and the results exceeded our expectations. We highly recommend qrio to anyone looking for a creative and strategic marketing partner.",
//     postion: "Hotel by Marriott",
//     logo: sheratonlogo,
//   },
//   {
//     id: 2,
//     bgColor: "#7952B3",
//     icon: <BiAlarm />,
//     name: "Watergram",
//     description:
//       "Partnering with qrio has been an incredible experience for Watergram. They took the time to understand our vision and designed customized water bottle labels that perfectly align with our brand. Their attention to detail, creativity, and ability to bring our ideas to life was outstanding. The designs not only look fantastic but have also received great feedback from our clients. qrio's team is responsive, professional, and truly talented—we couldn’t have asked for a better collaboration!",
//     postion: "",
//     logo: weatherwise,
//   },
//   {
//     id: 3,
//     bgColor: "#1597BB",
//     icon: <BiAlarm />,
//     name: "Maheshwari Packaging Industries",
//     description:
//       "qrio delivered exceptional commercial videography and photography services for Maheshwari Packaging Industries. They perfectly captured the essence of our polypropylene multifilament yarn production process, showcasing the quality and precision we stand for. The final output was both visually stunning and professionally executed, making a huge impact on our marketing efforts. The team at qrio was incredibly easy to work with—creative, attentive to our needs, and always meeting deadlines. We are extremely satisfied with their work and highly recommend them for any commercial advertising needs.",
//     postion: "",
//     logo: mpilogo,
//   },
//   {
//     id: 4,
//     bgColor: "#185ADB",
//     name: "WeatherWise",
//     icon: <BiAlarm />,
//     description:
//       "Working with qrio has been a fantastic experience for Weatherwise. They handled our commercial videography and photography for our weather strips / wool pile products, and the results were beyond our expectations. qrio's team captured the intricate details of our manufacturing process and highlighted the durability of our products in a way that truly resonated with our audience. The professionalism, creativity, and dedication they brought to the project were remarkable. We highly recommend qrio for anyone looking to elevate their brand with top-notch visual content.",
//     postion: "",
//     logo: weatherwise,
//   },
//   {
//     id: 5,
//     bgColor: "#FF616D",
//     name: "Haublika Bhandar",
//     icon: <BiAlarm />,
//     description:
//       "qrio has been an exceptional partner in helping us bring Haublika Bhandar to life in Mumbai. From designing our brand identity and logo to packaging our traditional Rajasthani sweets and snacks with authenticity, they truly understood our vision. Their commercial photography and product photoshoot captured the rich essence of our offerings, making our products stand out beautifully. Hosting our promotional event at Marine Drive was the icing on the cake—it was executed flawlessly and brought our brand closer to the local people. We couldn’t be happier with the collaboration and highly recommend qrio for their creativity, dedication, and seamless execution.",
//     postion: "",
//     logo: weatherwise,
//   },
// ];

export const testimonial: TestimonyType[] = [
  {
    id: 1,
    bgColor: "#F54748",
    icon: <BiAlarm />,
    name: "Sheraton Grand Palace",
    description:
      "qrio enhanced our marketing with stunning graphics, videos, and reels, capturing our brand's essence. Their innovative ideas and smooth collaboration exceeded our expectations.",
    postion: "Hotel by Marriott",
    logo: sheratonlogo,
  },
  {
    id: 2,
    bgColor: "#7952B3",
    icon: <BiAlarm />,
    name: "Watergram",
    description:
      "qrio designed labels perfectly aligning with our brand. Their creativity and attention to detail were outstanding. The collaboration was smooth, and the feedback was great.",
    postion: "",
    logo: weatherwise,
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
  },
  {
    id: 5,
    bgColor: "#FF616D",
    name: "Haublika Bhandar",
    icon: <BiAlarm />,
    description:
      "qrio designed our brand identity, captured our products' essence in photos, and executed a flawless promotional event. We're thrilled with the results.",
    postion: "",
    logo: weatherwise,
  },
];

// services
import computer from "../assets/icons/computer.svg";
import camera from "../assets/icons/camera.svg";
import image from "../assets/icons/image.svg";
import lightning from "../assets/icons/lightning.svg";
import social from "../assets/icons/social.svg";
import youtube from "../assets/icons/youtube.svg";

export const services = [
  {
    id: 1,
    title: "Digital Marketing",
    desc: "Where clicks meet bricks and business grows",
    icon: computer,
  },
  {
    id: 2,
    title: "Social Media Marketing",
    desc: "Turning your likes into loves and shares into stares",
    icon: youtube,
  },
  {
    id: 3,
    title: "Designing",
    desc: "Because your brand deserves to dress up too.",
    icon: image,
  },
  {
    id: 4,
    title: "Photography",
    desc: "Capturing your best side, every side, and the upside.",
    icon: camera,
  },
  {
    id: 5,
    title: "Offline Marketing",
    desc: "Taking it to the streets, and the billboards, and the radios.",
    icon: lightning,
  },
  {
    id: 5,
    title: " PR Services",
    desc: "Making sure the world knows how amazing you are.",
    icon: social,
  },
];

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/qrio.in?igsh=aHJ1enBlbHhwZTc3",
  FACEBOOK: "https://www.facebook.com/share/1DxwTAG7qQ9o2Pkc/?mibextid=LQQJ4d",
  LINKEDIN: "https://www.linkedin.com/company/qrio-in/",
  YOUTUBE: "https://www.youtube.com/@qrio.marketing",
  THREAD: "",
  EMAIL: "hello.qrio@gmail.com",
  CONTACT: "+91 9993531777",
};

import img_neelanshi from "../assets/images/img-neelanshi.jpg";
import img_yashi from "../assets/images/img-yashi.jpg";
import img_samyak from "../assets/images/img-samyak.jpg";
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
    name: "Samyak Gandhi",
    title: "The Production Prodigy",
    desc: `Lights, camera, action! Samyak is the Spielberg of production, orchestrating every frame to
perfection. Whether it's a photoshoot or a commercial, he makes sure every pixel pops and
every shot tells a story. Under his watch, production isn’t just a process; it’s a performance.`,
    image: img_samyak,
  },
  {
    name: "Samyak Gandhi",
    title: "The Production Prodigy",
    desc: `Lights, camera, action! Samyak is the Spielberg of production, orchestrating every frame to
perfection. Whether it's a photoshoot or a commercial, he makes sure every pixel pops and
every shot tells a story. Under his watch, production isn’t just a process; it’s a performance.`,
    image: img_samyak,
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
