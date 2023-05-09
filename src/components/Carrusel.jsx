import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carrusel = () => {
  
  
  return (
    <section className="Carrusel">
      <div className="Carrusel-title">
        <h3 className="Carrusel-h3">THE LEVEL <span className="Carrusel-spanTitle">OF VACATIONING YOU</span> DESERVE</h3>
        <div className="Carrusel-controls">
          <i className="fa-light fa-arrow-left"></i>
          <span className="Carrusel-span">VIEW PROPERTIES</span>
          <i className="fa-light fa-arrow-right"></i>
        </div>
      </div>
      <div className="Carrusel-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
        // modules={[Pagination]}
          //pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='Swiper-contain'
        >
          <SwiperSlide >
            <div className='Carrusel-slide'>
              <div className='Carrusel-img img1'></div>
              <div className='Carrusel-info'>
                <p className='Carrusel-slideTitle'>LOS CABOS</p>
                <p className='Carrusel-p'>The ultimate luxury escape, Garza Blanca Resort & Spa Los Cabos is a family-friendly beach resort with a contemporary design inspired by the natural landscape.</p>
                <a href="#" className='Carrusel-a'>EXPLORE</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='Carrusel-slide'>
              <div className='Carrusel-img img2'></div>
              <div className='Carrusel-info'>
                <p className='Carrusel-slideTitle'>GARZA BLANCA CANCUN</p>
                <p className='Carrusel-p'>The newest, hottest, and most luxurious yet addition to TAFER Hotels & Resorts collection of sophisticated all-inclusive resorts in Mexico’s stunning beaches.</p>
                <a href="#" className='Carrusel-a'>EXPLORE</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='Carrusel-slide'>
              <div className='Carrusel-img img3'></div>
              <div className='Carrusel-info'>
                <p className='Carrusel-slideTitle'>GARZA BLANCA VALLARTA</p>
                <p className='Carrusel-p'>The ultimate luxury escape, Garza Blanca Resort & Spa Los Cabos is a family-friendly beach resort with a contemporary design inspired by the natural landscape.</p>
                <a href="#" className='Carrusel-a'>EXPLORE</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Carrusel