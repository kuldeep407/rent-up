import React from "react";
import Heading from "../../common/Heading.jsx";
import { location } from "../../data/Data.jsx";
import './location.css';

export default function Location() {
  return (
    <div>
      <section className="location p-[60px] w-full">
        <div className="max-w-[1190px] mx-auto">
          <Heading
            title="Explore By Location"
            subtitle="Explore our wide range of properties and services available at various locations. Find the perfect spot that fits your preferences and needs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 pt-[40px] max-w-[1200px]">
            {location.map((items, index) => {
              return (
                <div className="relative rounded-md" key={index}>
                  <img className="rounded-md w-full h-auto" src={items.cover} alt="" />
                  <div className="overlay">
                    <h5>{items.name}</h5>
                    <p className="text-sm md:text-base">
                      <label>{items.Villas}</label>
                      <label>{items.Offices}</label>
                      <label>{items.Apartments}</label>
                    </p>
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
