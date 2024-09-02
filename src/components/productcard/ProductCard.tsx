import React, { useState } from 'react';
import { ProductPopup } from './Popup';

interface ProductCardProps {
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="product-card">
        <div className="product-info" onClick={() => setShowPopup(true)}>
          <img src={product.photo} alt={product.productName} />
          <h2>{product.productName}</h2>
          <p>{product.descriptionShort}</p>
          <p className="price">R$ {(product.price / 100).toFixed(2)}</p>
          <button className="buy-button">COMPRAR</button>
        </div>
      </div>

      {showPopup && (
        <ProductPopup product={product} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
};
