import React from 'react';
import CartCard from '../components/CartCard';

function MyList({ cartItems, updateQuantity, removeFromCart, clearCart }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleBuy = () => {
    alert(`Thank you for your purchase! Total: $${totalAmount.toFixed(2)}`);
    clearCart();
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  return (
    <main>
      <h2>My List</h2>
      {cartItems.length === 0 ? (
        <p>Your shopping list is empty. Add some products from the Home page!</p>
      ) : (
        <>
          <div className="productsContainer">
            {cartItems.map(item => (
              <CartCard 
                key={item.id} 
                item={item} 
                onUpdateQuantity={updateQuantity}
                onDelete={removeFromCart}
              />
            ))}
          </div>
          <p><strong>Total: ${totalAmount.toFixed(2)}</strong></p>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleBuy}>Buy</button>
        </>
      )}
    </main>
  );
}

export default MyList;