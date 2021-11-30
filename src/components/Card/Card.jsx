import React from 'react';
import { TokenCounter } from '../TokenCounter/TokenCounter';
import './Card.scss';
import avatar from '../../assets/images/card-avatar-min.gif';

export const Card = () => {
  return (
    <section className='card'>
      <img src={avatar} className='card__avatar' alt='avatar' />
      <button className='card__connect-button'>Connect Wallet</button>
      <p className='card__token'>Token count</p>
      <TokenCounter />
    </section>
  );
};
