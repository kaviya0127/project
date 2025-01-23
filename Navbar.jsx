import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { useState } from 'react'


const Navbar = () => {
  const [item,setItem]=useState(0)
  const update=()=>{
    setItem(item+1)
  }
  const update1=()=>{
    setItem(item-1)
  }
  const [amt,setAmt]=useState(0)
  const cost=()=>{
setAmt(amt+500)
  }
  return (
    <div className='Navbar'>
        <ul className='Nav-Menu'>
            <li>Home</li>
            <li>Filter</li>
            <li>Added Items - {item}</li>
            <li>Total - {amt}</li>

        </ul>
        <div className='navbar-right'>
            <img src={assets.five} />
            <p>mutton-500</p>
            <button onClick={cost}>Add</button>
      <button onClick={update}>+</button>
      <button onClick={update1}> -</button>
          

        </div>
    </div>
  )
}

export default Navbar