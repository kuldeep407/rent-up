import React from 'react'
import Back from '../common/Back'
import PriceCard from '../home/price/PriceCard'
import img from "../images/pricing.jpg"

export default function Prices() {
  return (
    <div>
      <section>
        <Back name="30 days money back graurantee"  title={"No Extra Fees. Friendly Support"} cover={img} />
        <div className="continer">
            <PriceCard/>
        </div>
      </section>
    </div>
  )
}
