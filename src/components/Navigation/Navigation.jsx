import React from 'react';
import './Navigation.scss';

const menuItems = ['Who are they?', 'RoadMap', 'Team'];

export const Navigation = () => {
  return (
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
  );
};
