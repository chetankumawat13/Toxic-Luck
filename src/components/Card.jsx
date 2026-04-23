import React from 'react'
import '../style/card.css';

const Card = ({img}) => {
  return (
    <div className='card'>
        <img src={img} alt="" />
    </div>
  )
}

export default Card