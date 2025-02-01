// sections/BannerSection.tsx
import React from "react";
import styles from "./styles.module.scss";
import Button from "../../components/Buttons/Button";

const BannerSection: React.FC = () => {
  // useGSAP(() => {
  //   gsap.to("#flower", {
  //     opacity: 1, // Ensure the element is fully visible
  //     duration: 1,
  //     rotate: 360, // Rotate to 360 degrees
  //     repeat: -1, // Infinite rotation
  //     ease: "linear", // Linear easing for smooth rotation
  //   });
  // });

  return (
    <section
      className={`min-h-screen h-auto mx-auto flex flex-col lg:flex-row justify-center items-center ${styles.baground}`}
    >
      <div className="flex container flex-col lg:flex-col p-16  justify-left w-2/3 text-white">
        <h1 data-text="Welcome to qrio" className={styles.heading}>
          Welcome to qrio
        </h1>
        <span
          id="banner_text"
          className="text-2xl md:text-4xl font-bold text-gray-100 flex text-center align-middle"
        >
          CURATING YOUR BRAND
        </span>

        <p
          id="banner_desc"
          className="tracking-wider leading-6 font-bold py-3 text-xl md:text-xl text-gray-400"
        >
          Discover Qrio, where creativity meets quirkiness, <br />
          and marketing strategies come with a side of pizzazz. <br />
          Dive into a world where your brand not only grows but <br /> thrives
          with flair!
        </p>
        <span id="banner_desc" className="my-3">
          <Button text="get started" />
        </span>
      </div>
    </section>
  );
};

export default BannerSection;

// const BannerSection: React.FC = () => {
//   return (
//     <section
//       className={`min-h-screen h-auto mx-auto flex flex-col lg:flex-row justify-center items-center ${styles.baground}`}
//     >
//       <div className="flex container flex-row  text-white">
//         <div className="w-1/2 py-8 tracking-wider">
//           <h1 data-text="Welcome to qrio" className={styles.heading}>
//             Welcome to qrio
//           </h1>
//           <span
//             id="banner_text"
//             className="tracking-wider capitalize text-2xl md:text-5xl font-bold text-gray-400"
//           >
//             CURATING YOUR BRAND
//           </span>
//           <p id="banner_desc" className="tracking-wider leading-6 font-bold py-8 text-xl md:text-2xl py-2 ">
//             Discover Qrio, where creativity meets quirkiness, and marketing
//             strategies come with a side of pizzazz. Dive into a world where your
//             brand not only grows but thrives with flair!
//           </p>
//           <span className="py-8 my-3">
//             <Button text="get started" />
//           </span>
//         </div>
//         <div className="w-1/2"></div>
//       </div>
//     </section>
//   );
// };
