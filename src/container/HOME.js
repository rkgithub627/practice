import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <div className='hero-container'>
        <video src='videos/video-2.mp4' autoPlay loop muted />
        <h1>Adventure Awaits</h1> {/* Added some content in <h1> for visibility */}
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <button className='btns btn-primary btn--large'> {/* Adjusted class names for styling */}
            GET STARTED
          </button>
          <button className='btns btn-outline btn--large'> {/* Adjusted class names for styling */}
            WATCH TRAILER <i className='far fa-play-circle' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;