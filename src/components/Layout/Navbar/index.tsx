import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/cropped-logo.png";
import styles from "./styles.module.scss";


interface NavLinkProps {
  path: string;
  label: string;
  toggleNavbar: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ path, label, toggleNavbar }) => (
  <li className="nlink">
    <Link to={path} onClick={toggleNavbar}>
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from(`#brand`, {
      y: -40,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    timeline.from(`.nlink`, {
      y: -40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.2,
    });
  });

  const links = [
    { path: "/qrio-ui", label: "Home" },
    { path: "/qrio-ui/about", label: "About" },
    { path: "/qrio-ui/services", label: "Services" },
    { path: "/qrio-ui/contact", label: "Contact" },
    { path: "/qrio-ui/blog", label: "Blog" },
    { path: "/qrio-ui/portfolio", label: "Portfolio" },
  ];

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
          {links.map((link, index) => (
            <NavLink
              key={index}
              path={link.path}
              label={link.label}
              toggleNavbar={toggleNavbar}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};



export default Navbar;
