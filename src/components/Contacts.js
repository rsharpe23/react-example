/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup, isEmptyObj } from '@/utils';
import dataStore from '@models/DataStoreContacts';
import Menu from './Menu';
import './Contacts.css';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  render() {
    const { data } = this.state;

    if (!data || isEmptyObj(data)) {
      return null;
    }

    return (
      <div className="Screen Contacts">
        <h1 className="Screen-Title">{data.title}</h1>

        <div
          className="Contacts-Content"
          dangerouslySetInnerHTML={createMarkup(data.content)} />

        <Menu 
          className="Menu Contacts-Menu" 
          value={data.menu} />

        <div className="Screen-LinkWrap">
          <a 
            href="#" 
            className="Screen-Link" 
            onClick={this.handleLinkClick}>⟵ Назад к портфолио</a>

          {/* <a
            href={data.link.href}
            onClick={this.handleLinkClick}
            className="Screen-Link">{data.link.text}</a> */}
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
    onLinkClick && onLinkClick(1);
  }
}

export default Contacts;