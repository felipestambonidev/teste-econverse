import React from 'react';
import './RelatedProducts.scss';

const RelatedProducts: React.FC = () => {
  return (
    <div className="related-products">
      <h2 className="title">Produtos relacionados</h2>
      <div className="categories">
        <div className="category-itempro ative">CELULAR</div>
        <div className="category-itempro">ACESSÓRIOS</div>
        <div className="category-itempro">TABLETS</div>
        <div className="category-itempro">NOTEBOOKS</div>
        <div className="category-itempro">TVS</div>
        <div className="category-itempro">VER TODOS</div>
      </div>
    </div>
  );
};

export default RelatedProducts;
