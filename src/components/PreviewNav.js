/* eslint-disable import/no-unresolved */
import React from 'react';
import { sprintf } from 'sprintf-js';
import { isEmptyObj, createMarkup } from '@/utils';
import dataStore from '@models/DataStorePreviewNav';
import Nav from './Nav';
import Menu from './Menu';

class PreviewNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleControlClick = this.handleControlClick.bind(this);

    this.state = { data: null };
  }

  render() {
    const { data } = this.state;

    if (!data || isEmptyObj(data)) {
      return null;
    }

    const { workInfo } = this.props;

    return (
      <Nav className="Nav Preview-Nav">
        <div className="container-fluid Nav-Inner">
          <a
            href={data.controls[0].href}
            className="Nav-Link"
            onClick={e => this.handleControlClick({ originalEvent: e, homeNavMenuIndex: 0 })}
            dangerouslySetInnerHTML={createMarkup(data.controls[0].text)} />

          <Menu
            className="d-none d-md-flex Menu Nav-Menu"
            value={data.menu}
            activeIndex="0"
            onSelect={this.handleMenuSelect} />

          <div>
            <span
              className="mr-2 d-none d-md-inline"
            >{sprintf(data.label, workInfo.daysAmount)}</span>

            <a
              href={data.controls[1].href}
              className="btn btn-success"
              onClick={e => this.handleControlClick({ originalEvent: e, homeNavMenuIndex: 1 })}
              dangerouslySetInnerHTML={createMarkup(
                sprintf(data.controls[1].text, workInfo.price)
              )} />
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

  handleControlClick(e) {
    e.originalEvent.preventDefault();
    const { onControlClick } = this.props;
    onControlClick && onControlClick(e.homeNavMenuIndex);
  }
}

export default PreviewNav;