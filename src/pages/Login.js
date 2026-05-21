import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirectMessage, setRedirectMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    if (location.state && location.state.message) {
      setRedirectMessage(location.state.message);
    }
  }, [location]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const success = login(email, password);
    
    if (success) {
      alert('Login successful!');
      if (location.state && location.state.from === '/my-list') {
        navigate('/my-list');
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid email or password. Please try again or sign up.');
    }
    setLoading(false);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div className="forms" style={{ margin: '0 auto' }}>
        <Link to="/">&lt;&lt; Go Home</Link>
        <h2>Login</h2>
        
        {redirectMessage && (
          <div style={{ 
            backgroundColor: '#ff9800', 
            color: 'white', 
            padding: '10px', 
            borderRadius: '5px', 
            marginBottom: '15px',
            textAlign: 'center'
          }}>
            ⚠️ {redirectMessage}
          </div>
        )}
        
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
          
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          
          <button 
            type="button" 
            onClick={handleCancel}
            style={{ 
              backgroundColor: '#666', 
              marginTop: '10px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#666'}
          >
            Cancel
          </button>
          
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          
          {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;