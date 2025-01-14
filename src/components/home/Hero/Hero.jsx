import React from "react";
import Heading from "../../common/Heading";

export default function Hero() {
  return (
    <>
      <section
        className="hero bg-cover bg-center bg-no-repeat h-[90vh] w-full pt-[20%] sm:pt-[15%]"
        style={{
          backgroundImage: "url('images/banner.png')",
        }}
      >
        <div className="container px-4">
          <Heading
            title="Search Your Next Home"
            subtitle="Find new & featured property located in your local city"
            titleColor="text-[#fff]"
            subtitleColor="text-[#fff]"
          />
          <form
            action=""
            className="flex flex-wrap bg-white rounded-md mt-[30px] px-4 lg:px-6 py-4 items-center gap-4 w-full max-w-[1200px] mx-auto"
          >
            <div className="box flex-1 min-w-[200px] sm:min-w-[250px]">
              <span className="text-sm md:text-base lg:text-lg text-gray-600">
                City/Street
              </span>
              <input
                className="p-2 md:p-3 w-full border mt-2 rounded-sm placeholder:text-[12px] md:placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-black"
                type="text"
                placeholder="Location"
              />
            </div>

            <div className="box flex-1 min-w-[200px] sm:min-w-[250px]">
              <span className="text-sm md:text-base lg:text-lg text-gray-600">
                Property Type
              </span>
              <input
                className="p-2 md:p-3 w-full border mt-2 rounded-sm placeholder:text-[12px] md:placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-black"
                type="text"
                placeholder="Property Type"
              />
            </div>

            <div className="box flex-1 min-w-[200px] sm:min-w-[250px]">
              <span className="text-sm md:text-base lg:text-lg text-gray-600">
                Price Range
              </span>
              <input
                className="p-2 md:p-3 w-full border mt-2 rounded-sm placeholder:text-[12px] md:placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-black"
                type="text"
                placeholder="Price Range"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center min-w-[150px] lg:mx-auto lg:w-auto gap-3">
              <h4 className="font-semibold text-sm md:text-base lg:text-lg text-gray-600 cursor-pointer hover:text-green-600 whitespace-nowrap text-center sm:text-left">
                Advanced Filter
              </h4>

              <button className="btn rounded-md px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-green-600 text-white cursor-pointer hover:bg-green-700 flex items-center justify-center gap-2">
                <i className="fa fa-search"></i> Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
