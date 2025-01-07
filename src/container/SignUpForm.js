// src/pages/Employer.jsx

import React, { useState } from 'react';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // For now, just console.log; you'd typically send this data to your backend
    console.log('Sign Up Data:', { username, email, password });
    // Clear the form or redirect
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </label>

        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>

        <label>
          Password:
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </label>

        <button type="submit" style={{ marginTop: '1rem' }}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;