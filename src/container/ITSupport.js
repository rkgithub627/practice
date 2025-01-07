// src/pages/ITSupport.jsx
import React, { useState } from 'react';

const ITSupport = () => {
  // 1) Define your state hooks for the form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  // 2) Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('IT Support Request:', { username, email, issueDescription });
    // Reset form fields
    setUsername('');
    setEmail('');
    setIssueDescription('');
    alert('Your request has been submitted! We’ll get back to you soon.');
  };

  return (
    <section id="ITSupport" style={{ padding: '1rem' }}>
      {/* Introductory content */}
      <h1>Welcome to Mount Everest Computech</h1>
      <p>
        We develop software, maintain it, and teach computer programming languages
        as demanded in the 21st century, all at the best prices.
      </p>
      <p>
        If you need any of the above services, you can email, call, or fill in the form below.
      </p>

      {/* Contact info */}
      <h1>Contact</h1>
      <p>Address: 57 Dover Drive Unit B, Des Plaines, IL, 60018</p>
      <p>Phone: 773-484-6024</p>
      <p>Email: info@mounteverestcomputech.com</p>
      <p>
        <a href="mailto:Mounteverestcomputech@gmail.com">
          Mounteverestcomputech@gmail.com
        </a>
      </p>
      <p>
        <a href="mailto:radhakar.net@gmail.com">radhakar.net@gmail.com</a>
      </p>

      {/* Support-specific content and image */}
      <h2>IT Support</h2>
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="IT Support"
        style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
      />

      <p>
        Need technical support? Complete the form below to request assistance.
        Our team will review your request and get back to you shortly.
      </p>

      {/* Support request form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          gap: '0.75rem',
          marginTop: '1rem',
        }}
      >
        <label>
          Username (or Full Name):
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </label>

        <label>
          Describe Your Issue:
          <textarea
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
            rows="4"
            placeholder="Describe the problem you’re experiencing..."
            style={{ width: '100%' }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
        >
          Request Support
        </button>
      </form>
    </section>
  );
};

export default ITSupport;