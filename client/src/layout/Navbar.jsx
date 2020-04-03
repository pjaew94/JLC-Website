import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../styles/Navbar.scss'
import logoSvg from '../svgs/heart_svg.svg'

const Navbar = () => {
  return(
    <div className='nav_container'>
      <nav className='nav_inner_container'>
        <Link className='nav_logo_container'>
          <img src={logoSvg} alt='Cross Heart Icon'></img>
        예수사랑교회
        </Link>

        <ul>
          <li>
            <Link className='li_1 li' to=''>
            <h3>우리교회</h3>
            <span>Our Church</span></Link>
          </li>
          <li>
            <Link className='li_2 li' to=''>
            <h3>교회소식</h3>
            <span>Church News</span></Link>
          </li>
          <li>
            <Link className='li_3 li' to=''>
            <h3>설교</h3>
            <span>Sermons</span>
          </Link>
          </li>
          <li>
            <Link className='li_4 li' to=''>
            <h3>장년부</h3>
            <span>Adult Group</span>
            </Link>
          </li>
          <li>
            <Link className='li_5 li' to=''>
            <h3>청년부</h3>
            <span>Young Adults</span>
            </Link>
          </li>
          <li>
            <Link className='li_6 li' to=''>
            <h3>중고등부</h3>
            <span>Youth Group</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar