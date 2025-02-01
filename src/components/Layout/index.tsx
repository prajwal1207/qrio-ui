import gsap from "gsap";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";
import { GalaxyParallax } from "../Gaxaxy";
import { useGSAP } from "@gsap/react";
import FloatingButtons from "./FloatingButtons";
import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [activeLink, setSctiveLink] = useState({ path: "/", label: "Home" });
  const isFirstRender = useRef(true);

  const setlink = (link: any) => {
    setSctiveLink(link);
  };


  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    gsap.from("#content", {
      y: 2000,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { dependencies: [activeLink] });

  return (
    <>
      <Navbar link={activeLink} seLink={setlink} />
      <main className={styles.content}>
        <div id="content">
          <GalaxyParallax starCount={8000}>
            <Outlet />
          </GalaxyParallax>
        </div>
        <FloatingButtons />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
