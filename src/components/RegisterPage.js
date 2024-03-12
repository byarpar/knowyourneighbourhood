// src/components/RegisterPage.js
import React, { useState } from 'react';

const RegisterPage = ({ onRegister, onRedirectToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Validate inputs if needed

    // Call the onRegister function passed from the parent component
    onRegister({ username, password });

    // Call the onRedirectToLogin function to navigate to the login page
    onRedirectToLogin();
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
   