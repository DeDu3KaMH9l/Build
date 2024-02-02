// SearchBar.js
import React from 'react';
import './searchBar.css'; // путь к вашему файлу стилей

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Поиск..."
      />
    </div>
  );
};

export default SearchBar;
