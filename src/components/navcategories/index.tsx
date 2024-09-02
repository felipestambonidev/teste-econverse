import React from "react";
import "./NavCategories.scss";
import { navcategoriesitems, TnavCategories } from "../../contents/CategoriesNav";

const NavCategories: React.FC = () => {
  return (
    <div>
      <div className="line" />
      <div className="categories-bar">
        {navcategoriesitems.map((item: TnavCategories, index: number) => (
          <div
            key={index}
            className={`category ${item.active ? "active" : ""}`}>
            {item.icon ? (
              <img src={item.icon} className="icon" alt={item.paragraph} />
            ) : null}
            {item.paragraph}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavCategories;
