import React from "react";
import Heading from "../../common/Heading";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  return (
    <div>
      <section className="featured background w-full">
        <div className="container mt-20">
          <Heading
            title="Featured Property Types"
            subtitle="Find All Types of Property"
          />
          <FeaturedCard />
        </div>
      </section>
    </div>
  );
}
