import React, { useState } from 'react'
import '../style/bat.css';

const Bat = (props) => {

  
    console.log(props);

    const handleClick = () => {
        if(props.amount >= 10){
            props.setAmount(props.amount - 10)
            props.setBet(10)
        }else{
            alert("You don't have enough money to place this bet.")
        }
    }

    const handleClick2 = () => {
        if(props.amount >= 100){
            props.setAmount(props.amount - 100)
            props.setBet(100)
        }else{
            alert("You don't have enough money to place this bet.")
        }
    }

    const handleClick3 = () => {
        if(props.amount >= 150){
            props.setAmount(props.amount - 150)
            props.setBet(150)
        }else{
            alert("You don't have enough money to place this bet.")
        }
    }

  return (
    <div className='bat'>
        <button onClick={handleClick} >$10</button>
        <button onClick={handleClick2}>$100</button>
        <button onClick={handleClick3}>$150</button>
    </div>
  )
}

export default Bat