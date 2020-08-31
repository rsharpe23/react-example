/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import App from '@components/App';

function AppContainer(props) {
  return <App {...props} />;
}

export default connect(
  state => ({ 
    currentPage: state.options.currentPage,
  })
)(AppContainer);