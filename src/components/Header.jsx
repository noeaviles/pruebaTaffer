import { useEffect } from "react";
import Nav from "./Nav"
import Rellax from "rellax";
import logos from '../assets/LogosAdwards.png'
import portada from '../assets/portada.jpg'
const Header = () => {
  useEffect(() => {
    new Rellax(".animate");
  }, [])
  
  return (
    <header className="Header" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url(${portada})`}}>
      <Nav/>
      <div className="Header-fondo ">
        <h1 className="Header-h1 animate" data-rellax-zindex="2">Garza Blanca Resorts</h1>
        <h2 className="Header-h2  animate" data-rellax-zindex="2">BY TAFER HOTELS & RESORTS</h2> 
        <div className="Header-logos animate" data-rellax-zindex="2">
          <img src={logos} alt="" />
        </div>
      </div>
      
    </header>
  )
}

export default Header