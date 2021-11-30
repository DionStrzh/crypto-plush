import React from 'react';
import './Footer.scss';
import { FooterLinks } from './FooterLinks';
import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/images/logo_nobg-min.PNG';

export const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <footer className='footer'>
      <FooterLinks />
      {isMobile ? (
        <div className='footer__logo-wrapper'>
          <img
            src={logo}
            className='logo footer__logo'
            alt='Crypto Plush logo'
          />
        </div>
      ) : null}
      <p className='footer__copy'>Copyright © 2021, All rights reserved.</p>
    </footer>
  );
};
