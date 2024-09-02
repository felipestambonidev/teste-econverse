import Title from "../titlerelatedproducts";
import "./CardRelatedProduct.scss"

export default function CardRelatedProducts() {
  return (
    <section>
      <Title title="Produtos Relacionados" />
      <div className="container-relatedproducts">
        <div className="title-h2">
          <h3>Ver todos</h3>
        </div>
      </div>
    </section>
  );
}
