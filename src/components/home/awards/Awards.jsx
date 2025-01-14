import React from "react";
import Heading from "../../common/Heading.jsx";
import { awards } from "../../data/Data.jsx";
import "./awards.css";

export default function Awards() {
  return (
    <div>
      <section className="bg-[#122947] text-center text-[#fff] pt-[60px] pb-[60px] awards">
        <div className="container mx-auto px-4">
          <Heading
            title="Over 1,24,00+ Happy User Being With Us Still They Love Our Services"
            subtitle="Our Awards"
            subtitleColor="text-[#27ae60]"
            titleColor="text-[#fff]"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 content">
            {awards.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div
                    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] flex items-center justify-center text-2xl m-auto mt-6"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "4% 50%",
                    }}
                  >
                    <span className="m-auto">{val.icon}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-5 text-[#fff]">
                    {val.num}
                  </h1>
                  <p className="text-gray-300 text-sm sm:text-base">{val.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
