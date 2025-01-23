import React from 'react'
import Navbar from './Components/Navbar'
import { assets } from './assets/assets'
const App = () => {
  return (
    <div className='App'>
      <Navbar/><br></br>
      <img src={assets.two}/>
      <p>mutton-500</p>
      <button>Buy now</button>
    </div>
  )
}

export default App