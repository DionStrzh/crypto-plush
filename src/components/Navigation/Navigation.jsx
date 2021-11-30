import React from 'react';
import './Navigation.scss';
import { useMediaQuery } from 'react-responsive';

const menuItems = ['Who are they?', 'RoadMap', 'Team'];

export const Navigation = () => {
  const isLaptop = useMediaQuery({ query: '(min-width: 900px)' });

  return (
    <>
      {isLaptop ? (
        <nav className='navigation'>
          <ul className='navigation__list'>
            {menuItems.map((menuItem) => (
              <li key={menuItem} className='navigation__list-item'>
                <a href='/' className='navigation__list-link'>
                  {menuItem}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <button className='navigation__burger'>
          <span className='navigation__burger-center'></span>
        </button>
      )}
    </>
  );
};
