import React from 'react';
import telegramIcon from '../../assets/images/icon__telegram.svg';
import redditIcon from '../../assets/images/icon__reddit.svg';
import discordIcon from '../../assets/images/icon__discord.svg';
import twitterIcon from '../../assets/images/icon__twitter.svg';

export const FooterLinks = () => {
  return (
    <ul className='footer__links'>
      <li className='footer__links-item'>
        <a href='/'>
          <img
            src={telegramIcon}
            className='footer__links-icon'
            alt='telegram icon'
          />
        </a>
      </li>
      <li className='footer__links-item'>
        <a href='/'>
          <img
            src={redditIcon}
            className='footer__links-icon'
            alt='reddit icon'
          />
        </a>
      </li>
      <li className='footer__links-item'>
        <a href='/'>
          <img
            src={discordIcon}
            className='footer__links-icon'
            alt='discord icon'
          />
        </a>
      </li>
      <li className='footer__links-item'>
        <a href='/'>
          <img
            src={twitterIcon}
            className='footer__links-icon'
            alt='twitter icon'
          />
        </a>
      </li>
    </ul>
  );
};
