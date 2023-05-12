import { useState,useEffect } from "react"

const Cookie = () => {
  const [isActive,setIsActive] = useState(true);

  const handleCookie = () => {
    setIsActive( !isActive )
  }
  
  useEffect(() => {
    let date = new Date();
    date.setDate(date.getDate() + 90);
    const newDate = date.toUTCString();
    document.cookie = `avisocookies=1; expires=${newDate};path=/;`
  }, [])


  return (
    <div className={isActive ? 'Cookie' : 'Cookie-isHidden' }>
        <div className="Cookies-container">
          <p className="Cookie-p">By using our site you agree to our <a href="https://www.garzablancaresort.com/privacy-policy" target="_blink">Cookie Policy</a>.</p>
          <i className="fa-sharp fa-regular fa-circle-xmark" onClick={handleCookie}></i>
        </div>
    </div>
  )
}

export default Cookie