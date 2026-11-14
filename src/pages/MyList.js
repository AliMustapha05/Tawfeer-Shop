
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

import CartCard from "../components/CartCard";
import ConfirmModal from "../components/ConfirmModal";

import "../styles/MyList.css";

function MyList() {
  const {
    cartItems,
    clearCart,
    totalPrice,
    totalItems
  } = useCart();

  const { showToast } = useToast();

  const [modalType, setModalType] = useState(null);

  const handleBuy = () => {
    if (cartItems.length === 0) {
      showToast("Your shopping list is empty!", "error");
      return;
    }

    setModalType("buy");
  };

  const handleCancelList = () => {
    if (cartItems.length === 0) {
      showToast("Your shopping list is already empty!", "error");
      return;
    }

    setModalType("cancel");
  };

  const handleConfirm = () => {
    if (modalType === "buy") {
      showToast(
        "Demo order confirmed! No real order was placed.",
        "success"
      );
    }

    if (modalType === "cancel") {
      clearCart();

      showToast(
        "Your shopping list has been cleared successfully!",
        "success"
      );
    }

    setModalType(null);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <div className="mylist-page">

      <section className="mylist-hero">
        <div className="container">
          <span className="mylist-hero-label">
            YOUR SHOPPING EXPERIENCE
          </span>

          <h1>My Shopping List</h1>

          <p>
            Review your products, manage quantities,
            and keep track of your shopping total.
          </p>
        </div>
      </section>

      <section className="mylist-main">
        <div className="container">

          {cartItems.length === 0 ? (
            <div className="mylist-empty">
              <div className="mylist-empty-icon">
                🛒
              </div>

              <h2>Your Shopping List Is Empty</h2>

              <p>
                You haven't added any products yet.
                Explore our supermarket and start
                building your shopping list.
              </p>

              <Link
                to="/products"
                className="primary-btn"
              >
                Explore Products →
              </Link>
            </div>
          ) : (
            <div className="mylist-layout">

              <div className="mylist-products">

                <div className="mylist-section-header">
                  <div>
                    <h2>Shopping List</h2>

                    <p>
                      You have {totalItems}{" "}
                      {totalItems === 1 ? "item" : "items"}
                      {" "}in your list
                    </p>
                  </div>

                  <Link
                    to="/products"
                    className="mylist-add-more"
                  >
                    + Add More Products
                  </Link>
                </div>

                <div className="mylist-cart-items">
                  {cartItems.map((item) => (
                    <CartCard
                      key={item.id}
                      item={item}
                    />
                  ))}
                </div>

                <div className="mylist-bottom-actions">
                  <Link
                    to="/products"
                    className="mylist-continue-btn"
                  >
                    ← Continue Shopping
                  </Link>

                  <button
                    type="button"
                    className="mylist-clear-btn"
                    onClick={handleCancelList}
                  >
                    Cancel List
                  </button>
                </div>

              </div>

              <aside className="mylist-summary">
                <div className="mylist-summary-card">

                  <h2>Order Summary</h2>

                  <p className="mylist-summary-description">
                    Review your shopping list details.
                  </p>

                  <div className="mylist-summary-divider"></div>

                  <div className="mylist-summary-row">
                    <span>Different Products</span>
                    <strong>{cartItems.length}</strong>
                  </div>

                  <div className="mylist-summary-row">
                    <span>Total Items</span>
                    <strong>{totalItems}</strong>
                  </div>

                  <div className="mylist-summary-divider"></div>

                  <div className="mylist-summary-total">
                    <span>Total Price</span>

                    <strong>
                      ${totalPrice.toFixed(2)}
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="mylist-buy-btn"
                    onClick={handleBuy}
                  >
                    Buy Now →
                  </button>

                  <p className="mylist-summary-note">
                    This is a demo shopping list.
                    No payment or real order will be processed.
                  </p>

                </div>

                <div className="mylist-help-card">
                  <span>💡</span>

                  <div>
                    <h3>Shopping Tip</h3>

                    <p>
                      Adjust product quantities to
                      instantly update your total price.
                    </p>
                  </div>
                </div>
              </aside>

            </div>
          )}

        </div>
      </section>

      <ConfirmModal
        isOpen={modalType !== null}
        title={
          modalType === "buy"
            ? "Confirm Your Order"
            : "Cancel Shopping List?"
        }
        message={
          modalType === "buy"
            ? `Do you want to confirm this demo order for $${totalPrice.toFixed(2)}? No real order or payment will be processed.`
            : "Are you sure you want to cancel your shopping list? All products will be removed."
        }
        confirmText="OK"
        type={modalType === "cancel" ? "danger" : "normal"}
        onConfirm={handleConfirm}
        onCancel={handleCloseModal}
      />

    </div>
  );
}

export default MyList;
