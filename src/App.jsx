import Frame from "./components/Frame";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import Header from "./layout/Header";

SwiperCore.use([Autoplay]);

function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Swiper
            spaceBetween={20}
            breakpoints={{
              1200: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            loop={true}
          >
            <SwiperSlide>
              <Frame img="./assets/img/fart-1.jpeg" />
            </SwiperSlide>
            <SwiperSlide>
              <Frame img="./assets/img/fart-2.jpeg" />
            </SwiperSlide>
            <SwiperSlide>
              <Frame img="./assets/img/nft.jpeg" />
            </SwiperSlide>
            <SwiperSlide>
              <Frame img="./assets/img/fart-3.jpeg" />
            </SwiperSlide>
            <SwiperSlide>
              <Frame img="./assets/img/fart-4.jpeg" />
            </SwiperSlide>
            ...
          </Swiper>

          <div className="qr-container">
            <img className="qr" src="./assets/img/qr.jpeg" alt="" />
          </div>

          <div className="fancy-text-container">
            <div className="text-box">
              <h1>SCAN TO FART</h1>
              <h1>SCAN TO FART</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
