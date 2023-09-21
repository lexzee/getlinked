import React from 'react'

const Rank = (prop) => {
  return (
    <div className={`rank ${prop.class}`}>
      <img src={prop.img} alt="" />
      <p className='position'>{prop.position}<br />Runner</p>
      <p className="prize">{prop.prize}</p>
    </div>
  )
}

export default Rank