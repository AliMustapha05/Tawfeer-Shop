import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.address) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }
    
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address
    };
    
    const success = signup(newUser);
    
    if (success) {
      alert('Registration successful! Please login.');
      navigate('/login');
    } else {
      setError('Email already registered. Please use a different email or login.');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div className="forms" style={{ margin: '0 auto' }}>
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
            placeholder="Enter your password (min 6 characters)" 
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
          
          <button type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
          
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          
          {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;