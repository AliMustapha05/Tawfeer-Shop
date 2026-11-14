
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Header.css";

function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <span className="header-logo-icon">🛒</span>
          <span>
            Tawfeer<span className="header-logo-accent">Shop</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`header-nav ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/my-list" onClick={closeMenu}>
            My List
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <div className="header-auth">
            <Link
              to="/login"
              className={`header-login ${
                location.pathname === "/login" ? "selected" : ""
              }`}
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="header-signup"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
