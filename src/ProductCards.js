// components/ProductCards.js

import React from 'react';
import './styles.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Цена: ₽{product.price}</p>
      <p>В наличии: {product.inStock ? 'Да' : 'Нет'}</p>
      <p>Фасовка: {product.packaging}</p>
      <p>Описание: {product.description}</p>
      <button className="add-to-cart-button">В корзину</button>
    </div>
  );
};

const ProductCards = ({ products }) => (
  <div className="product-cards">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductCards;