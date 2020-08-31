/* eslint-disable import/no-unresolved */
import React from 'react';
import { isEmptyObj } from '@/utils';
import PreviewNavContainer from '@containers/PreviewNavContainer';
import './Preview.css';

function Preview({ workData, isMobile }) {
  if (!workData || isEmptyObj(workData)) {
    return null;
  }

  const getIframeClass = () => {
    let className = 'Iframe';

    if (isMobile) {
      className += ' Iframe_mobile';
    }

    return className;
  };

  const { daysPerDev, price, link } = workData;

  return (
    <div className="Preview">
      <PreviewNavContainer 
        daysPerDev={daysPerDev} 
        price={price} 
      />

      <main className="Preview-Main">
        <div className="position-relative w-100 h-100">
          <iframe src={link.href} className={getIframeClass()}></iframe>
        </div>
      </main>
    </div>
  );
}

export default Preview;