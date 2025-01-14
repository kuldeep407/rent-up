import React from "react";
import { featured } from "../../data/Data.jsx";

export default function FeaturedCard() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-8 mx-auto max-w-[90%] lg:max-w-[1187px]">
        {featured.map((items, index) => {
          return (
            <div
              className="shadow-xl rounded-md text-center p-5 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              key={index}
            >
              <img
                src={items.cover}
                alt=""
                width={"65px"}
                height={"65px"}
                className="m-auto"
              />
              <h4 className="mt-2 font-semibold text-lg">{items.name}</h4>
              <label className="text-[#2d3954] text-[14px]">{items.total}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}
