import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}{product.priceUnit}</p>
      <button onClick={() => onAddToCart(product)}>+ Add</button>
    </div>
  );
}

export default ProductCard;