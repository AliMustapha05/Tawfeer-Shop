import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      logout();
      navigate('/');
      alert('You have been logged out successfully!');
    }
  };

  return (
    <header>
      <h1>Tawfeer</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my-list">My List</Link>
        {currentUser ? (
          <>
            <span style={{ color: 'white', margin: '0 10px' }}>
              Welcome, {currentUser.name}!
            </span>
            <button 
              onClick={handleLogout} 
              style={{ 
                background: 'none', 
                border: '1px solid white', 
                color: 'white', 
                padding: '5px 15px', 
                borderRadius: '5px', 
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;