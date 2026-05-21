import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import productsData from '../data/productsData';

function Home({ addToCart, currentUser }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState({
    pantryStaples: productsData.pantryStaples,
    cannedFoods: productsData.cannedFoods,
    drinks: productsData.drinks,
    fruitsAndVeggies: productsData.fruitsAndVeggies
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      setFilteredProducts({
        pantryStaples: productsData.pantryStaples,
        cannedFoods: productsData.cannedFoods,
        drinks: productsData.drinks,
        fruitsAndVeggies: productsData.fruitsAndVeggies
      });
      return;
    }

    const filterProducts = (products) => {
      return products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    };

    setFilteredProducts({
      pantryStaples: filterProducts(productsData.pantryStaples),
      cannedFoods: filterProducts(productsData.cannedFoods),
      drinks: filterProducts(productsData.drinks),
      fruitsAndVeggies: filterProducts(productsData.fruitsAndVeggies)
    });
  };

  const handleAddToCart = (product) => {
    if (!currentUser) {
      alert('Please login first to add items to your list!');
      navigate('/login');
      return;
    }
    addToCart(product);
    alert(`${product.name} added to your list!`);
  };

  const CategorySection = ({ title, products }) => {
    if (products.length === 0) return null;
    return (
      <>
        <h3 className="categoryTitle">{title}</h3>
        <div className="productsContainer">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <main>
      <h2>Products</h2>
      {!currentUser && (
        <p style={{ backgroundColor: '#ff9800', color: 'white', padding: '10px', textAlign: 'center', borderRadius: '5px' }}>
          ⚠️ Please login to add items to your shopping list!
        </p>
      )}
      <SearchBar onSearch={handleSearch} />
      
      {searchTerm && filteredProducts.pantryStaples.length === 0 && 
       filteredProducts.cannedFoods.length === 0 && 
       filteredProducts.drinks.length === 0 && 
       filteredProducts.fruitsAndVeggies.length === 0 && (
        <p>No products found matching "{searchTerm}"</p>
      )}
      
      <CategorySection title="Pantry Staples" products={filteredProducts.pantryStaples} />
      <CategorySection title="Canned Foods" products={filteredProducts.cannedFoods} />
      <CategorySection title="Drinks" products={filteredProducts.drinks} />
      <CategorySection title="Fruits and Vegetables" products={filteredProducts.fruitsAndVeggies} />
    </main>
  );
}

export default Home;