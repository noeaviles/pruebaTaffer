import Calculadora from "./components/Calculadora"
import Carrusel from "./components/Carrusel"
import Cookie from "./components/Cookie"
import Divisor from "./components/Divisor"
import ExploreMore from "./components/ExploreMore"
import Footer from "./components/Footer"
import Gourmet from "./components/Gourmet"
import Header from "./components/Header"
import ItemsIncludes from "./components/ItemsIncludes"
import Maps from "./components/Maps"
import Modal from "./components/Modal"
import Paragraph from "./components/Paragraph"
import Reservation from "./components/Reservation"
import Restaurants from "./components/Restaurants"
import Subscribe from "./components/Subscribe"
import Testimonials from "./components/Testimonials"
import Video from "./components/Video"
import { useState } from "react"

function App() {
  const [hidden,setHidden] = useState(false);
  const [modalActive,setModalActive] = useState( false)

  const handleHiddenCalculator = () => {
    setHidden(!hidden)
  }

  
  const handleModal = () => {
    setModalActive(!modalActive)
}

  return (
    <>
      <Header/>
      <Reservation handleHiddenCalculator={ handleHiddenCalculator }/>
      <Calculadora hidden={hidden}/>
      <Paragraph/>
      <Divisor/>
      <Carrusel/>
      <ExploreMore/>
      <Divisor/>
      <ItemsIncludes/>
      <Divisor/>
      <Video handleModal={ handleModal }/>
      <Gourmet/>
      <Restaurants/>
      <Testimonials/>
      <Maps/>
      <Subscribe/>
      <Footer/>
      <Cookie/>
      <Modal modalActive={modalActive} handleModal={ handleModal }/>
    </>
  )
}

export default App
