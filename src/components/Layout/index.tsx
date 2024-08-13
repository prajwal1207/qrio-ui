import { useEffect, useRef, useState } from "react";
import { CgScrollV } from "react-icons/cg";
import { FaPause } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { Outlet } from "react-router-dom";
import song from "../../assets/music/apocalypse.mp3";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";

const Layout = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef: any = useRef(new Audio(song));

  useEffect(() => {
    (async () => {
      if (audioRef.current) {
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
      <Navbar />
      <main className={styles.content}>
        <Outlet />
        <div>
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
