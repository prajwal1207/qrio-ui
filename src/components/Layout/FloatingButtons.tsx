import React, { useEffect, useRef, useState } from "react";
import { CgScrollV } from "react-icons/cg";
import { FaPause } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import whatapp_icon from "../../assets/icons/whatsapp_icon.svg";
import song from "../../assets/music/apocalypse.mp3";
import gsap from "gsap";


  const FloatingButtons: React.FC = () => {

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
      <div>
        <Link to="https://wa.me/9993531777?text=I'm%20interested%20in%20your%20car%20for%20sale">
          <button className="bg-purple-500 p-2 rounded-full text-white font-bold fixed bottom-4 left-4 z-50">
            <img src={whatapp_icon} className="h-8" alt="WhatsApp Icon" />
          </button>
        </Link>
  
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="bg-transparent border-2 border-solid border-purple-500 p-3 rounded-full text-white font-bold fixed bottom-4 right-4 z-50"
        >
          {isPlaying ? <FaPause size={15} /> : <IoIosPlay size={15} />}
        </button>
  
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-purple-500 p-3 rounded-full text-white font-bold fixed bottom-4 right-16 z-50"
        >
          <CgScrollV size={18} />
        </button>
      </div>
    );
  };

  export default FloatingButtons