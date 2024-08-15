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

    timeline.from(`.nlink`, {
      y: -100,
      opacity: 0.3,
      duration: 0.5,
      delay: 0,
      stagger: 0.2,
    });
  });

  // <nav className={styles.navbar}>
  return (
    <header className={styles.navbar}>
      <nav
        className={`container flex justify-between items-center p-2 ${styles.navbar_wrapper}`}
      >
        <div className={styles.navbar_logo}>
          <a href="/qrio-ui/">
            <img
              id="brand"
              src={logo}
              alt="qrio"
              className={styles.navbar_logo_img}
            />
          </a>
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
          <li className="nlink">
            <Link to="/qrio-ui" onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li className="nlink">
            <Link to="/qrio-ui/about" onClick={toggleNavbar}>
              About
            </Link>
          </li>

          <li className="nlink">
            <Link to="/qrio-ui/services" onClick={toggleNavbar}>
              Services
            </Link>
          </li>
          <li className="nlink">
            <Link to="/qrio-ui/contact" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
          <li className="nlink">
            <Link to="/qrio-ui/blog" onClick={toggleNavbar}>
              Blog
            </Link>
          </li>
          <li className="nlink">
            <Link to="/qrio-ui/portfolio" onClick={toggleNavbar}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
