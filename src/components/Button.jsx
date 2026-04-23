import React from 'react'
import '../style/button.css';

const Button = ({handleCheckLuck, handleReset}) => {
  return (
    <div className='button'>
        <button onClick={handleCheckLuck}>
            check luck
        </button>
        <button onClick={handleReset}>
            reset
        </button>
    </div>
  )
}

export default Button