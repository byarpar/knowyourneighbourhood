// src/App.js
import React, { useState } from 'react';
import RegisterPage from './components/RegisterPage';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleRegister = (userData) => {
    // Add logic to send registration data to the backend
    console.log('Registering user:', userData);
    // Assuming successful registration, show the login page
    setShowLogin(true);
  };

  const handleRedirectToLogin = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    // Render the login page
    return (
      <div>
        <h1>Know Your Neighbourhood App</h1>
        <h2>Login</h2>
        {/* Add your login form component here */}
      </div>
    );
  }

  // Render the registration page
  return (
    <div>
      <h1>Know Your Neighbourhood App</h1>
      <RegisterPage onRegister={handleRegister} onRedirectToLogin={handleRedirectToLogin} />
    </div>
  );
};

export default App;
