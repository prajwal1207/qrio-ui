import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {  NavLink } from "react-router-dom";
import logo from "../../../assets/images/cropped-logo.png";
import styles from "./styles.module.scss";
import React from "react";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  // { path: "/qrio-ui/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const Navbar: React.FC<any> = ({ link, seLink }) => {
  useGSAP(() => {
    gsap.from(`#brand`, { y: -40, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(`.nlink`, { y: -40, opacity: 0, duration: 0.3, stagger: 0.2 });
  });

  return (
    <div className="flex items-center p-3 fixed top-0 z-[1000]">
      <div className={styles.navbar_logo}>
        <a href="/">
          <img
            id="brand"
            src={logo}
            alt="qrio"
            className={styles.navbar_logo_img}
          />
        </a>
      </div>
      <header className={styles.navbar}>
        <nav className={styles.navbar_wrapper}>
          <ul className={styles.navbar_links}>
            {links.map(({ path, label }, index) => (
              <li
                key={index}
                className={`${link.path === path ? styles.active : ""}`}
                onClick={() => seLink({ path, label })}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? styles.active : "" 
                  }
                  onClick={() => seLink({ path, label })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
