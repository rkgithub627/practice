// src/container/Home.js
import React from 'react';
import "./Home.scss";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative', // So we can absolutely-position the background div
        padding: '2rem',
        minHeight: '100vh', // so there's enough space to see the blurred background
        color: '#000',
        overflow: 'hidden', // to avoid potential scrollbars from the blur
      }}
    >
      {/* This div holds the blurred background image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1, // behind the text
          backgroundImage:
            'url("https://images.unsplash.com/photo-1606829411515-35bac5e69de7?q=80&w=1194&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          //filter: 'blur(5px)', // Control how strong you want the blur
        }}
      />

      <h1>
        Intimate to Modern Technology by Mount Everest Computech, reserve real-life
        experiences and Elevate your business to meet AI Competition
      </h1>
      <p>All at the best prices.</p>
      <p>Address: 57 Dover Drive Unit B, Des Plaines, IL, 60018</p>
      <p>Phone: 773-484-6024</p>
      <p>
        Email: {' '}
        <a href="mailto:Mounteverestcomputech.com" style={{ color: '#fff' }}>
          Mounteverestcomputech.com
        </a>
      </p>
      <p>
        <a href="mailto:Mounteverestcomputech@gmail.com" style={{ color: '#fff', marginLeft: 45 }}>
          Mounteverestcomputech@gmail.com
        </a>
      </p>
      <p>
        <a href="mailto:radhakar.net@gmail.com" style={{ color: '#fff', marginLeft: 45 }}>
          radhakar.net@gmail.com
        </a>
      </p>
    </section>
  );
};

export default Home;
