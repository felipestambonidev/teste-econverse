import React from 'react';
import './RelatedProducts.scss';
import Title from '../titlerelatedproducts';

const RelatedProducts: React.FC = () => {
  return (
    <div className="related-products">
      <Title title='Produtos Relacionados' />
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
