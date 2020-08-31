/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup, isEmptyObj } from '@/utils';
import Avatar from './Avatar';
import './Profile.css';

function Profile({ data }) {
  if (!data || isEmptyObj(data)) {
    return null;
  }

  const { photoUrl, content, link } = data;
  
  return (
    <div className="Profile">
      <Avatar
        className="Avatar Profile-Avatar ImgWrap"
        url={photoUrl} 
      />

      <div
        className="Profile-Content"
        dangerouslySetInnerHTML={createMarkup(content)} 
      />

      <p>
        <a
          href={link.href}
          target={link.target}
          rel="nofollow"
          className="btn btn-success Profile-Btn"
          dangerouslySetInnerHTML={createMarkup(link.text)} 
        />
      </p>
    </div>
  );
}

export default Profile;