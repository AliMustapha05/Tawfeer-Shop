import React from 'react';

function CartCard({ item, onUpdateQuantity, onDelete }) {
  const total = item.price * item.quantity;

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="cartCard">
      <img 
        src={item.image} 
        alt={item.name}
        onError={(e) => {
          e.target.src = '/images/Products/Bread.jpeg';
        }}
      />
      <div className="cartInfo">
        <h3>{item.name}</h3>
        <div className="priceRow">
          <p className="price">{item.price}{item.priceUnit}</p>
          <div className="quantityControl">
            <button onClick={handleDecrease}>-</button>
            <span>{item.quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
        <p className="total">Total: ${total.toFixed(2)}</p>
      </div>
      <button className="deleteBtn" onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
}

export default CartCard;