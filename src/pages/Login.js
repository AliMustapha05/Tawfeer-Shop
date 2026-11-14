
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../context/ToastContext";
import "../styles/Login.css";

function Login() {
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    showToast(
      "Login will be available when the backend is connected.",
      "info"
    );
  };

  return (
    <div className="login-page">
      <div className="container login-container">

        <div className="login-info">
          <Link to="/" className="login-brand">
            🛒 Tawfeer<span>Shop</span>
          </Link>

          <span className="login-welcome-label">
            WELCOME BACK
          </span>

          <h1>
            Your Shopping,
            <span> Made Simple.</span>
          </h1>

          <p>
            Discover fresh groceries, explore your favorite
            products, and manage your shopping list with ease.
          </p>

          <div className="login-benefits">
            <div>
              <span>✓</span>
              Explore quality supermarket products
            </div>

            <div>
              <span>✓</span>
              Create and manage your shopping list
            </div>

            <div>
              <span>✓</span>
              Keep track of your shopping total
            </div>
          </div>

          <div className="login-info-bottom">
            <span>🛍️</span>
            <p>Everything you need, all in one place.</p>
          </div>
        </div>

        <div className="login-form-wrapper">
          <div className="login-form-card">

            <div className="login-form-heading">
              <div className="login-form-icon">👋</div>

              <h2>Welcome Back!</h2>

              <p>
                Sign in to your Tawfeer-Shop account.
              </p>
            </div>

            <form onSubmit={handleLogin}>

              <div className="login-form-group">
                <label htmlFor="login-email">
                  Email Address
                </label>

                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="login-form-group">
                <label htmlFor="login-password">
                  Password
                </label>

                <div className="login-password-wrapper">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="login-show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="login-form-options">
                <label className="login-remember">
                  <input type="checkbox" />
                  Remember me
                </label>

                <span className="login-forgot">
                  Forgot Password?
                </span>
              </div>

              <button
                type="submit"
                className="login-submit-btn"
              >
                Login →
              </button>

            </form>

            <div className="login-divider">
              <span>New to Tawfeer-Shop?</span>
            </div>

            <Link
              to="/signup"
              className="login-signup-btn"
            >
              Create an Account
            </Link>

            <p className="login-demo-note">
              Authentication is not available yet.
              You can explore products and use My List
              without logging in.
            </p>

          </div>

          <Link to="/" className="login-back-home">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
