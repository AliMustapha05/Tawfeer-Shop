
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../context/ToastContext";
import "../styles/SignUp.css";

function SignUp() {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      address,
      password,
      confirmPassword
    } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !password ||
      !confirmPassword
    ) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    if (password.length < 6) {
      showToast(
        "Password must contain at least 6 characters.",
        "error"
      );
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }

    showToast(
      "Registration will be available when the backend is connected.",
      "info"
    );
  };

  return (
    <div className="signup-page">
      <div className="container signup-container">

        <div className="signup-info">
          <Link to="/" className="signup-brand">
            🛒 Tawfeer<span>Shop</span>
          </Link>

          <span className="signup-welcome-label">
            JOIN TAWFEER-SHOP
          </span>

          <h1>
            A Better Way
            <span> To Shop.</span>
          </h1>

          <p>
            Discover your favorite supermarket products,
            organize your groceries, and enjoy a simpler
            shopping experience with Tawfeer-Shop.
          </p>

          <div className="signup-benefits">
            <div>
              <span>✓</span>
              Browse supermarket products easily
            </div>

            <div>
              <span>✓</span>
              Build your personal shopping list
            </div>

            <div>
              <span>✓</span>
              Manage quantities and calculate totals
            </div>

            <div>
              <span>✓</span>
              Enjoy a simple shopping experience
            </div>
          </div>

          <div className="signup-info-bottom">
            <span>🛍️</span>

            <p>
              Fresh groceries. Simple shopping.
              Everything in one place.
            </p>
          </div>
        </div>

        <div className="signup-form-wrapper">
          <div className="signup-form-card">

            <div className="signup-form-heading">
              <div className="signup-form-icon">
                👤
              </div>

              <h2>Create Your Account</h2>

              <p>
                Fill in your information to get started.
              </p>
            </div>

            <form onSubmit={handleSignUp}>

              <div className="signup-form-group">
                <label htmlFor="signup-name">
                  Full Name
                </label>

                <input
                  id="signup-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="signup-email">
                  Email Address
                </label>

                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="signup-phone">
                  Phone Number
                </label>

                <input
                  id="signup-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="signup-address">
                  Address
                </label>

                <input
                  id="signup-address"
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                  required
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="signup-password">
                  Password
                </label>

                <div className="signup-password-wrapper">
                  <input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    minLength={6}
                    required
                  />

                  <button
                    type="button"
                    className="signup-show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <small className="signup-password-hint">
                  Password must contain at least 6 characters.
                </small>
              </div>

              <div className="signup-form-group">
                <label htmlFor="signup-confirm-password">
                  Confirm Password
                </label>

                <div className="signup-password-wrapper">
                  <input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="signup-show-password"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="signup-submit-btn"
              >
                Create Account →
              </button>

            </form>

            <div className="signup-divider">
              <span>Already have an account?</span>
            </div>

            <Link
              to="/login"
              className="signup-login-btn"
            >
              Login to Your Account
            </Link>

            <p className="signup-demo-note">
              Registration is not available yet.
              You can browse products and use My List
              without creating an account.
            </p>

          </div>

          <Link to="/" className="signup-back-home">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
