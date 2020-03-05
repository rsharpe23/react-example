import React from 'react';
import HomeNav from './HomeNav';
import Portfolio from './Portfolio';
import Contacts from './Contacts';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavMenuSelect = this.handleNavMenuSelect.bind(this);
    this.handleScreenLinkClick = this.handleScreenLinkClick.bind(this);
    this.handlePortfolioWorkClick = this.handlePortfolioWorkClick.bind(this);

    this.state = { screenNum: 0 };
  }

  render() {
    return (
      <div className="container-fluid Home">
        <div className="row">
          <HomeNav onMenuSelect={this.handleNavMenuSelect} />

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
    switch (this.state.screenNum) {
      case 1:
        return (
          <Portfolio
            onLinkClick={this.handleScreenLinkClick}
            onWorkClick={this.handlePortfolioWorkClick} />
        );

      case 2:
        return (
          <Contacts
            onLinkClick={this.handleScreenLinkClick} />
        );
    }

    return null;
  }

  handleNavMenuSelect(index) {
    this.setState({ screenNum: index + 1 });
  }

  // eslint-disable-next-line class-methods-use-this
  handleScreenLinkClick(navMenuItemIndex) {
    document.querySelector(`.Nav-Menu > .Menu-Item:nth-child(${navMenuItemIndex}) > a`)
      .click();
  }

  handlePortfolioWorkClick(work) {
    const { onPortfolioWorkClick } = this.props;
    onPortfolioWorkClick && onPortfolioWorkClick(work);
  }
}

export default Home;