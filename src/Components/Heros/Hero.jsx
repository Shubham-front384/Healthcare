import React from 'react'

import Herocontent from './Herocontent'
import Card from '../Cards/Card'

import instant from '../../assets/instant.png'
import customer from '../../assets/customer.png'
import doorstep from '../../assets/doorstep.png'
import lab from '../../assets/lab.png'

const Hero = () => {

  let cardData = [
    {
      heading: "instant video consultation.",
      para: "connect with 60 seconds.",
      arrow: <i class="ri-arrow-right-long-line"></i>,
      image: instant,
    },
    {
      heading: "find the doctors near you.",
      para: "confirmed appointments.",
      arrow: <i class="ri-arrow-right-long-line"></i>,
      image: customer,
    },
    {
      heading: "24/7 medicine.",
      para: "essentials at your doorsteps.",
      arrow: <i class="ri-arrow-right-long-line"></i>,
      image: doorstep,
    },
    {
      heading: "lab tests.",
      para: "simple pickup at your home",
      arrow: <i class="ri-arrow-right-long-line"></i>,
      image: lab,
    }
  ];

  return (
    <>
      <div className="hero-parent">
        <Herocontent />
        <Card data={cardData} />
      </div>
    </>
  )
}

export default Hero
