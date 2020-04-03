import React from 'react';

import flowerImg from '../../../imgs/flower_img-min.png';

import '../../../styles/CarouselComponents.scss';

const FlowerCarousel = () => {
  return (
    <div className='flower_container'>
      <img src={flowerImg} alt='Flower'></img>
      <div className='flower_text_container'>
        <div className='left_container'>
          <div className='header text'>#설립이념!</div>
          <div className='line_1 text'>하나님의 형상을!</div>
          <div className='line_2 text'>하나님의 나라를!</div>
          <div className='line_3 text'>하나님께 영광을!</div>
        </div>
        <div className='right_container'>
          <div className='header text'>#실천사항!</div>
          <div className='line_1 text'>예수사랑 받고!</div>
          <div className='line_2 text'>예수사랑 전하고!</div>
          <div className='line_3 text'>예수사랑 드리자!</div>
        </div>
      </div>
    </div>
  );
};

export default FlowerCarousel;
