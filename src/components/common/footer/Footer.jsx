import React from "react";
import { footer } from "../../data/Data.jsx";

export default function Footer() {
  return (
    <div>
      <section className="footerContact bg-[#27ae60] text-white mt-[60px]">
        <div className="container py-11">
          <div className="flex justify-between">
            <div className="text">
              <h1 className="leading-10 lg:text-4xl font-bold sm:text-2xl">
                Do You Have Questions ?
              </h1>
              <p className="sm:text-sm lg:text-base">We'll help you to grow your career and growth.</p>
            </div>
            <button className="bg-white rounded-full lg:py-5 lg:px-7 sm:py-3 sm:px-5 text-lg sm:text-base  text-green-500">
            Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1d2636] px-8 py-10 text-white w-full">
        <div className="container flex flex-row mx-auto grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-4 gap-8">
          <div className="w-[50%]">
            <div className="logo mb-6">
              <img
                src="../images/logo-light.png"
                alt="Logo"
                width={"160px"}
                className="mb-4"
              />
              <h2 className="font-semibold text-3xl mb-2">
                Do You Need Help With Anything?
              </h2>
              <p className="text-gray-400 text-sm mb-4 mt-6">
                Receive updates, hot deals, tutorials, discounts sent straight
                to your inbox every month.
              </p>
              <div className="gap-3">
                <div className="block">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="inline-block w-[70%] p-4 rounded-lg outline-none text-black mr-3 "
                    />
                  <button className="inline-block bg-[#27ae60] sm:mt-4 text-white px-6 py-4 rounded-lg hover:bg-green-700">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50%] flex md:grid md:grid-row-2">
            {footer.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <h3 className="text-lg font-semibold text-white mb-4 mt-7">
                    {val.title}
                  </h3>
                  <ul className="space-y-2">
                    {val.text.map((items, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-base hover:text-white cursor-pointer leading-8"
                      >
                        {items.list}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </footer>

      <div className="border border-gray-700"></div>

      <div className="legal bg-[#1d2636] text-gray-400 text-center py-4">
        <span>© 2021 RentUP. Designed By GorkCoder.</span>
      </div>
    </div>
  );
}
