import React from "react";
import { price } from "../../data/Data.jsx";

export default function PriceCard() {
  return (
    <div className=" flex flex-wrap justify-center gap-8 mt-12 max-w-[1200px] mx-auto">
      {price.map((item, index) => {
        return (
          <div
            className="box w-full sm:w-[48%] lg:w-[31%] p-8 rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl"
            key={index}
          >
            <div className="topbtn">
              {item.best && (
                <button className="btn3 mb-4 text-white font-semibold bg-orange-500 py-4 px-8 rounded-full text-sm">
                  {item.best}
                </button>
              )}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {item.plan}
            </h3>
            <h1 className="text-5xl font-bold text-gray-900 my-4">
              <span className="text-3xl font-medium">$</span> {item.price}
            </h1>

            <ul className="mt-4 space-y-3">
              {item.list.map((val, index) => {
                const { icon, text, change } = val;
                return (
                  <li key={index} style={{ display: "flex" }} className="gap-3">
                    <label
                      className="w-8 h-8 rounded-full "
                      style={{
                        background:
                          change === "color" ? "#dc35451d" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p className="">{text}</p>
                  </li>
                );
              })}
            </ul>

            <button
              className="w-full rounded-full py-3 mt-8 text-lg font-medium transition-all duration-300"
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
                border: item.plan !== "Standard" ? "2px solid #27ae60" : "none",
              }}
            >
              Start {item.plan}
            </button>
          </div>
        );
      })}
    </div>
  );
}
