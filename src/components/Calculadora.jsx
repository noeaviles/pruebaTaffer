import data from '../json/data.json';
import { useState} from 'react'; 

const Calculadora = ({ hidden }) => {

  const [nights,setNights] = useState(3)

  const handleNights = (value) =>{
      var suma = 0;
    if (value === "LESS") {
      if( nights > 3 ){
         suma = nights - 1
      }else{return}
    }

    if(value === "ADD"){
      if (nights < 10){
        suma = nights + 1
      }else{return}
    }
    setNights(suma);
  }

  return (
    <div className={ hidden ? "Calculadora" : 'Calculadora-hidden' }>
      <div className="Calculadora-container">
        <h4 className="Calculadora-h4">Resort Credit Calculator</h4>
        <div className="Calculadora-controls">
          <div className="Calculadora-control" onClick={() => handleNights("LESS")}>-</div>
          <div className="Calculadora-Nights">
            <div className="Calculadora-tablero">{nights}</div>
            <p>Nights</p>
          </div>
          <div className="Calculadora-control" onClick={() => handleNights("ADD")}>+</div>
        </div>
        <div className="Calculadora-table">
          <div className="Calculadora-row">
            <span className="Calculadora-room">Room</span>
            <span className="Calculadora-prices">{nights} Nights</span>
          </div>
          
          {
            data.en['1'].rooms.map( item => (
              <div className="Calculadora-row" key={item.name}>
                <span className="Calculadora-room">{item.name}</span>
                <span className="Calculadora-prices">{item.resort_credits_nights[`${nights}`]}/USD</span>
              </div>
            ) )
          }
        </div>
      </div>
    </div>
  )
}

export default Calculadora