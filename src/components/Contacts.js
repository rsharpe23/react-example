/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup, isEmptyObj } from '@/utils';
import MenuContainer from '@containers/MenuContainer';
import './Contacts.css';

function Contacts({ data, onLinkClick }) {
  if (!data || isEmptyObj(data)) {
    return null;
  }

  const { title, content } = data;

  const handleLinkClick = e => {
    e.preventDefault();
    onLinkClick && onLinkClick();
  };

  return (
    <div className="Screen Contacts">
      <h1 className="Screen-Title">{title}</h1>

      <div
        className="Contacts-Content"
        dangerouslySetInnerHTML={createMarkup(content)} 
      />

      <MenuContainer 
        name="contacts" 
        className="Menu Contacts-Menu" 
      />

      <div className="Screen-LinkWrap">
        <a href="#" onClick={handleLinkClick} className="Screen-Link">⟵ Назад к портфолио</a>
      </div>
    </div>
  );
}

export default Contacts;