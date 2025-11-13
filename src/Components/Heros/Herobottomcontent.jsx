import React from 'react'

import doctor from '../../assets/doctor.png'

const Herobottomcontent = () => {
  return (
    <>
      <div className="hero-bottom-info">
        <p className="hero-bottom-para">
          If you are looking for a creative and easy way to build a website. Wow! is the perfect solution.
        </p>

        <img src={ doctor } alt="doctor" />

        <div className="hero-bottom-button">
          <a href="#">
            book consultation
          </a>
          <i class="ri-arrow-right-long-line"></i>
        </div>
      </div>
    </>
  )
}

export default Herobottomcontent
