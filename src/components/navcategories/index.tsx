import React from "react";
import "./NavCategories.css";
import crow from "../../assets/navcategories/crow.png";

const NavCategories: React.FC = () => {
  return (
    <div>
      <div className="line" />
      <div className="categories-bar">
        <div className="category">TODAS CATEGORIAS</div>
        <div className="category">SUPERMERCADO</div>
        <div className="category">LIVROS</div>
        <div className="category">MODA</div>
        <div className="category">LANÇAMENTOS</div>
        <div className="active">OFERTAS DO DIA</div>
        <div className="category">
          <img src={crow} className="icon" alt="Crow" />{" "}
          ASSINATURA
        </div>
      </div>
    </div>
  );
};

export default NavCategories;
