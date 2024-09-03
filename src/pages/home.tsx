import "../globals.css";
import TopBar from "../components/topbar";
import Banner from "../components/banner";
import Header from "../components/header";
import NavCategories from "../components/navcategories";
import Categories from "../components/cardcategories";
import RelatedProducts from "../components/relatedproducts";
import CardPartners from "../components/partners";
import CardRelatedProducts from "../components/cardrelatedproducts";
import Footer from "../components/footer";
import CardProducts from "../components/cardproducts";



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
        <CardPartners />
        <CardRelatedProducts />
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
