import React from "react";

export default function Back({ name, title, cover }) {
  return (
    <div className="relative h-[35vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] xl:h-[55vh]">
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="container top-[110px]  sm:top-[100px] md:top-[120px] lg:top-[140px] xl:top-[160px] items-center relative z-20 h-full text-white">
        <span className="text-sm sm:text-base md:text-lg font-medium leading-10">
          {name}
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          {title}
        </h1>
      </div>

      <img
        src={cover}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
}
