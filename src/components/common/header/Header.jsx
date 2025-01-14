import React, { useState } from "react";
import { nav } from "../../data/Data.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  const [navlist, setNavlist] = useState(false);

  return (
    <header className="bg-white w-full">
      <div className="h-[10vh] px-6 sticky top-0 z-50 flex items-center justify-between max-w-[1240px] mx-auto">
        <div className="logo">
          <img
            src="./images/logo.png"
            alt="logo"
            className="w-[140px] lg:w-[170px]"
          />
        </div>

        <button
          className="lg:hidden text-2xl text-green-600"
          onClick={() => setNavlist(!navlist)}
        >
          <i className={`fa ${navlist ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <nav
          className={`fixed lg:static top-[8vh] left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none lg:flex lg:items-center lg:space-x-6 transition-all ${
            navlist ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center lg:items-start">
            {nav.map((list, index) => (
              <li
                key={index}
                className="px-4 py-3 lg:py-0 text-center lg:text-left font-medium text-black hover:text-green-600 transition duration-300"
              >
                <Link
                  to={list.path}
                  className="no-underline"
                  onClick={() => setNavlist(false)}
                >
                  {list.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center text-base font-semibold">
            <span className="inline-flex justify-center items-center w-6 h-6 bg-green-600 text-white rounded-full mr-2">
              2
            </span>
            My List
          </div>
          <button className="btn rounded-md px-4 py-2 bg-green-600 text-white hover:bg-green-700">
            <i className="fa fa-sign-out mr-1"></i> Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
