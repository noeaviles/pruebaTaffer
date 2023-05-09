

const ItemsIncludes = () => {
  return (
    <section className='Items'>
        <div className='Items-infoContent'>
            <h3 className='Items-title'>EVERY GARZA BLANCA</h3>
            <span className='Items-subTitle'>INCLUDES</span>
            <p className='Items-p'>Enjoy all-inclusive luxury vacations at<span className="Items-fontStrong"> Garza Blanca resorts</span> and see for yourself <br/> why we offer the most romantic getaways with more quality inclusions than <br/> any other luxury beach resort.</p>
        </div>
        <div className="Items-Container">
           <div className="Items-row">
            <div className="Item-Icon">
              <i className="fa-sharp fa-light fa-utensils"></i>
              <span className="Item-span">5-Star Gourmet<br/> Restaurants</span>
            </div>
            <div className="Item-Icon">
              <i className="fa-regular fa-badminton"></i>
              <span className="Item-span">Recreational<br/> Activities</span>
            </div>
            <div className="Item-Icon">
              <i className="fa-light fa-rings-wedding"></i>
              <span className="Item-span">Wedding <br/>Venues</span>
            </div>
            <div className="Item-Icon">
              <i className="fa-sharp fa-light fa-utensils"></i>
              <span className="Item-span">The Best<br/> All-Inclusive Plan</span>
            </div>
            <div className="Item-Icon">
              <i className="fa-regular fa-van-shuttle"></i>
              <span className="Item-span">Roundtrip<br/> Airport Transfers</span>
            </div>
           </div>

           <div className="Items-row">
            <div className="Item-Icon">
              <i className="fa-solid fa-person-swimming"></i>
              <span className="Item-span">Outdoor Pools<br/> And Jacuzzis</span>
            </div>
            <div className="Item-Icon">
              <i className="fa-light fa-star"></i>
              <span className="Item-span">Adults-Only<br/> Space</span>
            </div>
            <div className="Item-Icon">
              <i className="fa-light fa-bag-shopping"></i>
              <span className="Item-span">Shopping<br/> Spaces</span>
            </div>
            <div className="Item-Icon">
              <i className="fa-light fa-child"></i>
              <span className="Item-span">A Kids’ Club</span>
            </div>
           </div>
        </div>
    </section>
  )
}

export default ItemsIncludes