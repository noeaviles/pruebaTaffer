
const Reservation = ( { handleHiddenCalculator } ) => {
  
  return (
    <section className="Reservation">
        <form action="" className="Reservation-form">
            <div className="Reservation-contentInput">
              <i className="fa-sharp fa-light fa-calendar-days Reservation-calendar"></i>
              <div className="Reservation-check">
                <span className="Reservation-span">Check-in</span>
              </div>
              <div className="Reservation-check">
                <div>-</div>
              </div>
              <div className="Reservation-check">
                <span className="Reservation-span">Check-out</span>
              </div>
            </div>
            <div className="Reservation-contentInput">
              <i className="fa-light fa-people-simple"></i>
                <select name="select">
                  <option value="value1">1 Adults</option>
                  <option value="value2" selected>2 Adults</option>
                  <option value="value3">4 Adults</option>
                </select>
            </div>
            <div className="Reservation-contentInput">
              <div className="Reservation-item">
                <div className="Reservation-icon">
                  <i className="fa-light fa-circle-user"></i>
                  <span>Kids</span>
                </div>
                <div className="Reservation-radio">
                  <div className="Reservation-circle"></div>
                </div>
              </div>
              <div className="Reservation-item">
                <div className="Reservation-icon">
                  <i className="fa-thin fa-plane-engines"></i>
                  <span>Flight</span>
                </div>
                <div className="Reservation-radio">
                  <div className="Reservation-circle"></div>
                </div>
              </div>
              <div className="Reservation-item">
                <div className="Reservation-icon">
                <i className="fa-light fa-user-headset"></i>
                  <span>Agent</span>
                </div>
                <div className="Reservation-radio">
                  <div className="Reservation-circle"></div>
                </div>
              </div>
            </div>
            <div className="Reservation-contentInput">
              <div className="Reservation-btn btn-blue" onClick={handleHiddenCalculator}>RESORT CREDIT</div>
              <div className="Reservation-btn btn-orange">BOOK NOW</div>
            </div>
        </form>
    </section>
  )
}

export default Reservation