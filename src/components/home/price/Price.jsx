import React from "react";
import Heading from "../../common/Heading";
import PriceCard from "./PriceCard";

export default function Price() {
  return (
    <div>
      <section className="price text-center pt-12 w-full mt-8 bg-gray-50">
        <div className=" mx-auto px-6">
          <Heading
            title="Select Your Package"
            subtitle="Choose from our exclusive residence and home packages tailored to your lifestyle needs. Affordable prices with premium amenities for your dream home."
          />
          <PriceCard />
        </div>
      </section>
    </div>
  );
}