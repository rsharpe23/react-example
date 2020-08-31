/* eslint-disable import/no-unresolved */

import React from 'react';
import { isEmptyObj } from '@/utils';
import MenuContainer from '@containers/MenuContainer';
import WorkContainer from '@containers/WorkContainer';
import './Portfolio.css';

function Portfolio({ data, works, onLinkClick }) {
  if (!data || isEmptyObj(data)) {
    return null;
  }

  const renderWorks = () => {
    if (!works || isEmptyObj(works)) {
      return <h2>В процессе :)</h2>;
    }

    return (
      <div className="Portfolio-Area">
        <div className="row">
          {works.map(w => (
            <div className="col-lg-6" key={w.id}>
              <WorkContainer className="Work Portfolio-Work" data={w} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleLinkClick = e => {
    e.preventDefault();
    onLinkClick && onLinkClick();
  };

  return (
    <div className="Screen Portfolio">
      <h1 className="Screen-Title">{data.title}</h1>

      <MenuContainer
        name="portfolio"
        className="Menu Portfolio-Menu"
      />

      {renderWorks()}

      <div className="Screen-LinkWrap">
        <a href="#" onClick={handleLinkClick} className="Screen-Link">Заказать работу ⟶</a>
      </div>
    </div>
  );
}

export default Portfolio;