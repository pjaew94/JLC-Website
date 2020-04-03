import React, { Fragment } from 'react';
import '../../../styles/Carousel.scss';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import FlowerCarousel from './FlowerCarousel';

import churchImg from '../../../imgs/church_img-min.png';
import bibleImg from '../../../imgs/bible_img-min.png';

const LandingCarousel = () => {
  return (
    <div className='carousel_container'>
      <Carousel
        className='carousel'
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        stopOnHover={true}
        autoPlay={true}
        interval={6000}
        transitionTime={600}
      >
        <FlowerCarousel />

        <img src={churchImg} alt='bible'></img>

        <img src={bibleImg} alt='flower'></img>
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
