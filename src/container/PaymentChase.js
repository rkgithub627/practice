// src/container/PaymentChase.jsx
import React from 'react';

const PaymentChase = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Pay with JP Morgan Chase</h2>
      <p>
        Securely pay your invoice or service fee using your checking account via
        Chase’s online payment gateway.
      </p>
      <p>
        <strong>Steps to Pay:</strong>
      </p>
      <ol>
        <li>
          Click the button below to be redirected to our secure Chase payment page.
        </li>
        <li>
          Log in to your Chase account (or use the provided secure guest checkout).
        </li>
        <li>
          Confirm the payment details and submit. You’ll receive a confirmation email
          from Mount Everest Computech LLC.
        </li>
      </ol>

      <button
        onClick={() => {
          // For a real integration, you'd redirect to an official secure URL from Chase
          window.open('https://chasepay.example.com/secure-payment', '_blank');
        }}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070ba', // A nice blue color or your brand color
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '1rem',
        }}
      >
        Pay Now via Chase
      </button>
    </div>
  );
};

export default PaymentChase;