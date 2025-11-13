import React from 'react'

const Navright = () => {
  return (
    <>
      <div className="nav-right">
        <ul className="menus">
          <li>
            health services
            <i class="ri-arrow-down-wide-fill"></i>
          </li>
          <li>
            offers
            <i class="ri-checkbox-circle-line"></i>
          </li>
          <li>
            cart
            <i class="ri-shopping-cart-2-line"></i>
          </li>
          <li>
            login
            <i class="ri-user-line"></i>
          </li>
        </ul>
      </div>

      <div className="nav-right-mobile">
        <i class="ri-menu-line"></i>
      </div>
    </>
  )
}

export default Navright
