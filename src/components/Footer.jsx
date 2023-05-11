import logos from '../assets/adwards.png'
import taffer from '../assets/taffer.png'
const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer-title">FROM THE PRESTIGIOUS AND AWARD-WINNING</p>
      <p className="Footer-subTitle">CORPORATE TAFER HOTELS & RESORTS</p>
      <div className="Footer-logos">
        <div className='Footer-taffer'><img src={taffer} alt="" /></div>
        <div className='Footer-adwards'><img src={logos} alt="" /></div>
      </div>
    </footer>
  )
}

export default Footer