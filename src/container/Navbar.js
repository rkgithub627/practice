// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.scss'; // optional if you have separate CSS 
//import Navbar from './components/Navbar';
//import Navbar from './container/Navbar';
// We'll use <Link> from react-router-dom to navigate 
// client-side instead of regular anchor tags.


// If your image is in the "public" folder, you can use src="/images/MountEverest.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Link back to home */}
        <Link to="/" className="logo-link">
          {/* Image Logo */}
          <img src="/MountEverest.png" 
          alt="Mount Everest Logo" 
            style={{width:80}}
            className="logo-img"/>
          {/* Text Logo */}
          <span className="logo-text">Mt.EveTech</span>
        </Link>
      </div>
      
      {/* Navigation links on the right (example) */}
      <ul className="nav-links">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Employer">Employer</Link></li>
        <li><Link to="/ITProject">ITProject</Link></li>
        <li><Link to="/ITSupport">ITSupport</Link></li>
        <li><Link to="/SignUpForm">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

//         {/* more routes */}
//         {/* Simple nav to switch between forms */}
//         <nav style={{ background: '#333', padding: '1rem' }}>
//         {/* //<Link to="/SignUpForm" style={{ color: '#fff', marginRight: '1rem' }}>SignUpForm</Link>
//        // <Link to="/LoginForm" style={{ color: '#fff' }}>LoginForm</Link> */}
//        <nav>
//   <Link to="/SignUpForm">SignUpForm</Link>
//   <Link to="/LoginForm">LoginForm</Link>
// </nav>
//       </nav>

//       <Routes>
//         <Route path="/SignUpForm" element={<SignUpForm />} />
//         <Route path="/login" element={<LoginForm />} />
//         {/* You can also have a Home route or a redirect */}
//         <Route path="/" element={<div style={{ margin: '2rem' }}><h2>Home Page</h2></div>} />
//       </Routes>