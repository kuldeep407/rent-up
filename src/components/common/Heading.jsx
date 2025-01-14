import React from "react";

export default function Heading({ title, subtitle, titleColor, subtitleColor }) {
  return (
    <>
      <div className="text-center w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] m-auto heading">
        <h1
          className={`font-medium capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 ${titleColor}`}
        >
          {title}
        </h1>
        <p
          className={`opacity-[0.8] text-xs sm:text-sm md:text-sm lg:text-sm mt-2 ${subtitleColor}`}
        >
          {subtitle}
        </p>
      </div>
    </>
  );
}
