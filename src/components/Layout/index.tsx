import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { CgScrollV } from "react-icons/cg";
import { FaPause } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import song from "../../assets/music/apocalypse.mp3";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";
import { BsWhatsapp } from "react-icons/bs";

const Layout = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef: any = useRef(new Audio(song));
  const cursorRefBlue = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRefBlue.current) {
        gsap.to(cursorRefBlue.current, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    body?.addEventListener("mousemove", handleMouseMove);

    return () => {
      body?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1;
        const res = await audioRef.current.play();
        console.log({ audioRef, res });
      }
    })();
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <div
        id={styles.cursor}
        ref={cursorRefBlue}
        className="fixed h-6 w-6 bg-custom-gradient-2 rounded-full pointer-events-none"
      //   style={{
      //     // zIndex: 1000,
      //     boxShadow: `
      // 0 0 10px rgba(0, 122, 255, 0.8), 
      // 0 0 20px rgba(0, 122, 255, 0.6), 
      // 0 0 30px rgba(0, 122, 255, 0.4), 
      // 0 0 40px rgba(0, 122, 255, 0.2)`,
      //     filter: "blur(2.1em)",
      //   }}
      ></div> */}
      <Navbar />
      <main className={styles.content}>
        <Outlet />
        <div>
          <Link to="https://wa.me/9685358775?text=I'm%20interested%20in%20your%20car%20for%20sale">
            <button className="bg-purple-500 p-3 rounded-full text-white font-bold fixed bottom-4 last-16 z-50">
              <BsWhatsapp />
            </button>
          </Link>
          <button
            onClick={togglePlayPause}
            className="bg-transparent border-2 border-solid border-purple-500 p-3 rounded-full text-white font-bold fixed bottom-4 right-4 z-50"
          >
            {isPlaying ? <FaPause size={15} /> : <IoIosPlay size={15} />}
          </button>
          <button
            onClick={scrollToTop}
            className="bg-purple-500 p-3 rounded-full text-white font-bold fixed bottom-4 right-16 z-50"
          >
            <CgScrollV size={18} />
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
