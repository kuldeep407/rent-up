import React from "react";
import Heading from "../../common/Heading";
import RecentCard from "./RecentCard";

export default function Recent() {
  return (
    <div>
      <section className="p-[30px] mt-5 w-full">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="From modern apartments to spacious family homes, find your perfect space today. Discover a wide range of luxurious properties tailored to fit your lifestyle needs."
          />
          <RecentCard />
        </div>
      </section>
    </div>
  );
}
