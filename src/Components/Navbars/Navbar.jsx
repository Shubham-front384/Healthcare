import React from 'react'

import Navleft from './Navleft';
import Navright from './Navright';

const Navbar = () => {
  return (
    <>
      <div className="nav-parent">
        <Navleft />
        <Navright />
      </div>
    </>
  )
}

export default Navbar
