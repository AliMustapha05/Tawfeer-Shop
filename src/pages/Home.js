
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const benefits = [
    {
      icon: "🛒",
      title: "Easy Shopping",
      description:
        "Browse your favorite supermarket products and add them to your shopping list in just a few clicks."
    },
    {
      icon: "🥬",
      title: "Fresh Products",
      description:
        "Explore a wide selection of groceries, fresh fruits, vegetables, dairy products, and more."
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      description:
        "Find everyday essentials at great prices and easily manage your shopping budget."
    },
    {
      icon: "📋",
      title: "Smart Shopping List",
      description:
        "Organize your products, adjust quantities, and see your total price instantly."
    }
  ];

  const categories = [
    {
      name: "Fruits & Vegetables",
      image: "/images/backgrounds/fruits.jpeg",
      category: "Fruits & Vegetables"
    },
    {
      name: "Dairy Products",
      image: "/images/backgrounds/dairy.jpeg",
      category: "Dairy"
    },
    {
      name: "Bakery",
      image: "/images/backgrounds/bakery.jpeg",
      category: "Bakery"
    },
    {
      name: "Beverages",
      image: "/images/backgrounds/beverages.jpeg",
      category: "Beverages"
    }
  ];

  return (
    <div className="home-page">

      <section className="home-hero">
        <div className="container home-hero-content">

          <div className="home-hero-text">
            <span className="home-badge">
              YOUR EVERYDAY ONLINE SUPERMARKET
            </span>

            <h1>
              Fresh Groceries,
              <span> Better Shopping.</span>
            </h1>

            <p>
              Welcome to Tawfeer-Shop, your convenient online
              supermarket. Discover quality products, explore
              categories, and create your shopping list with ease.
            </p>

            <div className="home-hero-buttons">
              <Link to="/products" className="primary-btn">
                Explore Products →
              </Link>

              <Link to="/about" className="secondary-btn">
                Learn More
              </Link>
            </div>

            <div className="home-hero-highlights">
              <span>✓ Easy to Use</span>
              <span>✓ Quality Products</span>
              <span>✓ Smart Shopping</span>
            </div>
          </div>

          <div className="home-hero-image">
            <div className="home-image-background">
              <img
                src="/images/backgrounds/hero-groceries.jpeg"
                alt="Fresh groceries and supermarket products"
              />
            </div>

            <div className="home-floating-card">
              <span>🛍️</span>
              <div>
                <strong>Shop Smarter</strong>
                <small>Everything in one place</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="home-benefits">
        <div className="container">

          <div className="home-section-heading">
            <span className="home-section-label">
              WHY CHOOSE US
            </span>

            <h2>Shopping Made Simple</h2>

            <p>
              Everything you need for a convenient and
              enjoyable supermarket experience.
            </p>
          </div>

          <div className="home-benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="home-benefit-card" key={index}>
                <div className="home-benefit-icon">
                  {benefit.icon}
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="home-categories">
        <div className="container">

          <div className="home-section-heading">
            <span className="home-section-label">
              SHOP BY CATEGORY
            </span>

            <h2>Explore Our Categories</h2>

            <p>
              Find your everyday essentials in our
              supermarket categories.
            </p>
          </div>

          <div className="home-category-grid">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${encodeURIComponent(
                  category.category
                )}`}
                className="home-category-card"
              >
                <div className="home-category-image">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                  />
                </div>

                <div className="home-category-info">
                  <h3>{category.name}</h3>
                  <span>Explore Category →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-view-all">
            <Link to="/products" className="secondary-btn">
              View All Products →
            </Link>
          </div>

        </div>
      </section>

      <section className="home-how">
        <div className="container">

          <div className="home-section-heading">
            <span className="home-section-label">
              HOW IT WORKS
            </span>

            <h2>Start Shopping in 3 Easy Steps</h2>

            <p>
              Create your shopping list quickly and easily.
            </p>
          </div>

          <div className="home-steps">
            <div className="home-step">
              <div className="home-step-number">01</div>
              <div className="home-step-icon">🔎</div>
              <h3>Explore Products</h3>
              <p>
                Browse our supermarket products or use
                the search bar to find what you need.
              </p>
            </div>

            <div className="home-step">
              <div className="home-step-number">02</div>
              <div className="home-step-icon">🛒</div>
              <h3>Add to Your List</h3>
              <p>
                Choose your products and add them to
                your personal shopping list.
              </p>
            </div>

            <div className="home-step">
              <div className="home-step-number">03</div>
              <div className="home-step-icon">📋</div>
              <h3>Manage Your List</h3>
              <p>
                Adjust quantities, remove products,
                and view your total shopping cost.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <div className="home-cta-content">

            <div>
              <span>READY TO GET STARTED?</span>

              <h2>
                Your Next Shopping Experience
                Starts Here!
              </h2>

              <p>
                Discover your favorite products and
                build your shopping list today.
              </p>
            </div>

            <Link to="/products" className="home-cta-button">
              Start Shopping →
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
