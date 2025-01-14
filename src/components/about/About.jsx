import React from "react";
import Back from "../common/Back";
import img from "../images/about.jpg";
import Heading from "../common/Heading";

export default function About() {
  return (
    <div className="about-page">
      <section className="about mb-[80px]">
        <Back name="About Us" title="About Us - Who We Are ?" cover={img} />

        <div className="w-full xsm:mx-4 xsm:w-[48%] sm:w-[78%] sm:mx-auto gap-11 mx-auto flex flex-col sm:flex-row mt-[60px]">
          <div className="sm:w-[60%] mb-8 sm:mb-0">
            {/* <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
              className="w-auto text-left"  
            /> */}

              <h1 className="text-4xl font-semibold text-gray-600  leading-[50px]">Our Agency Story</h1>
              <p className="text-base text-gray-500">Check out our company story and work process</p>

            <p className="leading-8 text-base mt-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="leading-8 mt-5 text-base text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            <button className="text-white bg-green-500 rounded-full py-4 px-8 mt-6">
              More About Us
            </button>
          </div>

          <div className="sm:w-[40%] flex justify-center sm:justify-start mt-6 sm:mt-0">
            <img
              src="./immio.jpg"
              alt="Agency"
              className="w-full sm:w-[100%] md:w-[100%] lg:w-[100%] h-auto object-cover rounded-lg sm:mr-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
