
import '../globals.css'
import TopBar from '../components/topbar'
import Banner from '../components/banner'
import Header from '../components/header'

function Home() {

  return (
   <div>
    <header>
      <TopBar />
      <Header />
    </header>
    <nav>
      <Banner />
    </nav>
   </div>
  )
}

export default Home
