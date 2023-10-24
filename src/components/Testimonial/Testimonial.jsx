import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "../Testimonial/Testimonial.css"


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Testimonial() {
  SwiperCore.use([Autoplay])
  return (
    <>
    
      <Swiper
autoplay={{ delay: 5000 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <h3>Aarav Patel <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"I've stumbled upon gaming paradise at Gamer's Burnout! Their top-notch gaming equipment, vast selection of games, and reasonable prices have completely blown me away. The team is not only friendly but also incredibly well-versed in gaming, elevating my experience to new heights."</p>
              <div className="gb-details">
                <h3>Sneha Sharma <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"Gamer's Burnout is an absolute gem! The caliber of their gaming equipment, along with the diverse collection of games available, has exceeded all my hopes. The approachable staff's expertise and warmth have added an extra layer of delight to my gaming sessions."</p>
              <div className="gb-details">
                <h3>Rahul Kapoor <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"At Gamer's Burnout, I've unearthed a true gaming haven! The quality of their gaming gear, coupled with their extensive library of games, is truly extraordinary. What's more, the approachable staff's expertise has made my time there an unforgettable pleasure."</p>
              <div className="gb-details">
                <h3>Nisha Reddy <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"Gamer's Burnout is a gaming enthusiast's dream come true! The exceptional gaming hardware, the comprehensive assortment of games, and the pocket-friendly rates have left me astounded. The staff's knowledge and friendliness have made my gaming escapades even more fantastic."</p>
              <div className="gb-details">
                <h3>Aisha Khan <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"Gamer's Burnout has redefined my gaming experience! The cutting-edge gaming equipment, the immense variety of games, and the affordable rates have all been a revelation. The staff's warmth and proficiency have amplified my enjoyment beyond measure."</p>
              <div className="gb-details">
                <h3>Meera Choudhury <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"Discovering Gamer's Burnout has been an absolute game-changer for me! The premium gaming equipment, the expansive game library, and the budget-friendly pricing have surpassed my wildest expectations. The staff's expertise and welcoming attitude have turned every visit into an exceptional adventure."</p>
              <div className="gb-details">
                <h3>Vikram Singhania <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"Gamer's Burnout has truly rekindled my passion for gaming! The top-notch gaming equipment, expansive game selection, and affordable pricing have exceeded my expectations. The friendly and knowledgeable staff have made every visit an absolute joy. My gaming experience has been elevated to new heights, all thanks to Gamer's Burnout!"</p>
              <div className="gb-details">
                <h3>Priya Verma <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
           <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"I've found my gaming sanctuary at Gamer's Burnout! The top-tier gaming setup, the extensive game collection, and the affordable rates have left me utterly impressed. The staff's friendliness and expertise have taken my gaming encounters to a whole new level."</p>
              <div className="gb-details">
                <h3>Arjun Desai <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"Gamer's Burnout is where gaming dreams come true! The state-of-the-art gaming equipment, the diverse range of games, and the wallet-friendly costs have left me speechless. The staff's knowledge and approachability have transformed each visit into an unforgettable gaming odyssey."</p>
              <div className="gb-details">
                <h3>Rohan Mehta <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"At Gamer's Burnout, I've encountered a gaming paradise like no other! The premium gaming hardware, the vast array of games, and the economical prices have exceeded my expectations. The staff's friendly demeanor and gaming know-how have turned every visit into an incredible experience."</p>
              <div className="gb-details">
                <h3>Ananya Rao <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="https://ik.imagekit.io/mtmwll7w3/images/quote.png?updatedAt=1698121420325" alt="" /></div>
            <div className="gb-content">
              <p>"Gamer's Burnout is more than just a gaming destination—it's a gaming revelation! The top-grade gaming gear, the extensive game library, and the reasonable rates have left me utterly astounded. The staff's warm hospitality and gaming expertise have elevated every visit to pure delight."</p>
              <div className="gb-details">
                <h3>Siddharth Joshi <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}

export default Testimonial;
