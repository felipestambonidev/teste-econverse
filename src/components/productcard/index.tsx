import React from 'react';
import { ProductCard } from './ProductCard';
import './CardProducts.css';
import products from '../../data/produtos.json';

const CardProducts: React.FC = () => {
  return (
    <div className="product-list">
      {products.products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default CardProducts;
