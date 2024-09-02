import "../globals.css";
import TopBar from "../components/topbar";
import Banner from "../components/banner";
import Header from "../components/header";
import NavCategories from "../components/navcategories";
import Categories from "../components/cardcategories";
import RelatedProducts from "../components/relatedproducts";
import CardProducts from "../components/productcard";

function Home() {
  return (
    <div>
      <header>
        <TopBar />
        <Header />
        <NavCategories />
      </header>
      <nav>
        <Banner />
        <Categories />
        <RelatedProducts />
        <CardProducts />
      </nav>
    </div>
  );
}

export default Home;
