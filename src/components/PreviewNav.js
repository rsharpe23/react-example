/* eslint-disable import/no-unresolved */
import React from 'react';
import MenuContainer from '@containers/MenuContainer';
import Nav from './Nav';

function PreviewNav({ daysPerDev, price, onLinkClick }) {
  const handleLinkClick = (e, index) => {
    e.preventDefault();
    onLinkClick && onLinkClick(index);
  };

  return (
    <Nav className="Nav Preview-Nav">
      <div className="container-fluid Nav-Inner">
        <a
          href="#"
          className="Nav-Link"
          onClick={e => handleLinkClick(e, 0)}
        >⟵ Другие работы</a>

        <MenuContainer
          name="previewNav"
          className="d-none d-md-flex Menu Nav-Menu"
        />

        <div>
          <span className="mr-2 d-none d-md-inline">Разработка от {daysPerDev}x дней</span>

          <a
            href="#"
            className="btn btn-success"
            onClick={e => handleLinkClick(e, 1)}
          ><i className="icon-embed2 Icon"></i> Заказать $<strong>{price}</strong></a>
        </div>
      </div>
    </Nav>
  );
}

export default PreviewNav;