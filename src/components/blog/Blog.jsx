import React from "react";
import img from "../images/about.jpg";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";

export default function Blog() {
  return (
    <div>
      <section>
        <Back title={"Blog Grid - Our Blogs"} name={"Blog"} cover={img} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </div>
  );
}
