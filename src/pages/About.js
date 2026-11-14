
import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  const values = [
    {
      icon: "🥬",
      title: "Quality Products",
      description:
        "We aim to make it easy to discover fresh groceries and everyday supermarket essentials."
    },
    {
      icon: "💚",
      title: "Customer First",
      description:
        "Our platform is designed to make shopping simple, comfortable, and convenient."
    },
    {
      icon: "💰",
      title: "Affordable Shopping",
      description:
        "We help customers organize their shopping lists and keep track of their total costs."
    },
    {
      icon: "⚡",
      title: "Simple Experience",
      description:
        "Browse products, manage quantities, and organize your shopping in just a few clicks."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Browse Products",
      description:
        "Explore our supermarket categories and search for your favorite products."
    },
    {
      number: "02",
      title: "Create Your List",
      description:
        "Add products to your shopping list and choose the quantities you need."
    },
    {
      number: "03",
      title: "Manage Your Shopping",
      description:
        "Review your products, update quantities, and calculate your total price."
    }
  ];

  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="container">
          <span className="about-hero-label">
            GET TO KNOW US
          </span>

          <h1>About Tawfeer-Shop</h1>

          <p>
            Making everyday grocery shopping easier,
            smarter, and more convenient for everyone.
          </p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container about-intro-grid">

          <div className="about-intro-image">
            <img
              src="/images/backgrounds/about-supermarket.jpeg"
              alt="Fresh groceries and supermarket products"
            />

            <div className="about-image-label">
              <span>🛒</span>
              <div>
                <strong>Tawfeer-Shop</strong>
                <small>Shopping Made Simple</small>
              </div>
            </div>
          </div>

          <div className="about-intro-content">
            <span className="about-section-label">
              WHO WE ARE
            </span>

            <h2>
              Your Everyday Shopping,
              <span> Made Better.</span>
            </h2>

            <p>
              Tawfeer-Shop is an online supermarket
              shopping platform designed to help customers
              explore products and organize their shopping
              lists in one convenient place.
            </p>

            <p>
              Our goal is to simplify the shopping
              experience by allowing users to browse
              different product categories, search for
              items, adjust quantities, and calculate
              their total shopping cost.
            </p>

            <p>
              Whether you're planning your weekly
              groceries or organizing everyday essentials,
              Tawfeer-Shop helps you stay organized.
            </p>

            <Link to="/products" className="primary-btn">
              Explore Our Products →
            </Link>
          </div>

        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission-grid">

          <div className="about-mission-card">
            <div className="about-mission-icon">
              🎯
            </div>

            <h2>Our Mission</h2>

            <p>
              To provide a simple and convenient
              shopping platform where customers can
              easily discover supermarket products,
              create shopping lists, and manage
              their everyday grocery needs.
            </p>
          </div>

          <div className="about-mission-card">
            <div className="about-mission-icon">
              🌟
            </div>

            <h2>Our Vision</h2>

            <p>
              To make grocery shopping more organized,
              accessible, and enjoyable through a
              modern digital experience that saves
              customers time and effort.
            </p>
          </div>

        </div>
      </section>

      <section className="about-values">
        <div className="container">

          <div className="about-section-heading">
            <span className="about-section-label">
              WHAT WE BELIEVE
            </span>

            <h2>Our Core Values</h2>

            <p>
              The principles behind the Tawfeer-Shop
              shopping experience.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <div className="about-value-card" key={index}>

                <div className="about-value-icon">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="about-how">
        <div className="container">

          <div className="about-section-heading">
            <span className="about-section-label">
              SIMPLE AND CONVENIENT
            </span>

            <h2>How Tawfeer-Shop Works</h2>

            <p>
              Organize your shopping in three
              easy steps.
            </p>
          </div>

          <div className="about-steps-grid">
            {steps.map((step, index) => (
              <div className="about-step-card" key={index}>

                <span className="about-step-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">

            <div>
              <span>START YOUR SHOPPING JOURNEY</span>

              <h2>
                Ready to Make Shopping Easier?
              </h2>

              <p>
                Discover supermarket products and
                start building your shopping list today.
              </p>
            </div>

            <Link
              to="/products"
              className="about-cta-button"
            >
              Start Shopping →
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
