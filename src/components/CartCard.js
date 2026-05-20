import React from 'react';

function CartCard({ item, onUpdateQuantity, onDelete }) {
  const total = item.price * item.quantity;

  return (
    <div className="cartCard">
      <img src={item.image} alt={item.name} />
      <div className="cartInfo">
        <h3>{item.name}</h3>
        <div className="priceRow">
          <p className="price">{item.price}{item.priceUnit}</p>
          <div className="quantityControl">
            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
        </div>
        <p className="total">Total: {total.toFixed(2)}$</p>
      </div>
      <button className="deleteBtn" onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
}

export default CartCard;