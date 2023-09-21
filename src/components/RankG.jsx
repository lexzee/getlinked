import React from 'react'

const RankG = ({img,position,prize}) => {
  return (
    <div className="rank G">
      <img src={img} alt="" />
      <p className='position'>{position}<br />Runner</p>
      <p className="prize">{prize}</p>
    </div>
  )
}

export default RankG