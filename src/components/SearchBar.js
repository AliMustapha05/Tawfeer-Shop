import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;