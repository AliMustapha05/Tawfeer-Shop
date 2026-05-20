import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login successful!');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="forms">
      <Link to="/">&lt;&lt; Go Home</Link>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          required
        />
        
        <label>Password:</label>
        <input 
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password" 
          required
        />
        
        <div className="checkBlock">
          <label>
            <input 
              type="checkbox" 
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>
        
        <button type="submit">Login</button>
        
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;