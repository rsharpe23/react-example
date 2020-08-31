/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup, isEmptyObj } from '@/utils';
import defaultImg from '@public/img/default-work.svg';
import './Work.css';

function Work({ className = 'Work', data, onClick }) {
  if (!data || isEmptyObj(data)) {
    return null;
  }

  const { title, content, thumbnail, price, link } = data;

  const handleClick = e => {
    e.preventDefault();

    if (link.target === '_blank') {
      window.open(link.href, '_blank');
      return;
    }

    onClick && onClick(data);
  };

  return (
    <figure className={className}>
      <a href="#" className="ImgWrap Work-Link" onClick={handleClick}>
        <img src={defaultImg} alt={title} />

        <div
          className="Work-Content"
          dangerouslySetInnerHTML={createMarkup(content)}
        />
      </a>

      <figcaption className="Work-Caption">
        <span>{title}</span>
        <span>$<strong>{price}</strong></span>
      </figcaption>
    </figure>
  );
}

export default Work;