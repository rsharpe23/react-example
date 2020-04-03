/* eslint-disable import/no-unresolved */
import React from 'react';
import { isEmptyObj } from '@/utils';
import dataStore from '@models/DataStoreHomeNav';
import Nav from './Nav';
import Profile from './Profile';
import Menu from './Menu';

class HomeNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleChevronClick = this.handleChevronClick.bind(this);

    this.state = { 
      data: null, 
      isActive: false,
    };
  }

  render() {
    const { data } = this.state;

    if (!data || isEmptyObj(data)) {
      return null;
    }

    return (
      <Nav className={this.getClassName()}>
        <div className="Nav-Area">
          <Profile value={data.profile} />

          <Menu
            className="Menu Nav-Menu"
            value={data.menu}
            activeIndex={this.props.menuIndex}
            onSelect={this.handleMenuSelect} />

          <footer className="Nav-Footer">
            <p>© <a href="/" className="Nav-Link">Roman Sharpe</a> {new Date().getFullYear()}</p>
          </footer>
        </div>

        <div className="d-block d-md-none">
          <div className="Nav-Chevron" onClick={this.handleChevronClick}>
            <i className="icon-chevrons-right"></i>
            <i className="icon-chevrons-left"></i>
          </div>
        </div>
      </Nav>
    );
  }

  getClassName() {
    let className = 'col-md-3 col-xl-2 Nav Home-Nav';

    if (this.state.isActive) {
      className += ' Home-Nav_active';
    }

    return className;
  }

  componentDidMount() {
    dataStore.request()
      .then(data => this.setState({ data }));
  }

  handleMenuSelect(index) {
    const { onMenuSelect } = this.props;
    onMenuSelect && onMenuSelect(index);
    this.resetActiveState();
  }

  resetActiveState() {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    }
  }

  handleChevronClick() {
    this.setState({ 
      isActive: !this.state.isActive,
    });
  }
}

export default HomeNav;