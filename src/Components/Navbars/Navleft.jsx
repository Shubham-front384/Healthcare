import React from 'react'

import 'remixicon/fonts/remixicon.css'

const Navleft = () => {
  return (
    <>
      <div className="nav-left">
        <h5 className="nav-logo">
          medcare
        </h5>
        <span>|</span>
        <div className="nav-search">
          <i class="ri-search-ai-3-line"></i>
          <input type="text" placeholder='Search Here..' />
        </div>
      </div>
    </>
  )
}

export default Navleft
