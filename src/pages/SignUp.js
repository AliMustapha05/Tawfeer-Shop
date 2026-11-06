
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/SignUp.css"


function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: ""
  });

  const [showPasswords, setShowPasswords] = useState(false);
  const [error, setError] = useState("");
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
    setError("");
    setLoading(true);

    try {
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.password ||
        !formData.confirmPassword ||
        !formData.phone.trim() ||
        !formData.address.trim()
      ) {
        setError("Please fill in all fields");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        return;
      }

      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address
      };

      const success = await signup(newUser);

      if (success) {
        alert("Registration successful! Please login.");
        navigate("/login");
      } else {
        setError(
          "Email already registered. Please use a different email or login."
        );
      }
    } catch (err) {
      setError(
        "Unable to create account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page"
      style={{
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <div className="forms" style={{ margin: "0 auto" }}>
        <Link to="/">&lt;&lt; Go Home</Link>

        <h2>Sign Up</h2>

        <form onSubmit={handleSignUp}>
          <label htmlFor="name">Full Name:</label>

          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password:</label>

          <input
            type={showPasswords ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password (min 8 characters)"
            autoComplete="new-password"
            required
          />

          <label htmlFor="confirmPassword">
            Confirm Password:
          </label>

          <input
            type={showPasswords ? "text" : "password"}
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
            required
          />

          <div className="checkBlock">
            <label>
              <input
                type="checkbox"
                checked={showPasswords}
                onChange={() =>
                  setShowPasswords(!showPasswords)
                }
              />
              Show Passwords
            </label>
          </div>

          <label htmlFor="phone">Phone Number:</label>

          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+961 XX XXX XXX"
            autoComplete="tel"
            required
          />

          <label htmlFor="address">Address:</label>

          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your full address"
            autoComplete="street-address"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
