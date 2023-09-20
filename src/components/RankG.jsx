import React from 'react'

const RankG = (prop) => {
  return (
    <div className="rankG">
      <img src={prop.img} alt="" />
      <p>{prop.position}</p>
      <p className="prize">{prop.prize}</p>
    </div>
  )
}

export default RankG