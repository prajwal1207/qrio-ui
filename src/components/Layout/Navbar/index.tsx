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
    timeline.from(`#brand`, {
      y: -100,
      duration: 1,
      delay: 0.5,
    });

    timeline.from(`#navlinks`, {
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
        <img
          id="brand"
          src={logo}
          alt="qrio"
          className={styles.navbar_logo_img}
        />
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
        <li id="navlinks">
          <Link to="/qrio-ui" onClick={toggleNavbar}>
            Home
          </Link>
        </li>
        <li id="navlinks">
          <Link to="/qrio-ui/about" onClick={toggleNavbar}>
            About
          </Link>
        </li>

        <li id="navlinks">
          <Link to="/qrio-ui/services" onClick={toggleNavbar}>
            Services
          </Link>
        </li>
        <li id="navlinks">
          <Link to="/qrio-ui/contact" onClick={toggleNavbar}>
            Contact
          </Link>
        </li>
        <li id="navlinks">
          <Link to="/qrio-ui/blog" onClick={toggleNavbar}>
            Blog
          </Link>
        </li>
        <li id="navlinks">
          <Link to="/qrio-ui/portfolio" onClick={toggleNavbar}>
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
