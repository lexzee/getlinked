import React from 'react'

const Rank = (prop) => {
  return (
    <div className="rank">
      <img src={prop.img} alt="" />
      <p>{prop.position}</p>
      <p className="prize">{prop.prize}</p>
    </div>
  )
}

export default Rank