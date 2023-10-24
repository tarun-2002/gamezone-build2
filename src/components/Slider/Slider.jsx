import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import '../Slider/Slider.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  SwiperCore.use([Autoplay])
  return (
    
    <>
      <Swiper
autoplay={{ delay: 1000 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.87}
        loop={true}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 150,
          modifier: 2,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game1.jpg?updatedAt=1698121413718" alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game2.png?updatedAt=1698121413718" alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game3.jpg?updatedAt=1698121413718" alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game4.jpeg?updatedAt=1698121413718" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game5.jpg?updatedAt=1698121413718" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game6.jpg?updatedAt=1698121413718" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game7.jpg?updatedAt=1698121413718" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game8.jpg?updatedAt=1698121413718" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game9.png?updatedAt=1698121413718" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/game10.jpg?updatedAt=1698121413718" alt="" />
          </div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}
