import React from "react";
import { list } from "../../data/Data.jsx";

export default function RecentCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-[60px] mb-[60px] content mx-auto max-w-[90%] lg:max-w-[1200px]">
      {list.map((val) => {
        const { cover, category, location, name, price, type, id } = val;
        return (
          <div key={id} className="shadow-xl rounded-sm overflow-hidden">
            <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80">
              <img
                src={cover}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span
                  style={{
                    background:
                      category === "For Sale" ? "#25b5791a" : "#ff98001a",
                    color: category === "For Sale" ? "#25b579" : "#ff9800",
                  }}
                  className="text-sm font-medium px-3 py-1 rounded-md"
                >
                  {category}
                </span>
                <i className="fa fa-heart text-[20px] text-[#bec7d8] cursor-pointer hover:text-red-500"></i>
              </div>

              <h4 className="text-lg font-semibold mb-1">{name}</h4>
              <p className="text-sm text-[#72809d]">
                <i className="fa fa-location-dot mr-1"></i> {location}
              </p>
            </div>

            <div className="flex justify-between items-center border-t border-[#efe8f3] p-4">
              <div className="flex items-center space-x-1">
                <button className="rounded-full px-3 py-2 bg-green-600 text-white text-sm font-medium hover:bg-green-700">
                  {price}
                </button>
                <label htmlFor="" className="text-sm text-gray-600">
                  /sqft
                </label>
              </div>
              <span className="text-sm px-3 py-1 bg-gray-100 rounded-md">
                {type}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
