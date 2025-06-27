import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  
  });
   
  const [otpTarget, setOtpTarget] = useState('');
  const [mobileOnly, setMobileOnly] = useState('');
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [otp] = useState('1234');
  const [enteredOtp, setEnteredOtp] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const onlyNums = value.replace(/[^0-9]/g, '');

    if (name === 'number') {
      setFormData({ ...formData, [name]: onlyNums });
    } else if (name === 'mobileOnly') {
      setMobileOnly(onlyNums);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const errs = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email';
    }
    if (!formData.firstName.trim()) errs.firstName = 'First name required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateMobileOnly = () => {
    if (!/^\d{10}$/.test(mobileOnly)) {
      alert('Enter a valid 10-digit mobile number');
      return false;
    }
    return true;
  };

  const sendOtp = (mobileNumber) => {
    setOtpTarget(mobileNumber);
    setOtpSent(true);
    alert(`OTP has been sent to ${mobileNumber}\n(Mock OTP: 1234)`);
  };

  const handleFormSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    sendOtp(formData.number);
  }
};
 
  const handleMobileOnlySubmit = (e) => {
    e.preventDefault();
    if (validateMobileOnly()) {
      sendOtp(mobileOnly);
    }
  };

  const handleVerifyOtp = () => {
    if (enteredOtp === otp) {
      alert(`✅ OTP Verified Successfully for ${otpTarget}`);
      // Proceed with registration logic
      localStorage.setItem('registeredNumber', otpTarget);
      navigate('/login');
    } else {
      alert('❌ Invalid OTP. Please try again.');
    }
  };
  return (
    <div className="form-container">
      <h2>Register</h2>
    
        {!otpSent && (
        <>
        <form onSubmit={handleFormSubmit}>
            <input name="firstName" placeholder="First Name" onChange={handleChange} />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <input name="lastName" placeholder="Last Name" onChange={handleChange} />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

             <input name="email" type="email" placeholder="Email" onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>} 

            <button type="submit">Register</button>
            </form>

            <form onSubmit={handleMobileOnlySubmit}>
            <input
              name="mobileOnly"
              placeholder="Mobile Number (only)"
              maxLength="10"
              value={mobileOnly}
              onChange={handleChange}
            />
            <button type="submit">Register with Mobile</button>
          </form>
          </>
        )}

        {otpSent && (
          <>
            <p className="success-message">Enter Your OTP.</p>
            <input
              type="text"
              placeholder="e.g., 1234 "
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              maxLength={6}
            />
            <button type="button" onClick={handleVerifyOtp}>
              Verify OTP
            </button>
          </>
        )}
      
    </div>
  );
};

export default RegisterForm;
