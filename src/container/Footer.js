// src/container/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#35393C',
        padding: '0.05rem',
        textAlign: 'center',
        fontSize: '0.9rem',
      }}
    >
      {/* Copyright */}
      <p style={{ marginBottom: '1rem' }}>
        © 2024 Mount Everest Computech LLC. All rights reserved.
      </p>

      {/* Our Other Group Businesses */}
      <div style={{ marginBottom: '1.0rem' }}>
        <h4 style={{ margin: 0, marginBottom: '0.2rem' }}>
          Our Other Group Businesses
        </h4>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <a
              href="https://globalconnect.edu.np"
              target="_blank"
              rel="noopener noreferrer"
            >
              Global Connect Consultants Pvt.Ltd. Nepal
            </a>
          </li>
          <li>
            <a
              href="https://EverestInvestmentgroup.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              EverestInvestmentGroupUSA
            </a>
          </li>
        </ul>
      </div>

      {/* Payment System
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>Payment System</h4>
        <p style={{ margin: 0 }}>
          <a
            href="https://www.globalconnect.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visa,Mastercard,American express, and Bank debit card
          </a>
        </p>
      </div> */}

      {/* Connect with Us (Social Media Circles) */}
      <div>
        <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>Connect with Us</h4>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          {/* Twitter (X) */}
          <li>
            <a
              href="https://twitter.com/MtEverest75873"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                lineHeight: '40px',
                borderRadius: '50%',
                backgroundColor: '#1DA1F2', // Twitter blue
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              X
            </a>
          </li>

          {/* Facebook (f) */}
          <li>
            <a
              href="https://facebook.com/MountEverestComputech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                lineHeight: '40px',
                borderRadius: '50%',
                backgroundColor: '#4267B2', // Facebook blue
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              f
            </a>
          </li>

          {/* Instagram (in) */}
          <li>
            <a
              href="https://instagram.com/MountEverestComputech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                lineHeight: '40px',
                borderRadius: '50%',
                backgroundColor: '#E1306C', // Instagram color
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              in
            </a>
          </li>

          {/* TikTok (tikt) */}
          <li>
            <a
              href="https://www.tiktok.com/@MountEverestComputech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                lineHeight: '40px',
                borderRadius: '50%',
                backgroundColor: '#000', // black for TikTok
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              tikt
            </a>
          </li>

          {/* YouTube (red surface with arrow) */}
          <li>
            <a
              href="https://youtube.com/MountEverestComputech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                lineHeight: '40px',
                borderRadius: '50%',
                backgroundColor: '#FF0000', // YouTube red
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              ►
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
