import React from 'react';
import { Link } from 'react-router-dom';

import haitiImg from '../../../imgs/hands_img-min.png';
import '../../../styles/CarouselComponents.scss';


const HaitiCarousel = () => {
  return (
    <div className='haiti_container'>
      <div className='img_container'>
        <img src={haitiImg} alt='haiti'></img>
      </div>
      <div className="haiti_spacer"></div>
      <div className='haiti_news_container'>
        <div className='haiti_news'>
          <div className='haiti_news_title'>
            <div className='haiti_news_title_kor'>아이티 선교</div>
            <div className='haiti_news_title_eng'>Haiti Mission</div>
          </div>
          <div className='haiti_news_text_kor'>
            하나님께서 예수사랑교회가 7월1일부터 10일까지 하이티 선교를 갈수있는
            기회를 주셨습니다!
          </div>
          <div className='haiti_news_text_eng'>
            God has granted our missions team at Jesus Love Church the
            opportunity to return to Haiti from July 1st to the 10th!{' '}
          </div>
        </div>

        <div className='haiti_button_container'>
          <a
            className='donate_button'
            href='https://www.gofundme.com/f/jesus-love-church-haiti-mission-trip-2020?sharetype=teams&member=3745142&utm_medium=social&utm_source=kakaotalk&utm_campaign=p_na+share-sheet'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='donate_kor'>기부하기</div>
            <div className='donate_eng'>Donate</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HaitiCarousel;
