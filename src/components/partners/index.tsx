import React from "react";
import "./Partness.scss";

const CardPartners: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="shadow" />
        <div className="content">
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <button className="buttoncard">CONFIRA</button>
        </div>
      </div>
      <div className="card">
        <div className="shadow" />
        <div className="content">
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <button className="buttoncard">CONFIRA</button>
        </div>
      </div>
    </div>
  );
};

export default CardPartners;