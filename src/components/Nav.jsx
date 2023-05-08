import { useState } from "react"

const Nav = () => {
    const [menu,setMenu] = useState(false);
    
    const handleMenu = () => {
        setMenu( !menu )
    }

  return (
    <nav className="Nav">
        <div className="Nav-menu-controls">
            <div className="Nav-menu">
                <i className="fa-regular fa-bars Nav-iMenu" onClick={handleMenu}></i>
                <div className="Nav-menuInfo Nav-desktop">
                    <span>Ph. 1 877 845 3791</span>
                    <div className="Nav-leng">
                        <i className="fa-light fa-earth-americas"></i>
                        <p className="Nav-p">ES</p>
                    </div>
                </div>
            </div>

            <div className="Nav-logo" />

            <div className="Nav-login">
                <div className="Nav-login-btns">
                    <i className="fa-light fa-circle-user"></i>
                    <p className="Nav-p">Login</p>
                </div>
                <div className="Nav-login-btns">
                    <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
                    <p className="Nav-p">Register</p>
                </div>
                <div className="Nav-btn-bookResort Nav-desktop btn-orange">BOOK A RESORT</div>
            </div>
        </div>

        <div className={ menu ?  "Nav-menu-container isActiveMenu" : "Nav-menu-container"} >
           
            <ul className="Nav-ul">
                <li className="Nav-li"> <span>Our Resorts</span><i className="fa-regular fa-chevron-down"></i> </li>
                <li className="Nav-li"><span>Accommodations</span><i className="fa-regular fa-chevron-down"></i></li>
                <li className="Nav-li"><span>Destinations</span><i className="fa-regular fa-chevron-down"></i></li>
                <li className="Nav-li"><span>Dining</span><i className="fa-regular fa-chevron-down"></i></li>
                <li className="Nav-li"><span>Spa</span><i className="fa-regular fa-chevron-down"></i></li>
                <li className="Nav-li"><span>Special Offers</span></li>
            </ul>

            <div className="Nav-btn-bookResort btn-orange Nav-mobile">BOOK A RESORT</div>
        </div>
       
    </nav>
  )
}

export default Nav