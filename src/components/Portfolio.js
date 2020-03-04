/* eslint-disable import/no-unresolved */
import React from 'react';
import { isEmptyObj } from '@/utils';
import dataStore from '@models/DataStorePortfolio';
import Menu from './Menu';
import Work from './Work';
import './Portfolio.css';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleWorkClick = this.handleWorkClick.bind(this);

    this.state = { 
      data: null, 
      selectedWorks: [],
    };
  }

  render() {
    const { data } = this.state;

    if (!data || isEmptyObj(data)) {
      return null;
    }

    return (
      <div className="Screen Portfolio">
        <h1 className="Screen-Title">{data.title}</h1>

        <Menu
          className="Menu Portfolio-Menu"
          value={data.menu}
          activeIndex="0"
          onSelect={this.handleMenuSelect} />

        <div className="Portfolio-Area">
          <div className="row">
            {this.state.selectedWorks.map(work => (
              <div className="col-lg-6" key={work.id}>
                <Work 
                  className="Work Portfolio-Work" 
                  value={work} 
                  onClick={this.handleWorkClick} />
              </div>
            ))}
          </div>
        </div>

        <div className="Screen-LinkWrap">
          <a 
            href={data.link.href}
            onClick={this.handleLinkClick}
            className="Screen-Link">{data.link.text}</a>
        </div>
      </div>
    );
  }

  componentDidMount() {
    dataStore.request()
      .then(data => this.setState({ data }));
  }

  handleLinkClick(e) {
    e.preventDefault();
    const { onLinkClick } = this.props;
    onLinkClick && onLinkClick(2);
  }

  handleMenuSelect(index) {
    const workTypes = [7, 1, 2, 4];
    const requiredWorkType = workTypes[index];

    const selectedWorks = this.state.data.works
      .filter(work => work.type & requiredWorkType);

    this.setState({ selectedWorks });
  }

  handleWorkClick(work) {
    const { onWorkClick } = this.props;
    onWorkClick && onWorkClick(work);
  }
}

export default Portfolio;