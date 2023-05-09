import chef from '../assets/chef.jpg'
import platillo from '../assets/platillo.jpg'
import logo from '../assets/logoGourmet.png'
const Gourmet = () => {
  return (
    <section className="Gourmet">
      <div className="Gourmet-container">
        <div className="Gourmet-img" style={{ backgroundImage: `url(${platillo})`}}></div>
        <div className="Gourmet-text">
          <div>
            <h4 className="Gourmet-h4">EXCLUSIVE</h4>
            <p className="Gourmet-subTitle">DINING EXPERIENCES</p>
          </div>
          <div className="Gourmet-logo"><img src={logo} alt="" /></div>
          <p className="Gourmet-p">Taste our commitment to the culinary arts in every bite,<br/> from luxury room service to fine dining restaurants to<br/> delectable snacks by the pool to gourmet all inclusive plans.</p>
          <div className="Gourmet-btn btn-withe">VIEW VIDEO</div>
        </div>
        <div className="Gourmet-img" style={{ backgroundImage: `url(${chef})`}}></div>
      </div>
      <div className='Gourmet-triangulo'></div>
    </section>
  )
}

export default Gourmet