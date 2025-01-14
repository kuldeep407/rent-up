import React from 'react'
import Back from "../common/Back"
import img from '../images/services.jpg'
import FeaturedCard from '../home/featured/FeaturedCard'

export default function Services() {
  return (
    <div>
      <section>
        <Back name="Services" title={"Services -All Services"} cover={img} />
        <div className="featured container mt-[60px]" >
            <FeaturedCard />
        </div>
      </section>
    </div>
  )
}
