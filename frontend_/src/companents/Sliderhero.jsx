import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Sliderhero = () => {
  return (
    <div>
      <style>
        {`
       .hero{
        position: relative;
        top: 0%;
    } 
        
        h1{
    display:inline-block;
  }
  .swiper-container  p{
    color:white !important;
  }
.swiper-container{
  letter-spacing:1px;
  font-weight:500;
  text-align:center;
  line-height:40px;
  color:white;
  z-index:999;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
}
  .swiper-first{
    
    background-image: url("https://preview.colorlib.com/theme/hexa/images/slider-2.jpg.webp");
    background-size: cover;
    height: 90vh !important;
    background-position: center;
    filter:brightness(95%)
}
.swiper-second{
    background-image: url("https://preview.colorlib.com/theme/hexa/images/slider-1.jpg.webp");
    background-size: cover;
    height: 90vh !important;
    background-position: center;
    filter:brightness(95%)
}
  button{
    border:1px solid transparent;
    padding:5px 15px;
    background-color: transparent;
   color:white;
   transition:0.3s ease-in-out
   border-radius:10px;
  }

  button:first-child{
    border:2px solid white;
    transition:0.3s ease-in-out
    border-radius:10px;
  }
  button:first-child:hover{
    background-color:white;
    color:black;
  }

  
  `}
      </style>
  <section className="hero">
  <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="swiper-first">
          <div className="swiper-container">
            <h1>Modern Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, mollitia?</p>
            <div className="button-swiper">
            <button>GET STARTED</button>
            <button>DOWNLOAD</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-second">
          <div className="swiper-container">
            <h1>Creative Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, mollitia?</p>
            <div className="button-swiper">
            <button>GET STARTED</button>
            <button>DOWNLOAD</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  </section>
    </div>
  );
};

export default Sliderhero;
