import React, { Component } from "react";
import Slider from "react-slick";
import './style.css'
export default class IsamiGiken extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className='container'>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1} className='img__container'>
            <img src='https://isamigiken.gattscom.com/image/top/ss_slider_img1.png' alt='img'></img>
          </div>
          <div key={2} className='img__container'>
            <img src='https://isamigiken.gattscom.com/image/top/ss_slider_img2.png' alt='img'></img>
          </div>
          <div key={3} className='img__container'>
            <img src='https://isamigiken.gattscom.com/image/top/ss_slider_img3.jpg' alt='img'></img>
          </div>
          <div key={4} className='img__container'>
            <img src='https://isamigiken.gattscom.com/image/top/ss_slider_img4.jpg' alt='img'></img>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}