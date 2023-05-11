import img from '../assets/lifestyle.jpg'
const ExploreMore = () => {
  return (
    <section className="ExploreMore">
      <p className="ExploreMore-titulo">EXPLORE MORE</p>
      <p className="ExploreMore-subTitulo">WITH GARZA BLANCA</p>
      <p className="ExploreMore-p">Our latest news and events are here, along with<br/> travel tips and inspiring relaxation ideas for you.</p>
      <a href="" className="ExploreMore-a">VIEW BLOG</a>
      <p className="ExploreMore-hashtag">#GARZABLANCARESORTS</p>
      <div className="ExploreMore-icons"><i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-tiktok"></i><i className="fa-brands fa-youtube"></i></div>
      <div className="ExploreMore-img" style={{ backgroundImage: `url(${img})`}}></div>
      <p className='ExploreMore-text'>Escapes Begin In Your Inbox</p>
      <a href="" className="ExploreMore-a">SUBSCRIBE TO OUR NEWSLETTER</a>
    </section>
  )
}

export default ExploreMore