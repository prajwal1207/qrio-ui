import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/cropped-logo.png";
import styles from "./styles.module.scss";
import React, { useEffect, useRef, useState } from "react";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Navbar: React.FC<any> = ({ link, seLink }) => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useGSAP(() => {
    gsap.from("#brand", { y: -40, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(".nlink", { y: -40, opacity: 0, duration: 1, stagger: 0.2 });
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setVisible(
            currentScrollY < lastScrollY.current || currentScrollY < 10
          );
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.navbarContainer} ${
        visible ? styles.show : styles.hide
      }`}
    >
      <div className="z-[1000]">
        <a href="/">
          <img
            id="brand"
            src={logo}
            alt="qrio"
            className="h-14 object-contain"
          />
        </a>
      </div>
      <header className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
        <nav className={styles.navbar_wrapper}>
          <ul className={styles.navbar_links}>
            {links.map(({ path, label }, index) => (
              <li
                key={index}
                className={`nlink ${link.path === path ? styles.active : ""}`}
                onClick={() => {
                  seLink({ path, label });
                  setMenuOpen(false);
                }}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={() => seLink({ path, label })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
