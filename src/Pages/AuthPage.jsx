import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './AuthPage.css';

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
  console.log("AuthPage loaded");
}, []);


  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button
          className={showLogin ? 'active' : ''}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          className={!showLogin ? 'active' : ''}
          onClick={() => setShowLogin(false)}
        >
          Sign Up
        </button>
      </div>

      <div className="auth-form">
        {showLogin ? <LoginForm /> : <RegisterForm />}
      </div>
      
    </div>
  );
};

export default AuthPage;
