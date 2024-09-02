import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";
import logovtex from "../../assets/imagesheader/logo.png";
import iconbox from "../../assets/imagesheader/boxicon.png";
import iconheart from "../../assets/imagesheader/hearticon.png";
import iconuser from "../../assets/imagesheader/usericon.png";
import iconcart from "../../assets/imagesheader/carticon.png";

const Header: React.FC = () => {
  return (
    <header>
      <section className="header">
        <div className="logo">
          <img src={logovtex} alt="VTEX Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="O que você está buscando?" />
          <FaSearch className="search-icon" />
        </div>
        <div className="icons">
          <img src={iconbox} alt="" />
          <img src={iconheart} alt="" />
          <img src={iconuser} alt="" />
          <img src={iconcart} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
