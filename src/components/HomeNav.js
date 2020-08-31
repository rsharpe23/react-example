/* eslint-disable import/no-unresolved */
import React from 'react';
import ProfileContainer from '@containers/ProfileContainer';
import MenuContainer from '@containers/MenuContainer';
import Nav from './Nav';

function HomeNav({ isActive, onChevronToggle }) {
  const getClass = () => {
    let className = 'col-md-3 col-xl-2 Nav Home-Nav';

    if (isActive) {
      className += ' Home-Nav_active';
    }

    return className;
  };

  const getDate = () => {
    return new Date().getFullYear();
  };

  const handleChevronClick = () => {
    onChevronToggle && onChevronToggle(!isActive);
  };

  return (
    <Nav className={getClass()}>
      <div className="Nav-Area">
        <ProfileContainer />

        <MenuContainer
          name="homeNav"
          className="Menu Nav-Menu"
        />

        <footer className="Nav-Footer">
          <p>© <a href="/" className="Nav-Link">Roman Sharpe</a> {getDate()}</p>
        </footer>
      </div>

      <div className="d-block d-md-none">
        <div className="Nav-Chevron" onClick={handleChevronClick}>
          <i className="icon-chevrons-right"></i>
          <i className="icon-chevrons-left"></i>
        </div>
      </div>
    </Nav>
  );
}

export default HomeNav;