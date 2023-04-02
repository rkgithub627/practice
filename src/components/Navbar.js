import React from 'react'
import './styles/Navbar.scss'


const navMenu = ['home', 
'ABOUTUS', 
'CAREEROPPORTUNITY', 
'EMPLOYER', 
'ITPROJECTDEVELOPMENT','CONTACTUS ']
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <p>Nav</p>
        <h3>MOUNTEVEREST COMPUTEC</h3>
        <ul className="app__navbar-links">
        {navMenu.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

<p>Nav</p>
        </div>
    </nav>
  )
}

export default Navbar
