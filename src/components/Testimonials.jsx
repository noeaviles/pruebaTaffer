import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

const Testimonials = () => {

  return (
    <section className="Testimonials">
      <div className="Testimonials-carrusel">
        <Swiper 
        pagination={{ clickable: true }} 
        modules={[Pagination]} 
        className='Swiper-contain'
        >
            <SwiperSlide >
              <div className='Testimonials-slide'>
                <span className='Testimonials-span'>{'"'}</span>
                <p className='Testimonials-title'>GARZA BLANCA BLEW ME AWAY</p>
                <p className='Testimonials-comment'>Miguel at the Japanese restaurant was so helpful with our menu, he basically ordered for us and everything was phenomenal.</p>
                <p className='Testimonials-name'>Jesus G</p>  
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='Testimonials-slide'>
                <span className='Testimonials-span'>{'"'}</span>
                <p className='Testimonials-title'>GARZA BLANCA BLEW ME AWAY</p>
                <p className='Testimonials-comment'>Miguel at the Japanese restaurant was so helpful with our menu, he basically ordered for us and everything was phenomenal.</p>
                <p className='Testimonials-name'>Jesus G</p>  
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='Testimonials-slide'>
                <span className='Testimonials-span'>{'"'}</span>
                <p className='Testimonials-title'>GARZA BLANCA BLEW ME AWAY</p>
                <p className='Testimonials-comment'>Miguel at the Japanese restaurant was so helpful with our menu, he basically ordered for us and everything was phenomenal.</p>
                <p className='Testimonials-name'>Jesus G</p>  
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='Testimonials-content'>
            <p className='Testimonials-p'>A FLAVORFUL JOURNEY AWAITS FOR YOU…</p>
            <div className='Testimonials-btns'>
              <div className='Testimonials-btn btn-blue'>CANCUN</div>
              <div className='Testimonials-btn btn-blue'>PUERTO VALLARTA</div>
              <div className='Testimonials-btn btn-blue'>LOS CABOS</div>
            </div>
          </div>
            
      </div>
    </section>
  )
}

export default Testimonials