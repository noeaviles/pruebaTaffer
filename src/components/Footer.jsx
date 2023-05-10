import logos from '../assets/awards.svg'
const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer-title">FROM THE PRESTIGIOUS AND AWARD-WINNING</p>
      <p className="Footer-subTitle">CORPORATE TAFER HOTELS & RESORTS</p>
      <div className="Footer-logos">
        <img src={logos} alt="" />
      </div>
    </footer>
  )
}

export default Footer