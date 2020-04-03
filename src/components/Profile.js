/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup } from '@/utils';
import Avatar from './Avatar';
import './Profile.css';

function Profile({ value: { photoUrl, content, link } }) {
  return (
    <div className="Profile">
      <Avatar 
        className="Avatar Profile-Avatar ImgWrap" 
        url={photoUrl} />

      <div
        className="Profile-Content"
        dangerouslySetInnerHTML={createMarkup(content)} />

      <p>
        <a
          href={link.href}
          target="_blank"
          rel="nofollow"
          className="btn btn-success Profile-Btn"
          dangerouslySetInnerHTML={createMarkup(link.text)} />
      </p>
    </div>
  );
}

export default Profile;