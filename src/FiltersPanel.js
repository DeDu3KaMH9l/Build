// FiltersPanel.js
import React from 'react';
import './filtersPanel.css'; // Импорт файла стилей

const FiltersPanel = ({ selectedFilters, onFilterChange }) => {
  const categories = [
    { id: 1, name: 'Семена' },
    { id: 2, name: 'Саженцы' },
    { id: 3, name: 'Товары для дома и сада' },
  ];

  const handleFilterChange = (filterId) => {
    const selected = selectedFilters.includes(filterId);
    const newFilters = selected
      ? selectedFilters.filter((id) => id !== filterId)
      : [...selectedFilters, filterId];

    onFilterChange(newFilters);
  };

  return (
    <div className="filters-panel">
      <h3>Фильтры</h3>
      {categories.map((category) => (
        <label key={category.id}>
          <input
            type="checkbox"
            checked={selectedFilters.includes(category.id)}
            onChange={() => handleFilterChange(category.id)}
          />
          {category.name}
        </label>
      ))}
    </div>
  );
};

export default FiltersPanel;
