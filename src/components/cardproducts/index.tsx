import React, { useState, useEffect, useRef } from "react";
import "./CardProducts.scss";
import { products } from "../../data/produtos.json";
import direita from "../../assets/imgcardproducts/direita.svg";
import esquerda from "../../assets/imgcardproducts/esquerda.svg";

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentIndex === 0) {
        carouselRef.current!.style.transition = "none";
        setCurrentIndex(products.length);
      } else if (currentIndex === products.length + 1) {
        carouselRef.current!.style.transition = "none";
        setCurrentIndex(1);
      }
    };

    const carousel = carouselRef.current;
    carousel!.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      carousel!.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (isTransitioning) {
      carouselRef.current!.style.transition = "transform 0.5s ease-in-out";
    }
    carouselRef.current!.style.transform = `translateX(-${
      currentIndex * 100
    }%)`;
  }, [currentIndex, isTransitioning]);

  return (
    <div className="carousel">
      <div className="carousel-content" ref={carouselRef}>
        <div className="carousel-item" key="clone-start">
          <div className="product-wrapper">
            <img
              src={products[products.length - 1].photo}
              alt={products[products.length - 1].productName}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-name">
                {products[products.length - 1].productName}
              </h3>
              <p className="product-description">
                {products[products.length - 1].descriptionShort}
              </p>
              <div className="price-details">
                <p className="discounted-price">
                  R$ {products[products.length - 1].price.toFixed(2)}
                </p>
                <p className="installment-price">
                  ou 2x de R${" "}
                  {(products[products.length - 1].price / 2).toFixed(2)} sem
                  juros
                </p>
              </div>
            </div>
            <div className="card-footer">
              <button className="buy-button">COMPRAR</button>
            </div>
          </div>
        </div>

        {/* Normal items */}
        {products.map((product, index) => (
          <div className="carousel-item" key={index}>
            <div className="product-wrapper">
              <img
                src={product.photo}
                alt={product.productName}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{product.productName}</h3>
                <p className="product-description">
                  {product.descriptionShort}
                </p>
                <div className="price-details">
                  <p className="discounted-price">
                    R$ {product.price.toFixed(2)}
                  </p>
                  <p className="installment-price">
                    ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <button className="buy-button">COMPRAR</button>
              </div>
            </div>
          </div>
        ))}

        {/* Clone the first item and place it at the end */}
        <div className="carousel-item" key="clone-end">
          <div className="product-wrapper">
            <img
              src={products[0].photo}
              alt={products[0].productName}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-name">{products[0].productName}</h3>
              <p className="product-description">
                {products[0].descriptionShort}
              </p>
              <div className="price-details">
                <p className="discounted-price">
                  R$ {products[0].price.toFixed(2)}
                </p>
                <p className="installment-price">
                  ou 2x de R$ {(products[0].price / 2).toFixed(2)} sem juros
                </p>
              </div>
            </div>
            <div className="card-footer">
              <button className="buy-button">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>

      <img
        src={esquerda}
        alt=""
        onClick={handlePrevious}
        className="carousel-navigation carousel-previous"
      />

      <img
        src={direita}
        alt=""
        onClick={handleNext}
        className="carousel-navigation carousel-next"
      />
    </div>
  );
};

export default ProductCarousel;
