
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-column footer-brand">
          <Link to="/" className="footer-logo">
            🛒 Tawfeer<span>Shop</span>
          </Link>

          <p>
            Your everyday shopping, made easier.
            Discover quality supermarket products,
            create your shopping list, and save time.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/my-list">My List</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-column">
          <h3>My Account</h3>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

        <div className="footer-column">
          <h3>Why Tawfeer-Shop?</h3>
          <p>Easy shopping</p>
          <p>Quality products</p>
          <p>Simple shopping lists</p>
          <p>Convenient experience</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Tawfeer-Shop.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
