import React, { useState } from 'react'
import '../style/navbar.css';

const Navbar = (props) => {

 

  return (
    <div className='nav-bar'>
        <h2>Chetan</h2>
        <p className='money'>${props.amount}</p>
    </div>
  )
}

export default Navbar