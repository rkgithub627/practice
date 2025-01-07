// src/components/LoginForm.jsx
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Typically send login data to your backend, e.g. fetch('/login', ...)
    console.log('Login Data:', { username, password });
    // Clear or redirect
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <label>
          Username or Email:
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
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

        <button type="submit" style={{ marginTop: '1rem' }}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;