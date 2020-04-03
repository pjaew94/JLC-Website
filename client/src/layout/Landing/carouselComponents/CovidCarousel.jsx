import React from 'react';
import { Link } from 'react-router-dom';


import covidSvg from '../../../svgs/corona_svg.svg'
import '../../../styles/CarouselComponents.scss';

const CovidCarousel = () => {
  return (
    <div className='covid_container'>
      <div className="covid_news_container">
        <div className="covid_title_container">
          <div className="covid_title_kor">코로나 바이러스</div>
          <div className="covid_title_eng">COVID 19</div>
        </div>
        <div className="covid_text_kor"> 이 바이러스는 항생제가 듣지 않는 바이러스로 현재 백신이 없습니다. 특정 치료법이 없기 때문에, 의료진들은 일반적인 방식으로 이 증상들에 대처하고 있으며, 환자를 좀 더 편안하게 하는 데 주력하고 있습니다.</div>
        <div className="covid_text_eng">Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.</div>
      </div>
      <div className="covid_spacer"></div>
      <div className="covid_svg_container">
        <img src={covidSvg} alt='covid'></img>
      </div>
    </div> 
  )
}
export default CovidCarousel