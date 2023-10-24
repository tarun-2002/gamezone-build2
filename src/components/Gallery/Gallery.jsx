
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Gallery/Gallery.css';
import { Pagination } from 'swiper';

function Gallery() {
  SwiperCore.use([Autoplay]);

  return (
    <div className='gall'>
      <Swiper
        autoplay={{ delay: 3000 }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
        slidesPerView={1}
      >
        <SwiperSlide>          
          <div className="galleryBox">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/PhotosGB/1.png?updatedAt=1698121416395" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="galleryBox">
        <img src="https://ik.imagekit.io/mtmwll7w3/images/PhotosGB/2.png?updatedAt=1698121416395" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="galleryBox">
        <img src="https://ik.imagekit.io/mtmwll7w3/images/PhotosGB/3.png?updatedAt=1698121416395" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="galleryBox">
        <img src="https://ik.imagekit.io/mtmwll7w3/images/PhotosGB/4.png?updatedAt=1698121416395" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="galleryBox">
        <img src="https://ik.imagekit.io/mtmwll7w3/images/PhotosGB/5.png?updatedAt=1698121416395" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="galleryBox">
        <img src="https://ik.imagekit.io/mtmwll7w3/images/PhotosGB/6.png?updatedAt=1698121416395" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <button type="submit" className="form-submit book_form_submit but">
        See More...
      </button>
    </div>

  );
}
export default Gallery;