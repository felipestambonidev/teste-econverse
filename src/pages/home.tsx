
import '../globals.css'
import TopBar from '../components/topbar'
import Banner from '../components/banner'
import Header from '../components/header'
import NavCategories from '../components/navcategories'
import Categories from '../components/cardcategories'

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
    </nav>
   </div>
  )
}

export default Home
