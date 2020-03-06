import React from 'react';
import HomeNav from './HomeNav';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavMenuSelect = this.handleNavMenuSelect.bind(this);
    this.handleScreenLinkClick = this.handleScreenLinkClick.bind(this);
    this.handlePortfolioWorkClick = this.handlePortfolioWorkClick.bind(this);

    this.state = { 
      navMenuIndex: this.props.navMenuIndex,
    };
  }

  render() {
    return (
      <div className="container-fluid Home">
        <div className="row">
          <HomeNav 
            menuIndex={this.state.navMenuIndex} 
            onMenuSelect={this.handleNavMenuSelect} />

          <main className="col-md-9 ml-sm-auto">
            <div className="pl-lg-5 pl-xl-0 pr-lg-5">
              {this.renderScreen()}
            </div>
          </main>
        </div>
      </div>
    );
  }

  renderScreen() {
    switch (this.state.navMenuIndex) {
      case 0:
        return (
          <Portfolio
            onLinkClick={this.handleScreenLinkClick}
            onWorkClick={this.handlePortfolioWorkClick} />
        );

      case 1:
        return (
          <Contacts
            onLinkClick={this.handleScreenLinkClick} />
        );
    }

    return null;
  }

  handleNavMenuSelect(index) {
    this.setState({ navMenuIndex: index });
  }

  handleScreenLinkClick(navMenuIndex) {
    this.setState({ navMenuIndex });
  }

  handlePortfolioWorkClick(work) {
    const { onPortfolioWorkClick } = this.props;
    onPortfolioWorkClick && onPortfolioWorkClick(work);
  }
}

export default Home;