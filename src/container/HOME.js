import React from 'react'
import './home.scss'

const HOME = () => {
  return (
    <div className='home'>
     <div className='hero-container'>
      <video src='videos/video-2.mp4' autoPlay loop muted/>
<h1>ADVENTURE AWAITS</h1>
<p> What are you waiting for</p>
<div className='hero-btns'>
    <button 
    className='btns' 
    buttonStyle='btn-primary'
    buttonSize='btn--large'
    >
  GET STARTED
  </button>
 <button
    className='btns' 
    buttonStyle='btn-outline'
    buttonSize='btn--large'
    >
     WATCH TRAILER <i className='far
        fa-play-circle'/>
   </button>
    </div> 
    </div>
      
    </div>
  )
}

export default HOME
