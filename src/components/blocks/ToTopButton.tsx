"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= window.innerHeight * 0.25);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => { 
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };
  
  return (
    <div className={`fixed bottom-4 right-4 cursor-pointer z-50 flex bg-black w-10 h-10 md:w-15 md:h-15 justify-center items-center transition-all duration-500 ease-in-out hover:scale-110 hover:bg-gray-800 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`} onClick={scrollToTop}>
      <Link href="#"><Image src="/icons/ARROW-UP-TO-TOP.svg" alt="arrow up" width={20} height={20}/></Link>
    </div>
  )
}