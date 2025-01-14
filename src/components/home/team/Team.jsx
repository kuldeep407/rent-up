import React from "react";
import Heading from "../../common/Heading.jsx";
import { team } from "../../data/Data.jsx";
import { FaCheckCircle } from "react-icons/fa";

export default function Team() {
  return (
    <div className="team background w-full">
      <section className="container mx-auto px-4">
        <div className="-mt-[30px]">
          <Heading
            style={{ marginTop: "200px" }}
            title="Our Featured Agents"
            subtitle="Meet our dedicated team of agents who are here to help you find your perfect home. With years of experience, they are committed to providing excellent service and support."
          />
          <div className="gap-5 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1190px]">
            {team.map((val, index) => {
              return (
                <div
                  className="bg-[#fff] border rounded-md p-6 md:p-8 transition-all hover:cursor-pointer hover:shadow-lg"
                  key={index}
                >
                  <button className="-mt-3 rounded-full px-3 py-1 sm:px-4 sm:py-2 bg-orange-600 text-white cursor-pointer hover:bg-green-700 flex items-center gap-2 text-sm sm:text-base">
                    {val.list} Listings
                  </button>

                  <div className="text-center mt-4">
                    <div className="img relative">
                      <img
                        className="m-auto border-4 border-[#edf0f5] rounded-full"
                        src={val.cover}
                        alt=""
                        width="80"
                        height="80"
                      />
                      <FaCheckCircle className="text-[#108be7] text-[17px] absolute top-[50%] right-[50%] transform translate-x-[280%] translate-y-[-50%]" />
                    </div>
                    <i className="fa fa-location-dot text-gray-500 mr-3"></i>
                    <label className="block text-sm sm:text-base">
                      {val.address}
                    </label>
                    <h4 className="text-lg sm:text-xl font-medium mt-1">
                      {val.name}
                    </h4>
                    <ul className="mt-2">
                      {val.icon.map((icon, index) => {
                        return (
                          <li
                            className="inline-flex items-center justify-center w-[35px] h-[35px] md:w-[40px] md:h-[40px] bg-[#f4f5f7] rounded-full m-[5px] text-gray-500 text-sm md:text-base"
                            key={index}
                          >
                            {icon}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="flex flex-col sm:flex-row justify-center md:mx-auto md:justify-between sm:justify-between mt-4 gap-3">
                      <button className="rounded-md px-4 py-3  bg-green-600 text-white cursor-pointer hover:bg-green-700 flex items-center gap-2 text-sm sm:text-base md:py-1 md:px-2 lg:py-2.5 lg:px-3">
                      <i className='fa fa-envelope'></i> Message
                      </button>

                      <button className="rounded-md px-3 py-2 bg-black text-white cursor-pointer hover:bg-green-700 flex items-center gap-2 text-sm sm:text-base">
                        <i className="fa fa-phone-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
