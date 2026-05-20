import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });
  const [showPasswords, setShowPasswords] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === formData.email)) {
      setError('Email already registered');
      return;
    }
    
    // Create new user
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="forms">
      <Link to="/">&lt;&lt; Go Home</Link>
      <h2>Sign Up</h2>
      
      <form onSubmit={handleSignUp}>
        <label>Full Name:</label>
        <input 
          type="text" 
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name" 
          required
        />
        
        <label>Email:</label>
        <input 
          type="email" 
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email" 
          required
        />
        
        <label>Password:</label>
        <input 
          type={showPasswords ? "text" : "password"}
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password" 
          required
        />
        
        <label>Confirm Password:</label>
        <input 
          type={showPasswords ? "text" : "password"}
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password" 
          required
        />
        
        <div className="checkBlock">
          <label>
            <input 
              type="checkbox" 
              checked={showPasswords}
              onChange={() => setShowPasswords(!showPasswords)}
            />
            Show Passwords
          </label>
        </div>
        
        <label>Phone Number:</label>
        <input 
          type="tel" 
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+961 XX XXX XXX" 
          required
        />
        
        <label>Address:</label>
        <input 
          type="text" 
          id="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your full address" 
          required
        />
        
        <button type="submit">Sign Up</button>
        
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>
    </div>
  );
}

export default SignUp;