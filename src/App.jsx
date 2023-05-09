import Carrusel from "./components/Carrusel"
import Divisor from "./components/Divisor"
import Gourmet from "./components/Gourmet"
import Header from "./components/Header"
import ItemsIncludes from "./components/ItemsIncludes"
import Paragraph from "./components/Paragraph"
import Reservation from "./components/Reservation"
import Video from "./components/Video"

function App() {

  return (
    <>
      <Header/>
      <Reservation/>
      <Paragraph/>
      <Divisor/>
      <Carrusel/>
      <Divisor/>
      <ItemsIncludes/>
      <Divisor/>
      <Video/>
      <Gourmet/>
    </>
  )
}

export default App
