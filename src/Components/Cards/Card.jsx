import React from 'react'

import Cardcontent from './Cardcontent'

const Card = ({ data }) => {
  return (
    <>
      <div className="card-parent">
        <Cardcontent data={ data } />
      </div>
    </>
  )
}

export default Card
