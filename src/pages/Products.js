
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import productsData from "../data/productsData";

import "../styles/Products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  const categories = [
    "Fruits & Vegetables",
    "Dairy",
    "Bakery",
    "Beverages",
    "Pantry",
    "Meat & Poultry",
    "Snacks"
  ];

  const categoryIcons = {
    "Fruits & Vegetables": "🥬",
    Dairy: "🥛",
    Bakery: "🥐",
    Beverages: "🥤",
    Pantry: "🫙",
    "Meat & Poultry": "🥩",
    Snacks: "🍫"
  };

  const getCategoryId = (category) => {
    return category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const filteredProducts = productsData.filter((product) => {
    const searchText = search.toLowerCase().trim();

    return product.name.toLowerCase().includes(searchText);
  });

  useEffect(() => {
    const selectedCategory = searchParams.get("category");

    if (!selectedCategory || !categories.includes(selectedCategory)) {
      return;
    }

    const timer = setTimeout(() => {
      const section = document.getElementById(
        getCategoryId(selectedCategory)
      );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <span className="products-hero-label">
            TAWFEER-SHOP SUPERMARKET
          </span>

          <h1>Explore Our Products</h1>

          <p>
            Discover fresh groceries, everyday essentials,
            and quality products for your shopping list.
          </p>
        </div>
      </section>

      <section className="products-main">
        <div className="container">
          <div className="products-toolbar">
            <div>
              <h2>Shop Your Favorites</h2>
              <p>
                {filteredProducts.length} products available
              </p>
            </div>

            <div className="products-search">
              <SearchBar
                search={search}
                setSearch={setSearch}
              />
            </div>
          </div>

          <nav
            className="products-category-nav"
            aria-label="Product categories"
          >
            {categories.map((category) => (
              <a
                key={category}
                href={`#${getCategoryId(category)}`}
                className="products-category-link"
              >
                <span>{categoryIcons[category]}</span>
                {category}
              </a>
            ))}
          </nav>

          {filteredProducts.length === 0 ? (
            <div className="products-empty">
              <div>🔎</div>
              <h3>No products found</h3>
              <p>
                We couldn't find any products matching
                "{search}".
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={() => setSearch("")}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="products-sections">
              {categories.map((category) => {
                const categoryProducts = filteredProducts.filter(
                  (product) => product.category === category
                );

                if (categoryProducts.length === 0) {
                  return null;
                }

                return (
                  <section
                    key={category}
                    id={getCategoryId(category)}
                    className="products-category-section"
                  >
                    <div className="products-section-header">
                      <div className="products-section-title">
                        <span className="products-section-icon">
                          {categoryIcons[category]}
                        </span>

                        <div>
                          <h2>{category}</h2>
                          <p>
                            {categoryProducts.length} products
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="products-grid">
                      {categoryProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
