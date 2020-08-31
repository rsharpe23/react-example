/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import Home from '@components/Home';

function HomeContainer(props) {
  return <Home {...props} />;
}

export default connect(
  state => ({ 
    homeNavMenuIndex: state.menusActivity.homeNav,
  })
)(HomeContainer);
