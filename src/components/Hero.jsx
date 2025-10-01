import React, { useState } from "react";
import { PhoneCall, ShoppingCart, MessageCircle } from "lucide-react";
// import { Whatsapp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


import { useNavigate } from "react-router-dom";
import BannerCarousel from "./BannerCarousel";

import menImg from "../assets/men.jpeg";
import womenImg from "../assets/women.jpeg";
import kidsImg from "../assets/kids.jpeg";
import householdImg from "../assets/households.jpeg";


const categories = [
  { id: 1, name: "Men", image: menImg, color: "#042048", hovercolor: "#fde047" },
  { id: 2, name: "Women", image: womenImg, color: "#042048", hovercolor: "#fde047" },
  { id: 3, name: "Kids", image: kidsImg, color: "#042048", hovercolor: "#fde047" },
  { id: 4, name: "Household", image: householdImg, color: "#042048", hovercolor: "#fde047" },
];


const HomeScreen = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const openWhatsApp = () => {
    const phoneNumber = "+918125423366";
    const message = "Hello, I Need Use Your Service, Can I Get More Info!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className=" bg-white px-4">
      {/* Banner Carousel */}
      <div className="w-full h-[225px] flex justify-center items-center rounded-lg my-4">
        <BannerCarousel />
      </div>

      {/* Categories */}
      <h2 className="text-lg font-bold text-gray-700 mt-4 mb-2">
        SELECT IRONING FOR
      </h2>
      <div className="flex justify-between items-center overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/placeorder?category=${cat.name}`)}
            onMouseEnter={() => setActive(cat.id)}
            onMouseLeave={() => setActive(null)}
            className="border-2 rounded-lg  w-18 h-24 flex-shrink-0 transition-colors"
            style={{
              borderColor: active === cat.id ? cat.hovercolor : cat.color,
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover rounded-md"
            />
          </button>
        ))}
      </div>

      {/* Manual Order */}
      <h2 className="text-lg font-bold text-gray-700 mt-4 mb-2">Order Now</h2>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/place-order")}
          className="flex-1 flex items-center justify-center gap-2 bg-[#042048] text-white py-0 rounded-lg font-semibold"
        >
          <ShoppingCart className="h-5 w-5" />
          Place Order
        </button>

        <button
          onClick={openWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 bg-[#042048] text-white py-3 rounded-lg font-semibold"
        >
          <FaWhatsapp  className="h-5 w-5" />
          Message Us
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around border-t border-gray-300 bg-white py-2">
        <a href="tel:+918125423366" className="flex flex-col items-center">
          <PhoneCall className="h-5 w-5 text-gray-700" />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <button onClick={openWhatsApp} className="flex flex-col items-center">
          <MessageCircle className="h-5 w-5 text-green-600" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </button>
        <button
          onClick={() => navigate("/place-order")}
          className="flex flex-col items-center"
        >
          <ShoppingCart className="h-5 w-5 text-gray-700" />
          <span className="text-xs font-semibold">Order</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
