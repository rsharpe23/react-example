/* eslint-disable import/no-unresolved */
import React from 'react';
import HomeContainer from '@containers/HomeContainer';
import PreviewContainer from '@containers/PreviewContainer';

function App({ currentPage }) {
  switch (currentPage) {
    case 1:
      return <HomeContainer />;

    case 2:
      return <PreviewContainer />;

    default:
      return null;
  }
}

export default App;