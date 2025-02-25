"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-[999] fixed w-full p-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "bg-transparent text-white" : "bg-white text-gray-900"} `}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo (Centered on s-sm & sm, Left-aligned on md+) */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Link href="/">
            <Image
              src={isAtTop ? "/images/header-title-white.svg" : "/images/header-title.svg"}
              width={84}
              height={67}
              alt="bannerImage"
            />
          </Link>
        </div>

        {/* Hide everything on s-sm & sm, show on md+ */}
        <div className="hidden md:flex flex-row items-center space-x-4">
          {/* Navigation Links */}
          <nav className="flex flex-row items-center space-x-4">
            <Link href="/about" className="hover:text-gray-300 flex items-center space-x-1">
              <span>Your Needs</span>
              <MdOutlineKeyboardArrowDown className="text-[25px]" />
            </Link>

            <Link href="/contact" className="hover:text-gray-300 flex items-center space-x-1">
              <span>Our Solution</span>
              <MdOutlineKeyboardArrowDown className="text-[25px]" />
            </Link>
          </nav>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link href="/about" className="hover:text-gray-300">
              <div className="btn-primary">About us</div>
            </Link>

            <Link href="/about" className="hover:text-gray-300">
              <div className="btn-reverse">Contact us</div>
            </Link>
          </div>

          {/* Language Selector */}
          <div className="cursor-pointer">
            EN &nbsp; <span style={{ fontFamily: "Nunito-thin" }}>FR</span>
          </div>
        </div>
      </div>
    </header>
  );
}
