import React from 'react';
import '../../styles/Footer.scss';

const Footer = props => {
  return (
    <div className='footer_container'>
      <div className='footer_inner_container'>
        <div className='footer_info_container'>
          <a className='footer_text' href='mailto: JLCPastorKim@gmail.com'>JLCPastorKim@gmail.com</a>
          <a className='footer_text' href='tel:7187996181'>(718) 799-6181</a>
          <div className="copyright footer_text">Copyright &copy; 2020 예수사랑교회. All rights reversed.</div>
          <div className="footer_text">Developed by Jae Park</div>
        </div>
        <iframe
          title='jlc church'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.5909316662924!2d-75.28994598429757!3d40.240396674268304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a3c945bde69f%3A0x24006248ae1b1de7!2s145%20Green%20St%2C%20Lansdale%2C%20PA%2019446!5e0!3m2!1sen!2sus!4v1585939604237!5m2!1sen!2sus'
          width='45%'
          height='90%'
          frameborder='0'
          style={{ border: 0 }}
          allowfullscreen=''
          aria-hidden='false'
          tabindex='0'
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
