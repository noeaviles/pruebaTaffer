import { useEffect } from "react";
import Nav from "./Nav"
import Rellax from "rellax";
const Header = () => {
  useEffect(() => {
    new Rellax(".animate");
  }, [])
  
  return (
    <header className="Header">
      <Nav/>
      <div className="Header-fondo " >
        <h1 className="Header-h1 animate" data-rellax-zindex="2">Garza Blanca Resorts</h1>
        <h2 className="Header-h2  animate" data-rellax-zindex="2">BY TAFER HOTELS & RESORTS</h2> 
      </div>
      
    </header>
  )
}

export default Header