import isotipo from '../assets/isotipo.png'

const Paragraph = () => {
  return (
    <section className="Paragraph">
      <div className="Paragraph-container">
        <p className="Paragraph-title">Be <span>Inspired</span>,<br/>be <span>Here!</span></p>
        <p className="Paragraph-p">Indulge in the most luxurious and relaxing Mexico vacations at any of the stunning Garza Blanca Resort & Spas located in Cancun, Los Cabos, Puerto Vallarta, and the Riviera Maya soon to join the collection.<br/><br/>Deluxe rooms, luxury one, two and three bedroom suites, lavish penthouses and grand residences beckon discerning visitors seeking quality and elegant comfort.</p>
      </div>
      <div className="Paragraph-divisor">
        <div className='Divisor-img'><img src={isotipo} alt="" /></div>
      </div>
    </section>
  )
}

export default Paragraph