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

    this.state = { data: null };
  }

  render() {
    const { data } = this.state;

    if (!data || isEmptyObj(data)) {
      return null;
    }

    return (
      <Nav className="col-md-3 col-xl-2 Nav Home-Nav">
        <div className="Nav-Area">
          <Profile value={data.profile} />

          <Menu
            className="Menu Nav-Menu"
            value={data.menu}
            activeIndex="0"
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

  componentDidMount() {
    dataStore.request()
      .then(data => this.setState({ data }));
  }

  handleMenuSelect(index) {
    const { onMenuSelect } = this.props;
    onMenuSelect && onMenuSelect(index);
  }

  // eslint-disable-next-line class-methods-use-this
  handleChevronClick() {
    const { classList } = document.querySelector('Home-Nav');

    const action = classList
      .contains('Nav_active') ? 'remove' : 'add';

    classList[action]('Nav_active');
  }
}

export default HomeNav;