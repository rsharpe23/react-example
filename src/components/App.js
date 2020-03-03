import React from 'react';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import ViewWork from './ViewWork';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navMenuIndex: -1 };
    this.handleNavMenuSelect = this.handleNavMenuSelect.bind(this);
    this.handleScreenLinkClick = this.handleScreenLinkClick.bind(this);
  }

  render() {
    return (
      // <div className="container-fluid">
      //   <div className="row">
      //     <Nav onMenuSelect={this.handleNavMenuSelect} />

      //     <main className="col-md-9 ml-sm-auto">
      //       <div className="pl-lg-5 pl-xl-0 pr-lg-5">
      //         {this.renderNavPage()}
      //       </div>
      //     </main>
      //   </div>
      // </div>

      <ViewWork />
    );
  }

  // TODO: Добавить кейс CV
  renderNavPage() {
    switch (this.state.navMenuIndex) {
      case 0:
        return <Portfolio onLinkClick={this.handleScreenLinkClick} />;

      case 1:
        return <Contacts onLinkClick={this.handleScreenLinkClick} />;

      default:
        return null;
    }
  }

  handleNavMenuSelect(index) {
    this.setState({ navMenuIndex: index });
  }

  // eslint-disable-next-line class-methods-use-this
  handleScreenLinkClick(navMenuItemIndex) {
    document.querySelector(`.Nav-Menu > .Menu-Item:nth-child(${navMenuItemIndex}) > a`)
      .click();
  }
}

export default App;