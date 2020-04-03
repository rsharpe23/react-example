/* eslint-disable import/no-unresolved */
import React from 'react';
import HomeNavContainer from '@containers/HomeNavContainer';
import PortfolioContainer from '@containers/PortfolioContainer';
import ContactsContainer from '@containers/ContactsContainer';
import './Home.css';

function Home({ homeNavMenuIndex }) {
  const renderScreen = () => {
    switch (homeNavMenuIndex) {
      case 0:
        return <PortfolioContainer />;

      case 1:
        return <ContactsContainer />;

      default:
        return null;
    }
  };

  return (
    <div className="container-fluid Home">
      <div className="row">
        <HomeNavContainer />

        <main className="col-md-9 ml-sm-auto">
          <div className="pl-lg-5 pl-xl-0 pr-lg-5">
            {renderScreen()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;