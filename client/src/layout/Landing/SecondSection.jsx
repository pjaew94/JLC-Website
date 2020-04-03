import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../../styles/SecondSection.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import HaitiCarousel from './carouselComponents/HaitiCarousel';
import CovidCarousel from './carouselComponents/CovidCarousel';

import { IconContext } from 'react-icons';
import { FaRegHeart, FaBible, FaRegNewspaper } from 'react-icons/fa';
import  { GiMusicalNotes,GiBlackBook, GiWhiteBook  } from 'react-icons/gi'

const SecondSection = () => {
  return (
    <div className='second_section_container'>
      <div className='second_section_inner_container'>
        <div className='second_section_left_container'>
          <Carousel
            className='second_section_carousel'
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            stopOnHover={true}
            autoPlay={true}
            interval={6000}
            transitionTime={600}
          >
            <HaitiCarousel />
            <CovidCarousel />
          </Carousel>
        </div>
        <div className='second_section_right_container'>
          <div className='level_container'>
            <Link className='button1 button' to='/'>
              <div className='button_text'>수요일 설교</div>
              <IconContext.Provider value={{ className: 'icon' }}>
                <GiBlackBook />
              </IconContext.Provider>
            </Link>
            <Link className='button2 button' to='/'>
              <div className='button_text'>일요일 설교</div>
              <IconContext.Provider value={{ className: 'icon' }}>
                <GiWhiteBook />
              </IconContext.Provider>
            </Link>
          </div>
          <div className='level_container'>
            <Link className='button3 button' to='/'>
              <div className='button_text'>큐티</div>
              <IconContext.Provider value={{ className: 'icon' }}>
                <FaBible />
              </IconContext.Provider>
            </Link>
            <Link className='button4 button' to='/'>
              <div className='button_text'>찬양</div>
              <IconContext.Provider value={{ className: 'icon' }}>
                <GiMusicalNotes />
              </IconContext.Provider>
            </Link>
          </div>
          <div className='level_container'>
            <Link className='button5 button' to='/'>
              <div className='button_text'>뉴스</div>
              <IconContext.Provider value={{ className: 'icon' }}>
                <FaRegNewspaper />
              </IconContext.Provider>
            </Link>
            <Link className='button6 button' to='/'>
              <div className='button_text'>선교</div>
              <IconContext.Provider value={{ className: 'icon' }}>
                <FaRegHeart />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
