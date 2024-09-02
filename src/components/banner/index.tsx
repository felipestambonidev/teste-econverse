import React from 'react';
import './Banner.scss'; 
import bannerImage from '../../assets/imagebanner/banner.png'; 
import { banneritems } from "../../contents/bannerItems";

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Promoção" className="banner-background" />
      {banneritems.map((item, index) => (
        <div className="banner-content" key={index}>
          <h1>{item.title}</h1>
          <p>{item.paragraph}</p>
          <button className="banner-button">{item.buttom}</button>
        </div>
      ))}
    </div>
  );
};

export default Banner;
