import React, { useState } from "react";
import menImg from "../assets/menprice.jpg";
import womenImg from "../assets/womenprice.webp";
import kidsImg from "../assets/kidsprice.webp";
import householdImg from "../assets/houseHoldsprice.webp";
import { categories } from "../utils/categories";

const tabs = [
  { key: "Men", label: "Men", icon: menImg },
  { key: "Women", label: "Women", icon: womenImg },
  { key: "kids", label: "Kids", icon: kidsImg },
  { key: "Household", label: "Households", icon: householdImg },
];

export default function PriceList() {
  const [activeTab, setActiveTab] = useState("Men");

  return (
    <div className="bg-white min-h-screen pb-10">
      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-200 py-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-col items-center border-b-4 px-3 pb-2 transition-colors ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-gray-600"
            }`}
          >
            <img src={tab.icon} alt={tab.label} className="w-6 h-6 mb-1" />
            <span className="text-sm flex">
              {tab.label} ({categories[tab.key].length - 1})
            </span>
          </button>
        ))}
      </div>

      {/* Price List */}
      <div>
        {categories[activeTab].slice(1).map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-5 py-4 border-b border-gray-100"
          >
            <span className="text-gray-800 text-base">{item.name}</span>
            <span className="font-bold text-black text-base">₹{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


