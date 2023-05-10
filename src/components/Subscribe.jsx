
function Subscribe() {
  return (
    <section className="Subscribe">
        <div className="Subscribe-container">
          <p className="Subscribe-titulo">ESCAPES BEGIN IN YOUR INBOX</p>
          <p className="Subscribe-p">Register to receive special offers, exclusive information and news.</p>
        </div>
        <form action="" className="Subscribe-form">
          <input type="text" placeholder="Name" className="Subscribe-input"/>
          <input type="email" placeholder="Email Address" className="Subscribe-input"/>
          <input type="submit" value="SUBSCRIBE" className="Subscribe-btn btn-blue"/>
        </form>
    </section>
  )
}

export default Subscribe