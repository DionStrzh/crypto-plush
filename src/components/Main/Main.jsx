import React from 'react';
import './Main.scss';
import { Card } from '../Card/Card';


export const Main = () => {
  return (
    <main class='main'>
      <section className='prices main__prices'>
        <div className='prices__info'>
          <h2 className='prices__title'>Price</h2>
          <ul className='prices__list'>
            <li className='prices__list-item'>
              <span className='prices__crypto'>0.05 ETH</span> - 1st Pre-sale.
            </li>
            <li className='prices__list-item'>
              <span className='prices__crypto'>0.06 ETH</span> - 2nd Pre-sale.
            </li>
            <li className='prices__list-item'>
              <span className='prices__crypto'>0.07 ETH</span> - Public Sale
            </li>
          </ul>
        </div>
        <p className='prices__description'>
          *Max 20 NFTs per wallet & transaction
        </p>
      </section>
      <Card />
    </main>
  );
};
