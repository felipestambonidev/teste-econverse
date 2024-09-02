import React from 'react';
import tecnologia from "../../assets/categorycard/monitorar-tablet-e-smartohone 1.png"
import './CardCategories.css';
import mercado from "../../assets/categorycard/supermercados 1.png"
import bebidas from "../../assets/categorycard/whiskey.png"
import ferramenta from "../../assets/categorycard/ferramentas 1.png"
import saude from "../../assets/categorycard/cuidados-de-saude 1.png"
import esporte from "../../assets/categorycard/corrida 1.png"
import moda from "../../assets/categorycard/moda 1.png"

const Categories: React.FC = () => {
  return (
    <div className="categories-container">
      <div className="category-item active">
        <img className='image' src={tecnologia} alt="Tecnologia" />
        <p className="category-name active">Tecnologia</p>
      </div>
      <div className="category-item">
        <img className='image' src={mercado} alt="Supermercado" />
        <p className="category-name">Supermercado</p>
      </div>
      <div className="category-item">
        <img className='image' src={bebidas} alt="Bebidas" />
        <p className="category-name">Bebidas</p>
      </div>
      <div className="category-item">
        <img className='image' src={ferramenta} alt="Ferramentas" />
        <p className="category-name">Ferramentas</p>
      </div>
      <div className="category-item">
        <img className='image' src={saude} alt="Saúde" />
        <p className="category-name">Saúde</p>
      </div>
      <div className="category-item">
        <img className='image' src={esporte} alt="Esportes e Fitness" />
        <p className="category-name">Esportes e Fitness</p>
      </div>
      <div className="category-item">
        <img className='image' src={moda} alt="Moda" />
        <p className="category-name">Moda</p>
      </div>
    </div>
  );
};

export default Categories;
