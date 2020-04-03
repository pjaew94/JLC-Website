import React, { Fragment } from 'react';
import '../../styles/Landing.scss';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import LandingCarousel from './carouselComponents/Carousel'
import SecondSection from './SecondSection'





const Landing = () => {
  return (
    <Fragment>
      <LandingCarousel />
      <SecondSection />
    </Fragment>
  );
};

export default Landing;
