
import React from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    showToast(`${product.name} added to your list!`, "success");
  };

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="product-card-content">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        {product.description && (
          <p className="product-description">
            {product.description}
          </p>
        )}

        <div className="product-card-bottom">
          <span className="product-price">
            ${Number(product.price).toFixed(2)}
          </span>

          <button
            type="button"
            className="product-add-btn"
            onClick={handleAddToCart}
          >
            + Add to List
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
