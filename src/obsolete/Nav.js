/* eslint-disable import/no-unresolved */
import React from 'react';
import { isEmptyObj } from '@/utils';
import dataStore from '@models/DataStoreNav';
import Menu from './Menu';
import Profile from './Profile';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleChevronClick = this.handleChevronClick.bind(this);
  }

  render() {
    const { data } = this.state;

    if (!data || isEmptyObj(data)) {
      return null;
    }

    return (
      <nav className="col-md-3 col-xl-2 Nav">
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
      </nav>
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
    const { classList } = document.querySelector('Nav');

    const action = classList
      .contains('Nav_active') ? 'remove' : 'add';

    classList[action]('Nav_active');
  }
}

export default Nav;