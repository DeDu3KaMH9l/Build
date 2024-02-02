// App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FiltersPanel from './FiltersPanel';
import ProductCards from './ProductCards';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [profileName, setProfileName] = useState("Админ");

  const products = [
    { id: 1, name: 'Агератум', price: 40, inStock: true, packaging: '8 г', description: 'Синие цветы' },
    { id: 2, name: 'Астры', price: 35, inStock: true, packaging: '7 г', description: 'Разноцветные цветы' },
    { id: 3, name: 'Бархатцы', price: 30, inStock: true, packaging: '5 г', description: 'Оранжевые цветы' },
    { id: 4, name: 'Вербена', price: 45, inStock: true, packaging: '12 г', description: 'Фиолетовые цветы' },
    { id: 5, name: 'Гайлардия', price: 60, inStock: false, packaging: '18 г', description: 'Желтые цветы' },
    { id: 6, name: 'Гвоздика', price: 55, inStock: true, packaging: '10 г', description: 'Красные цветы' },
    { id: 7, name: 'Гелихризум', price: 50, inStock: true, packaging: '15 г', description: 'Желтые цветы' },
    { id: 8, name: 'Георгины', price: 70, inStock: true, packaging: '20 г', description: 'Разноцветные цветы' },
    { id: 9, name: 'Пеларгония', price: 65, inStock: true, packaging: '25 г', description: 'Розовые цветы' },
    { id: 10, name: 'Рудбекия', price: 80, inStock: true, packaging: '15 г', description: 'Желтые цветы' },
    { id: 11, name: 'Скабиоза', price: 25, inStock: true, packaging: '10 г', description: 'Розовые цветы' },
    { id: 12, name: 'Маргаритка', price: 40, inStock: true, packaging: '8 г', description: 'Белые цветы' },
    { id: 13, name: 'Дельфиниум', price: 35, inStock: true, packaging: '7 г', description: 'Синие цветы' },
    { id: 14, name: 'Пион', price: 30, inStock: true, packaging: '5 г', description: 'Розовые цветы' },
    { id: 15, name: 'Ромашка', price: 45, inStock: true, packaging: '12 г', description: 'Белые цветы' },
    { id: 16, name: 'Хризантема', price: 60, inStock: false, packaging: '18 г', description: 'Разноцветные цветы' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters = selectedFilters.length === 0 || selectedFilters.includes(product.category);
    return matchesSearch && matchesFilters;
  });

  return (
    <div>
      <div className="top-bar">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#739072', padding: '10px' }}>
          <SearchBar searchTerm={searchTerm} onSearchChange={(value) => setSearchTerm(value)} />
          <div style={{ flex: 1 }}></div>
          <div style={{ marginRight: '10px' }}>
            <img src="https://e7.pngegg.com/pngimages/759/688/png-clipart-shopping-cart-computer-icons-online-shopping-retail-shopping-cart-retail-grocery-store.png" alt="Cart" style={{ width: '50px', height: '50px' }} />
          </div>
          <div style={{ marginLeft: '10px' }}>Имя профиля: {profileName}</div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className="filters-panel">
          <FiltersPanel
            selectedFilters={selectedFilters}
            onFilterChange={(filters) => setSelectedFilters(filters)}
          />
        </div>

        <div className="product-cards">
          <ProductCards products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default App;
