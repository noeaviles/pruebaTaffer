
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import logo1 from '../assets/blancablue.svg';
import logo2 from '../assets/bocados.svg';
import logo3 from '../assets/hiroshi.svg';
import logo4 from '../assets/dao.svg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

const Restaurants = () => {
  return (
    <section className="Restaurants">
      <div className="Restaurants-title">
        <h4 className="Restaurants-h4">GOURMET RESTAURANTS</h4>
        <p className="Restaurants-subTitle">TAKING YOU ON A CULINARY JOURNEY</p>
      </div>
      <div className="Restaurants-carrusel">
        <Swiper
            spaceBetween={1}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='Swiper-contain'
            pagination={{ clickable: true }} 
            modules={[Pagination]} 
          >
            <SwiperSlide >
              <div className='Restaurants-slide'>
                <div className='Restaurants-logo' style={{ backgroundImage: `url(${logo1})`}}></div>
                <p className='Restaurants-p'>Pre-Hispanic flavors mix with modern creative flair to make your taste buds dance.</p>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className='Restaurants-slide'>
                <div className='Restaurants-logo' style={{ backgroundImage: `url(${logo2})`}}></div>
                <p className='Restaurants-p'>offers traditional grilling recipies with delicious dry -aged meats as well of vegetarian and vegan options.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='Restaurants-slide'>
                <div className='Restaurants-logo' style={{ backgroundImage: `url(${logo3})`}}></div>
                <p className='Restaurants-p'>offers traditional grilling recipies with delicious dry -aged meats as well of vegetarian and vegan options.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='Restaurants-slide'>
                <div className='Restaurants-logo' style={{ backgroundImage: `url(${logo4})`}}></div>
                <p className='Restaurants-p'>Each dish reflects the culinary excitement of discovery, blending traditional components.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='Restaurants-slide'>
                <div className='Restaurants-logo' style={{ backgroundImage: `url(${logo1})`}}></div>
                <p className='Restaurants-p'>Pre-Hispanic flavors mix with modern creative flair to make your taste buds dance.</p>
              </div>

            </SwiperSlide>
            <SwiperSlide >
              <div className='Restaurants-slide'>
                <div className='Restaurants-logo' style={{ backgroundImage: `url(${logo2})`}}></div>
                <p className='Restaurants-p'>offers traditional grilling recipies with delicious dry -aged meats as well of vegetarian and vegan options.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='Restaurants-slide'>
                <div className='Restaurants-logo' style={{ backgroundImage: `url(${logo3})`}}></div>
                <p className='Restaurants-p'>offers traditional grilling recipies with delicious dry -aged meats as well of vegetarian and vegan options.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='Restaurants-slide'>
                <div className='Restaurants-logo' style={{ backgroundImage: `url(${logo4})`}}></div>
                <p className='Restaurants-p'>Each dish reflects the culinary excitement of discovery, blending traditional components.</p>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </section>
  )
}

export default Restaurants