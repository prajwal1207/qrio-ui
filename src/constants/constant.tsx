import sheratonlogo from "../assets/images/testimonials/Sheratonlogo.png";
import weatherwise from "../assets/images/testimonials/Weatherwiselogo.png";
import mpilogo from "../assets/images/testimonials/mpilogo.png";

export interface TestimonyType {
  name: string;
  description: string;
  postion: string;
  logo: string;
}

export const testimonial: TestimonyType[] = [
  {
    name: "Sheraton Grand Palace",
    description:
      "Their marketing consultancy helped us enhance both our offline and online presence, and the impact was immediate. The team not only designed stunning graphic creatives but also delivered engaging video content and Instagram reels that truly captured the essence of our brand. The collaboration was smooth, their ideas were innovative, and the results exceeded our expectations. We highly recommend qrio to anyone looking for a creative and strategic marketing partner.",
    postion: "Hotel by Marriott",
    logo: sheratonlogo,
  },
  {
    name: "Watergram",
    description:
      "Partnering with qrio has been an incredible experience for Watergram. They took the time to understand our vision and designed customized water bottle labels that perfectly align with our brand. Their attention to detail, creativity, and ability to bring our ideas to life was outstanding. The designs not only look fantastic but have also received great feedback from our clients. qrio's team is responsive, professional, and truly talented—we couldn’t have asked for a better collaboration!",
    postion: "",
    logo: "",
  },
  {
    name: "Maheshwari Packaging Industries",
    description:
      "qrio delivered exceptional commercial videography and photography services for Maheshwari Packaging Industries. They perfectly captured the essence of our polypropylene multifilament yarn production process, showcasing the quality and precision we stand for. The final output was both visually stunning and professionally executed, making a huge impact on our marketing efforts. The team at qrio was incredibly easy to work with—creative, attentive to our needs, and always meeting deadlines. We are extremely satisfied with their work and highly recommend them for any commercial advertising needs.",
    postion: "",
    logo: mpilogo,
  },
  {
    name: "WeatherWise",
    description:
      "Working with qrio has been a fantastic experience for Weatherwise. They handled our commercial videography and photography for our weather strips / wool pile products, and the results were beyond our expectations. qrio's team captured the intricate details of our manufacturing process and highlighted the durability of our products in a way that truly resonated with our audience. The professionalism, creativity, and dedication they brought to the project were remarkable. We highly recommend qrio for anyone looking to elevate their brand with top-notch visual content.",
    postion: "",
    logo: weatherwise,
  },
  {
    name: "Haublika Bhandar",
    description:
      "qrio has been an exceptional partner in helping us bring Haublika Bhandar to life in Mumbai. From designing our brand identity and logo to packaging our traditional Rajasthani sweets and snacks with authenticity, they truly understood our vision. Their commercial photography and product photoshoot captured the rich essence of our offerings, making our products stand out beautifully. Hosting our promotional event at Marine Drive was the icing on the cake—it was executed flawlessly and brought our brand closer to the local people. We couldn’t be happier with the collaboration and highly recommend qrio for their creativity, dedication, and seamless execution.",
    postion: "",
    logo: "",
  },
];
