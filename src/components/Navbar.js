import React from 'react'
import './styles/Navbar.scss'


const navMenu = ['home', 
'ABOUTUS', 
'CAREEROPPORTUNITY', 
'EMPLOYER', 
'ITPROJECTDEVELOPMENT','IT TECHNICAL SUPPORT ','CONTACTUS ']
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <h3>MOUNTEVEREST COMPUTEC</h3>
        <ul className="app__navbar-links">
        {navMenu.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
        </div>
    </nav>
  )
}

export default Navbar
