import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './container/Navbar';
import Footer from './container/Footer';
import Home from './container/Home';
import Testimonials from './container/Testimonials';
import ITProject from './container/ITProject';
import Services from './container/Services';
import Contact from './container/Contact';
import Employer from './container/Employer';
import ITSupport from './container/ITSupport';
import Careers from './container/Careers';
import SignUpForm from './container/SignUpForm';
import LoginForm from './container/LoginForm';
// import { Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/ITProject" element={<ITProject />} />
        <Route path="/Employer" element={<Employer />}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ITSupport" element={<ITSupport />} />
        <Route path="/Careers" element={<Careers />}/>
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;