import React from 'react';
import Slider from "react-slick";
import { dataHeaderSlide } from '../../constant';
import './style.css'
const HomeSlide = () => {
  const data = dataHeaderSlide
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };

  return (
    <>
      <div className="container-fluild slide__container">
        <Slider {...settings}>
          {data?.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt='img' className='slide__img'></img>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default HomeSlide