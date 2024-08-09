import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/cropped-logo.png";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from(`${styles.navbar_logo}`, {
      y: -100,
      duration: 1,
      delay: 0.5, 
    });

    timeline.from(`${styles.navbar_toggle}`, {
      y: -100,
      opacity: 0.3,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={logo} alt="qrio" className={styles.navbar_logo_img} />
      </div>
      <div className={styles.navbar_toggle} onClick={toggleNavbar}>
        <span className={isOpen ? styles.bar_open : styles.bar}></span>
        <span className={isOpen ? styles.bar_open : styles.bar}></span>
        <span className={isOpen ? styles.bar_open : styles.bar}></span>
      </div>
      <ul
        className={`${styles.navbar_links} ${
          isOpen ? styles.navbar_links_open : ""
        }`}
      >
        <li>
          <Link to="/qrio-ui">Home</Link>
        </li>
        <li>
          <Link to="/qrio-ui/about">About</Link>
        </li>

        <li>
          <Link to="/qrio-ui/services">Services</Link>
        </li>
        <li>
          <Link to="/qrio-ui/contact">Contact</Link>
        </li>
        <li>
          <Link to="/qrio-ui/blog">Blog</Link>
        </li>
        <li>
          <Link to="/qrio-ui/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
