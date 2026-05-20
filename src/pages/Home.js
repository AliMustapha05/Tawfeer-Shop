import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import productsData from '../data/productsData';

function Home({ addToCart }) {
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
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <main>
      <h2>Products</h2>
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