import React from "react";
import { PiShieldCheckBold, PiTruckBold, PiCreditCardBold } from "react-icons/pi";
import "./TopBar.scss";

const TopBar: React.FC = () => {
  return (
    <section className="top-bar">
      <div className="top-bar-item">
        <PiShieldCheckBold className="icon" />
        <span>
          Compra <strong>100% segura</strong>
        </span>
      </div>
      <div className="top-bar-item">
        <PiTruckBold className="icon" />
        <span>
          <strong>Frete grátis</strong> acima de R$ 200
        </span>
      </div>
      <div className="top-bar-item">
        <PiCreditCardBold className="icon" />
        <span>
          <strong>Parcele</strong> suas compras
        </span>
      </div>
    </section>
  );
};

export default TopBar;
