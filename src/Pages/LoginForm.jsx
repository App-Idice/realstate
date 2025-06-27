import React, { useState, useEffect } from 'react';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [mobile, setMobile] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(mobile));
  };

  useEffect(() => {
    if (isAuthenticated) {
      alert("✅ Login Successful!");
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Registered Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))}
          maxLength={10}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
