
import React from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import "../styles/CartCard.css";

function CartCard({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const { showToast } = useToast();

  const increaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
    showToast(`${item.name} removed from your list.`, "success");
  };

  return (
    <div className="cart-card">
      <div className="cart-card-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-card-info">
        <span className="cart-card-category">
          {item.category}
        </span>

        <h3>{item.name}</h3>

        <p>
          Unit price: ${Number(item.price).toFixed(2)}
        </p>

        <button
          type="button"
          className="cart-remove-btn"
          onClick={handleRemove}
        >
          Delete Product
        </button>
      </div>

      <div className="cart-card-actions">
        <div className="cart-quantity">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={item.quantity <= 1}
            aria-label={`Decrease ${item.name} quantity`}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={increaseQuantity}
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>
        </div>

        <strong className="cart-item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </strong>
      </div>
    </div>
  );
}

export default CartCard;
