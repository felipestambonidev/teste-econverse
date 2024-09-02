import React from 'react';
import { cardcategoriesitems } from "../../contents/cardcategories";
import './CardCategories.css';

const Categories: React.FC = () => {
  return (
    <div className="categories-container">
      {cardcategoriesitems.map((item, index) => (
        <div className={`category-item ${index === 0 ? 'active' : ''}`} key={index}>
          <img className='image' src={item.image} alt={item.paragraph} />
          <p className={`category-name ${index === 0 ? 'active' : ''}`}>{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;