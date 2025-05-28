"use client";
import { useEffect, useState } from "react";

export function NavBar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setSolid(true);
      } else {
        setSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-[58px] transition-colors duration-200 text-white tracking-wide ${
        solid ? "bg-gray-400" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] w-full mx-auto px-[25px] pt-[18px] flex items-center">
        <div className="font-black">
          <a href="#">Transparent to Solid Nav Row</a>
        </div>
        <div className="ml-auto flex space-x-5">
          <a href="#">Item One</a>
          <a href="#">Item Two</a>
          <a href="#">Item Three</a>
        </div>
      </div>
    </nav>
  );
}