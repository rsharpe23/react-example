/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup, isEmptyObj } from '@/utils';
import './Menu.css';

function Menu({ 
  className = 'Menu', data, activeIndex = -1, onChange,
}) {
  if (!data || isEmptyObj(data)) {
    return null;
  }

  const getLinkClass = index => {
    let linkClass = 'Menu-Link';

    if (index === activeIndex) {
      linkClass += ' Menu-Link_active';
    }
  
    return linkClass;
  };

  const handleLinkClick = (e, index) => {
    if (~activeIndex) {
      e.preventDefault();
      onChange && onChange(index);
    }
  };

  return (
    <ul className={className}>
      {data.map((link, index) => (
        <li key={link.id} className="Menu-Item">
          <a
            className={getLinkClass(index)}
            href={link.href}
            target={link.target}
            onClick={e => handleLinkClick(e, index)}
            dangerouslySetInnerHTML={createMarkup(link.text)}
          />
        </li>
      ))}
    </ul>
  );
}

export default Menu;