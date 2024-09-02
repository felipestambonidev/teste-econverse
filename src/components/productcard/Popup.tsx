import React, { useState } from 'react';

interface ProductPopupProps {
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  };
  onClose: () => void;
}

export const ProductPopup: React.FC<ProductPopupProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="product-popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-popup" onClick={onClose}>X</button>
        <img src={product.photo} alt={product.productName} />
        <h2>{product.productName}</h2>
        <p className="price">R$ {(product.price / 100).toFixed(2)}</p>
        <div className="quantity-control">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <button className="buy-button">COMPRAR</button>
      </div>
    </div>
  );
};
