/* eslint-disable import/no-unresolved */
import React from 'react';
import defaultImg from '@public/img/avatar.png';
import './Avatar.css';

// Запись: url = defaultImg не подойдет, т.к. url - пустая строка, 
// а чтобы сработало присвоение по умолчанию, url должен быть undefined
function Avatar({ className = 'Avatar ImgWrap', url }) {
  return (
    <div className={className}>
      <a href="/"><img src={url || defaultImg} alt="Аватарка" /></a>
    </div>
  );
}

export default Avatar;