import Carrusel from "./components/Carrusel"
import Divisor from "./components/Divisor"
import ExploreMore from "./components/ExploreMore"
import Footer from "./components/Footer"
import Gourmet from "./components/Gourmet"
import Header from "./components/Header"
import ItemsIncludes from "./components/ItemsIncludes"
import Paragraph from "./components/Paragraph"
import Reservation from "./components/Reservation"
import Restaurants from "./components/Restaurants"
import Subscribe from "./components/Subscribe"
import Testimonials from "./components/Testimonials"
import Video from "./components/Video"

function App() {

  return (
    <>
      <Header/>
      <Reservation/>
      <Paragraph/>
      <Divisor/>
      <Carrusel/>
      <ExploreMore/>
      <Divisor/>
      <ItemsIncludes/>
      <Divisor/>
      <Video/>
      <Gourmet/>
      <Restaurants/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
