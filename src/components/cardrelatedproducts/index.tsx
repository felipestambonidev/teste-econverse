import Title from "../titlerelatedproducts";
import "./CardRelatedProduct.scss";

export default function CardRelatedProducts() {
  return (
    <section>
      <Title title="Produtos Relacionados" />
      <div>
        <div className="title-h2">
          <h3>Ver todos</h3>
        </div>
      </div>
      <div className="container-relatedproducts">
        <div className="relprod-card">
          <div className="shadow-relprod" />
          <div className="relprod-content">
            <h2 className="relprod-h2">Produtos</h2>
            <p className="relprod-p">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <button className="buttoncard-relprod">CONFIRA</button>
          </div>
        </div>
        <div className="relprod-card">
          <div className="shadow-relprod" />
          <div className="relprod-content">
            <h2 className="relprod-h2">Produtos</h2>
            <p className="relprod-p">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <button className="buttoncard-relprod">CONFIRA</button>
          </div>
        </div>
      </div>
    </section>
  );
}
