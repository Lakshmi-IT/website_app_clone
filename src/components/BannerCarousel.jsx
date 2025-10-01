import React, { useState, useEffect, useRef } from "react";
import b1 from "../assets/b1.jpeg";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/banner4.jpeg";
import b4 from "../assets/banner3.jpeg";

const banners = [b1, b2, b3, b4];

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex]);

  return (
    <div className="relative w-full max-w-[97%] mx-auto overflow-hidden rounded-xl">
      {/* Slides */}
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {banners.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0 h-[200px]">
            <img
              src={src}
              alt={`banner-${i}`}
              className="w-full h-full object-fill rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === activeIndex
                ? "bg-[#042048] opacity-100"
                : "bg-[#042048] opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
